import type { Session, AthleteSplit } from '@/data/ergData'
import { useAppStore } from '@/store/useAppStore'
import { formatSplit } from '@/utils/formatters'

function AthleteRow({ athlete, bestSplit, worstSplit, isTri, onClick }: {
  athlete: AthleteSplit
  bestSplit: number
  worstSplit: number
  isTri: boolean
  onClick: () => void
}) {
  const range = worstSplit - bestSplit || 1
  const pct = 1 - (athlete.split - bestSplit) / range

  // Color interpolation: green (best) → yellow → red (worst)
  const r = Math.round(16 + (239 - 16) * (1 - pct))
  const g = Math.round(185 + (68 - 185) * (1 - pct))
  const b = Math.round(129 + (68 - 129) * (1 - pct))
  const barColor = `rgb(${r},${g},${b})`

  return (
    <button
      onClick={onClick}
      className="relative w-full flex items-center gap-3 px-3 py-1.5 rounded-lg text-left transition-colors group hover:bg-white/[0.03]"
      style={{ minHeight: 36 }}
    >
      {/* Performance bar background */}
      {!athlete.dnf && !isTri && (
        <div
          className="absolute inset-0 rounded-lg transition-all"
          style={{
            width: `${Math.max(pct * 100, 5)}%`,
            background: barColor,
            opacity: 0.18,
          }}
        />
      )}

      {/* Rank */}
      <span className="text-xs text-text-muted w-6 text-right shrink-0 relative z-10">
        #{athlete.rank}
      </span>

      {/* Name */}
      <span className={`text-sm font-medium relative z-10 flex-1 ${
        athlete.dnf ? 'line-through text-text-muted' : 'text-text group-hover:text-primary'
      }`}>
        {athlete.name}
      </span>

      {/* Split */}
      <span className="relative z-10 shrink-0">
        {athlete.dnf ? (
          <span className="text-xs font-medium text-bad px-1.5 py-0.5 rounded" style={{ background: 'rgba(239,68,68,0.15)' }}>
            DNF
          </span>
        ) : isTri ? (
          <span className="font-mono text-sm font-medium text-text">
            {athlete.timeFormatted}
          </span>
        ) : (
          <>
            <span className="font-mono text-sm font-medium text-text">{formatSplit(athlete.split)}</span>
            <span className="font-mono text-xs text-text-muted ml-1">({athlete.spm})</span>
          </>
        )}
      </span>
    </button>
  )
}

export default function AthleteGrid({ session }: { session: Session }) {
  const openAthleteSidebar = useAppStore(s => s.openAthleteSidebar)
  const isTri = session.workoutCategory === 'triathlon'

  const allSplits = [...session.groupA, ...session.groupB].filter(a => !a.dnf).map(a => a.split)
  const best = Math.min(...allSplits)
  const worst = Math.max(...allSplits)

  const renderColumn = (side: 'groupA' | 'groupB', athletes: AthleteSplit[], avg: number, color: string) => (
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-3 px-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ background: color }} />
          <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted">
            {side === 'groupA' ? 'Group A' : 'Group B'}
          </h3>
        </div>
        {!isTri && (
          <span className="text-xs text-text-muted">
            Avg: <span className="font-mono text-text-secondary">{formatSplit(avg)}s</span>
          </span>
        )}
      </div>
      <div className="space-y-0.5">
        {athletes.map(a => (
          <AthleteRow
            key={a.name}
            athlete={a}
            bestSplit={best}
            worstSplit={worst}
            isTri={isTri}
            onClick={() => openAthleteSidebar(a.name)}
          />
        ))}
      </div>
    </div>
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {renderColumn('groupA', session.groupA, session.groupAAvg, '#3B82F6')}
      {renderColumn('groupB', session.groupB, session.groupBAvg, '#EF4444')}
    </div>
  )
}
