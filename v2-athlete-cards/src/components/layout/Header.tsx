import { Search, GitCompare } from 'lucide-react'

interface Props {
  search: string
  onSearchChange: (s: string) => void
  compareMode: boolean
  onToggleCompare: () => void
}

export default function Header({ search, onSearchChange, compareMode, onToggleCompare }: Props) {
  return (
    <header className="sticky top-0 z-50 px-4 py-3" style={{ background: 'rgba(10,15,30,0.85)', backdropFilter: 'blur(20px)' }}>
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold shrink-0" style={{ fontFamily: 'var(--font-display)' }}>
          <span className="text-text">ROW</span><span className="text-primary">IQ</span>
        </h1>

        {/* Search */}
        <div className="flex-1 max-w-md relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search athletes..."
            value={search}
            onChange={e => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-lg text-sm text-text placeholder:text-text-muted outline-none focus:border-primary transition"
            style={{
              background: 'rgba(37,99,235,0.08)',
              border: '1px solid rgba(37,99,235,0.2)',
              backdropFilter: 'blur(10px)',
            }}
          />
        </div>

        {/* Compare toggle */}
        <button
          onClick={onToggleCompare}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all"
          style={{
            background: compareMode ? '#2563EB' : 'rgba(37,99,235,0.1)',
            color: compareMode ? '#fff' : '#94A3B8',
            border: `1px solid ${compareMode ? '#2563EB' : 'rgba(37,99,235,0.2)'}`,
          }}
        >
          <GitCompare size={14} />
          Compare
        </button>
      </div>
    </header>
  )
}
