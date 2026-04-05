import { useState } from 'react'
import TopBar from './components/TopBar'
import SummaryCards from './components/SummaryCards'
import TeamTimeline from './components/TeamTimeline'
import PowerRankings from './components/PowerRankings'
import SessionHeatmap from './components/SessionHeatmap'
import CategoryCards from './components/CategoryCards'
import AthleteSidebar from './components/AthleteSidebar'
import { athletes, sessions } from './data/ergData'

export default function App() {
  const [selectedAthlete, setSelectedAthlete] = useState(null)

  return (
    <div>
      <TopBar />
      <main style={{ padding: '52px 12px 32px 12px' }} className="sm:!px-8">
        <SummaryCards onAthleteClick={setSelectedAthlete} />
        <TeamTimeline />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-4 lg:mt-6">
          <PowerRankings onAthleteClick={setSelectedAthlete} />
          <SessionHeatmap onAthleteClick={setSelectedAthlete} />
        </div>
        <CategoryCards />
      </main>
      {selectedAthlete && (
        <AthleteSidebar
          athlete={athletes.find(a => a.name === selectedAthlete)}
          onClose={() => setSelectedAthlete(null)}
        />
      )}
    </div>
  )
}
