import { Trophy, Users, TrendingUp, Calendar } from 'lucide-react'
import { athletes, sessions } from '../data/ergData'

export default function SummaryCards({ onAthleteClick }) {
  const activeAthletes = athletes.filter(a => a.totalSessions >= 3)
  const topPerformer = athletes[0]
  const mostImproved = athletes
    .filter(a => a.totalSessions >= 6 && a.trend === 'improving')
    .sort((a, b) => a.trendDelta - b.trendDelta)[0]

  const cards = [
    {
      icon: Calendar,
      label: 'Total Sessions',
      value: sessions.length.toString(),
      sub: 'Jan 13 – Apr 23, 2025',
      color: '#2563EB',
    },
    {
      icon: Users,
      label: 'Active Athletes',
      value: activeAthletes.length.toString(),
      sub: `${athletes.length} total rostered`,
      color: '#8B5CF6',
    },
    {
      icon: Trophy,
      label: 'Top Performer',
      value: topPerformer?.name || 'N/A',
      sub: `${topPerformer?.avgSplit}s avg split`,
      color: '#F59E0B',
      clickable: topPerformer?.name,
    },
    {
      icon: TrendingUp,
      label: 'Most Improved',
      value: mostImproved?.name || 'N/A',
      sub: `${mostImproved?.trendDelta}s improvement`,
      color: '#10B981',
      clickable: mostImproved?.name,
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 w-full">
      {cards.map((card) => (
        <div
          key={card.label}
          className="glass-card"
          style={{ padding: '20px', cursor: card.clickable ? 'pointer' : 'default' }}
          onClick={() => card.clickable && onAthleteClick(card.clickable)}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <card.icon size={16} style={{ color: card.color }} />
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748B' }}>{card.label}</span>
          </div>
          <div className="font-serif text-lg lg:text-2xl" style={{ fontWeight: 'bold', color: 'white', marginBottom: '4px' }}>{card.value}</div>
          <div style={{ fontSize: '12px', color: '#94A3B8' }}>{card.sub}</div>
        </div>
      ))}
    </div>
  )
}
