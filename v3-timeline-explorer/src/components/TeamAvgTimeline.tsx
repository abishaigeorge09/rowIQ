import { useMemo } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { sessions } from '@/data/ergData'
import { useAppStore } from '@/store/useAppStore'
import { formatDateShort, formatSplit } from '@/utils/formatters'

export default function TeamAvgTimeline() {
  const selectSession = useAppStore((s) => s.selectSession)
  const setActiveTab = useAppStore((s) => s.setActiveTab)

  const data = useMemo(() => {
    return sessions
      .filter((s) => s.workoutCategory !== 'triathlon')
      .map((s) => ({
        id: s.id,
        date: s.date,
        dateLabel: formatDateShort(s.date),
        starboardAvg: s.starboardAvg,
        portAvg: s.portAvg,
        teamAvg: s.teamAvgSplit,
      }))
  }, [])

  const splits = data.flatMap((d) => [d.starboardAvg, d.portAvg])
  const minY = Math.floor(Math.min(...splits) - 1)
  const maxY = Math.ceil(Math.max(...splits) + 1)

  const handleClick = (point: any) => {
    if (point?.activePayload?.[0]?.payload?.id) {
      selectSession(point.activePayload[0].payload.id)
      setActiveTab('timeline')
    }
  }

  return (
    <div
      className="rounded-2xl p-6"
      style={{
        background: 'rgba(27,58,107,0.22)',
        border: '1px solid rgba(37,99,235,0.25)',
      }}
    >
      <h2
        className="text-lg font-semibold text-text mb-4"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Season Performance Timeline
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <AreaChart
          data={data}
          margin={{ top: 8, right: 16, bottom: 8, left: 0 }}
          onClick={handleClick}
        >
          <defs>
            <linearGradient id="gradStarboard" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradPort" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EF4444" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#EF4444" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="dateLabel"
            stroke="#64748B"
            tick={{ fill: '#94A3B8', fontSize: 11 }}
            axisLine={{ stroke: '#1E293B' }}
            tickLine={false}
          />
          <YAxis
            domain={[minY, maxY]}
            reversed
            stroke="#64748B"
            tick={{ fill: '#94A3B8', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v: any) => formatSplit(v)}
            width={48}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#0F172A',
              border: '1px solid rgba(37,99,235,0.3)',
              borderRadius: 12,
              color: '#CBD5E1',
              fontSize: 12,
            }}
            labelStyle={{ color: '#94A3B8', marginBottom: 4 }}
            formatter={(v: any, name: any) => [
              formatSplit(v) + 's',
              name === 'starboardAvg' ? 'Starboard' : 'Port',
            ]}
            labelFormatter={(label: any) => label}
          />
          <Legend
            verticalAlign="bottom"
            iconType="line"
            formatter={(v: any) =>
              v === 'starboardAvg' ? 'Starboard Avg' : 'Port Avg'
            }
            wrapperStyle={{ color: '#94A3B8', fontSize: 12, paddingTop: 8 }}
          />
          <Area
            type="monotone"
            dataKey="starboardAvg"
            stroke="#3B82F6"
            strokeWidth={2}
            fill="url(#gradStarboard)"
            dot={{ r: 3, fill: '#3B82F6', stroke: '#0F172A', strokeWidth: 2 }}
            activeDot={{ r: 5, fill: '#3B82F6', stroke: '#fff', strokeWidth: 2, cursor: 'pointer' }}
            isAnimationActive={false}
          />
          <Area
            type="monotone"
            dataKey="portAvg"
            stroke="#EF4444"
            strokeWidth={2}
            fill="url(#gradPort)"
            dot={{ r: 3, fill: '#EF4444', stroke: '#0F172A', strokeWidth: 2 }}
            activeDot={{ r: 5, fill: '#EF4444', stroke: '#fff', strokeWidth: 2, cursor: 'pointer' }}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>

      <p className="text-[11px] text-text-muted mt-2 text-center">
        Click any point to jump to that session
      </p>
    </div>
  )
}
