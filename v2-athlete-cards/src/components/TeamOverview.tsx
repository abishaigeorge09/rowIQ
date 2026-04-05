import TeamAvgTimeline from './TeamAvgTimeline'
import PowerRankings from './PowerRankings'
import AttendanceGrid from './AttendanceGrid'

export default function TeamOverview() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      <TeamAvgTimeline />
      <PowerRankings />
      <AttendanceGrid />
    </div>
  )
}
