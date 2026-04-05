import { getCategoryColor, getCategoryLabel } from '@/utils/formatters'

export default function CategoryBadge({ category }: { category: string }) {
  const color = getCategoryColor(category)
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider shrink-0"
      style={{ backgroundColor: `${color}20`, color, border: `1px solid ${color}40` }}
    >
      {getCategoryLabel(category)}
    </span>
  )
}
