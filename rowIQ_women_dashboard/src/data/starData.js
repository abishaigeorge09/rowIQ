export const ATHLETE = {
  name: 'Star Miller',
  team: "Cal Women's Rowing",
  seasons: ['2024-2025', '2025-2026'],
  totalSessions: 33,
  dateRange: { start: '2024-07-10', end: '2026-03-16' },

  stats: {
    avgSplit: 111.3,
    bestSplit: 99.4,
    bestSplitDate: '2026-02-03',
    bestSplitWorkout: '2k prep',
    best2k: 101.2,
    best2kDate: '2026-03-16',
    best6k: 108.2,
    best6kDate: '2025-03-11',
    avgRank: 5.5,
    bestRank: 3,
    totalMeters: 215732,
  },

  workoutBreakdown: {
    '2k': { sessions: 2, avgSplit: 101.4, bestSplit: 101.2, avgRank: 4.0 },
    '2k prep': { sessions: 1, avgSplit: 99.4, bestSplit: 99.4, avgRank: 4.0 },
    '4x1k': { sessions: 1, avgSplit: 102.7, bestSplit: 102.7, avgRank: 3.0 },
    '6k': { sessions: 7, avgSplit: 110.8, bestSplit: 108.2, avgRank: 5.4 },
    '2x6k': { sessions: 10, avgSplit: 114.4, bestSplit: 111.3, avgRank: 5.5 },
    '9x2k': { sessions: 2, avgSplit: 112.4, bestSplit: 112.4, avgRank: 5.5 },
    '3x12min': { sessions: 3, avgSplit: 109.6, bestSplit: 109.2, avgRank: 4.0 },
    '5x5min': { sessions: 2, avgSplit: 109.5, bestSplit: 108.3, avgRank: 5.5 },
    '4x8min': { sessions: 1, avgSplit: 110.2, bestSplit: 110.2, avgRank: 5.0 },
    '4x10min': { sessions: 1, avgSplit: 114.1, bestSplit: 114.1, avgRank: 9.0 },
    '30min': { sessions: 3, avgSplit: 116.8, bestSplit: 116.3, avgRank: 8.3 },
  },

  seasonBreakdown: {
    '2024-2025': { sessions: 18, avgSplit: 111.5, bestSplit: 101.6, avgRank: 5.8, bestRank: 3 },
    '2025-2026': { sessions: 15, avgSplit: 111.0, bestSplit: 99.4, avgRank: 5.1, bestRank: 3 },
  },

  sessions: [
    { date: '2024-07-10', workout: '2x6k', season: '2024-2025', category: 'distance', rank: 3, avgSplit: 113.2, avgRate: null, watts: null, totalTime: null, totalMeters: '12000m', pieces: [{ piece: 1, split: 113.6, rate: 27 }, { piece: 2, split: 112.8, rate: 30 }] },
    { date: '2024-09-16', workout: '5x5min', season: '2024-2025', category: 'threshold', rank: 6, avgSplit: 110.7, avgRate: 27, watts: null, totalTime: null, totalMeters: null, pieces: [{ piece: 1, split: 112.6, rate: 25 }, { piece: 2, split: 111.9, rate: 26 }, { piece: 3, split: 110.8, rate: 27 }, { piece: 4, split: 109.8, rate: 28 }, { piece: 5, split: 108.6, rate: 30 }] },
    { date: '2024-09-20', workout: '6k', season: '2024-2025', category: 'distance', rank: 6, avgSplit: 111.9, avgRate: 27, watts: null, totalTime: 1342.9, totalMeters: '6000m', pieces: [{ piece: 1, split: 109.6 }, { piece: 2, split: 110.1 }, { piece: 3, split: 111.5 }, { piece: 4, split: 113.6 }, { piece: 5, split: 114.7 }, { piece: 6, split: 111.9 }] },
    { date: '2024-09-30', workout: '4x10min', season: '2024-2025', category: 'threshold', rank: 9, avgSplit: 114.1, avgRate: 25, watts: null, totalTime: null, totalMeters: null, pieces: [{ piece: 1, split: 113.5, rate: 24 }, { piece: 2, split: 115.4, rate: 24 }, { piece: 3, split: 113.6, rate: 26 }, { piece: 4, split: 114.0, rate: 26 }] },
    { date: '2024-10-02', workout: '2x6k', season: '2024-2025', category: 'distance', rank: 6, avgSplit: 112.7, avgRate: null, watts: null, totalTime: null, totalMeters: '12000m', pieces: [{ piece: 1, split: 113.5, rate: 26 }, { piece: 2, split: 111.9, rate: 29 }] },
    { date: '2024-10-03', workout: '6k', season: '2024-2025', category: 'distance', rank: 7, avgSplit: 110.9, avgRate: 30, watts: null, totalTime: 1331.6, totalMeters: '6000m', pieces: [{ piece: 1, split: 107.7 }, { piece: 2, split: 109.6 }, { piece: 3, split: 109.5 }, { piece: 4, split: 111.0 }, { piece: 5, split: 113.5 }, { piece: 6, split: 114.3 }] },
    { date: '2024-10-14', workout: '4x8min', season: '2024-2025', category: 'threshold', rank: 5, avgSplit: 110.2, avgRate: 27, watts: null, totalTime: null, totalMeters: null, pieces: [{ piece: 1, split: 111.4, rate: 25 }, { piece: 2, split: 110.9, rate: 26 }, { piece: 3, split: 110.4, rate: 27 }, { piece: 4, split: 108.2, rate: 30 }] },
    { date: '2024-10-21', workout: '2x6k', season: '2024-2025', category: 'distance', rank: 3, avgSplit: 113.2, avgRate: null, watts: null, totalTime: null, totalMeters: '12000m', pieces: [{ piece: 1, split: 112.7, rate: 27 }, { piece: 2, split: 113.7, rate: 28 }] },
    { date: '2024-10-28', workout: '3x12min', season: '2024-2025', category: 'threshold', rank: 3, avgSplit: 109.2, avgRate: 30, watts: null, totalTime: null, totalMeters: null, pieces: [{ piece: 1, split: 109.0, rate: 31 }, { piece: 2, split: 108.8, rate: 32 }, { piece: 3, split: 109.7, rate: 29 }] },
    { date: '2024-11-11', workout: '6k', season: '2024-2025', category: 'distance', rank: 7, avgSplit: 111.0, avgRate: 30, watts: null, totalTime: 1332.4, totalMeters: '6000m', pieces: [{ piece: 1, split: 108.1 }, { piece: 2, split: 109.5 }, { piece: 3, split: 108.9 }, { piece: 4, split: 108.9 }, { piece: 5, split: 108.9 }, { piece: 6, split: 121.8 }] },
    { date: '2024-11-21', workout: '9x2k', season: '2024-2025', category: 'distance', rank: 7, avgSplit: 112.4, avgRate: null, watts: null, totalTime: null, totalMeters: '18000m', pieces: [{ piece: 1, split: 112.8 }, { piece: 2, split: 112.5 }, { piece: 3, split: 112.3 }, { piece: 4, split: 111.5 }, { piece: 5, split: 112.7 }, { piece: 6, split: 115.1 }, { piece: 8, split: 112.2 }, { piece: 9, split: 109.9 }] },
    { date: '2025-01-21', workout: '30min', season: '2024-2025', category: 'steady_state', rank: 9, avgSplit: 117.3, avgRate: 20, watts: null, totalTime: null, totalMeters: null, pieces: null },
    { date: '2025-01-27', workout: '5x5min', season: '2024-2025', category: 'threshold', rank: 5, avgSplit: 108.3, avgRate: 27, watts: null, totalTime: null, totalMeters: null, pieces: [{ piece: 1, split: 108.9, rate: 27 }, { piece: 2, split: 108.9, rate: 27 }, { piece: 3, split: 108.7, rate: 28 }, { piece: 4, split: 108.3, rate: 28 }, { piece: 5, split: 106.7, rate: 29 }] },
    { date: '2025-01-31', workout: '6k', season: '2024-2025', category: 'distance', rank: 4, avgSplit: 109.7, avgRate: 29, watts: null, totalTime: 1317.5, totalMeters: '6000m', pieces: [{ piece: 1, split: 108.6 }, { piece: 2, split: 109.7 }, { piece: 3, split: 110.4 }, { piece: 4, split: 110.4 }, { piece: 5, split: 109.0 }, { piece: 6, split: 110.6 }] },
    { date: '2025-02-12', workout: '30min', season: '2024-2025', category: 'steady_state', rank: 8, avgSplit: 116.9, avgRate: 20, watts: null, totalTime: null, totalMeters: null, pieces: null },
    { date: '2025-02-24', workout: '2x6k', season: '2024-2025', category: 'distance', rank: 6, avgSplit: 113.3, avgRate: null, watts: null, totalTime: null, totalMeters: '12000m', pieces: [{ piece: 1, split: 112.7, rate: 27 }, { piece: 2, split: 113.9, rate: 28 }] },
    { date: '2025-03-03', workout: '3x12min', season: '2024-2025', category: 'threshold', rank: 6, avgSplit: 110.0, avgRate: 30, watts: null, totalTime: null, totalMeters: null, pieces: [{ piece: 1, split: 109.2, rate: 29 }, { piece: 2, split: 111.0, rate: 30 }, { piece: 3, split: 109.8, rate: 31 }] },
    { date: '2025-03-11', workout: '6k', season: '2025-2026', category: 'distance', rank: 3, avgSplit: 108.2, avgRate: 29, watts: null, totalTime: 1298.7, totalMeters: '6000m', pieces: null },
    { date: '2025-03-17', workout: '2k', season: '2024-2025', category: 'race_pace', rank: 4, avgSplit: 101.6, avgRate: 35, watts: null, totalTime: 406.6, totalMeters: '2000m', pieces: [{ piece: 1, split: 101.2 }, { piece: 2, split: 102.5 }, { piece: 3, split: 102.1 }, { piece: 4, split: 100.8 }] },
    { date: '2025-08-09', workout: '2x6k', season: '2025-2026', category: 'distance', rank: 11, avgSplit: 118.2, avgRate: null, watts: null, totalTime: null, totalMeters: '12000m', pieces: [{ piece: 1, split: 118.5, rate: 23 }, { piece: 2, split: 117.8, rate: 26 }] },
    { date: '2025-09-02', workout: '2x6k', season: '2025-2026', category: 'distance', rank: 3, avgSplit: 111.3, avgRate: null, watts: null, totalTime: null, totalMeters: '12000m', pieces: [{ piece: 1, split: 111.6, rate: 29 }, { piece: 2, split: 111.0, rate: 30 }] },
    { date: '2025-09-15', workout: '2x6k', season: '2025-2026', category: 'distance', rank: 6, avgSplit: 117.7, avgRate: null, watts: null, totalTime: null, totalMeters: '12000m', pieces: [{ piece: 1, split: 118.7, rate: 23 }, { piece: 2, split: 116.7, rate: 26 }] },
    { date: '2025-09-19', workout: '6k', season: '2025-2026', category: 'distance', rank: 5, avgSplit: 112.8, avgRate: 28, watts: null, totalTime: 1353.6, totalMeters: '6000m', pieces: null },
    { date: '2025-10-13', workout: '2x6k', season: '2025-2026', category: 'distance', rank: 6, avgSplit: 113.7, avgRate: null, watts: null, totalTime: null, totalMeters: '12000m', pieces: [{ piece: 1, split: 112.9, rate: 28 }, { piece: 2, split: 114.5, rate: 29 }] },
    { date: '2025-10-20', workout: '30min', season: '2025-2026', category: 'steady_state', rank: 8, avgSplit: 116.3, avgRate: 20, watts: null, totalTime: null, totalMeters: '7732m', pieces: null },
    { date: '2025-10-27', workout: '3x12min', season: '2025-2026', category: 'threshold', rank: 3, avgSplit: 109.6, avgRate: null, watts: null, totalTime: null, totalMeters: null, pieces: [{ piece: 1, split: 109.8, rate: 27 }, { piece: 2, split: 109.6, rate: 29 }, { piece: 3, split: 109.4, rate: 30 }] },
    { date: '2025-11-03', workout: '2x6k', season: '2025-2026', category: 'distance', rank: 6, avgSplit: 116.9, avgRate: null, watts: null, totalTime: null, totalMeters: '12000m', pieces: [{ piece: 1, split: 117.5, rate: 23 }, { piece: 2, split: 116.4, rate: 25 }] },
    { date: '2026-01-26', workout: '2x6k', season: '2025-2026', category: 'distance', rank: 5, avgSplit: 113.5, avgRate: null, watts: null, totalTime: null, totalMeters: '12000m', pieces: [{ piece: 1, split: 114.1, rate: 24 }, { piece: 2, split: 112.9, rate: 27 }] },
    { date: '2026-01-30', workout: '6k', season: '2025-2026', category: 'distance', rank: 6, avgSplit: 111.3, avgRate: 28, watts: null, totalTime: 1336.1, totalMeters: '6000m', pieces: null },
    { date: '2026-02-03', workout: '2k prep', season: '2025-2026', category: 'race_pace', rank: 4, avgSplit: 99.4, avgRate: null, watts: 356, totalTime: null, totalMeters: '2000m', pieces: [{ piece: 1, split: 97.9, rate: 36 }, { piece: 2, split: 101.0, rate: 35 }, { piece: 3, split: 97.9, rate: 39 }] },
    { date: '2026-02-17', workout: '9x2k', season: '2025-2026', category: 'distance', rank: 4, avgSplit: 112.4, avgRate: null, watts: null, totalTime: null, totalMeters: '18000m', pieces: [{ piece: 1, split: 114.1 }, { piece: 2, split: 113.7 }, { piece: 3, split: 113.2 }, { piece: 4, split: 112.5 }, { piece: 5, split: 113.5 }, { piece: 6, split: 112.8 }, { piece: 7, split: 111.1 }, { piece: 8, split: 111.5 }, { piece: 9, split: 108.8 }] },
    { date: '2026-02-23', workout: '4x1k', season: '2025-2026', category: 'race_pace', rank: 3, avgSplit: 102.7, avgRate: null, watts: 323, totalTime: null, totalMeters: '4000m', pieces: [{ piece: 1, split: 102.0, rate: 34 }, { piece: 2, split: 101.6, rate: 37 }, { piece: 3, split: 102.0, rate: 38 }, { piece: 4, split: 105.2, rate: 34 }] },
    { date: '2026-03-16', workout: '2k', season: '2025-2026', category: 'race_pace', rank: 4, avgSplit: 101.2, avgRate: 35, watts: 337, totalTime: 404.9, totalMeters: '2000m', pieces: [{ piece: 1, split: 101.4 }, { piece: 2, split: 102.5 }, { piece: 3, split: 102.3 }, { piece: 4, split: 98.7 }] },
  ],
};

// Category metadata
export const CATEGORIES = {
  race_pace: { label: 'Race Pace', color: '#EF4444', workouts: ['2k', '2k prep', '4x1k'] },
  threshold: { label: 'Threshold', color: '#F59E0B', workouts: ['5x5min', '4x8min', '4x10min', '3x12min'] },
  distance: { label: 'Distance', color: '#2563EB', workouts: ['2x6k', '6k', '9x2k'] },
  steady_state: { label: 'Steady State', color: '#10B981', workouts: ['30min'] },
};

export const SEASON_COLORS = {
  '2024-2025': '#8B5CF6',
  '2025-2026': '#2563EB',
};
