import { useState } from 'react';
import { ATHLETE, CATEGORIES, SEASON_COLORS } from '../data/starData';
import { formatSplit, formatDate, ordinal } from '../utils';
import { ChevronDown, ChevronUp } from 'lucide-react';

function PieceBar({ piece, avgSplit, minSplit, maxSplit }) {
  const range = maxSplit - minSplit || 1;
  const width = 30 + ((piece.split - minSplit) / range) * 70;
  const isFaster = piece.split < avgSplit;
  const color = isFaster ? '#10B981' : '#EF4444';

  return (
    <div className="flex items-center gap-2 mb-1.5">
      <span className="text-[10px] text-[#64748B] w-6 text-right font-mono">P{piece.piece}</span>
      <div className="flex-1 relative h-6">
        <div className="h-full rounded-r-sm flex items-center px-2 text-[10px] font-mono"
          style={{
            width: `${width}%`,
            backgroundColor: `${color}20`,
            borderLeft: `2px solid ${color}`,
            color: '#CBD5E1',
          }}>
          {formatSplit(piece.split)}
          {piece.rate && <span className="text-[#64748B] ml-1">@{piece.rate}spm</span>}
        </div>
      </div>
    </div>
  );
}

function SessionRow({ session }) {
  const [expanded, setExpanded] = useState(false);
  const cat = CATEGORIES[session.category];
  const rankColor = session.rank <= 5 ? '#10B981' : session.rank <= 10 ? '#F59E0B' : '#EF4444';

  return (
    <div className="border-b border-[rgba(37,99,235,0.1)]">
      {/* Collapsed row */}
      <button onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[rgba(37,99,235,0.05)] transition-colors text-left">
        {/* Date */}
        <span className="text-xs text-[#94A3B8] w-24 shrink-0">{formatDate(session.date)}</span>

        {/* Workout badge */}
        <span className="px-2 py-0.5 rounded text-[10px] font-mono shrink-0"
          style={{
            backgroundColor: `${cat?.color}18`,
            color: cat?.color,
            border: `1px solid ${cat?.color}30`,
          }}>
          {session.workout}
        </span>

        {/* Season pill */}
        <span className="hidden sm:inline px-2 py-0.5 rounded-full text-[9px] font-mono shrink-0"
          style={{
            backgroundColor: `${SEASON_COLORS[session.season]}15`,
            color: SEASON_COLORS[session.season],
          }}>
          {session.season}
        </span>

        {/* Split */}
        <span className="font-mono text-sm text-[#CBD5E1] ml-auto">{formatSplit(session.avgSplit)}</span>

        {/* Rank */}
        <span className="font-mono text-xs px-2 py-0.5 rounded shrink-0"
          style={{ color: rankColor, backgroundColor: `${rankColor}15` }}>
          #{session.rank} of ~36
        </span>

        {/* Watts */}
        {session.watts && (
          <span className="hidden sm:inline text-xs text-[#F59E0B] font-mono">{session.watts}W</span>
        )}

        {/* Expand icon */}
        <span className="text-[#64748B] ml-1">
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </span>
      </button>

      {/* Expanded */}
      {expanded && (
        <div className="px-4 pb-4 pt-1" style={{ backgroundColor: 'rgba(15,23,42,0.5)' }}>
          {session.pieces && session.pieces.length > 0 ? (
            <div className="max-w-md">
              <div className="text-[10px] text-[#64748B] tracking-wider mb-2">PIECE-BY-PIECE</div>
              {(() => {
                const splits = session.pieces.map(p => p.split);
                const min = Math.min(...splits);
                const max = Math.max(...splits);
                return session.pieces.map(p => (
                  <PieceBar key={p.piece} piece={p} avgSplit={session.avgSplit} minSplit={min} maxSplit={max} />
                ));
              })()}
              {/* Avg reference */}
              <div className="flex items-center gap-2 mt-2 text-[10px] text-[#64748B]">
                <span className="w-6" />
                <span>Avg: <span className="font-mono text-[#CBD5E1]">{formatSplit(session.avgSplit)}</span></span>
              </div>
            </div>
          ) : (
            <div className="text-xs text-[#94A3B8]">
              Single piece: <span className="font-mono">{formatSplit(session.avgSplit)}</span>
              {session.avgRate && <span> @{session.avgRate}spm</span>}
            </div>
          )}

          {/* Extra info */}
          <div className="flex gap-4 mt-3 text-[10px] text-[#64748B]">
            {session.totalTime && <span>Time: {formatSplit(session.totalTime)}</span>}
            {session.totalMeters && <span>Distance: {session.totalMeters}</span>}
            {session.watts && <span>Power: {session.watts}W</span>}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SessionDeepDive() {
  // Reverse chronological
  const sessions = [...ATHLETE.sessions].reverse();

  return (
    <section className="px-4 lg:px-8 py-12">
      <h2 className="text-2xl text-[#CBD5E1] mb-1" style={{ fontFamily: 'Georgia, serif' }}>
        Session Log
      </h2>
      <p className="text-sm text-[#94A3B8] mb-6">Click any session to see piece-by-piece detail</p>

      <div className="glass-card overflow-hidden">
        {sessions.map((s, i) => (
          <SessionRow key={i} session={s} />
        ))}
      </div>
    </section>
  );
}
