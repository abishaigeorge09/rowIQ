const BackButton = () => (
  <a
    href="/"
    title="Back to version picker"
    style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      width: '32px', height: '32px', borderRadius: '8px', flexShrink: 0,
      background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.2)',
      color: '#94A3B8', textDecoration: 'none', transition: 'all 0.2s',
    }}
    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.15)'; e.currentTarget.style.color = '#CBD5E1' }}
    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.08)'; e.currentTarget.style.color = '#94A3B8' }}
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7"/>
    </svg>
  </a>
)

export default function TopBar() {
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '10px 16px',
      background: 'rgba(10, 15, 30, 0.95)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderBottom: '1px solid rgba(37, 99, 235, 0.2)',
      gap: '8px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
        <BackButton />
        <div className="font-serif" style={{ fontWeight: 'bold', fontSize: '20px', letterSpacing: '-0.025em', flexShrink: 0 }}>
          <span style={{ color: '#CBD5E1' }}>ROW</span>
          <span style={{ color: '#2563EB' }}>IQ</span>
        </div>
      </div>
      <h1 className="hidden sm:block" style={{ fontSize: '14px', fontWeight: 500, color: '#94A3B8', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        Erg Performance Dashboard
      </h1>
      <div className="font-mono hidden sm:block" style={{
        fontSize: '12px',
        background: 'rgba(37, 99, 235, 0.1)',
        color: '#2563EB',
        border: '1px solid rgba(37, 99, 235, 0.3)',
        borderRadius: '9999px',
        padding: '4px 12px',
        flexShrink: 0,
      }}>
        28 Sessions &middot; Aug&ndash;Dec 2023
      </div>
    </header>
  )
}
