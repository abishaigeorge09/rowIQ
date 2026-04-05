import { create } from 'zustand'
import { sessions } from '@/data/ergData'

export type Tab = 'timeline' | 'team' | 'athletes'
export type RankFilter = 'all' | 'last5' | 'steady_state' | 'intervals' | 'threshold'

interface AppState {
  activeTab: Tab
  selectedSessionId: string
  compareMode: boolean
  compareSessionIds: string[]
  sidebarAthleteId: string | null
  selectedAthleteProfileId: string | null
  selectAthleteProfile: (id: string | null) => void
  rankFilter: RankFilter
  deltaMode: boolean

  setActiveTab: (tab: Tab) => void
  selectSession: (id: string) => void
  toggleCompareMode: () => void
  toggleCompareSession: (id: string) => void
  openAthleteSidebar: (name: string) => void
  closeAthleteSidebar: () => void
  setRankFilter: (f: RankFilter) => void
  toggleDeltaMode: () => void
}

export const useAppStore = create<AppState>((set, get) => ({
  activeTab: 'athletes',
  selectedSessionId: sessions[0]?.id ?? '',
  compareMode: false,
  compareSessionIds: [],
  sidebarAthleteId: null,
  selectedAthleteProfileId: null,
  rankFilter: 'all',
  deltaMode: false,

  setActiveTab: (tab) => set({ activeTab: tab }),

  selectSession: (id) => {
    const { compareMode } = get()
    if (compareMode) {
      get().toggleCompareSession(id)
    } else {
      set({ selectedSessionId: id })
    }
  },

  toggleCompareMode: () => {
    const { compareMode, selectedSessionId } = get()
    if (compareMode) {
      set({ compareMode: false, compareSessionIds: [], deltaMode: false })
    } else {
      set({ compareMode: true, compareSessionIds: [selectedSessionId] })
    }
  },

  toggleCompareSession: (id) => {
    const { compareSessionIds } = get()
    if (compareSessionIds.includes(id)) {
      const next = compareSessionIds.filter(s => s !== id)
      set({ compareSessionIds: next, compareMode: next.length > 0 })
    } else if (compareSessionIds.length < 4) {
      set({ compareSessionIds: [...compareSessionIds, id] })
    }
  },

  openAthleteSidebar: (name) => set({ sidebarAthleteId: name }),
  closeAthleteSidebar: () => set({ sidebarAthleteId: null }),
  setRankFilter: (f) => set({ rankFilter: f }),
  selectAthleteProfile: (id) => set({ selectedAthleteProfileId: id }),
  toggleDeltaMode: () => set(s => ({ deltaMode: !s.deltaMode })),
}))
