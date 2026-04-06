import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { athletes } from '@/data/ergData'
import type { Athlete } from '@/data/ergData'
import { formatSplit } from '@/utils/formatters'
import TrendArrow from '@/components/shared/TrendArrow'
import OverviewTab from './OverviewTab'
import SessionsTab from './SessionsTab'
import CompareTab from './CompareTab'
import StrokeRateTab from './StrokeRateTab'

const TABS = ['Overview', 'Sessions', 'Compare', 'Stroke Rate'] as const
type Tab = typeof TABS[number]

interface Props {
  athleteId: string
  onBack: () => void
}

export default function ProfileView({ athleteId, onBack }: Props) {
  const [tab, setTab] = useState<Tab>('Overview')
  const athlete = athletes.find(a => a.id === athleteId)

  if (!athlete) {
    return (
      <div className="flex items-center justify-center py-20 text-text-muted">
        Athlete not found.
        <button onClick={onBack} className="ml-2 text-primary">← Back</button>
      </div>
    )
  }

  return (
    <div className="py-5 flex flex-col gap-5 w-full" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm text-primary hover:text-text transition w-fit"
      >
        <ArrowLeft size={16} /> Back to Roster
      </button>

      {/* Profile header */}
      <div>
        <div className="flex items-center gap-3 flex-wrap">
          <h2 className="text-3xl font-bold text-text" style={{ fontFamily: 'var(--font-display)' }}>
            {athlete.name}
          </h2>
          <span className="text-xs font-bold px-2 py-1 rounded-md bg-primary/20 text-primary">
            {athlete.group === 'A' ? 'Group A' : 'Group B'}
          </span>
        </div>
        <div className="flex items-center gap-3 mt-1.5">
          <span className="text-sm text-text-secondary">
            <span className="font-bold text-text" style={{ fontFamily: 'var(--font-mono)' }}>#{athlete.rank}</span> of {athletes.length}
          </span>
          <TrendArrow trend={athlete.trend} delta={athlete.trendDelta} />
        </div>

        {/* Stat pills */}
        <div className="flex gap-3 mt-4 flex-wrap">
          {[
            { label: 'Avg Split', value: `${formatSplit(athlete.avgSplit)}s`, color: '#2563EB' },
            { label: 'Best Split', value: `${formatSplit(athlete.bestSplit)}s`, color: '#10B981' },
            { label: 'Sessions', value: `${athlete.sessionCount}`, color: '#8B5CF6' },
            { label: 'Consistency', value: `${athlete.consistency}%`, color: '#F59E0B' },
          ].map(s => (
            <div
              key={s.label}
              className="px-4 py-2.5 rounded-xl"
              style={{ background: `${s.color}10`, border: `1px solid ${s.color}25` }}
            >
              <div className="text-[10px] uppercase tracking-wider text-text-muted">{s.label}</div>
              <div className="text-lg font-bold mt-0.5" style={{ fontFamily: 'var(--font-mono)', color: s.color }}>
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tab bar */}
      <div className="flex gap-1 p-1 rounded-lg" style={{ background: 'rgba(37,99,235,0.06)' }}>
        {TABS.map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all"
            style={{
              background: tab === t ? '#2563EB' : 'transparent',
              color: tab === t ? '#fff' : '#94A3B8',
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {tab === 'Overview' && <OverviewTab athlete={athlete} />}
      {tab === 'Sessions' && <SessionsTab athlete={athlete} />}
      {tab === 'Compare' && <CompareTab athlete={athlete} />}
      {tab === 'Stroke Rate' && <StrokeRateTab athlete={athlete} />}
    </div>
  )
}
