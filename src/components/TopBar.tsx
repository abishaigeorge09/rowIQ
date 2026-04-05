import { GitCompare, X } from 'lucide-react'
import { useAppStore, type Tab } from '@/store/useAppStore'
import { sessions } from '@/data/ergData'

const TABS: { id: Tab; label: string }[] = [
  { id: 'athletes', label: 'Athletes' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'team', label: 'Team' },
]

export default function TopBar() {
  const { activeTab, setActiveTab, selectedSessionId, compareMode, toggleCompareMode, compareSessionIds } = useAppStore()
  const session = sessions.find(s => s.id === selectedSessionId)

  const fmtDate = (iso: string) => {
    const d = new Date(iso + 'T00:00:00')
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  return (
    <header
      className="sticky top-0 z-50 h-14 flex items-center px-5 shrink-0 gap-5"
      style={{ background: 'rgba(10,15,30,0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(37,99,235,0.15)' }}
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold shrink-0" style={{ fontFamily: 'var(--font-display)' }}>
        <span className="text-text">ROW</span><span className="text-primary">IQ</span>
      </h1>

      {/* Tabs */}
      <div className="flex rounded-lg overflow-hidden shrink-0" style={{ border: '1px solid rgba(37,99,235,0.25)' }}>
        {TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className="px-4 py-1.5 text-xs font-medium transition-colors whitespace-nowrap"
            style={{
              background: activeTab === t.id ? '#2563EB' : 'transparent',
              color: activeTab === t.id ? '#fff' : '#94A3B8',
              borderRight: t.id !== 'team' ? '1px solid rgba(37,99,235,0.15)' : 'none',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Center: session info (only on timeline/team tabs) */}
      <div className="flex-1 flex items-center justify-center gap-2 min-w-0">
        {activeTab !== 'athletes' && session && !compareMode && (
          <>
            <span className="text-xs font-medium text-text">{fmtDate(session.date)}</span>
            <span className="text-xs text-text-secondary truncate">{session.workoutName}</span>
          </>
        )}
        {activeTab === 'athletes' && (
          <span className="text-xs text-text-muted">58 Athletes · 28 Sessions · Aug–Dec 2023</span>
        )}
        {compareMode && (
          <span className="flex items-center gap-1.5 text-xs font-medium text-primary">
            <GitCompare size={12} />
            Comparing {compareSessionIds.length} session{compareSessionIds.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      {/* Right: compare button (for timeline/team tabs) */}
      {activeTab !== 'athletes' && (
        <button
          onClick={toggleCompareMode}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0"
          style={{
            background: compareMode ? '#2563EB' : 'rgba(37,99,235,0.1)',
            color: compareMode ? '#fff' : '#94A3B8',
            border: `1px solid ${compareMode ? '#2563EB' : 'rgba(37,99,235,0.2)'}`,
          }}
        >
          {compareMode ? <X size={12} /> : <GitCompare size={14} />}
          {compareMode ? 'Exit' : 'Compare'}
        </button>
      )}
    </header>
  )
}
