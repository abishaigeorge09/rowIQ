import { useState } from 'react'
import { athletes, sessions } from '../data/ergData'

const CATEGORY_COLORS = {
  steady_state: '#2563EB',
  intervals: '#8B5CF6',
  threshold: '#F59E0B',
  triathlon: '#10B981',
}

export default function SessionHeatmap({ onAthleteClick }) {
  const [tooltip, setTooltip] = useState(null)

  // Top 20 athletes by rank
  const topAthletes = athletes.slice(0, 20)

  // Build lookup: athleteName -> { date -> { split, rank, of, dnf, category } }
  const lookup = {}
  for (const a of topAthletes) {
    lookup[a.name] = {}
    for (const h of a.history) {
      lookup[a.name][h.date] = h
    }
  }

  // Only sessions with erg data
  const ergSessions = sessions.filter(s => s.teamAvg !== null)

  const getCellColor = (entry, session) => {
    if (!entry) return '#1E293B' // absent
    if (entry.dnf) return 'repeating-linear-gradient(45deg, #1E293B, #1E293B 2px, #334155 2px, #334155 4px)'
    if (!entry.rank || !entry.of) return '#1E293B'

    const pct = entry.rank / entry.of
    if (pct <= 0.25) return '#10B981'
    if (pct <= 0.75) return '#F59E0B'
    return '#EF4444'
  }

  return (
    <div className="glass-card p-5 relative">
      <h2 className="font-serif text-lg font-bold text-white mb-4">Session Heatmap</h2>
      <div className="overflow-x-auto">
        <div>
          {/* Column headers — session dates */}
          <div style={{ display: 'flex', marginLeft: '90px', marginBottom: '4px' }}>
            {ergSessions.map((s, i) => (
              <div
                key={s.date}
                className="text-center font-mono"
                style={{ flex: 1, fontSize: '8px', color: '#64748B' }}
              >
                {i % 3 === 0 ? new Date(s.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' }) : ''}
              </div>
            ))}
          </div>

          {/* Rows — athletes */}
          {topAthletes.map((a) => (
            <div key={a.name} className="flex items-center" style={{ marginBottom: '2px' }}>
              <div
                className="text-xs truncate pr-2 cursor-pointer hover:text-white transition-colors"
                style={{ width: '90px', flexShrink: 0, color: '#94A3B8' }}
                onClick={() => onAthleteClick(a.name)}
              >
                {a.name}
              </div>
              <div style={{ display: 'flex', flex: 1 }}>
                {ergSessions.map((s) => {
                  const entry = lookup[a.name]?.[s.date]
                  const bg = getCellColor(entry, s)
                  const isGradient = typeof bg === 'string' && bg.startsWith('repeating')
                  return (
                    <div
                      key={s.date}
                      className="cursor-pointer hover:z-10 relative"
                      style={{ flex: 1, height: '18px', margin: '0 1px', borderRadius: '2px', ...(isGradient ? { background: bg } : { backgroundColor: bg }) }}
                      onMouseEnter={(e) => {
                        const rect = e.target.getBoundingClientRect()
                        setTooltip({
                          x: rect.left + rect.width / 2,
                          y: rect.top - 10,
                          date: s.date,
                          workout: s.workout,
                          category: s.category,
                          athlete: a.name,
                          split: entry?.split,
                          rank: entry?.rank,
                          of: entry?.of,
                          dnf: entry?.dnf,
                          absent: !entry,
                        })
                      }}
                      onMouseLeave={() => setTooltip(null)}
                    />
                  )
                })}
              </div>
            </div>
          ))}

          {/* Legend */}
          <div className="flex items-center gap-4 mt-3" style={{ marginLeft: '90px', fontSize: '10px', color: '#64748B' }}>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-[2px]" style={{ backgroundColor: '#10B981' }} />
              Top 25%
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-[2px]" style={{ backgroundColor: '#F59E0B' }} />
              Mid 50%
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-[2px]" style={{ backgroundColor: '#EF4444' }} />
              Bottom 25%
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-[2px]" style={{ backgroundColor: '#1E293B' }} />
              Absent
            </div>
          </div>
        </div>
      </div>

      {/* Floating tooltip */}
      {tooltip && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: 'translate(-50%, -100%)',
            background: '#0B1222',
            border: '1px solid rgba(37, 99, 235, 0.4)',
            borderRadius: '8px',
            padding: '10px 12px',
            fontSize: '12px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.7)',
          }}
        >
          <div className="font-mono text-white font-semibold">{tooltip.athlete}</div>
          <div className="text-[#94A3B8]">{new Date(tooltip.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
          <div className="flex items-center gap-1 mt-1">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: CATEGORY_COLORS[tooltip.category] }} />
            <span className="text-[#64748B]">{tooltip.workout}</span>
          </div>
          {tooltip.absent ? (
            <div className="text-[#64748B] mt-1">Absent</div>
          ) : tooltip.dnf ? (
            <div className="text-[#EF4444] mt-1">DNF</div>
          ) : (
            <div className="font-mono mt-1">
              <span className="text-white">{tooltip.split}s</span>
              <span className="text-[#64748B]"> &middot; </span>
              <span className="text-[#94A3B8]">#{tooltip.rank} of {tooltip.of}</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
