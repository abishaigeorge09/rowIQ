import { useState, useEffect } from 'react'
import { LayoutDashboard, Users, Clock } from 'lucide-react'

const PASSWORD = 'rowiq_2025'

const versions = [
  {
    id: 'v1',
    title: 'Command Center',
    badge: 'V1',
    color: '#2563EB',
    icon: LayoutDashboard,
    description:
      'Team-wide dashboard with summary stats, power rankings, session heatmap, and performance timeline.',
    href: '/v1/index.html',
  },
  {
    id: 'v2',
    title: 'Athlete Cards',
    badge: 'V2',
    color: '#8B5CF6',
    icon: Users,
    description:
      'Rich athlete profile cards with sparklines, trend indicators, head-to-head comparison, and stroke rate analysis.',
    href: '/v2/index.html',
  },
  {
    id: 'v3',
    title: 'Timeline Explorer',
    badge: 'V3',
    color: '#10B981',
    icon: Clock,
    description:
      'Session-first timeline scrubber showing team breakdown per practice, with multi-session comparison and delta analysis.',
    href: '/v3/index.html',
  },
]

function PasswordScreen({ onUnlock }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (value === PASSWORD) {
      sessionStorage.setItem('rowiq_auth', 'true')
      onUnlock()
    } else {
      setError(true)
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, #0A0F1E 70%)' }}>
      <form onSubmit={handleSubmit}
        className="w-full max-w-[560px] rounded-3xl p-12"
        style={{
          background: 'rgba(27,58,107,0.12)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          border: '1px solid rgba(37,99,235,0.2)',
        }}>
        {/* Logo */}
        <h1 className="text-center font-serif font-bold" style={{ fontSize: '40px' }}>
          <span className="text-text-primary">ROW</span>
          <span className="text-accent">IQ</span>
        </h1>
        <p className="text-center text-text-secondary mt-2" style={{ fontFamily: 'system-ui', fontSize: '16px' }}>
          Erg Performance Visualizer
        </p>

        {/* Divider */}
        <div className="my-8" style={{ height: '1px', background: 'rgba(37,99,235,0.15)' }} />

        {/* Input */}
        <label className="block text-text-muted uppercase tracking-widest mb-3" style={{ fontSize: '13px' }}>
          Enter access code
        </label>
        <input
          type="password"
          value={value}
          onChange={(e) => { setValue(e.target.value); setError(false) }}
          placeholder="••••••••"
          className={`w-full rounded-xl text-center text-text-primary font-mono outline-none transition-colors duration-200 ${shake ? 'animate-shake' : ''}`}
          style={{
            height: '56px',
            fontSize: '18px',
            background: 'rgba(15,23,42,0.8)',
            border: `1px solid ${error ? '#EF4444' : 'rgba(37,99,235,0.3)'}`,
          }}
          onFocus={(e) => { if (!error) e.target.style.borderColor = '#2563EB' }}
          onBlur={(e) => { if (!error) e.target.style.borderColor = 'rgba(37,99,235,0.3)' }}
          autoFocus
        />
        <button
          type="submit"
          className="w-full rounded-xl text-white uppercase tracking-widest font-semibold mt-4 transition-colors duration-200"
          style={{ height: '48px', fontSize: '14px', background: '#2563EB' }}
          onMouseEnter={(e) => e.target.style.background = '#1D4ED8'}
          onMouseLeave={(e) => e.target.style.background = '#2563EB'}
        >
          Unlock
        </button>
        {error && (
          <p className="text-center mt-3" style={{ fontSize: '13px', color: '#EF4444' }}>
            Incorrect access code
          </p>
        )}
      </form>

      {/* Shake animation */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
        .animate-shake { animation: shake 0.4s ease-in-out; }
      `}</style>
    </div>
  )
}

function VersionPicker({ onSignOut }) {
  return (
    <div className="min-h-screen flex flex-col"
      style={{ background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, #0A0F1E 70%)' }}>
      {/* Top bar */}
      <header className="flex items-center justify-between px-8 py-5">
        <h1 className="font-serif font-bold" style={{ fontSize: '28px' }}>
          <span className="text-text-primary">ROW</span>
          <span className="text-accent">IQ</span>
        </h1>
        <button
          onClick={onSignOut}
          className="text-text-muted hover:text-text-primary transition-colors duration-200"
          style={{ fontSize: '14px' }}
        >
          Sign Out
        </button>
      </header>

      {/* Center content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-16">
        <h2 className="font-serif text-text-primary text-center" style={{ fontSize: '32px' }}>
          Select a Dashboard Version
        </h2>
        <p className="text-text-secondary text-center mt-2" style={{ fontSize: '14px' }}>
          Cal Rowing · Erg Performance Data · Fall 2023
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-[1040px]">
          {versions.map((v) => (
            <VersionCard key={v.id} {...v} />
          ))}
        </div>

        <p className="text-text-dim text-center mt-12" style={{ fontSize: '12px' }}>
          Built with RowIQ · Elsheph Systems · Spring 2026
        </p>
      </main>
    </div>
  )
}

function VersionCard({ title, badge, color, icon: Icon, description, href }) {
  return (
    <a
      href={href}
      className="group block rounded-3xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5"
      style={{
        background: 'rgba(27,58,107,0.12)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        border: '1px solid rgba(37,99,235,0.2)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(37,99,235,0.4)'
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,99,235,0.15)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(37,99,235,0.2)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Top accent stripe */}
      <div style={{ height: '4px', background: color }} />

      <div className="p-8 flex flex-col items-center text-center">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
          style={{ background: `${color}15` }}>
          <Icon size={32} color={color} />
        </div>

        {/* Title + badge */}
        <h3 className="font-serif text-text-primary" style={{ fontSize: '22px' }}>{title}</h3>
        <span className="inline-block mt-2 px-3 py-0.5 rounded-full font-mono font-medium"
          style={{ fontSize: '12px', background: `${color}33`, color }}>
          {badge}
        </span>

        {/* Description */}
        <p className="text-text-secondary mt-4 leading-relaxed" style={{ fontSize: '14px' }}>
          {description}
        </p>

        {/* Launch link */}
        <span className="mt-6 font-semibold" style={{ fontSize: '14px', color }}>
          Launch →
        </span>
      </div>
    </a>
  )
}

export default function App() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem('rowiq_auth') === 'true')
  const [fade, setFade] = useState(false)

  function handleUnlock() {
    setFade(true)
    setTimeout(() => setAuthed(true), 300)
  }

  function handleSignOut() {
    sessionStorage.removeItem('rowiq_auth')
    setAuthed(false)
    setFade(false)
  }

  if (!authed) {
    return (
      <div style={{ opacity: fade ? 0 : 1, transition: 'opacity 300ms ease' }}>
        <PasswordScreen onUnlock={handleUnlock} />
      </div>
    )
  }

  return <VersionPicker onSignOut={handleSignOut} />
}
