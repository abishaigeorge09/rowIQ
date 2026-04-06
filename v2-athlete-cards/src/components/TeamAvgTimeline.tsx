import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceDot } from 'recharts'
import { sessions } from '@/data/ergData'
import { useAppStore } from '@/store/useAppStore'
import { formatSplit, formatDateShort, getCategoryColor } from '@/utils/formatters'

export default function TeamAvgTimeline() {
  const { selectSession, setActiveTab } = useAppStore()

  const data = sessions
    .filter(s => s.workoutCategory !== 'triathlon')
    .map(s => ({
      id: s.id,
      date: formatDateShort(s.date),
      fullDate: s.date,
      groupAAvg: s.groupAAvg,
      groupBAvg: s.groupBAvg,
      teamAvg: s.teamAvgSplit,
      category: s.workoutCategory,
      workout: s.workoutName,
    }))

  const handleClick = (d: any) => {
    if (d?.activePayload?.[0]?.payload?.id) {
      selectSession(d.activePayload[0].payload.id)
      setActiveTab('timeline')
    }
  }

  return (
    <div
      className="rounded-2xl p-6"
      style={{
        background: 'rgba(27,58,107,0.12)',
        border: '1px solid rgba(37,99,235,0.15)',
      }}
    >
      <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
        Season Performance Timeline
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 10, bottom: 10, left: 10 }} onClick={handleClick}>
          <defs>
            <linearGradient id="sGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="pGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EF4444" stopOpacity={0.2} />
              <stop offset="100%" stopColor="#EF4444" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(37,99,235,0.08)" />
          <XAxis dataKey="date" tick={{ fontSize: 10, fill: '#64748B' }} axisLine={false} tickLine={false} />
          <YAxis
            reversed
            tick={{ fontSize: 10, fill: '#64748B' }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v: number) => `${v}s`}
            domain={['dataMin - 2', 'dataMax + 2']}
          />
          <Tooltip
            contentStyle={{
              background: '#0F172A',
              border: '1px solid rgba(37,99,235,0.3)',
              borderRadius: 8,
              fontSize: 12,
              color: '#CBD5E1',
            }}
            formatter={(v: any, name: any) => [
              `${formatSplit(Number(v))}s`,
              name === 'groupAAvg' ? 'Group A' : name === 'groupBAvg' ? 'Group B' : 'Team',
            ]}
            labelFormatter={(_, payload) => {
              const item = payload?.[0]?.payload
              return item ? `${item.fullDate} — ${item.workout}` : ''
            }}
          />
          <Area
            type="monotone"
            dataKey="groupAAvg"
            stroke="#3B82F6"
            strokeWidth={2}
            fill="url(#sGrad)"
            dot={{ r: 3, fill: '#3B82F6', strokeWidth: 0 }}
            activeDot={{ r: 5, cursor: 'pointer' }}
          />
          <Area
            type="monotone"
            dataKey="groupBAvg"
            stroke="#EF4444"
            strokeWidth={2}
            fill="url(#pGrad)"
            dot={{ r: 3, fill: '#EF4444', strokeWidth: 0 }}
            activeDot={{ r: 5, cursor: 'pointer' }}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-center gap-6 mt-2 text-xs text-text-muted">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-0.5 rounded" style={{ background: '#3B82F6' }} /> Group A Avg
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-0.5 rounded" style={{ background: '#EF4444' }} /> Group B Avg
        </span>
        <span className="text-text-muted">Click any point to view session</span>
      </div>
    </div>
  )
}
