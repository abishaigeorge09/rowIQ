import type { Session, AthleteSplit } from '@/data/ergData'
import { useAppStore } from '@/store/useAppStore'
import { formatSplit } from '@/utils/formatters'

interface Props {
  session: Session
}

const STARBOARD_COLOR = '#3B82F6'
const PORT_COLOR = '#EF4444'

function interpolateColor(t: number): string {
  // t: 0 = best (green), 1 = worst (red)
  const clamped = Math.max(0, Math.min(1, t))
  const r = Math.round(34 + (239 - 34) * clamped)
  const g = Math.round(197 + (68 - 197) * clamped)
  const b = Math.round(94 + (68 - 94) * clamped)
  return `rgb(${r}, ${g}, ${b})`
}

export default function AthleteGrid({ session }: Props) {
  const isTriathlon = session.workoutCategory === 'triathlon'

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <SideColumn
        label="STARBOARD"
        color={STARBOARD_COLOR}
        athletes={session.starboard}
        avg={session.starboardAvg}
        bestSplit={session.bestSplit}
        worstSplit={session.worstSplit}
        isTriathlon={isTriathlon}
      />
      <SideColumn
        label="PORT"
        color={PORT_COLOR}
        athletes={session.port}
        avg={session.portAvg}
        bestSplit={session.bestSplit}
        worstSplit={session.worstSplit}
        isTriathlon={isTriathlon}
      />
    </div>
  )
}

function SideColumn({
  label,
  color,
  athletes,
  avg,
  bestSplit,
  worstSplit,
  isTriathlon,
}: {
  label: string
  color: string
  athletes: AthleteSplit[]
  avg: number
  bestSplit: number
  worstSplit: number
  isTriathlon: boolean
}) {
  return (
    <div
      className="rounded-2xl p-4 backdrop-blur-xl"
      style={{
        background: 'rgba(27, 58, 107, 0.22)',
        border: '1px solid rgba(37, 99, 235, 0.25)',
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: color }}
          />
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {label}
          </span>
        </div>
        {!isTriathlon && (
          <span
            className="text-sm font-medium"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}
          >
            Avg {formatSplit(avg)}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-0.5">
        {athletes.map((a) => (
          <AthleteRow
            key={a.name}
            athlete={a}
            bestSplit={bestSplit}
            worstSplit={worstSplit}
            isTriathlon={isTriathlon}
          />
        ))}
      </div>
    </div>
  )
}

function AthleteRow({
  athlete,
  bestSplit,
  worstSplit,
  isTriathlon,
}: {
  athlete: AthleteSplit
  bestSplit: number
  worstSplit: number
  isTriathlon: boolean
}) {
  const openAthleteSidebar = useAppStore((s) => s.openAthleteSidebar)

  const range = worstSplit - bestSplit
  const t = range > 0 ? (athlete.split - bestSplit) / range : 0
  const barWidth = range > 0 ? Math.max(8, ((worstSplit - athlete.split) / range) * 100 + 8) : 50
  const barColor = interpolateColor(t)

  return (
    <button
      onClick={() => openAthleteSidebar(athlete.name)}
      className="relative flex items-center gap-2 py-1.5 px-2 rounded-lg text-left transition-colors hover:bg-white/5 cursor-pointer"
      style={{ minHeight: 36 }}
    >
      {/* Performance bar */}
      {!athlete.dnf && !isTriathlon && (
        <div
          className="absolute inset-y-0 left-0 rounded-lg"
          style={{
            width: `${barWidth}%`,
            backgroundColor: barColor,
            opacity: 0.18,
          }}
        />
      )}

      {/* Rank */}
      <span
        className="relative w-5 text-center text-xs font-medium shrink-0"
        style={{ color: 'var(--color-text-muted)' }}
      >
        {athlete.dnf ? '' : athlete.rank}
      </span>

      {/* Name */}
      <span
        className={`relative flex-1 text-sm font-medium truncate ${
          athlete.dnf ? 'line-through' : ''
        }`}
        style={{ color: athlete.dnf ? 'var(--color-text-muted)' : 'var(--color-text)' }}
      >
        {athlete.name}
      </span>

      {/* DNF badge */}
      {athlete.dnf && (
        <span
          className="relative text-[10px] font-bold uppercase px-1.5 py-0.5 rounded"
          style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)', color: '#EF4444' }}
        >
          DNF
        </span>
      )}

      {/* Split / Time */}
      {!athlete.dnf && (
        <span
          className="relative text-sm font-medium shrink-0"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text)' }}
        >
          {isTriathlon && athlete.timeFormatted
            ? athlete.timeFormatted
            : formatSplit(athlete.split)}
        </span>
      )}

      {/* SPM */}
      {!athlete.dnf && !isTriathlon && (
        <span
          className="relative text-xs shrink-0"
          style={{ color: 'var(--color-text-muted)' }}
        >
          ({athlete.spm})
        </span>
      )}
    </button>
  )
}
