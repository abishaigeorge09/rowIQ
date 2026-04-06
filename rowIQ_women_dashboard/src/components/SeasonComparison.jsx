import { ATHLETE, SEASON_COLORS } from '../data/starData';
import { formatSplit, ordinal } from '../utils';
import { ArrowUp, ArrowDown } from 'lucide-react';

function SeasonCard({ season }) {
  const data = ATHLETE.seasonBreakdown[season];
  const color = SEASON_COLORS[season];

  // Monthly distribution
  const monthCounts = {};
  ATHLETE.sessions.filter(s => s.season === season).forEach(s => {
    const m = new Date(s.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short' });
    monthCounts[m] = (monthCounts[m] || 0) + 1;
  });
  const maxCount = Math.max(...Object.values(monthCounts));
  const months = Object.entries(monthCounts);

  return (
    <div className="glass-card p-6 flex-1">
      <div className="text-lg font-medium mb-4 font-mono" style={{ color }}>{season}</div>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-xs text-[#64748B]">Sessions</span>
          <span className="font-mono text-sm text-[#CBD5E1]">{data.sessions}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs text-[#64748B]">Avg Split</span>
          <span className="font-mono text-sm text-[#CBD5E1]">{formatSplit(data.avgSplit)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs text-[#64748B]">Best Split</span>
          <span className="font-mono text-sm text-[#10B981]">{formatSplit(data.bestSplit)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs text-[#64748B]">Avg Rank</span>
          <span className="font-mono text-sm text-[#CBD5E1]">#{data.avgRank.toFixed(1)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs text-[#64748B]">Best Rank</span>
          <span className="font-mono text-sm text-[#CBD5E1]">{ordinal(data.bestRank)}</span>
        </div>
      </div>

      {/* Monthly bar chart */}
      <div className="text-[10px] text-[#64748B] tracking-wider mb-2">MONTHLY DISTRIBUTION</div>
      <div className="flex items-end gap-1 h-12">
        {months.map(([month, count]) => (
          <div key={month} className="flex flex-col items-center flex-1 gap-0.5">
            <div className="w-full rounded-sm" style={{
              height: `${(count / maxCount) * 100}%`,
              backgroundColor: `${color}60`,
              minHeight: 4,
            }} />
            <span className="text-[8px] text-[#64748B]">{month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SeasonComparison() {
  const s1 = ATHLETE.seasonBreakdown['2024-2025'];
  const s2 = ATHLETE.seasonBreakdown['2025-2026'];
  const delta = s1.avgSplit - s2.avgSplit;
  const improved = delta > 0;

  return (
    <section className="px-4 lg:px-8 py-12">
      <h2 className="text-2xl text-[#CBD5E1] mb-1" style={{ fontFamily: 'Georgia, serif' }}>
        Season Comparison
      </h2>
      <p className="text-sm text-[#94A3B8] mb-6">Year-over-year progression</p>

      <div className="flex flex-col lg:flex-row gap-4 items-stretch">
        <SeasonCard season="2024-2025" />

        {/* Delta indicator */}
        <div className="flex flex-col items-center justify-center lg:w-32 py-4">
          <div className={`flex items-center gap-1 text-sm font-mono font-bold ${improved ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
            {improved ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
            {Math.abs(delta).toFixed(1)}s
          </div>
          <div className="text-[10px] text-[#64748B] mt-1">
            {improved ? 'faster avg' : 'slower avg'}
          </div>

          {/* Rank delta */}
          {(() => {
            const rankDelta = s1.avgRank - s2.avgRank;
            const rankImproved = rankDelta > 0;
            return (
              <div className={`flex items-center gap-1 text-xs font-mono mt-3 ${rankImproved ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                {rankImproved ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                {Math.abs(rankDelta).toFixed(1)} rank
              </div>
            );
          })()}
        </div>

        <SeasonCard season="2025-2026" />
      </div>
    </section>
  );
}
