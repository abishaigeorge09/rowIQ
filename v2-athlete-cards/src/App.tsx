import { useEffect } from 'react'
import { useAppStore } from '@/store/useAppStore'
import TopBar from '@/components/TopBar'
import TimelineStrip from '@/components/TimelineStrip'
import SessionDetailPanel from '@/components/SessionDetailPanel'
import TeamOverview from '@/components/TeamOverview'
import ComparePanel from '@/components/ComparePanel'
import AthleteSidebar from '@/components/AthleteSidebar'
import AthletesView from '@/components/AthletesView'

export default function App() {
  const { activeTab, compareMode, closeAthleteSidebar, toggleCompareMode } = useAppStore()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeAthleteSidebar()
        if (compareMode) toggleCompareMode()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [compareMode, closeAthleteSidebar, toggleCompareMode])

  if (activeTab === 'athletes') {
    return (
      <div className="h-screen flex flex-col bg-bg-primary text-text overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto">
          <AthletesView />
        </main>
      </div>
    )
  }

  return (
    <div className="h-screen flex flex-col bg-bg-primary text-text overflow-hidden">
      <TopBar />
      <TimelineStrip />
      <main className="flex-1 overflow-y-auto">
        {compareMode ? (
          <ComparePanel />
        ) : activeTab === 'timeline' ? (
          <SessionDetailPanel />
        ) : (
          <TeamOverview />
        )}
      </main>
      <AthleteSidebar />
    </div>
  )
}
