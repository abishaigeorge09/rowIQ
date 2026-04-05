import { create } from 'zustand'
import { sessions } from '@/data/ergData'

export type Tab = 'timeline' | 'team'

interface AppState {
  activeTab: Tab
  selectedSessionId: string
  compareMode: boolean
  compareSessionIds: string[]
  sidebarAthleteId: string | null
  deltaMode: boolean

  setActiveTab: (tab: Tab) => void
  selectSession: (id: string) => void
  toggleCompareMode: () => void
  toggleCompareSession: (id: string) => void
  openAthleteSidebar: (name: string) => void
  closeAthleteSidebar: () => void
  toggleDeltaMode: () => void
}

export const useAppStore = create<AppState>((set, get) => ({
  activeTab: 'timeline',
  selectedSessionId: sessions[0]?.id ?? '',
  compareMode: false,
  compareSessionIds: [],
  sidebarAthleteId: null,
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
  toggleDeltaMode: () => set(s => ({ deltaMode: !s.deltaMode })),
}))
