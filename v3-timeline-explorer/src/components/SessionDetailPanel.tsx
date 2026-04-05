import { useAppStore } from '@/store/useAppStore'
import { sessions } from '@/data/ergData'
import SessionHeader from './SessionHeader'
import AthleteGrid from './AthleteGrid'
import SessionComparisonChart from './SessionComparisonChart'
import SideSummary from './SideSummary'

export default function SessionDetailPanel() {
  const selectedSessionId = useAppStore((s) => s.selectedSessionId)
  const session = sessions.find((s) => s.id === selectedSessionId)

  if (!session) {
    return (
      <div className="flex items-center justify-center h-64 text-[var(--color-text-muted)]">
        Select a session to view details
      </div>
    )
  }

  const isTriathlon = session.workoutCategory === 'triathlon'

  return (
    <div key={session.id} className="w-full flex flex-col gap-6" style={{ padding: '24px' }}>
      <SessionHeader session={session} />
      <AthleteGrid session={session} />
      {!isTriathlon && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SessionComparisonChart currentSession={session} />
          </div>
          <div className="lg:col-span-1">
            <SideSummary session={session} />
          </div>
        </div>
      )}
    </div>
  )
}
