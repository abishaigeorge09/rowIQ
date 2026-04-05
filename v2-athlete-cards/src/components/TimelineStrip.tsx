import { useRef, useEffect, useCallback } from 'react'
import { useAppStore } from '@/store/useAppStore'
import { sessions } from '@/data/ergData'
import { getCategoryColor } from '@/utils/formatters'

const MIN_GAP = 48
const NODE_SIZE = 14
const SELECTED_SIZE = 20
const STRIP_HEIGHT = 80

export default function TimelineStrip() {
  const { selectedSessionId, selectSession, compareMode, compareSessionIds } = useAppStore()
  const containerRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useRef<Map<string, HTMLButtonElement>>(new Map())

  // Calculate positions based on calendar spacing
  const firstDate = new Date(sessions[0].date + 'T00:00:00')
  const lastDate = new Date(sessions[sessions.length - 1].date + 'T00:00:00')
  const totalDays = Math.max(1, (lastDate.getTime() - firstDate.getTime()) / 86400000)

  // Calculate proportional positions, then enforce minimum gap
  const rawPositions = sessions.map(s => {
    const d = new Date(s.date + 'T00:00:00')
    return (d.getTime() - firstDate.getTime()) / 86400000 / totalDays
  })

  const totalWidth = Math.max(sessions.length * (MIN_GAP + NODE_SIZE), 1400)
  const padding = 60

  const positions = rawPositions.map(p => padding + p * (totalWidth - padding * 2))

  // Enforce minimum gap
  for (let i = 1; i < positions.length; i++) {
    if (positions[i] - positions[i - 1] < MIN_GAP) {
      positions[i] = positions[i - 1] + MIN_GAP
    }
  }

  const finalWidth = positions[positions.length - 1] + padding

  // Month labels
  const months: { label: string; x: number }[] = []
  let lastMonth = -1
  sessions.forEach((s, i) => {
    const d = new Date(s.date + 'T00:00:00')
    const m = d.getMonth()
    if (m !== lastMonth) {
      months.push({ label: d.toLocaleDateString('en-US', { month: 'short' }), x: positions[i] })
      lastMonth = m
    }
  })

  // Auto-center on selection
  useEffect(() => {
    const node = nodeRefs.current.get(selectedSessionId)
    if (node) {
      node.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }, [selectedSessionId])

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const idx = sessions.findIndex(s => s.id === selectedSessionId)
    if (e.key === 'ArrowRight' && idx < sessions.length - 1) {
      e.preventDefault()
      selectSession(sessions[idx + 1].id)
    } else if (e.key === 'ArrowLeft' && idx > 0) {
      e.preventDefault()
      selectSession(sessions[idx - 1].id)
    }
  }, [selectedSessionId, selectSession])

  const fmtDate = (iso: string) => {
    const d = new Date(iso + 'T00:00:00')
    return `${d.getMonth() + 1}/${d.getDate()}`
  }

  const fmtWorkout = (w: string) => {
    return w.replace(/\s*\d+'\s*rest\s*/i, '').replace(/\s*\d+:\d+\s*rest/i, '').trim().slice(0, 12)
  }

  return (
    <div
      className="sticky top-[56px] z-40 shrink-0 overflow-x-auto"
      style={{
        height: STRIP_HEIGHT,
        background: 'rgba(10,15,30,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(37,99,235,0.1)',
        scrollbarWidth: 'none',
      }}
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="relative h-full" style={{ width: finalWidth, minWidth: '100%' }}>
        {/* Month labels */}
        {months.map((m, i) => (
          <span
            key={i}
            className="absolute text-[10px] font-medium text-text-muted uppercase tracking-wider"
            style={{ left: m.x, top: 6 }}
          >
            {m.label}
          </span>
        ))}

        {/* Connecting line */}
        <div
          className="absolute"
          style={{
            left: positions[0],
            right: finalWidth - positions[positions.length - 1],
            top: STRIP_HEIGHT / 2,
            height: 2,
            background: 'rgba(27,58,107,0.4)',
          }}
        />

        {/* Session nodes */}
        {sessions.map((s, i) => {
          const isSelected = s.id === selectedSessionId
          const isCompared = compareSessionIds.includes(s.id)
          const color = getCategoryColor(s.workoutCategory)
          const size = isSelected ? SELECTED_SIZE : NODE_SIZE

          return (
            <button
              key={s.id}
              ref={el => { if (el) nodeRefs.current.set(s.id, el) }}
              onClick={() => selectSession(s.id)}
              className="absolute flex flex-col items-center group"
              style={{
                left: positions[i] - size / 2,
                top: STRIP_HEIGHT / 2 - size / 2,
                width: size,
                transition: 'all 150ms ease',
              }}
              title={`${s.date} — ${s.workoutName}`}
            >
              {/* Workout abbreviation */}
              <span
                className="absolute text-[9px] text-text-secondary whitespace-nowrap transition-opacity"
                style={{ bottom: size + 4, opacity: isSelected ? 1 : 0.6 }}
              >
                {fmtWorkout(s.workoutName)}
              </span>

              {/* Node circle */}
              <div
                className="rounded-full transition-all"
                style={{
                  width: size,
                  height: size,
                  backgroundColor: color,
                  boxShadow: isSelected
                    ? `0 0 0 3px rgba(255,255,255,0.9), 0 0 20px ${color}80`
                    : isCompared
                    ? `0 0 0 2px ${color}, 0 0 12px ${color}60`
                    : 'none',
                  opacity: isSelected || isCompared ? 1 : 0.7,
                }}
              />

              {/* Compare check */}
              {compareMode && isCompared && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full text-[8px] text-white flex items-center justify-center">
                  ✓
                </span>
              )}

              {/* Date label */}
              <span
                className="absolute text-[9px] text-text-muted whitespace-nowrap"
                style={{ top: size + 4 }}
              >
                {fmtDate(s.date)}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
