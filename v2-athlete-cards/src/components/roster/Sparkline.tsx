import { LineChart, Line, Area, AreaChart, ResponsiveContainer, YAxis } from 'recharts'
import type { SparklinePoint } from '@/data/ergData'

export default function Sparkline({ data }: { data: SparklinePoint[] }) {
  if (data.length < 2) return null
  const minSplit = Math.min(...data.map(d => d.split)) - 2
  const maxSplit = Math.max(...data.map(d => d.split)) + 2

  return (
    <ResponsiveContainer width="100%" height={80}>
      <AreaChart data={data} margin={{ top: 4, right: 4, bottom: 4, left: 4 }}>
        <defs>
          <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#2563EB" stopOpacity={0} />
          </linearGradient>
        </defs>
        <YAxis domain={[minSplit, maxSplit]} reversed hide />
        <Area
          type="monotone"
          dataKey="split"
          stroke="#2563EB"
          strokeWidth={2}
          fill="url(#sparkGrad)"
          dot={false}
          isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
