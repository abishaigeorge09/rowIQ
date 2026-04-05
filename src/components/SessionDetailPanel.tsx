import { useAppStore } from '@/store/useAppStore'
import { sessions } from '@/data/ergData'
import SessionHeader from './SessionHeader'
import AthleteGrid from './AthleteGrid'
import SessionComparisonChart from './SessionComparisonChart'
import SideSummary from './SideSummary'

export default function SessionDetailPanel() {
  const { selectedSessionId } = useAppStore()
  const session = sessions.find(s => s.id === selectedSessionId)

  if (!session) {
    return (
      <div className="flex items-center justify-center h-64 text-text-muted">
        Select a session from the timeline
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6" key={session.id}>
      <SessionHeader session={session} />
      <AthleteGrid session={session} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <SessionComparisonChart currentSessionId={session.id} />
        </div>
        <SideSummary session={session} />
      </div>
    </div>
  )
}
