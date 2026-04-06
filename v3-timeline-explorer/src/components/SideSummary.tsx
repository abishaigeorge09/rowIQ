import type { Session } from '@/data/ergData'
import { formatSplit } from '@/utils/formatters'

const GROUP_A_COLOR = '#3B82F6'
const GROUP_B_COLOR = '#EF4444'

interface Props {
  session: Session
}

export default function SideSummary({ session }: Props) {
  if (session.workoutCategory === 'triathlon') return null

  const { groupAAvg, groupBAvg } = session
  const diff = Math.abs(groupAAvg - groupBAvg)
  const total = groupAAvg + groupBAvg
  // Lower split = faster. Proportion bar: use inverse so faster side gets more width.
  const groupAPct = total > 0 ? ((total - groupAAvg) / total) * 100 : 50
  const groupBPct = 100 - groupAPct

  let comparisonText: string
  if (diff < 0.15) {
    comparisonText = 'Groups evenly matched'
  } else if (groupAAvg < groupBAvg) {
    comparisonText = `Group A faster by ${diff.toFixed(1)}s`
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
        Group A vs Group B
      </h3>

      <div className="flex items-end justify-between gap-4 mb-4">
        <div className="flex flex-col items-center">
          <span
            className="text-[11px] uppercase tracking-wider font-medium mb-1"
            style={{ color: GROUP_A_COLOR }}
          >
            Group A
          </span>
          <span
            className="text-2xl font-bold"
            style={{ fontFamily: 'var(--font-mono)', color: GROUP_A_COLOR }}
          >
            {formatSplit(groupAAvg)}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span
            className="text-[11px] uppercase tracking-wider font-medium mb-1"
            style={{ color: GROUP_B_COLOR }}
          >
            Port
          </span>
          <span
            className="text-2xl font-bold"
            style={{ fontFamily: 'var(--font-mono)', color: GROUP_B_COLOR }}
          >
            {formatSplit(groupBAvg)}
          </span>
        </div>
      </div>

      {/* Visual proportion bar */}
      <div className="flex h-3 rounded-full overflow-hidden mb-4">
        <div
          className="transition-all duration-500"
          style={{ width: `${groupAPct}%`, backgroundColor: GROUP_A_COLOR }}
        />
        <div
          className="transition-all duration-500"
          style={{ width: `${groupBPct}%`, backgroundColor: GROUP_B_COLOR }}
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
