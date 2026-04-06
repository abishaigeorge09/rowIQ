import { useMemo } from 'react'
import { useAppStore } from '@/store/useAppStore'
import { sessions, athletes, type Session } from '@/data/ergData'
import { formatSplit } from '@/utils/formatters'
import CategoryBadge from '@/components/shared/CategoryBadge'

export default function ComparePanel() {
  const { compareSessionIds, deltaMode, toggleDeltaMode, openAthleteSidebar } = useAppStore()

  const compared = useMemo(
    () => compareSessionIds.map(id => sessions.find(s => s.id === id)).filter(Boolean) as Session[],
    [compareSessionIds]
  )

  const allNames = useMemo(() => {
    const set = new Set<string>()
    for (const s of compared) for (const a of [...s.groupA, ...s.groupB]) if (!a.dnf) set.add(a.name)
    return Array.from(set).sort()
  }, [compared])

  const lookup = useMemo(() => {
    const map = new Map<string, Map<string, number>>()
    for (const s of compared) {
      const m = new Map<string, number>()
      for (const a of [...s.groupA, ...s.groupB]) if (!a.dnf) m.set(a.name, a.split)
      map.set(s.id, m)
    }
    return map
  }, [compared])

  const seasonAvg = useMemo(() => {
    const m = new Map<string, number>()
    for (const a of athletes) m.set(a.name, a.avgSplit)
    return m
  }, [])

  if (compared.length < 2) {
    return (
      <div className="w-full text-center text-text-muted" style={{ padding: '64px 24px' }}>
        <p className="text-lg mb-2">Select 2-4 sessions from the timeline to compare</p>
        <p className="text-sm">Click session nodes while Compare mode is active</p>
      </div>
    )
  }

  const fmtD = (iso: string) => new Date(iso + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

  return (
    <div className="w-full" style={{ padding: '24px' }}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold" style={{ fontFamily: 'var(--font-display)' }}>
          Comparing {compared.length} Sessions
        </h2>
        <button onClick={toggleDeltaMode} className="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
          style={{ background: deltaMode ? '#2563EB' : 'rgba(37,99,235,0.1)', color: deltaMode ? '#fff' : '#94A3B8', border: `1px solid ${deltaMode ? '#2563EB' : 'rgba(37,99,235,0.2)'}` }}>
          {deltaMode ? 'Showing Deltas' : 'Show Delta Mode'}
        </button>
      </div>

      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(27,58,107,0.22)', border: '1px solid rgba(37,99,235,0.25)' }}>
        <div className="flex border-b" style={{ borderColor: 'rgba(37,99,235,0.15)' }}>
          <div className="w-40 shrink-0 p-3 text-xs font-semibold uppercase tracking-wider text-text-muted">Athlete</div>
          {compared.map(s => (
            <div key={s.id} className="flex-1 p-3 text-center min-w-[120px]">
              <div className="text-sm font-medium text-text">{fmtD(s.date)}</div>
              <div className="text-[10px] text-text-muted mt-0.5">{s.workoutName}</div>
              <div className="mt-1"><CategoryBadge category={s.workoutCategory} /></div>
            </div>
          ))}
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {allNames.map(name => {
            const avg = seasonAvg.get(name) ?? 0
            return (
              <div key={name} className="flex items-center border-b hover:bg-white/[0.02] transition-colors" style={{ borderColor: 'rgba(37,99,235,0.06)' }}>
                <button onClick={() => openAthleteSidebar(name)} className="w-40 shrink-0 px-3 py-2 text-sm text-text text-left hover:text-primary transition-colors truncate">{name}</button>
                {compared.map(s => {
                  const split = lookup.get(s.id)?.get(name)
                  if (split === undefined) return <div key={s.id} className="flex-1 text-center py-2 min-w-[120px] text-text-muted text-sm">—</div>
                  if (deltaMode) {
                    const d = split - avg
                    return (
                      <div key={s.id} className="flex-1 text-center py-2 min-w-[120px]">
                        <span className="font-mono text-sm font-medium" style={{ color: d < 0 ? '#10B981' : d > 0 ? '#EF4444' : '#94A3B8' }}>
                          {d > 0 ? '+' : ''}{d.toFixed(1)}s
                        </span>
                      </div>
                    )
                  }
                  return <div key={s.id} className="flex-1 text-center py-2 min-w-[120px]"><span className="font-mono text-sm font-medium text-text">{formatSplit(split)}s</span></div>
                })}
              </div>
            )
          })}
        </div>

        <div className="flex items-center border-t" style={{ borderColor: 'rgba(37,99,235,0.15)', background: 'rgba(37,99,235,0.05)' }}>
          <div className="w-40 shrink-0 px-3 py-3 text-xs font-semibold uppercase tracking-wider text-text-muted">Team Avg</div>
          {compared.map(s => (
            <div key={s.id} className="flex-1 text-center py-3 min-w-[120px]">
              {s.workoutCategory !== 'triathlon' ? <span className="font-mono text-sm font-bold text-primary">{formatSplit(s.teamAvgSplit)}s</span> : <span className="text-text-muted text-sm">—</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
