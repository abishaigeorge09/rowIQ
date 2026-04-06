import { ATHLETE, CATEGORIES, SEASON_COLORS } from '../data/starData';
import { formatSplit, formatSplitShort, formatDateShort, formatDate, ordinal } from '../utils';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, ReferenceArea } from 'recharts';

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="glass-card p-3 text-xs" style={{ minWidth: 160 }}>
      <div className="text-[#CBD5E1] font-medium mb-1">{formatDate(d.date)}</div>
      <div className="flex items-center gap-2 mb-1">
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: CATEGORIES[d.category]?.color }} />
        <span className="text-[#94A3B8]">{d.workout}</span>
      </div>
      <div className="font-mono text-[#CBD5E1]">{formatSplit(d.avgSplit)}</div>
      <div className="text-[#94A3B8]">Rank: {ordinal(d.rank)} of ~36</div>
      {d.watts && <div className="text-[#F59E0B]">{d.watts}W</div>}
      <div className="text-[#64748B] mt-1">{d.season}</div>
    </div>
  );
};

const CustomDot = ({ cx, cy, payload }) => {
  const cat = CATEGORIES[payload.category];
  const isRacePace = payload.category === 'race_pace';
  const r = isRacePace ? 6 : 4;
  return <circle cx={cx} cy={cy} r={r} fill={cat?.color || '#2563EB'} stroke="#0A0F1E" strokeWidth={2} />;
};

export default function PerformanceTimeline() {
  const data = ATHLETE.sessions.map((s, i) => ({ ...s, idx: i }));

  // Find season boundary index
  const firstS2 = data.findIndex(s => s.season === '2025-2026');

  // Calculate trend insight
  const first5 = data.slice(0, 5).reduce((sum, s) => sum + s.avgSplit, 0) / 5;
  const last5 = data.slice(-5).reduce((sum, s) => sum + s.avgSplit, 0) / 5;
  const delta = first5 - last5;
  const trendText = delta > 0
    ? `Improved from ${formatSplit(first5)} avg (first 5) to ${formatSplit(last5)} avg (last 5) — ${delta.toFixed(1)}s faster`
    : `Split has shifted from ${formatSplit(first5)} avg to ${formatSplit(last5)} avg`;

  // Y axis domain — find range
  const splits = data.map(s => s.avgSplit);
  const minSplit = Math.floor(Math.min(...splits) / 5) * 5 - 2;
  const maxSplit = Math.ceil(Math.max(...splits) / 5) * 5 + 2;

  return (
    <section className="px-4 lg:px-8 py-12">
      <h2 className="text-2xl text-[#CBD5E1] mb-1" style={{ fontFamily: 'Georgia, serif' }}>
        Performance Timeline
      </h2>
      <p className="text-sm text-[#94A3B8] mb-6">Every erg session — lower is faster</p>

      <div className="glass-card p-4 lg:p-6">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
            {/* Season background zones */}
            {firstS2 > 0 && (
              <>
                <ReferenceArea x1={0} x2={firstS2 - 1} fill={SEASON_COLORS['2024-2025']} fillOpacity={0.03}
                  label={{ value: '2024-2025', position: 'insideTopLeft', fill: '#64748B', fontSize: 11 }} />
                <ReferenceArea x1={firstS2} x2={data.length - 1} fill={SEASON_COLORS['2025-2026']} fillOpacity={0.03}
                  label={{ value: '2025-2026', position: 'insideTopLeft', fill: '#64748B', fontSize: 11 }} />
              </>
            )}

            {/* Benchmark lines */}
            <ReferenceLine y={100} stroke="#10B981" strokeDasharray="6 4" strokeOpacity={0.4}
              label={{ value: '1:40 Elite', fill: '#10B981', fontSize: 10, position: 'right' }} />
            <ReferenceLine y={110} stroke="#F59E0B" strokeDasharray="6 4" strokeOpacity={0.4}
              label={{ value: '1:50 Varsity', fill: '#F59E0B', fontSize: 10, position: 'right' }} />
            <ReferenceLine y={120} stroke="#EF4444" strokeDasharray="6 4" strokeOpacity={0.3}
              label={{ value: '2:00 Dev', fill: '#EF4444', fontSize: 10, position: 'right' }} />

            <XAxis dataKey="idx" tick={{ fill: '#64748B', fontSize: 10 }}
              tickFormatter={i => formatDateShort(data[i]?.date)}
              interval={Math.floor(data.length / 8)} axisLine={{ stroke: '#1e293b' }} tickLine={false} />
            <YAxis reversed domain={[minSplit, maxSplit]}
              tick={{ fill: '#64748B', fontSize: 10 }}
              tickFormatter={v => formatSplitShort(v)}
              axisLine={{ stroke: '#1e293b' }} tickLine={false} width={45} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="avgSplit" stroke="#2563EB" strokeWidth={2}
              dot={<CustomDot />} activeDot={{ r: 8, fill: '#2563EB', stroke: '#0A0F1E', strokeWidth: 3 }} />
          </LineChart>
        </ResponsiveContainer>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          {Object.entries(CATEGORIES).map(([key, cat]) => (
            <div key={key} className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
              {cat.label}
            </div>
          ))}
        </div>

        {/* Insight */}
        <p className="text-center text-sm text-[#94A3B8] mt-4 italic">{trendText}</p>
      </div>
    </section>
  );
}
