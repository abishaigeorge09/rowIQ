import type { Session } from '@/data/ergData'
import { formatSplit } from '@/utils/formatters'

export default function SideSummary({ session }: { session: Session }) {
  if (session.workoutCategory === 'triathlon') return null

  const diff = Math.abs(session.starboardAvg - session.portAvg)
  const winner = session.starboardAvg < session.portAvg ? 'Starboard' : session.portAvg < session.starboardAvg ? 'Port' : null

  return (
    <div
      className="rounded-2xl p-4 flex flex-col justify-center"
      style={{
        background: 'rgba(27,58,107,0.12)',
        border: '1px solid rgba(37,99,235,0.15)',
      }}
    >
      <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">
        Starboard vs Port
      </h3>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1 text-center">
          <div className="text-[10px] uppercase tracking-wider text-text-muted mb-1">Starboard</div>
          <div className="font-mono text-lg font-bold" style={{ color: '#3B82F6' }}>
            {formatSplit(session.starboardAvg)}s
          </div>
        </div>
        <div className="text-text-muted text-xs">vs</div>
        <div className="flex-1 text-center">
          <div className="text-[10px] uppercase tracking-wider text-text-muted mb-1">Port</div>
          <div className="font-mono text-lg font-bold" style={{ color: '#EF4444' }}>
            {formatSplit(session.portAvg)}s
          </div>
        </div>
      </div>

      {/* Visual bar */}
      <div className="flex h-2 rounded-full overflow-hidden mb-3" style={{ background: 'rgba(37,99,235,0.1)' }}>
        <div
          className="h-full rounded-l-full transition-all"
          style={{
            width: `${(session.portAvg / (session.starboardAvg + session.portAvg)) * 100}%`,
            background: '#3B82F6',
            opacity: 0.6,
          }}
        />
        <div
          className="h-full rounded-r-full transition-all"
          style={{
            flex: 1,
            background: '#EF4444',
            opacity: 0.6,
          }}
        />
      </div>

      <p className="text-xs text-text-secondary text-center">
        {winner
          ? `${winner} faster by ${formatSplit(diff)}s`
          : 'Groups evenly matched'}
      </p>
    </div>
  )
}
