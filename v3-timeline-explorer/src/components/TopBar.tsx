import { ArrowLeft, GitCompare, X, Calendar, Activity } from 'lucide-react'
import { useAppStore, type Tab } from '@/store/useAppStore'
import { sessions } from '@/data/ergData'
import { getCategoryColor, getCategoryLabel } from '@/utils/formatters'

const TABS: { id: Tab; label: string }[] = [
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

  const catColor = session ? getCategoryColor(session.workoutCategory) : '#2563EB'

  return (
    <header className="sticky top-0 z-50 shrink-0">
      {/* Main bar */}
      <div
        className="h-14 sm:h-16 flex items-center gap-2 sm:gap-3 px-3 sm:px-6"
        style={{
          background: 'linear-gradient(180deg, rgba(10,15,30,0.98) 0%, rgba(10,15,30,0.95) 100%)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(37,99,235,0.12)',
        }}
      >
        {/* Back + Logo */}
        <a
          href="/"
          title="Back to version picker"
          className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0 transition-all"
          style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.2)', color: '#94A3B8' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.15)'; e.currentTarget.style.color = '#CBD5E1' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.08)'; e.currentTarget.style.color = '#94A3B8' }}
        >
          <ArrowLeft size={16} />
        </a>
        <h1 className="text-lg sm:text-2xl font-bold shrink-0" style={{ fontFamily: 'var(--font-display)' }}>
          <span className="text-text">ROW</span><span className="text-primary">IQ</span>
        </h1>

        {/* Divider */}
        <div className="w-px h-7 shrink-0 hidden sm:block" style={{ background: 'rgba(37,99,235,0.2)' }} />

        {/* Tab Navigation */}
        <nav className="flex items-center gap-0.5 sm:gap-1 shrink-0">
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className="relative px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg transition-all"
              style={{
                background: activeTab === t.id ? 'rgba(37,99,235,0.15)' : 'transparent',
                color: activeTab === t.id ? '#F8FAFC' : '#64748B',
              }}
            >
              {t.label}
              {activeTab === t.id && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </nav>

        {/* Center: Selected Session Info — hidden on small screens */}
        <div className="flex-1 hidden md:flex items-center justify-center min-w-0 overflow-hidden">
          {session && !compareMode && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl max-w-full"
              style={{ background: 'rgba(27,58,107,0.15)', border: '1px solid rgba(37,99,235,0.12)' }}>
              <Calendar size={13} className="text-text-muted shrink-0" />
              <span className="text-sm font-medium text-text whitespace-nowrap">{fmtDate(session.date)}</span>
              <div className="w-px h-4 shrink-0" style={{ background: 'rgba(37,99,235,0.2)' }} />
              <span className="text-sm text-text-secondary truncate">{session.workoutName}</span>
              <span
                className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 hidden lg:inline"
                style={{ background: `${catColor}20`, color: catColor }}
              >
                {getCategoryLabel(session.workoutCategory)}
              </span>
            </div>
          )}
          {compareMode && (
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-xl"
              style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.25)' }}>
              <GitCompare size={15} className="text-primary" />
              <span className="text-sm font-semibold text-primary">
                Comparing {compareSessionIds.length} session{compareSessionIds.length !== 1 ? 's' : ''}
              </span>
            </div>
          )}
        </div>

        {/* Spacer on mobile */}
        <div className="flex-1 md:hidden" />

        {/* Right section */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs text-text-muted"
            style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.1)' }}>
            <span className="font-mono font-semibold text-text-secondary">28</span>
            <span>Sessions</span>
          </div>

          <button
            onClick={toggleCompareMode}
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all"
            style={{
              background: compareMode
                ? 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)'
                : 'rgba(37,99,235,0.08)',
              color: compareMode ? '#fff' : '#94A3B8',
              border: `1px solid ${compareMode ? '#3B82F6' : 'rgba(37,99,235,0.2)'}`,
              boxShadow: compareMode ? '0 4px 12px rgba(37,99,235,0.3)' : 'none',
            }}
          >
            {compareMode ? <X size={14} /> : <GitCompare size={14} />}
            <span className="hidden sm:inline">{compareMode ? 'Exit Compare' : 'Compare'}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
