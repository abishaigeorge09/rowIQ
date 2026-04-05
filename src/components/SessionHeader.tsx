import type { Session } from '@/data/ergData'
import CategoryBadge from '@/components/shared/CategoryBadge'
import { formatSplit } from '@/utils/formatters'
import { Users, Trophy, BarChart3 } from 'lucide-react'

export default function SessionHeader({ session }: { session: Session }) {
  const fmtDate = (iso: string) => {
    const d = new Date(iso + 'T00:00:00')
    return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
  }

  const isTri = session.workoutCategory === 'triathlon'

  return (
    <div
      className="rounded-2xl p-6"
      style={{
        background: 'rgba(27,58,107,0.2)',
        border: '1px solid rgba(37,99,235,0.25)',
        backdropFilter: 'blur(20px)',
      }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h2 className="text-3xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)' }}>
            {session.workoutName}
          </h2>
          <p className="text-text-secondary text-lg">{fmtDate(session.date)}</p>
        </div>
        <CategoryBadge category={session.workoutCategory} />
      </div>

      <div className="flex flex-wrap gap-6 text-sm">
        <div className="flex items-center gap-1.5 text-text-secondary">
          <Users size={14} />
          <span className="font-medium text-text">{session.participantCount}</span> athletes
          <span className="text-text-muted mx-1">·</span>
          {session.starboard.length} Starboard
          <span className="text-text-muted mx-1">·</span>
          {session.port.length} Port
        </div>

        {!isTri && (
          <>
            <div className="flex items-center gap-1.5 text-text-secondary">
              <BarChart3 size={14} />
              Team Avg: <span className="font-mono font-medium text-text">{formatSplit(session.teamAvgSplit)}s</span>
            </div>
            <div className="flex items-center gap-1.5 text-text-secondary">
              <Trophy size={14} className="text-good" />
              Best: <span className="font-mono font-medium text-good">{formatSplit(session.bestSplit)}s</span>
              <span className="text-text-muted">({session.bestAthlete})</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
