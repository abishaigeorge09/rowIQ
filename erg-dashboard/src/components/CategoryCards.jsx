import { Activity, Zap, Gauge, Medal } from 'lucide-react'
import { categoryStats } from '../data/ergData'

const CATEGORY_CONFIG = {
  steady_state: { label: 'Steady State', color: '#2563EB', icon: Activity },
  intervals: { label: 'Intervals', color: '#8B5CF6', icon: Zap },
  threshold: { label: 'Threshold', color: '#F59E0B', icon: Gauge },
  triathlon: { label: 'Triathlon', color: '#10B981', icon: Medal },
}

export default function CategoryCards() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginTop: '24px' }}>
      {categoryStats.map((cat) => {
        const config = CATEGORY_CONFIG[cat.name] || CATEGORY_CONFIG.steady_state
        const Icon = config.icon
        return (
          <div key={cat.name} className="glass-card p-5 relative overflow-hidden">
            {/* Accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: config.color }} />
            <div className="flex items-center gap-2 mb-3">
              <Icon size={16} style={{ color: config.color }} />
              <span className="text-sm font-semibold text-white">{config.label}</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-[#64748B]">Sessions</span>
                <span className="font-mono text-white">{cat.count}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">Team Avg</span>
                <span className="font-mono text-white">{cat.teamAvg}s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">Best Split</span>
                <span className="font-mono text-[#10B981]">{cat.bestSplit !== 999 ? cat.bestSplit + 's' : 'N/A'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">Best Performer</span>
                <span className="text-[#94A3B8]">{cat.bestAthlete || 'N/A'}</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
