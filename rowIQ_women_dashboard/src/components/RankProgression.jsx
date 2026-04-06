import { ATHLETE, CATEGORIES } from '../data/starData';
import { formatDate, formatDateShort, ordinal, formatSplit } from '../utils';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceArea } from 'recharts';

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="glass-card p-3 text-xs" style={{ minWidth: 140 }}>
      <div className="text-[#CBD5E1] font-medium mb-1">{formatDate(d.date)}</div>
      <div className="text-[#94A3B8]">{d.workout}</div>
      <div className="font-mono text-[#CBD5E1] mt-1">{ordinal(d.rank)} of ~36</div>
      <div className="text-[#64748B]">{formatSplit(d.avgSplit)}</div>
    </div>
  );
};

const CustomDot = ({ cx, cy, payload }) => {
  const cat = CATEGORIES[payload.category];
  return <circle cx={cx} cy={cy} r={4} fill={cat?.color || '#2563EB'} stroke="#0A0F1E" strokeWidth={2} />;
};

export default function RankProgression() {
  const data = ATHLETE.sessions.map((s, i) => ({ ...s, idx: i }));

  return (
    <section className="px-4 lg:px-8 py-12">
      <h2 className="text-2xl text-[#CBD5E1] mb-1" style={{ fontFamily: 'Georgia, serif' }}>
        Rank Progression
      </h2>
      <p className="text-sm text-[#94A3B8] mb-6">Competitive position over time — lower is better</p>

      <div className="glass-card p-4 lg:p-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 20, left: 10 }}>
            {/* Top 5 zone */}
            <ReferenceArea y1={1} y2={5} fill="#10B981" fillOpacity={0.05}
              label={{ value: 'Top 5', fill: '#10B981', fontSize: 10, position: 'insideTopRight' }} />

            <XAxis dataKey="idx" tick={{ fill: '#64748B', fontSize: 10 }}
              tickFormatter={i => formatDateShort(data[i]?.date)}
              interval={Math.floor(data.length / 8)} axisLine={{ stroke: '#1e293b' }} tickLine={false} />
            <YAxis reversed domain={[1, 12]}
              tick={{ fill: '#64748B', fontSize: 10 }}
              tickFormatter={v => `#${v}`}
              axisLine={{ stroke: '#1e293b' }} tickLine={false} width={35} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="rank" stroke="#2563EB" strokeWidth={2}
              dot={<CustomDot />} activeDot={{ r: 7, fill: '#2563EB', stroke: '#0A0F1E', strokeWidth: 3 }} />
          </LineChart>
        </ResponsiveContainer>

        {/* Summary */}
        <div className="flex justify-center gap-8 mt-4 text-xs text-[#94A3B8]">
          <span>Avg rank: <span className="font-mono text-[#CBD5E1]">#{ATHLETE.stats.avgRank}</span></span>
          <span>Best: <span className="font-mono text-[#10B981]">{ordinal(ATHLETE.stats.bestRank)}</span></span>
          <span>Top 5 finishes: <span className="font-mono text-[#CBD5E1]">
            {ATHLETE.sessions.filter(s => s.rank <= 5).length}/{ATHLETE.totalSessions}
          </span></span>
        </div>
      </div>
    </section>
  );
}
