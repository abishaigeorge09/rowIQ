import { ATHLETE, CATEGORIES } from '../data/starData';
import { formatSplit, formatDate } from '../utils';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-card p-3 text-xs" style={{ minWidth: 120 }}>
      <div className="text-[#CBD5E1] mb-1">Piece {label}</div>
      {payload.map((p, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
          <span className="text-[#94A3B8]">{p.name}:</span>
          <span className="font-mono text-[#CBD5E1]">{formatSplit(p.value)}</span>
        </div>
      ))}
    </div>
  );
};

function WorkoutPacingChart({ workout, sessions }) {
  // Build data: each piece number as a data point
  const maxPieces = Math.max(...sessions.map(s => s.pieces?.length || 0));
  const data = [];
  for (let i = 0; i < maxPieces; i++) {
    const point = { piece: i + 1 };
    sessions.forEach(s => {
      if (s.pieces && s.pieces[i]) {
        point[s.date] = s.pieces[i].split;
      }
    });
    data.push(point);
  }

  // Color from most faded (oldest) to most opaque (newest)
  const catColor = CATEGORIES[sessions[0].category]?.color || '#2563EB';

  return (
    <div className="glass-card p-4 lg:p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: catColor }} />
        <span className="text-sm font-medium text-[#CBD5E1]">{workout}</span>
        <span className="text-xs text-[#64748B]">({sessions.length} sessions)</span>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 5, right: 15, bottom: 5, left: 5 }}>
          <XAxis dataKey="piece" tick={{ fill: '#64748B', fontSize: 10 }}
            tickFormatter={v => `P${v}`} axisLine={{ stroke: '#1e293b' }} tickLine={false} />
          <YAxis tick={{ fill: '#64748B', fontSize: 10 }}
            tickFormatter={v => formatSplit(v)}
            axisLine={{ stroke: '#1e293b' }} tickLine={false} width={45}
            domain={['auto', 'auto']} reversed />
          <Tooltip content={<CustomTooltip />} />
          {sessions.map((s, i) => {
            const opacity = 0.3 + (i / (sessions.length - 1 || 1)) * 0.7;
            return (
              <Line key={s.date} type="monotone" dataKey={s.date}
                stroke={catColor} strokeWidth={2} strokeOpacity={opacity}
                dot={{ r: 3, fill: catColor, fillOpacity: opacity, stroke: '#0A0F1E', strokeWidth: 1 }}
                name={formatDate(s.date)} />
            );
          })}
        </LineChart>
      </ResponsiveContainer>

      {/* Date legend */}
      <div className="flex flex-wrap gap-3 mt-2 justify-center">
        {sessions.map((s, i) => {
          const opacity = 0.3 + (i / (sessions.length - 1 || 1)) * 0.7;
          return (
            <span key={s.date} className="text-[10px] flex items-center gap-1">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: catColor, opacity }} />
              <span className="text-[#64748B]">{formatDate(s.date)}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function PacingAnalysis() {
  // Group sessions by workout type, only those with pieces and 2+ sessions
  const workoutGroups = {};
  ATHLETE.sessions.forEach(s => {
    if (s.pieces && s.pieces.length > 1) {
      if (!workoutGroups[s.workout]) workoutGroups[s.workout] = [];
      workoutGroups[s.workout].push(s);
    }
  });

  // Filter to 2+ sessions
  const eligibleWorkouts = Object.entries(workoutGroups)
    .filter(([_, sessions]) => sessions.length >= 2)
    .sort((a, b) => b[1].length - a[1].length);

  if (eligibleWorkouts.length === 0) return null;

  return (
    <section className="px-4 lg:px-8 py-12">
      <h2 className="text-2xl text-[#CBD5E1] mb-1" style={{ fontFamily: 'Georgia, serif' }}>
        Pacing Analysis
      </h2>
      <p className="text-sm text-[#94A3B8] mb-6">How you pace across multiple attempts — lighter lines are older</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {eligibleWorkouts.map(([workout, sessions]) => (
          <WorkoutPacingChart key={workout} workout={workout} sessions={sessions} />
        ))}
      </div>
    </section>
  );
}
