import { ATHLETE, SEASON_COLORS } from '../data/starData';
import { formatSplit, formatDate, ordinal } from '../utils';
import { ChevronDown } from 'lucide-react';

export default function HeroHeader() {
  const { name, team, stats } = ATHLETE;

  const cards = [
    {
      value: formatSplit(stats.bestSplit),
      label: 'PERSONAL BEST',
      sub: `${stats.bestSplitWorkout} · ${formatDate(stats.bestSplitDate)}`,
      color: '#10B981',
    },
    {
      value: formatSplit(stats.best2k),
      label: '2K PR',
      sub: formatDate(stats.best2kDate),
      color: '#EF4444',
    },
    {
      value: String(ATHLETE.totalSessions),
      label: 'TOTAL SESSIONS',
      sub: 'across 2 seasons',
      color: '#2563EB',
    },
    {
      value: ordinal(stats.bestRank),
      label: 'HIGHEST FINISH',
      sub: 'of ~36 athletes',
      color: '#F59E0B',
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-12"
      style={{ background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.06) 0%, transparent 70%)' }}>

      {/* Logo */}
      <div className="absolute top-6 left-6">
        <span style={{ fontFamily: 'Georgia, serif', fontSize: 20 }}>
          <span style={{ color: '#CBD5E1' }}>ROW</span>
          <span style={{ color: '#2563EB' }}>IQ</span>
        </span>
      </div>

      {/* Name + team */}
      <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 56, lineHeight: 1.1 }}
        className="text-center text-[#CBD5E1] mb-2 font-normal">
        {name}
      </h1>
      <p className="text-[#94A3B8] text-base mb-5">{team}</p>

      {/* Season badges */}
      <div className="flex gap-3 mb-12">
        {ATHLETE.seasons.map(s => (
          <span key={s} className="px-4 py-1.5 rounded-full text-xs font-medium font-mono"
            style={{
              backgroundColor: `${SEASON_COLORS[s]}18`,
              border: `1px solid ${SEASON_COLORS[s]}40`,
              color: SEASON_COLORS[s],
            }}>
            {s}
          </span>
        ))}
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-3xl">
        {cards.map((c, i) => (
          <div key={i} className="glass-card p-5 text-center">
            <div className="font-mono text-3xl font-bold mb-1" style={{ color: c.color }}>
              {c.value}
            </div>
            <div className="text-[10px] tracking-[0.15em] text-[#64748B] font-medium mb-1">
              {c.label}
            </div>
            <div className="text-[11px] text-[#94A3B8]">{c.sub}</div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown size={24} className="text-[#64748B]" />
      </div>
    </section>
  );
}
