import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

export default function TrendArrow({ trend, delta }: { trend: string; delta?: number }) {
  if (trend === 'improving')
    return (
      <span className="inline-flex items-center gap-0.5 text-good text-xs font-medium">
        <TrendingUp size={14} />
        {delta !== undefined && <span>{Math.abs(delta).toFixed(1)}s</span>}
      </span>
    )
  if (trend === 'declining')
    return (
      <span className="inline-flex items-center gap-0.5 text-bad text-xs font-medium">
        <TrendingDown size={14} />
        {delta !== undefined && <span>{Math.abs(delta).toFixed(1)}s</span>}
      </span>
    )
  return (
    <span className="inline-flex items-center gap-0.5 text-text-muted text-xs">
      <Minus size={14} />
    </span>
  )
}
