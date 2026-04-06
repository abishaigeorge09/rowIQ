import { ATHLETE, CATEGORIES } from '../data/starData';
import { formatSplit } from '../utils';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

function CategoryCard({ catKey, cat }) {
  const { workoutBreakdown, sessions } = ATHLETE;

  // Get all sessions for this category
  const catSessions = sessions
    .filter(s => s.category === catKey)
    .sort((a, b) => a.date.localeCompare(b.date));

  // Aggregate stats across all workouts in this category
  const workoutsInCat = cat.workouts.filter(w => workoutBreakdown[w]);
  let totalSessions = 0;
  let allSplits = [];
  let allRanks = [];

  workoutsInCat.forEach(w => {
    const wb = workoutBreakdown[w];
    totalSessions += wb.sessions;
    allRanks.push(wb.avgRank * wb.sessions);
  });

  catSessions.forEach(s => {
    allSplits.push(s.avgSplit);
  });

  const bestSplit = allSplits.length ? Math.min(...allSplits) : null;
  const avgSplit = allSplits.length ? allSplits.reduce((a, b) => a + b, 0) / allSplits.length : null;
  const avgRank = allRanks.length ? allRanks.reduce((a, b) => a + b, 0) / totalSessions : null;

  // Sparkline data
  const sparkData = catSessions.map(s => ({ v: s.avgSplit }));

  return (
    <div className="glass-card overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1" style={{ backgroundColor: cat.color }} />
      <div className="p-5">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
          <span className="text-sm font-medium text-[#CBD5E1]">{cat.label}</span>
        </div>

        <div className="text-xs text-[#64748B] mb-3">{totalSessions} session{totalSessions !== 1 ? 's' : ''}</div>

        {/* Best split */}
        <div className="font-mono text-2xl font-bold text-[#CBD5E1] mb-1">
          {formatSplit(bestSplit)}
        </div>
        <div className="text-[10px] tracking-wider text-[#64748B] mb-2">BEST SPLIT</div>

        {/* Avg split + rank */}
        <div className="flex justify-between text-xs text-[#94A3B8] mb-4">
          <span>Avg: {formatSplit(avgSplit)}</span>
          <span>#{avgRank?.toFixed(1)}</span>
        </div>

        {/* Sparkline */}
        {sparkData.length > 1 && (
          <div className="h-10 mb-3">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sparkData}>
                <Line type="monotone" dataKey="v" stroke={cat.color} strokeWidth={1.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Workout pills */}
        <div className="flex flex-wrap gap-1.5">
          {workoutsInCat.map(w => (
            <span key={w} className="px-2 py-0.5 rounded-full text-[10px] font-mono"
              style={{
                backgroundColor: `${cat.color}15`,
                color: cat.color,
                border: `1px solid ${cat.color}30`,
              }}>
              {w}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WorkoutBreakdown() {
  return (
    <section className="px-4 lg:px-8 py-12">
      <h2 className="text-2xl text-[#CBD5E1] mb-1" style={{ fontFamily: 'Georgia, serif' }}>
        Workout Breakdown
      </h2>
      <p className="text-sm text-[#94A3B8] mb-6">Performance by training category</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(CATEGORIES).map(([key, cat]) => (
          <CategoryCard key={key} catKey={key} cat={cat} />
        ))}
      </div>
    </section>
  );
}
