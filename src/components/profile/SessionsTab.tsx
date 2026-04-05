import { useState, useMemo } from 'react'
import type { Athlete } from '@/data/ergData'
import { formatSplit, formatDate } from '@/utils/formatters'
import CategoryBadge from '@/components/shared/CategoryBadge'
import { ArrowUpDown } from 'lucide-react'

type SortKey = 'date' | 'split' | 'spm' | 'rank'

function getRankColor(rank: number, of: number): string {
  const pct = rank / of
  if (pct <= 0.25) return '#10B981'
  if (pct <= 0.75) return '#F59E0B'
  return '#EF4444'
}

export default function SessionsTab({ athlete }: { athlete: Athlete }) {
  const [sortKey, setSortKey] = useState<SortKey>('date')
  const [sortAsc, setSortAsc] = useState(false)

  const sorted = useMemo(() => {
    const s = [...athlete.sessions]
    s.sort((a, b) => {
      let cmp = 0
      switch (sortKey) {
        case 'date': cmp = a.date.localeCompare(b.date); break
        case 'split': cmp = a.split - b.split; break
        case 'spm': cmp = a.spm - b.spm; break
        case 'rank': cmp = a.rank - b.rank; break
      }
      return sortAsc ? cmp : -cmp
    })
    return s
  }, [athlete.sessions, sortKey, sortAsc])

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc)
    else { setSortKey(key); setSortAsc(true) }
  }

  const headerBtn = (key: SortKey, label: string) => (
    <button
      onClick={() => toggleSort(key)}
      className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-text-muted hover:text-text transition"
    >
      {label}
      <ArrowUpDown size={10} className={sortKey === key ? 'text-primary' : ''} />
    </button>
  )

  return (
    <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(37,99,235,0.15)' }}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: 'rgba(27,58,107,0.15)' }}>
              <th className="text-left px-4 py-2.5">{headerBtn('date', 'Date')}</th>
              <th className="text-left px-4 py-2.5">
                <span className="text-[10px] uppercase tracking-wider text-text-muted">Workout</span>
              </th>
              <th className="text-right px-4 py-2.5">{headerBtn('split', 'Split')}</th>
              <th className="text-right px-4 py-2.5">{headerBtn('spm', 'SPM')}</th>
              <th className="text-right px-4 py-2.5">{headerBtn('rank', 'Rank')}</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((s, i) => (
              <tr
                key={i}
                className="border-t transition hover:bg-white/[0.02]"
                style={{ borderColor: 'rgba(37,99,235,0.1)' }}
              >
                <td className="px-4 py-2.5 text-text-secondary text-xs">{formatDate(s.date)}</td>
                <td className="px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <CategoryBadge category={s.workoutCategory} />
                    <span className="text-text-secondary text-xs truncate max-w-[160px]">{s.workoutName}</span>
                  </div>
                </td>
                <td className="px-4 py-2.5 text-right font-bold" style={{ fontFamily: 'var(--font-mono)' }}>
                  {formatSplit(s.split)}
                </td>
                <td className="px-4 py-2.5 text-right text-text-secondary" style={{ fontFamily: 'var(--font-mono)' }}>
                  {s.spm}
                </td>
                <td className="px-4 py-2.5 text-right">
                  <span
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium"
                    style={{
                      color: getRankColor(s.rank, s.of),
                      background: `${getRankColor(s.rank, s.of)}15`,
                    }}
                  >
                    #{s.rank} <span className="text-text-muted ml-0.5">/ {s.of}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
