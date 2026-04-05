import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { sessions } from '@/data/ergData'
import { getCategoryColor, formatSplit, formatDateShort } from '@/utils/formatters'

export default function SessionComparisonChart({ currentSessionId }: { currentSessionId: string }) {
  // Filter out triathlon sessions for split comparison
  const data = sessions
    .filter(s => s.workoutCategory !== 'triathlon')
    .map(s => ({
      id: s.id,
      date: formatDateShort(s.date),
      avg: s.teamAvgSplit,
      category: s.workoutCategory,
      isCurrent: s.id === currentSessionId,
      name: s.workoutName,
    }))

  if (data.length === 0) return null

  const currentIsTri = sessions.find(s => s.id === currentSessionId)?.workoutCategory === 'triathlon'
  if (currentIsTri) return null

  return (
    <div
      className="rounded-2xl p-4"
      style={{
        background: 'rgba(27,58,107,0.2)',
        border: '1px solid rgba(37,99,235,0.25)',
      }}
    >
      <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
        Team Average Across All Sessions
      </h3>
      <ResponsiveContainer width="100%" height={120}>
        <BarChart data={data} margin={{ top: 4, right: 4, bottom: 4, left: 4 }}>
          <XAxis dataKey="date" tick={{ fontSize: 9, fill: '#64748B' }} axisLine={false} tickLine={false} />
          <YAxis
            domain={['dataMin - 2', 'dataMax + 2']}
            reversed
            hide
          />
          <Tooltip
            contentStyle={{
              background: '#0F172A',
              border: '1px solid rgba(37,99,235,0.3)',
              borderRadius: 8,
              fontSize: 12,
              color: '#CBD5E1',
            }}
            formatter={(v: any) => [`${formatSplit(Number(v))}s`, 'Team Avg']}
            labelFormatter={(_label: any, payload: any) => {
              const item = payload?.[0]?.payload
              return item ? `${item.date} — ${item.name}` : String(_label)
            }}
          />
          <Bar dataKey="avg" radius={[2, 2, 0, 0]}>
            {data.map((d, i) => (
              <Cell
                key={i}
                fill={getCategoryColor(d.category)}
                opacity={d.isCurrent ? 1 : 0.35}
                stroke={d.isCurrent ? '#fff' : 'none'}
                strokeWidth={d.isCurrent ? 2 : 0}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
