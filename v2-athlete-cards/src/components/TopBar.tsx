import { ArrowLeft, GitCompare, X } from 'lucide-react'
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
      className="sticky top-0 z-50 shrink-0"
      style={{ background: 'rgba(10,15,30,0.95)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(37,99,235,0.15)' }}
    >
      <div className="flex items-center justify-between h-12 px-3 sm:px-6 lg:px-10 gap-2">
        {/* Left: Back + Logo + Tabs */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 min-w-0">
          <a
            href="/"
            title="Back to version picker"
            className="flex items-center justify-center w-8 h-8 rounded-lg transition-all shrink-0"
            style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.2)', color: '#94A3B8' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.15)'; e.currentTarget.style.color = '#CBD5E1' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.08)'; e.currentTarget.style.color = '#94A3B8' }}
          >
            <ArrowLeft size={16} />
          </a>
          <h1 className="text-lg sm:text-xl font-bold shrink-0" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="text-text">ROW</span><span className="text-primary">IQ</span>
          </h1>

          {/* Divider */}
          <div className="w-px h-5 bg-border-card hidden sm:block" />

          {/* Nav tabs */}
          <nav className="flex items-center gap-0.5 sm:gap-1">
            {TABS.map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className="px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium transition-all"
                style={{
                  background: activeTab === t.id ? 'rgba(37,99,235,0.15)' : 'transparent',
                  color: activeTab === t.id ? '#fff' : '#64748B',
                  borderBottom: activeTab === t.id ? '2px solid #2563EB' : '2px solid transparent',
                }}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right: context info + actions */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {activeTab === 'athletes' && (
            <span className="text-xs text-text-muted hidden lg:block">
              58 Athletes · 28 Sessions · Jan–Apr 2025
            </span>
          )}
          {activeTab !== 'athletes' && session && !compareMode && (
            <div className="hidden sm:flex items-center gap-2 text-xs">
              <span className="font-medium text-text">{fmtDate(session.date)}</span>
              <span className="text-text-muted">·</span>
              <span className="text-text-secondary truncate max-w-[120px] lg:max-w-[180px]">{session.workoutName}</span>
            </div>
          )}
          {compareMode && (
            <span className="flex items-center gap-1.5 text-xs font-medium text-primary">
              <GitCompare size={12} />
              <span className="hidden sm:inline">Comparing</span> {compareSessionIds.length}
            </span>
          )}
          {activeTab !== 'athletes' && (
            <button
              onClick={toggleCompareMode}
              className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-md text-xs font-medium transition-all"
              style={{
                background: compareMode ? '#2563EB' : 'rgba(37,99,235,0.08)',
                color: compareMode ? '#fff' : '#94A3B8',
                border: `1px solid ${compareMode ? '#2563EB' : 'rgba(37,99,235,0.15)'}`,
              }}
            >
              {compareMode ? <X size={12} /> : <GitCompare size={14} />}
              <span className="hidden sm:inline">{compareMode ? 'Exit' : 'Compare'}</span>
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
