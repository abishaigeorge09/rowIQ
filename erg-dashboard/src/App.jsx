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
      <main style={{ padding: '52px 32px 32px 32px' }}>
        <SummaryCards onAthleteClick={setSelectedAthlete} />
        <TeamTimeline />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '24px' }}>
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
