import TeamAvgTimeline from './TeamAvgTimeline'
import PowerRankings from './PowerRankings'
import AttendanceGrid from './AttendanceGrid'

export default function TeamOverview() {
  return (
    <div className="w-full" style={{ padding: '24px' }}>
      <div className="space-y-6">
        <TeamAvgTimeline />
        <PowerRankings />
        <AttendanceGrid />
      </div>
    </div>
  )
}
