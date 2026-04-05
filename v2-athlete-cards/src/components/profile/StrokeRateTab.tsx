import { useMemo } from 'react'
import type { Athlete } from '@/data/ergData'
import { formatSplit, formatDate } from '@/utils/formatters'
import {
  ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer, ZAxis,
} from 'recharts'

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div className="rounded-lg p-3 text-xs" style={{ background: '#0A0F1E', border: '1px solid rgba(37,99,235,0.3)' }}>
      <div className="font-medium text-text mb-1">{formatDate(d.date)}</div>
      <div className="text-text-secondary">{d.workoutName}</div>
      <div className="mt-1 flex gap-3">
        <span>Split: <span className="font-bold text-text" style={{ fontFamily: 'var(--font-mono)' }}>{formatSplit(d.split)}</span></span>
        <span>SPM: <span className="font-bold text-text" style={{ fontFamily: 'var(--font-mono)' }}>{d.spm}</span></span>
      </div>
    </div>
  )
}

export default function StrokeRateTab({ athlete }: { athlete: Athlete }) {
  const data = useMemo(() => {
    const total = athlete.sessions.length
    return athlete.sessions.map((s, i) => ({
      ...s,
      recency: (i + 1) / total, // 0→oldest, 1→most recent
    }))
  }, [athlete])

  // Group by recency for multi-color effect
  const oldData = data.filter(d => d.recency <= 0.33)
  const midData = data.filter(d => d.recency > 0.33 && d.recency <= 0.66)
  const recentData = data.filter(d => d.recency > 0.66)

  // Find sweet spot
  const avgSpm = Math.round(data.reduce((s, d) => s + d.spm, 0) / data.length)
  const bestSpmRange = useMemo(() => {
    if (data.length < 3) return null
    const sorted = [...data].sort((a, b) => a.split - b.split)
    const top3 = sorted.slice(0, 3)
    const avgTopSpm = Math.round(top3.reduce((s, d) => s + d.spm, 0) / 3)
    const avgTopSplit = (top3.reduce((s, d) => s + d.split, 0) / 3).toFixed(1)
    return { spm: avgTopSpm, split: avgTopSplit }
  }, [data])

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-medium text-text-secondary mb-1">Stroke Rate vs Split</h3>
        <p className="text-xs text-text-muted mb-3">
          Each dot is a session. Brighter dots = more recent. Lower splits are better.
        </p>
        <div className="h-72 rounded-xl p-3" style={{ background: 'rgba(27,58,107,0.08)', border: '1px solid rgba(37,99,235,0.15)' }}>
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 10, right: 20, bottom: 5, left: 5 }}>
              <XAxis
                dataKey="spm"
                type="number"
                name="SPM"
                domain={['dataMin - 2', 'dataMax + 2']}
                tick={{ fill: '#64748B', fontSize: 10 }}
                label={{ value: 'Stroke Rate (SPM)', fill: '#64748B', fontSize: 10, position: 'bottom' }}
              />
              <YAxis
                dataKey="split"
                type="number"
                name="Split"
                reversed
                domain={['dataMin - 2', 'dataMax + 2']}
                tick={{ fill: '#64748B', fontSize: 10 }}
                label={{ value: 'Split (s)', fill: '#64748B', fontSize: 10, angle: -90, position: 'insideLeft' }}
              />
              <ZAxis range={[80, 80]} />
              <Tooltip content={<CustomTooltip />} />
              <Scatter data={oldData} fill="#2563EB" fillOpacity={0.25} />
              <Scatter data={midData} fill="#2563EB" fillOpacity={0.55} />
              <Scatter data={recentData} fill="#2563EB" fillOpacity={1} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Insights */}
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl p-4" style={{ background: 'rgba(27,58,107,0.08)', border: '1px solid rgba(37,99,235,0.15)' }}>
          <div className="text-[10px] uppercase tracking-wider text-text-muted mb-1">Avg Stroke Rate</div>
          <div className="text-xl font-bold" style={{ fontFamily: 'var(--font-mono)' }}>{avgSpm} SPM</div>
        </div>
        {bestSpmRange && (
          <div className="rounded-xl p-4" style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.15)' }}>
            <div className="text-[10px] uppercase tracking-wider text-text-muted mb-1">Sweet Spot</div>
            <div className="text-xl font-bold text-good" style={{ fontFamily: 'var(--font-mono)' }}>
              {bestSpmRange.spm} SPM
            </div>
            <div className="text-xs text-text-muted">Best 3 sessions avg: {bestSpmRange.split}s at ~{bestSpmRange.spm} spm</div>
          </div>
        )}
      </div>
    </div>
  )
}
