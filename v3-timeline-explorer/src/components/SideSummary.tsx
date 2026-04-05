import type { Session } from '@/data/ergData'
import { formatSplit } from '@/utils/formatters'

const STARBOARD_COLOR = '#3B82F6'
const PORT_COLOR = '#EF4444'

interface Props {
  session: Session
}

export default function SideSummary({ session }: Props) {
  if (session.workoutCategory === 'triathlon') return null

  const { starboardAvg, portAvg } = session
  const diff = Math.abs(starboardAvg - portAvg)
  const total = starboardAvg + portAvg
  // Lower split = faster. Proportion bar: use inverse so faster side gets more width.
  const starboardPct = total > 0 ? ((total - starboardAvg) / total) * 100 : 50
  const portPct = 100 - starboardPct

  let comparisonText: string
  if (diff < 0.15) {
    comparisonText = 'Groups evenly matched'
  } else if (starboardAvg < portAvg) {
    comparisonText = `Starboard faster by ${diff.toFixed(1)}s`
  } else {
    comparisonText = `Port faster by ${diff.toFixed(1)}s`
  }

  return (
    <div
      className="rounded-2xl p-5 backdrop-blur-xl h-full flex flex-col"
      style={{
        background: 'rgba(27, 58, 107, 0.22)',
        border: '1px solid rgba(37, 99, 235, 0.25)',
      }}
    >
      <h3
        className="text-xs font-semibold uppercase tracking-wider mb-5"
        style={{ color: 'var(--color-text-muted)' }}
      >
        Starboard vs Port
      </h3>

      <div className="flex items-end justify-between gap-4 mb-4">
        <div className="flex flex-col items-center">
          <span
            className="text-[11px] uppercase tracking-wider font-medium mb-1"
            style={{ color: STARBOARD_COLOR }}
          >
            Starboard
          </span>
          <span
            className="text-2xl font-bold"
            style={{ fontFamily: 'var(--font-mono)', color: STARBOARD_COLOR }}
          >
            {formatSplit(starboardAvg)}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span
            className="text-[11px] uppercase tracking-wider font-medium mb-1"
            style={{ color: PORT_COLOR }}
          >
            Port
          </span>
          <span
            className="text-2xl font-bold"
            style={{ fontFamily: 'var(--font-mono)', color: PORT_COLOR }}
          >
            {formatSplit(portAvg)}
          </span>
        </div>
      </div>

      {/* Visual proportion bar */}
      <div className="flex h-3 rounded-full overflow-hidden mb-4">
        <div
          className="transition-all duration-500"
          style={{ width: `${starboardPct}%`, backgroundColor: STARBOARD_COLOR }}
        />
        <div
          className="transition-all duration-500"
          style={{ width: `${portPct}%`, backgroundColor: PORT_COLOR }}
        />
      </div>

      <p
        className="text-sm text-center mt-auto"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        {comparisonText}
      </p>
    </div>
  )
}
