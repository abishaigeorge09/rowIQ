import { useRef, useEffect, useCallback } from 'react'
import { useAppStore } from '@/store/useAppStore'
import { sessions } from '@/data/ergData'
import { getCategoryColor } from '@/utils/formatters'

const MIN_GAP = 52
const NODE_R = 7
const SEL_R = 10
const H = 84

export default function TimelineStrip() {
  const { selectedSessionId, selectSession, compareMode, compareSessionIds } = useAppStore()
  const containerRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useRef<Map<string, HTMLButtonElement>>(new Map())

  const first = new Date(sessions[0].date + 'T00:00:00').getTime()
  const last = new Date(sessions[sessions.length - 1].date + 'T00:00:00').getTime()
  const span = Math.max(1, (last - first) / 86400000)

  const pad = 80
  const rawW = Math.max(sessions.length * (MIN_GAP + NODE_R * 2), 1600)
  const pos = sessions.map(s => {
    const t = (new Date(s.date + 'T00:00:00').getTime() - first) / 86400000 / span
    return pad + t * (rawW - pad * 2)
  })
  for (let i = 1; i < pos.length; i++) {
    if (pos[i] - pos[i - 1] < MIN_GAP) pos[i] = pos[i - 1] + MIN_GAP
  }
  const W = pos[pos.length - 1] + pad

  const months: { label: string; x: number }[] = []
  let lm = -1
  sessions.forEach((s, i) => {
    const m = new Date(s.date + 'T00:00:00').getMonth()
    if (m !== lm) { months.push({ label: new Date(s.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short' }), x: pos[i] }); lm = m }
  })

  useEffect(() => {
    const el = nodeRefs.current.get(selectedSessionId)
    el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [selectedSessionId])

  const onKey = useCallback((e: React.KeyboardEvent) => {
    const idx = sessions.findIndex(s => s.id === selectedSessionId)
    if (e.key === 'ArrowRight' && idx < sessions.length - 1) { e.preventDefault(); selectSession(sessions[idx + 1].id) }
    if (e.key === 'ArrowLeft' && idx > 0) { e.preventDefault(); selectSession(sessions[idx - 1].id) }
  }, [selectedSessionId, selectSession])

  const shortDate = (iso: string) => { const d = new Date(iso + 'T00:00:00'); return `${d.getMonth() + 1}/${d.getDate()}` }
  const shortWork = (w: string) => w.replace(/\s*\d+'?\s*rest\s*/i, '').replace(/\s*\d+:\d+\s*rest/i, '').trim().slice(0, 14)

  return (
    <div
      className="sticky top-16 z-40 shrink-0 overflow-x-auto focus:outline-none"
      style={{ height: H, background: 'rgba(10,15,30,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(37,99,235,0.1)', scrollbarWidth: 'none' }}
      ref={containerRef} tabIndex={0} onKeyDown={onKey}
    >
      <div className="relative h-full" style={{ width: W, minWidth: '100%' }}>
        {months.map((m, i) => (
          <span key={i} className="absolute text-[10px] font-semibold text-text-muted uppercase tracking-widest" style={{ left: m.x - 4, top: 6 }}>{m.label}</span>
        ))}

        <div className="absolute" style={{ left: pos[0], width: pos[pos.length - 1] - pos[0], top: H / 2, height: 2, background: 'rgba(27,58,107,0.5)' }} />

        {sessions.map((s, i) => {
          const sel = s.id === selectedSessionId
          const cmp = compareSessionIds.includes(s.id)
          const col = getCategoryColor(s.workoutCategory)
          const r = sel ? SEL_R : NODE_R
          const d = r * 2

          return (
            <button
              key={s.id}
              ref={el => { if (el) nodeRefs.current.set(s.id, el) }}
              onClick={() => selectSession(s.id)}
              className="absolute flex flex-col items-center group"
              style={{ left: pos[i] - r, top: H / 2 - r, width: d, transition: 'all 150ms ease' }}
              title={`${s.date} — ${s.workoutName}`}
            >
              <span className="absolute text-[9px] text-text-secondary whitespace-nowrap pointer-events-none"
                style={{ bottom: d + 6, opacity: sel ? 1 : 0.5, fontWeight: sel ? 600 : 400 }}>
                {shortWork(s.workoutName)}
              </span>

              <div className="rounded-full transition-all" style={{
                width: d, height: d, backgroundColor: col,
                boxShadow: sel ? `0 0 0 3px #fff, 0 0 24px ${col}90` : cmp ? `0 0 0 2px ${col}, 0 0 14px ${col}60` : 'none',
                opacity: sel || cmp ? 1 : 0.65,
              }} />

              {compareMode && cmp && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-primary rounded-full text-[8px] text-white flex items-center justify-center font-bold">✓</span>
              )}

              <span className="absolute text-[9px] text-text-muted whitespace-nowrap pointer-events-none" style={{ top: d + 6 }}>
                {shortDate(s.date)}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
