import { ATHLETE } from '../data/starData';

export default function Footer() {
  return (
    <footer className="py-10 text-center text-[#64748B]">
      <p className="text-[11px] mb-1">
        RowIQ · {ATHLETE.team} · {ATHLETE.name} · {ATHLETE.totalSessions} Sessions · 2024–2026
      </p>
      <p className="text-[10px]">Built by Elsheph Systems</p>
    </footer>
  );
}
