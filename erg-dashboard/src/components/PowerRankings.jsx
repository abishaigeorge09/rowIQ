import { useState } from 'react'
import { ChevronUp, ChevronDown, TrendingDown, TrendingUp, Minus, ArrowUpDown } from 'lucide-react'
import { athletes } from '../data/ergData'

const RANK_BORDERS = {
  1: '#F59E0B', // gold
  2: '#94A3B8', // silver
  3: '#CD7F32', // bronze
}

export default function PowerRankings({ onAthleteClick }) {
  const [sortKey, setSortKey] = useState('rank')
  const [sortAsc, setSortAsc] = useState(true)

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc)
    } else {
      setSortKey(key)
      setSortAsc(key === 'rank' || key === 'avgSplit' || key === 'bestSplit')
    }
  }

  const sorted = [...athletes].sort((a, b) => {
    let va = a[sortKey]
    let vb = b[sortKey]
    if (sortKey === 'name') {
      return sortAsc ? va.localeCompare(vb) : vb.localeCompare(va)
    }
    if (sortKey === 'trendDelta') {
      return sortAsc ? va - vb : vb - va
    }
    return sortAsc ? va - vb : vb - va
  })

  const columns = [
    { key: 'rank', label: '#', w: 'w-12' },
    { key: 'name', label: 'Athlete', w: 'flex-1' },
    { key: 'avgSplit', label: 'Avg Split', w: 'w-24' },
    { key: 'bestSplit', label: 'Best', w: 'w-20' },
    { key: 'totalSessions', label: 'Sessions', w: 'w-20' },
    { key: 'trendDelta', label: 'Trend', w: 'w-24' },
  ]

  const SortIcon = ({ col }) => {
    if (sortKey !== col) return <ArrowUpDown size={10} className="text-[#64748B] opacity-0 group-hover:opacity-100 transition-opacity" />
    return sortAsc ? <ChevronUp size={10} className="text-[#2563EB]" /> : <ChevronDown size={10} className="text-[#2563EB]" />
  }

  return (
    <div className="glass-card p-5">
      <h2 className="font-serif text-lg font-bold text-white mb-4">Power Rankings</h2>
      <div className="overflow-auto" style={{ maxHeight: '500px' }}>
        <table className="w-full text-xs">
          <thead className="sticky top-0 z-10">
            <tr className="text-[#64748B] uppercase tracking-wider border-b border-[rgba(37,99,235,0.2)]" style={{ background: '#0A0F1E' }}>
              {columns.map(col => (
                <th
                  key={col.key}
                  className={`py-2 px-2 text-left cursor-pointer group hover:text-[#94A3B8] transition-colors ${col.w}`}
                  onClick={() => handleSort(col.key)}
                >
                  <div className="flex items-center gap-1">
                    {col.label}
                    <SortIcon col={col.key} />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((a) => {
              const borderColor = RANK_BORDERS[a.rank] || (a.rank <= 8 ? '#2563EB' : 'transparent')
              return (
                <tr
                  key={a.name}
                  className="border-b border-[rgba(37,99,235,0.08)] hover:bg-[rgba(37,99,235,0.08)] cursor-pointer transition-colors"
                  style={{ borderLeft: `3px solid ${borderColor}` }}
                  onClick={() => onAthleteClick(a.name)}
                >
                  <td className="py-2.5 px-2 font-mono text-[#64748B]">{a.rank}</td>
                  <td className="py-2.5 px-2 font-medium text-white">{a.name}</td>
                  <td className="py-2.5 px-2 font-mono text-white">{a.avgSplit}s</td>
                  <td className="py-2.5 px-2 font-mono text-[#10B981]">{a.bestSplit}s</td>
                  <td className="py-2.5 px-2 font-mono text-[#94A3B8]">{a.totalSessions}</td>
                  <td className="py-2.5 px-2">
                    <TrendBadge trend={a.trend} delta={a.trendDelta} sessions={a.totalSessions} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function TrendBadge({ trend, delta, sessions }) {
  if (sessions < 6) return <span className="text-[#64748B]">--</span>

  const config = {
    improving: { icon: TrendingDown, color: '#10B981', bg: 'rgba(16,185,129,0.1)' },
    declining: { icon: TrendingUp, color: '#EF4444', bg: 'rgba(239,68,68,0.1)' },
    stable: { icon: Minus, color: '#F59E0B', bg: 'rgba(245,158,11,0.1)' },
  }

  const c = config[trend] || config.stable
  const Icon = c.icon

  return (
    <div className="flex items-center gap-1 font-mono text-xs" style={{ color: c.color }}>
      <Icon size={12} />
      <span>{delta > 0 ? '+' : ''}{delta}s</span>
    </div>
  )
}
