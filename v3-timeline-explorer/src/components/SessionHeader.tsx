import type { Session } from '@/data/ergData'
import { formatDateFull, formatSplit } from '@/utils/formatters'
import CategoryBadge from '@/components/shared/CategoryBadge'

interface Props {
  session: Session
}

export default function SessionHeader({ session }: Props) {
  const isTriathlon = session.workoutCategory === 'triathlon'

  return (
    <div
      className="relative rounded-2xl p-6 backdrop-blur-xl"
      style={{
        background: 'rgba(27, 58, 107, 0.22)',
        border: '1px solid rgba(37, 99, 235, 0.25)',
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {session.workoutName}
          </h2>
          <p className="text-lg mt-1" style={{ color: 'var(--color-text-secondary)' }}>
            {formatDateFull(session.date)}
          </p>
        </div>
        <CategoryBadge category={session.workoutCategory} />
      </div>

      <div className="flex flex-wrap items-center gap-6 mt-5">
        <StatItem label="Participants" value={String(session.participantCount)} />
        <StatItem label="Starboard" value={String(session.starboard.length)} />
        <StatItem label="Port" value={String(session.port.length)} />
        {!isTriathlon && (
          <>
            <StatItem
              label="Team Avg"
              value={formatSplit(session.teamAvgSplit)}
              mono
            />
            <StatItem
              label="Best Split"
              value={formatSplit(session.bestSplit)}
              mono
              highlight="good"
              subtitle={session.bestAthlete}
            />
          </>
        )}
      </div>
    </div>
  )
}

function StatItem({
  label,
  value,
  mono,
  highlight,
  subtitle,
}: {
  label: string
  value: string
  mono?: boolean
  highlight?: 'good' | 'bad'
  subtitle?: string
}) {
  const valueColor = highlight === 'good'
    ? 'var(--color-good)'
    : highlight === 'bad'
      ? 'var(--color-bad)'
      : 'var(--color-text)'

  return (
    <div className="flex flex-col">
      <span
        className="text-[11px] uppercase tracking-wider font-medium"
        style={{ color: 'var(--color-text-muted)' }}
      >
        {label}
      </span>
      <span
        className="text-xl font-semibold"
        style={{
          color: valueColor,
          fontFamily: mono ? 'var(--font-mono)' : undefined,
        }}
      >
        {value}
      </span>
      {subtitle && (
        <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
          {subtitle}
        </span>
      )}
    </div>
  )
}
