import type { Athlete } from '@/data/ergData'
import { athletes } from '@/data/ergData'

export type FilterMode = 'all' | 'top10' | 'most_improved' | 'declining'
export type SortMode = 'rank' | 'name' | 'sessions' | 'improvement'

export const teamAvgSplit = Math.round(
  athletes.reduce((s, a) => s + a.avgSplit, 0) / athletes.length * 10
) / 10

export function filterAthletes(
  list: Athlete[],
  filter: FilterMode,
  search: string
): Athlete[] {
  let result = list

  if (search.trim()) {
    const q = search.toLowerCase()
    result = result.filter(a => a.name.toLowerCase().includes(q))
  }

  switch (filter) {
    case 'top10':
      result = result.filter(a => a.rank <= 10)
      break
    case 'most_improved':
      result = [...result]
        .filter(a => a.trend === 'improving')
        .sort((a, b) => a.trendDelta - b.trendDelta)
      break
    case 'declining':
      result = result.filter(a => a.trend === 'declining')
      break
  }

  return result
}

export function sortAthletes(list: Athlete[], sort: SortMode): Athlete[] {
  const sorted = [...list]
  switch (sort) {
    case 'rank':
      sorted.sort((a, b) => a.rank - b.rank)
      break
    case 'name':
      sorted.sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'sessions':
      sorted.sort((a, b) => b.sessionCount - a.sessionCount)
      break
    case 'improvement':
      sorted.sort((a, b) => a.trendDelta - b.trendDelta)
      break
  }
  return sorted
}

export function getSessionsInCommon(a: Athlete, b: Athlete) {
  const bDates = new Map(b.sessions.map(s => [s.date, s]))
  return a.sessions
    .filter(s => bDates.has(s.date))
    .map(s => ({
      date: s.date,
      workoutName: s.workoutName,
      workoutCategory: s.workoutCategory,
      splitA: s.split,
      spmA: s.spm,
      splitB: bDates.get(s.date)!.split,
      spmB: bDates.get(s.date)!.spm,
    }))
}
