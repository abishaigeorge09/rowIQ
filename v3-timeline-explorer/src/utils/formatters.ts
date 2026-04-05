const MONTH_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

export function formatSplit(split: number): string {
  return split.toFixed(1)
}

export function formatDate(iso: string): string {
  const d = new Date(iso + 'T00:00:00')
  return `${MONTH_SHORT[d.getMonth()]} ${d.getDate()}`
}

export function formatDateFull(iso: string): string {
  const d = new Date(iso + 'T00:00:00')
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
}

export function formatDateShort(iso: string): string {
  const d = new Date(iso + 'T00:00:00')
  return `${d.getMonth() + 1}/${d.getDate()}`
}

export function getCategoryColor(cat: string): string {
  switch (cat) {
    case 'steady_state': return '#2563EB'
    case 'intervals': return '#8B5CF6'
    case 'threshold': return '#F59E0B'
    case 'triathlon': return '#10B981'
    default: return '#64748B'
  }
}

export function getCategoryLabel(cat: string): string {
  switch (cat) {
    case 'steady_state': return 'Steady State'
    case 'intervals': return 'Intervals'
    case 'threshold': return 'Threshold'
    case 'triathlon': return 'Triathlon'
    default: return cat
  }
}
