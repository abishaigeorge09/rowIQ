import { ATHLETE, CATEGORIES } from '../data/starData';
import { formatSplit, formatDate, ordinal } from '../utils';
import { Trophy } from 'lucide-react';

export default function PersonalRecords() {
  // One PR card per workout type
  const workouts = {};
  ATHLETE.sessions.forEach(s => {
    if (!workouts[s.workout]) workouts[s.workout] = [];
    workouts[s.workout].push(s);
  });

  const prCards = Object.entries(workouts).map(([workout, sessions]) => {
    const best = sessions.reduce((a, b) => a.avgSplit < b.avgSplit ? a : b);
    const cat = CATEGORIES[best.category];

    // Improvement from first to best
    const sorted = [...sessions].sort((a, b) => a.date.localeCompare(b.date));
    const first = sorted[0];
    const improvement = sessions.length >= 2 ? first.avgSplit - best.avgSplit : null;

    return { workout, best, cat, improvement, sessionCount: sessions.length };
  });

  // Sort by best split
  prCards.sort((a, b) => a.best.avgSplit - b.best.avgSplit);

  return (
    <section className="px-4 lg:px-8 py-12">
      <h2 className="text-2xl text-[#CBD5E1] mb-1" style={{ fontFamily: 'Georgia, serif' }}>
        Personal Records
      </h2>
      <p className="text-sm text-[#94A3B8] mb-6">Best performance per workout type</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {prCards.map(({ workout, best, cat, improvement, sessionCount }) => (
          <div key={workout} className="glass-card p-4 relative overflow-hidden">
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ backgroundColor: cat?.color }} />

            {/* Workout name */}
            <div className="flex items-center gap-2 mb-3">
              <Trophy size={12} style={{ color: cat?.color }} />
              <span className="text-xs font-medium text-[#CBD5E1] uppercase tracking-wider">{workout}</span>
            </div>

            {/* PR split */}
            <div className="font-mono text-2xl font-bold text-[#CBD5E1] mb-1">
              {formatSplit(best.avgSplit)}
            </div>

            {/* Date + rank */}
            <div className="text-[10px] text-[#94A3B8] mb-1">{formatDate(best.date)}</div>
            <div className="text-[10px] text-[#64748B]">{ordinal(best.rank)} of ~36</div>

            {/* Improvement */}
            {improvement != null && improvement > 0 && (
              <div className="mt-2 text-[10px] text-[#10B981] font-mono">
                +{improvement.toFixed(1)}s from first attempt
              </div>
            )}
            {sessionCount === 1 && (
              <div className="mt-2 text-[10px] text-[#64748B]">1 attempt</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
