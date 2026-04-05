import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { sessions, type Session } from '@/data/ergData'
import { formatSplit, formatDate, getCategoryColor } from '@/utils/formatters'

interface Props {
  currentSession: Session
}

export default function SessionComparisonChart({ currentSession }: Props) {
  if (currentSession.workoutCategory === 'triathlon') return null

  const data = sessions
    .filter((s) => s.workoutCategory !== 'triathlon')
    .map((s) => ({
      id: s.id,
      date: s.date,
      workoutName: s.workoutName,
      teamAvgSplit: s.teamAvgSplit,
      category: s.workoutCategory,
      isCurrent: s.id === currentSession.id,
    }))

  return (
    <div
      className="rounded-2xl p-5 backdrop-blur-xl"
      style={{
        background: 'rgba(27, 58, 107, 0.22)',
        border: '1px solid rgba(37, 99, 235, 0.25)',
      }}
    >
      <h3
        className="text-xs font-semibold uppercase tracking-wider mb-4"
        style={{ color: 'var(--color-text-muted)' }}
      >
        Team Average Across All Sessions
      </h3>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{ top: 4, right: 4, bottom: 4, left: 4 }}>
          <XAxis dataKey="date" hide />
          <YAxis reversed hide domain={['dataMin - 1', 'dataMax + 1']} />
          <Tooltip
            cursor={false}
            contentStyle={{
              background: 'rgba(15, 23, 42, 0.95)',
              border: '1px solid rgba(37, 99, 235, 0.3)',
              borderRadius: 12,
              padding: '8px 12px',
              fontSize: 12,
            }}
            itemStyle={{ color: 'var(--color-text)' }}
            labelStyle={{ color: 'var(--color-text-secondary)', marginBottom: 4 }}
            formatter={(v: any) => [formatSplit(Number(v)), 'Team Avg']}
            labelFormatter={(v: any) => formatDate(String(v))}
          />
          <Bar dataKey="teamAvgSplit" radius={[4, 4, 0, 0]}>
            {data.map((entry) => (
              <Cell
                key={entry.id}
                fill={getCategoryColor(entry.category)}
                fillOpacity={entry.isCurrent ? 1 : 0.35}
                stroke={entry.isCurrent ? '#ffffff' : 'none'}
                strokeWidth={entry.isCurrent ? 2 : 0}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
