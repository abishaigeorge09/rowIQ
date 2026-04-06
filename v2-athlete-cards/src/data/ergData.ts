// AUTO-GENERATED sample erg data
// 58 athletes, 28 sessions, Jan–Apr 2025

export interface AthleteSplit {
  name: string;
  split: number;
  spm: number;
  rank: number;
  dnf: boolean;
  timeFormatted?: string;
}

export type WorkoutCategory = 'steady_state' | 'intervals' | 'threshold' | 'triathlon';

export interface Session {
  id: string;
  date: string;
  workoutName: string;
  workoutCategory: WorkoutCategory;
  groupA: AthleteSplit[];
  groupB: AthleteSplit[];
  teamAvgSplit: number;
  bestSplit: number;
  worstSplit: number;
  bestAthlete: string;
  groupAAvg: number;
  groupBAvg: number;
  participantCount: number;
}

export interface AthleteSession {
  sessionId: string;
  date: string;
  workoutName: string;
  workoutCategory: string;
  side: 'groupA' | 'groupB';
  split: number;
  spm: number;
  rank: number;
  of: number;
}

export interface SparklinePoint { date: string; split: number; }

export interface CategoryStats { sessions: number; avgSplit: number | null; }

export interface Athlete {
  id: string;
  name: string;
  group: 'A' | 'B';
  rank: number;
  avgSplit: number;
  bestSplit: number;
  bestSplitDate: string;
  sessionCount: number;
  trend: 'improving' | 'declining' | 'stable';
  trendDelta: number;
  consistency: number;
  categoryBreakdown: Record<string, CategoryStats>;
  sparklineData: SparklinePoint[];
  sessions: AthleteSession[];
}

export const sessions: Session[] = [
  {
    "id": "2025-01-13",
    "date": "2025-01-13",
    "workoutName": "Endurance Set A",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Chen",
        "split": 45.5,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 46.8,
        "spm": 18,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Tran",
        "split": 47.5,
        "spm": 18,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 46.8,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 46.9,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Novak",
        "split": 46.3,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 49.0,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Hayes",
        "split": 48.4,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Webb",
        "split": 47.0,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 48.0,
        "spm": 18,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Magnusson",
        "split": 47.0,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "De Vries",
        "split": 49.3,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Klein",
        "split": 49.5,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 48.4,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 48.4,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Payne",
        "split": 48.7,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 48.9,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Jensen",
        "split": 50.0,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Kowalski",
        "split": 48.8,
        "spm": 18,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 48.0,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 49.4,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Kwon",
        "split": 48.7,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 51.8,
        "spm": 19,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 52.7,
        "spm": 20,
        "rank": 24,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Johansson",
        "split": 46.3,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 47.4,
        "spm": 18,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Cruz",
        "split": 49.1,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Park",
        "split": 49.0,
        "spm": 18,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Hawkins",
        "split": 47.9,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 49.7,
        "spm": 18,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 47.0,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Mitchell",
        "split": 48.1,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Santos",
        "split": 47.8,
        "spm": 18,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 47.5,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Duval",
        "split": 49.8,
        "spm": 18,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Lehmann",
        "split": 49.8,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 47.9,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Keane",
        "split": 50.2,
        "spm": 19,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Torres",
        "split": 50.5,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 48.3,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 50.6,
        "spm": 18,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Andersen",
        "split": 49.7,
        "spm": 18,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Dalton",
        "split": 49.2,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 51.1,
        "spm": 19,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Delacroix",
        "split": 49.4,
        "spm": 18,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Nolan",
        "split": 50.2,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Sato",
        "split": 50.3,
        "spm": 20,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 52.8,
        "spm": 18,
        "rank": 24,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 51.4,
        "spm": 18,
        "rank": 25,
        "dnf": false
      },
      {
        "name": "Ruiz",
        "split": 54.0,
        "spm": 20,
        "rank": 26,
        "dnf": false
      },
      {
        "name": "O'Brien",
        "split": 54.5,
        "spm": 20,
        "rank": 27,
        "dnf": false
      }
    ],
    "teamAvgSplit": 49.7,
    "bestSplit": 45.5,
    "worstSplit": 54.4,
    "bestAthlete": "Chen",
    "groupAAvg": 49.3,
    "groupBAvg": 50.1,
    "participantCount": 51
  },
  {
    "id": "2025-01-16",
    "date": "2025-01-16",
    "workoutName": "Endurance Set B",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Chen",
        "split": 44.3,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Novak",
        "split": 44.5,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Klein",
        "split": 47.6,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 46.5,
        "spm": 18,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 46.0,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Tran",
        "split": 46.8,
        "spm": 18,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 46.7,
        "spm": 18,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Webb",
        "split": 46.0,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Santos",
        "split": 46.7,
        "spm": 18,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 47.4,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 46.9,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "De Vries",
        "split": 48.6,
        "spm": 21,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 47.7,
        "spm": 18,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Payne",
        "split": 47.8,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Magnusson",
        "split": 46.8,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Jensen",
        "split": 49.3,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 48.3,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 49.6,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 47.0,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 50.1,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Kowalski",
        "split": 48.8,
        "spm": 18,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 49.3,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 51.9,
        "spm": 20,
        "rank": 23,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Johansson",
        "split": 43.6,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 45.1,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 45.2,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 46.5,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Mitchell",
        "split": 46.5,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Hawkins",
        "split": 46.7,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Duval",
        "split": 48.6,
        "spm": 18,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 46.5,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Lehmann",
        "split": 48.8,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Park",
        "split": 48.8,
        "spm": 17,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Keane",
        "split": 49.2,
        "spm": 19,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Delacroix",
        "split": 47.3,
        "spm": 18,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 47.4,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 49.7,
        "spm": 18,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 50.2,
        "spm": 18,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Dalton",
        "split": 48.2,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Fischer",
        "split": 49.9,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Sato",
        "split": 48.5,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Nakamura",
        "split": 50.0,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Andersen",
        "split": 49.4,
        "spm": 18,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 50.7,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 51.8,
        "spm": 18,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 50.7,
        "spm": 18,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Ruiz",
        "split": 52.5,
        "spm": 20,
        "rank": 24,
        "dnf": false
      },
      {
        "name": "O'Brien",
        "split": 52.8,
        "spm": 21,
        "rank": 25,
        "dnf": false
      }
    ],
    "teamAvgSplit": 48.8,
    "bestSplit": 43.7,
    "worstSplit": 52.7,
    "bestAthlete": "Johansson",
    "groupAAvg": 48.5,
    "groupBAvg": 49.1,
    "participantCount": 48
  },
  {
    "id": "2025-01-20",
    "date": "2025-01-20",
    "workoutName": "Interval Set A",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Chen",
        "split": 45.0,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 44.1,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 44.4,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Tran",
        "split": 45.4,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Novak",
        "split": 45.1,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Webb",
        "split": 45.6,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 46.8,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Kowalski",
        "split": 47.4,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Magnusson",
        "split": 46.6,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 47.2,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Payne",
        "split": 47.9,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Klein",
        "split": 49.2,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 48.1,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Jensen",
        "split": 49.3,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Brandt",
        "split": 48.7,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 47.0,
        "spm": 21,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Petrov",
        "split": 48.9,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Santos",
        "split": 47.9,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Kwon",
        "split": 47.8,
        "spm": 21,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 50.4,
        "spm": 21,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 50.5,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 50.2,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 49.8,
        "spm": 20,
        "rank": 23,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Johansson",
        "split": 44.6,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Park",
        "split": 45.3,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Duval",
        "split": 46.0,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 47.4,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 45.7,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Keane",
        "split": 48.0,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Lehmann",
        "split": 47.8,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 46.2,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 46.1,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 46.9,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Hawkins",
        "split": 47.9,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Mitchell",
        "split": 47.8,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 46.9,
        "spm": 21,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 49.7,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Fischer",
        "split": 49.7,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 50.2,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Dalton",
        "split": 48.1,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 47.8,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 48.8,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Nakamura",
        "split": 49.8,
        "spm": 21,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Callahan",
        "split": 48.4,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Varga",
        "split": 50.4,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Delacroix",
        "split": 48.5,
        "spm": 20,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 49.4,
        "spm": 20,
        "rank": 24,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 50.9,
        "spm": 21,
        "rank": 25,
        "dnf": false
      },
      {
        "name": "Ruiz",
        "split": 51.7,
        "spm": 21,
        "rank": 26,
        "dnf": false
      },
      {
        "name": "Andersen",
        "split": 998.9,
        "spm": 0,
        "rank": 27,
        "dnf": true
      }
    ],
    "teamAvgSplit": 48.5,
    "bestSplit": 43.8,
    "worstSplit": 51.6,
    "bestAthlete": "Johansson",
    "groupAAvg": 48.4,
    "groupBAvg": 48.6,
    "participantCount": 49
  },
  {
    "id": "2025-01-25",
    "date": "2025-01-25",
    "workoutName": "Endurance Set B",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Chen",
        "split": 42.4,
        "spm": 22,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 43.7,
        "spm": 21,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Park",
        "split": 45.1,
        "spm": 22,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Klein",
        "split": 45.5,
        "spm": 22,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 44.1,
        "spm": 21,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Novak",
        "split": 43.2,
        "spm": 22,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 44.0,
        "spm": 22,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Webb",
        "split": 43.7,
        "spm": 22,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Brandt",
        "split": 45.3,
        "spm": 22,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Magnusson",
        "split": 43.8,
        "spm": 22,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Tran",
        "split": 45.1,
        "spm": 22,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 45.3,
        "spm": 22,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Hayes",
        "split": 46.1,
        "spm": 22,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Payne",
        "split": 45.5,
        "spm": 22,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "De Vries",
        "split": 47.1,
        "spm": 22,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Santos",
        "split": 45.6,
        "spm": 22,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 46.4,
        "spm": 21,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Kowalski",
        "split": 46.2,
        "spm": 22,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 45.3,
        "spm": 22,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 48.0,
        "spm": 22,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Kwon",
        "split": 45.9,
        "spm": 22,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Jensen",
        "split": 48.2,
        "spm": 22,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Petrov",
        "split": 47.9,
        "spm": 21,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 47.3,
        "spm": 22,
        "rank": 24,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 49.9,
        "spm": 22,
        "rank": 25,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 1000.0,
        "spm": 0,
        "rank": 26,
        "dnf": true
      }
    ],
    "groupB": [
      {
        "name": "Johansson",
        "split": 42.2,
        "spm": 22,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Hawkins",
        "split": 43.4,
        "spm": 22,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Lehmann",
        "split": 45.5,
        "spm": 22,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 44.6,
        "spm": 21,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 43.9,
        "spm": 22,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 46.6,
        "spm": 21,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Cruz",
        "split": 46.9,
        "spm": 21,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 46.9,
        "spm": 22,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 44.9,
        "spm": 22,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Keane",
        "split": 47.0,
        "spm": 21,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Duval",
        "split": 46.8,
        "spm": 21,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Fischer",
        "split": 47.1,
        "spm": 21,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Dalton",
        "split": 45.5,
        "spm": 22,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 44.8,
        "spm": 22,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 45.3,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 45.7,
        "spm": 22,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Sato",
        "split": 46.7,
        "spm": 22,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 48.8,
        "spm": 21,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 47.3,
        "spm": 21,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Callahan",
        "split": 47.1,
        "spm": 22,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Mitchell",
        "split": 47.7,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 49.3,
        "spm": 22,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 49.0,
        "spm": 21,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Nolan",
        "split": 50.9,
        "spm": 22,
        "rank": 24,
        "dnf": false
      },
      {
        "name": "Torres",
        "split": 52.7,
        "spm": 21,
        "rank": 25,
        "dnf": false
      },
      {
        "name": "Andersen",
        "split": 998.9,
        "spm": 0,
        "rank": 26,
        "dnf": true
      },
      {
        "name": "Nakamura",
        "split": 999.8,
        "spm": 0,
        "rank": 27,
        "dnf": true
      }
    ],
    "teamAvgSplit": 46.8,
    "bestSplit": 42.3,
    "worstSplit": 52.1,
    "bestAthlete": "Johansson",
    "groupAAvg": 46.5,
    "groupBAvg": 47.2,
    "participantCount": 50
  },
  {
    "id": "2025-01-30",
    "date": "2025-01-30",
    "workoutName": "Endurance Set C",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Chen",
        "split": 39.5,
        "spm": 22,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 41.8,
        "spm": 22,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 41.6,
        "spm": 22,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Brandt",
        "split": 42.6,
        "spm": 22,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 42.0,
        "spm": 22,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Novak",
        "split": 41.6,
        "spm": 22,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "De Vries",
        "split": 44.0,
        "spm": 22,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Webb",
        "split": 42.1,
        "spm": 22,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Tran",
        "split": 43.3,
        "spm": 22,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Klein",
        "split": 44.7,
        "spm": 22,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Hayes",
        "split": 44.4,
        "spm": 22,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Payne",
        "split": 43.8,
        "spm": 22,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Magnusson",
        "split": 42.7,
        "spm": 22,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 43.9,
        "spm": 22,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 44.3,
        "spm": 22,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Kwon",
        "split": 43.6,
        "spm": 22,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 44.4,
        "spm": 22,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Santos",
        "split": 44.0,
        "spm": 22,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Petrov",
        "split": 45.1,
        "spm": 22,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 44.1,
        "spm": 22,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 43.4,
        "spm": 22,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Kowalski",
        "split": 44.8,
        "spm": 22,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 47.3,
        "spm": 22,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 47.4,
        "spm": 22,
        "rank": 24,
        "dnf": false
      },
      {
        "name": "Bakker",
        "split": 48.3,
        "spm": 22,
        "rank": 25,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 48.3,
        "spm": 22,
        "rank": 26,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Johansson",
        "split": 40.1,
        "spm": 22,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Park",
        "split": 42.4,
        "spm": 22,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Hawkins",
        "split": 42.0,
        "spm": 22,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Cruz",
        "split": 44.2,
        "spm": 22,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 42.0,
        "spm": 22,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Duval",
        "split": 44.2,
        "spm": 21,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 42.2,
        "spm": 22,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 45.1,
        "spm": 22,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 43.5,
        "spm": 22,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 42.8,
        "spm": 22,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Mitchell",
        "split": 43.7,
        "spm": 22,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Keane",
        "split": 45.7,
        "spm": 21,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 45.8,
        "spm": 21,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Delacroix",
        "split": 43.9,
        "spm": 21,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Fischer",
        "split": 45.8,
        "spm": 22,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Dalton",
        "split": 44.4,
        "spm": 22,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Sato",
        "split": 44.8,
        "spm": 22,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Jensen",
        "split": 46.3,
        "spm": 22,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 44.5,
        "spm": 22,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Callahan",
        "split": 44.9,
        "spm": 22,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 47.7,
        "spm": 21,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 46.3,
        "spm": 22,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 48.2,
        "spm": 22,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 47.1,
        "spm": 22,
        "rank": 24,
        "dnf": false
      },
      {
        "name": "Ruiz",
        "split": 49.1,
        "spm": 22,
        "rank": 25,
        "dnf": false
      },
      {
        "name": "Torres",
        "split": 50.2,
        "spm": 22,
        "rank": 26,
        "dnf": false
      }
    ],
    "teamAvgSplit": 45.1,
    "bestSplit": 40.0,
    "worstSplit": 49.6,
    "bestAthlete": "Chen",
    "groupAAvg": 44.8,
    "groupBAvg": 45.4,
    "participantCount": 52
  },
  {
    "id": "2025-02-06",
    "date": "2025-02-06",
    "workoutName": "Threshold Test A",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Chen",
        "split": 44.7,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 46.1,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 46.1,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 46.2,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Webb",
        "split": 46.5,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Novak",
        "split": 46.4,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Klein",
        "split": 48.8,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 47.8,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "De Vries",
        "split": 49.0,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Brandt",
        "split": 48.4,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Kwon",
        "split": 47.8,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Payne",
        "split": 48.8,
        "spm": 19,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Tran",
        "split": 49.1,
        "spm": 19,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 47.9,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Kowalski",
        "split": 49.1,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 49.5,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Santos",
        "split": 49.1,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 49.1,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Petrov",
        "split": 51.0,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 50.6,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Bakker",
        "split": 52.1,
        "spm": 21,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 52.8,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 52.5,
        "spm": 20,
        "rank": 23,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Johansson",
        "split": 46.8,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Delacroix",
        "split": 45.3,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Park",
        "split": 47.9,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Hawkins",
        "split": 46.9,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 45.9,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Duval",
        "split": 48.8,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Keane",
        "split": 49.1,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 49.3,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Cruz",
        "split": 49.4,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Dalton",
        "split": 47.8,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 47.5,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 48.4,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Lehmann",
        "split": 49.6,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 50.5,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 50.5,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 47.9,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Fischer",
        "split": 50.7,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 48.9,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 51.6,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Sato",
        "split": 50.0,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 51.3,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Torres",
        "split": 55.7,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Mitchell",
        "split": 998.6,
        "spm": 0,
        "rank": 23,
        "dnf": true
      },
      {
        "name": "Jensen",
        "split": 999.9,
        "spm": 0,
        "rank": 24,
        "dnf": true
      },
      {
        "name": "Callahan",
        "split": 998.3,
        "spm": 0,
        "rank": 25,
        "dnf": true
      }
    ],
    "teamAvgSplit": 49.5,
    "bestSplit": 43.2,
    "worstSplit": 55.1,
    "bestAthlete": "Chen",
    "groupAAvg": 49.6,
    "groupBAvg": 49.5,
    "participantCount": 45
  },
  {
    "id": "2025-02-08",
    "date": "2025-02-08",
    "workoutName": "Endurance Set D",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Chen",
        "split": 44.7,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 43.7,
        "spm": 19,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Webb",
        "split": 45.0,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Klein",
        "split": 47.3,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 46.2,
        "spm": 19,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 46.7,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Tran",
        "split": 47.1,
        "spm": 19,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Payne",
        "split": 47.0,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Novak",
        "split": 45.9,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Brandt",
        "split": 47.5,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Kwon",
        "split": 46.5,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Bakker",
        "split": 48.6,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 47.0,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 48.9,
        "spm": 19,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 47.8,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Petrov",
        "split": 48.6,
        "spm": 19,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 47.6,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 48.6,
        "spm": 19,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 47.4,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Santos",
        "split": 48.3,
        "spm": 19,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Kowalski",
        "split": 49.0,
        "spm": 19,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 52.7,
        "spm": 20,
        "rank": 22,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Johansson",
        "split": 44.8,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Delacroix",
        "split": 44.5,
        "spm": 19,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Cruz",
        "split": 47.2,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 45.7,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Lehmann",
        "split": 47.3,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 45.3,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Duval",
        "split": 47.8,
        "spm": 19,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 45.9,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Mitchell",
        "split": 47.0,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Sato",
        "split": 47.2,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Dalton",
        "split": 47.0,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 46.2,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Fischer",
        "split": 48.8,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Hawkins",
        "split": 47.6,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Keane",
        "split": 49.6,
        "spm": 19,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 48.3,
        "spm": 19,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Park",
        "split": 49.4,
        "spm": 19,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 50.1,
        "spm": 19,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 50.2,
        "spm": 19,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 47.7,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 50.1,
        "spm": 19,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 48.8,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 50.3,
        "spm": 20,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Torres",
        "split": 51.0,
        "spm": 20,
        "rank": 24,
        "dnf": false
      }
    ],
    "teamAvgSplit": 48.3,
    "bestSplit": 45.2,
    "worstSplit": 53.0,
    "bestAthlete": "Chen",
    "groupAAvg": 48.3,
    "groupBAvg": 48.3,
    "participantCount": 46
  },
  {
    "id": "2025-02-10",
    "date": "2025-02-10",
    "workoutName": "Mixed Fitness Test A",
    "workoutCategory": "triathlon",
    "groupA": [
      {
        "name": "Chen",
        "split": 144660.8,
        "spm": 0,
        "rank": 1,
        "dnf": false,
        "timeFormatted": "2411:00"
      },
      {
        "name": "Brandt",
        "split": 147120.2,
        "spm": 0,
        "rank": 2,
        "dnf": false,
        "timeFormatted": "2452:00"
      },
      {
        "name": "Cho",
        "split": 147599.9,
        "spm": 0,
        "rank": 3,
        "dnf": false,
        "timeFormatted": "2460:00"
      },
      {
        "name": "Ibrahimi",
        "split": 148199.7,
        "spm": 0,
        "rank": 4,
        "dnf": false,
        "timeFormatted": "2470:00"
      },
      {
        "name": "Ibrahimi",
        "split": 148199.7,
        "spm": 0,
        "rank": 5,
        "dnf": false,
        "timeFormatted": "2470:00"
      },
      {
        "name": "Foster",
        "split": 149159.7,
        "spm": 0,
        "rank": 6,
        "dnf": false,
        "timeFormatted": "2486:00"
      },
      {
        "name": "Eriksson",
        "split": 149159.5,
        "spm": 0,
        "rank": 7,
        "dnf": false,
        "timeFormatted": "2486:00"
      },
      {
        "name": "Webb",
        "split": 149638.8,
        "spm": 0,
        "rank": 8,
        "dnf": false,
        "timeFormatted": "2494:00"
      },
      {
        "name": "Bennett",
        "split": 151919.9,
        "spm": 0,
        "rank": 9,
        "dnf": false,
        "timeFormatted": "2532:00"
      },
      {
        "name": "Lindqvist",
        "split": 152458.5,
        "spm": 0,
        "rank": 10,
        "dnf": false,
        "timeFormatted": "2541:00"
      },
      {
        "name": "Romanov",
        "split": 155159.2,
        "spm": 0,
        "rank": 11,
        "dnf": false,
        "timeFormatted": "2586:00"
      },
      {
        "name": "DB",
        "split": 155701.1,
        "spm": 0,
        "rank": 12,
        "dnf": false,
        "timeFormatted": "2595:00"
      },
      {
        "name": "Payne",
        "split": 155819.8,
        "spm": 0,
        "rank": 13,
        "dnf": false,
        "timeFormatted": "2597:00"
      },
      {
        "name": "O'Sullivan",
        "split": 156841.0,
        "spm": 0,
        "rank": 14,
        "dnf": false,
        "timeFormatted": "2614:00"
      },
      {
        "name": "Novak",
        "split": 158158.6,
        "spm": 0,
        "rank": 15,
        "dnf": false,
        "timeFormatted": "2636:00"
      },
      {
        "name": "Kowalski",
        "split": 158759.5,
        "spm": 0,
        "rank": 16,
        "dnf": false,
        "timeFormatted": "2646:00"
      },
      {
        "name": "Petrov",
        "split": 161100.3,
        "spm": 0,
        "rank": 17,
        "dnf": false,
        "timeFormatted": "2685:00"
      },
      {
        "name": "Tran",
        "split": 161399.9,
        "spm": 0,
        "rank": 18,
        "dnf": false,
        "timeFormatted": "2690:00"
      },
      {
        "name": "Santos",
        "split": 167159.2,
        "spm": 0,
        "rank": 19,
        "dnf": false,
        "timeFormatted": "2786:00"
      },
      {
        "name": "Reeves",
        "split": 173700.4,
        "spm": 0,
        "rank": 20,
        "dnf": false,
        "timeFormatted": "2895:00"
      }
    ],
    "groupB": [
      {
        "name": "Thornton",
        "split": 147119.0,
        "spm": 0,
        "rank": 1,
        "dnf": false,
        "timeFormatted": "2452:00"
      },
      {
        "name": "Lehmann",
        "split": 147300.9,
        "spm": 0,
        "rank": 2,
        "dnf": false,
        "timeFormatted": "2455:00"
      },
      {
        "name": "Johansson",
        "split": 148260.7,
        "spm": 0,
        "rank": 3,
        "dnf": false,
        "timeFormatted": "2471:00"
      },
      {
        "name": "Keane",
        "split": 151801.2,
        "spm": 0,
        "rank": 4,
        "dnf": false,
        "timeFormatted": "2530:00"
      },
      {
        "name": "Hawkins",
        "split": 152639.7,
        "spm": 0,
        "rank": 5,
        "dnf": false,
        "timeFormatted": "2544:00"
      },
      {
        "name": "Torres",
        "split": 152881.3,
        "spm": 0,
        "rank": 6,
        "dnf": false,
        "timeFormatted": "2548:00"
      },
      {
        "name": "Bergman",
        "split": 152998.7,
        "spm": 0,
        "rank": 7,
        "dnf": false,
        "timeFormatted": "2550:00"
      },
      {
        "name": "Dalton",
        "split": 153419.4,
        "spm": 0,
        "rank": 8,
        "dnf": false,
        "timeFormatted": "2557:00"
      },
      {
        "name": "Sato",
        "split": 153599.6,
        "spm": 0,
        "rank": 9,
        "dnf": false,
        "timeFormatted": "2560:00"
      },
      {
        "name": "Hartmann",
        "split": 153899.7,
        "spm": 0,
        "rank": 10,
        "dnf": false,
        "timeFormatted": "2565:00"
      },
      {
        "name": "Tanaka",
        "split": 155278.6,
        "spm": 0,
        "rank": 11,
        "dnf": false,
        "timeFormatted": "2588:00"
      },
      {
        "name": "Lim",
        "split": 155941.2,
        "spm": 0,
        "rank": 12,
        "dnf": false,
        "timeFormatted": "2599:00"
      },
      {
        "name": "Cruz",
        "split": 156241.3,
        "spm": 0,
        "rank": 13,
        "dnf": false,
        "timeFormatted": "2604:00"
      },
      {
        "name": "Mitchell",
        "split": 156359.6,
        "spm": 0,
        "rank": 14,
        "dnf": false,
        "timeFormatted": "2606:00"
      },
      {
        "name": "Larsson",
        "split": 157199.8,
        "spm": 0,
        "rank": 15,
        "dnf": false,
        "timeFormatted": "2620:00"
      },
      {
        "name": "Petrowski",
        "split": 157799.8,
        "spm": 0,
        "rank": 16,
        "dnf": false,
        "timeFormatted": "2630:00"
      },
      {
        "name": "Fischer",
        "split": 158221.0,
        "spm": 0,
        "rank": 17,
        "dnf": false,
        "timeFormatted": "2637:00"
      },
      {
        "name": "Okafor",
        "split": 158339.0,
        "spm": 0,
        "rank": 18,
        "dnf": false,
        "timeFormatted": "2639:00"
      },
      {
        "name": "Park",
        "split": 158520.8,
        "spm": 0,
        "rank": 19,
        "dnf": false,
        "timeFormatted": "2642:00"
      },
      {
        "name": "Volkov",
        "split": 160801.2,
        "spm": 0,
        "rank": 20,
        "dnf": false,
        "timeFormatted": "2680:00"
      },
      {
        "name": "O'Brien",
        "split": 161880.8,
        "spm": 0,
        "rank": 21,
        "dnf": false,
        "timeFormatted": "2698:00"
      },
      {
        "name": "Van Berg",
        "split": 162301.4,
        "spm": 0,
        "rank": 22,
        "dnf": false,
        "timeFormatted": "2705:00"
      },
      {
        "name": "Duval",
        "split": 170100.9,
        "spm": 0,
        "rank": 23,
        "dnf": false,
        "timeFormatted": "2835:00"
      },
      {
        "name": "Bakker",
        "split": 171841.0,
        "spm": 0,
        "rank": 24,
        "dnf": false,
        "timeFormatted": "2864:00"
      },
      {
        "name": "Delacroix",
        "split": 179699.1,
        "spm": 0,
        "rank": 25,
        "dnf": false,
        "timeFormatted": "2995:00"
      },
      {
        "name": "Malik",
        "split": 181801.5,
        "spm": 0,
        "rank": 26,
        "dnf": false,
        "timeFormatted": "3030:00"
      }
    ],
    "teamAvgSplit": 156699.8,
    "bestSplit": 144661.5,
    "worstSplit": 181800.7,
    "bestAthlete": "Chen",
    "groupAAvg": 154596.7,
    "groupBAvg": 158317.6,
    "participantCount": 46
  },
  {
    "id": "2025-02-13",
    "date": "2025-02-13",
    "workoutName": "Interval Set B",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Chen",
        "split": 40.1,
        "spm": 22,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 40.6,
        "spm": 22,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "De Vries",
        "split": 43.2,
        "spm": 22,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 42.1,
        "spm": 22,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 42.1,
        "spm": 22,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Brandt",
        "split": 43.0,
        "spm": 22,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Novak",
        "split": 41.6,
        "spm": 22,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Webb",
        "split": 42.1,
        "spm": 22,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Kwon",
        "split": 42.9,
        "spm": 22,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Payne",
        "split": 44.4,
        "spm": 22,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 44.5,
        "spm": 22,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 44.3,
        "spm": 22,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Klein",
        "split": 45.8,
        "spm": 22,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 45.1,
        "spm": 22,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Kowalski",
        "split": 44.8,
        "spm": 22,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Petrov",
        "split": 46.4,
        "spm": 22,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 47.2,
        "spm": 22,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 44.8,
        "spm": 22,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Hayes",
        "split": 46.9,
        "spm": 22,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 48.2,
        "spm": 22,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Bakker",
        "split": 48.4,
        "spm": 22,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 49.7,
        "spm": 23,
        "rank": 22,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Johansson",
        "split": 40.5,
        "spm": 22,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Park",
        "split": 41.9,
        "spm": 22,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Cruz",
        "split": 43.6,
        "spm": 22,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 41.6,
        "spm": 22,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Hawkins",
        "split": 42.6,
        "spm": 22,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Duval",
        "split": 44.1,
        "spm": 22,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Lehmann",
        "split": 44.3,
        "spm": 22,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Delacroix",
        "split": 42.7,
        "spm": 22,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Keane",
        "split": 44.9,
        "spm": 22,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 42.4,
        "spm": 22,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 43.7,
        "spm": 22,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 45.5,
        "spm": 22,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Mitchell",
        "split": 44.0,
        "spm": 22,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Sato",
        "split": 44.2,
        "spm": 22,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Dalton",
        "split": 44.1,
        "spm": 22,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 43.9,
        "spm": 22,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Fischer",
        "split": 45.8,
        "spm": 22,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 44.6,
        "spm": 22,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 47.0,
        "spm": 22,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 45.7,
        "spm": 22,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 47.6,
        "spm": 22,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 47.6,
        "spm": 22,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 47.1,
        "spm": 22,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Torres",
        "split": 49.4,
        "spm": 22,
        "rank": 24,
        "dnf": false
      }
    ],
    "teamAvgSplit": 45.1,
    "bestSplit": 40.6,
    "worstSplit": 50.0,
    "bestAthlete": "Chen",
    "groupAAvg": 45.2,
    "groupBAvg": 45.0,
    "participantCount": 46
  },
  {
    "id": "2025-02-20",
    "date": "2025-02-20",
    "workoutName": "Interval Set C",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Chen",
        "split": 38.5,
        "spm": 24,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 39.4,
        "spm": 24,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 39.1,
        "spm": 24,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Brandt",
        "split": 40.6,
        "spm": 24,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "De Vries",
        "split": 41.4,
        "spm": 24,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Novak",
        "split": 39.1,
        "spm": 24,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Webb",
        "split": 39.6,
        "spm": 24,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 40.6,
        "spm": 24,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Payne",
        "split": 42.0,
        "spm": 24,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Kwon",
        "split": 41.3,
        "spm": 24,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Klein",
        "split": 43.6,
        "spm": 24,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 42.5,
        "spm": 24,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Hayes",
        "split": 43.2,
        "spm": 24,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 42.8,
        "spm": 24,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 42.7,
        "spm": 24,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 44.9,
        "spm": 24,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Kowalski",
        "split": 43.5,
        "spm": 24,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Petrov",
        "split": 44.4,
        "spm": 24,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 45.3,
        "spm": 24,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 43.5,
        "spm": 24,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Bakker",
        "split": 46.4,
        "spm": 24,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 47.5,
        "spm": 24,
        "rank": 22,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Park",
        "split": 40.3,
        "spm": 24,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Cruz",
        "split": 41.1,
        "spm": 24,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Hawkins",
        "split": 39.9,
        "spm": 24,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 40.0,
        "spm": 24,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 41.0,
        "spm": 24,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 40.8,
        "spm": 24,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Lehmann",
        "split": 43.3,
        "spm": 24,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 43.9,
        "spm": 24,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Keane",
        "split": 43.7,
        "spm": 24,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 41.2,
        "spm": 24,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Fischer",
        "split": 43.6,
        "spm": 24,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Sato",
        "split": 42.2,
        "spm": 24,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Dalton",
        "split": 42.1,
        "spm": 24,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Duval",
        "split": 43.9,
        "spm": 24,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 42.3,
        "spm": 24,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 45.0,
        "spm": 24,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 45.1,
        "spm": 24,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Jensen",
        "split": 45.2,
        "spm": 24,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 43.6,
        "spm": 24,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 44.4,
        "spm": 24,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 46.1,
        "spm": 24,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 45.2,
        "spm": 24,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Torres",
        "split": 47.3,
        "spm": 24,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Delacroix",
        "split": 998.1,
        "spm": 0,
        "rank": 24,
        "dnf": true
      }
    ],
    "teamAvgSplit": 43.3,
    "bestSplit": 36.8,
    "worstSplit": 47.8,
    "bestAthlete": "Chen",
    "groupAAvg": 43.1,
    "groupBAvg": 43.5,
    "participantCount": 45
  },
  {
    "id": "2025-02-22",
    "date": "2025-02-22",
    "workoutName": "Endurance Set E",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Chen",
        "split": 45.6,
        "spm": 19,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 45.4,
        "spm": 19,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 45.7,
        "spm": 19,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Webb",
        "split": 46.0,
        "spm": 19,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Novak",
        "split": 46.7,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 49.2,
        "spm": 19,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 48.3,
        "spm": 19,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Brandt",
        "split": 48.8,
        "spm": 19,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Klein",
        "split": 49.8,
        "spm": 19,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 48.8,
        "spm": 19,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Petrov",
        "split": 49.2,
        "spm": 19,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Payne",
        "split": 48.8,
        "spm": 19,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Jensen",
        "split": 50.0,
        "spm": 19,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 48.5,
        "spm": 19,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Kwon",
        "split": 48.4,
        "spm": 19,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 48.2,
        "spm": 19,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 49.4,
        "spm": 19,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 50.8,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Bakker",
        "split": 50.7,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Kowalski",
        "split": 49.3,
        "spm": 19,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 50.9,
        "spm": 19,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 999.4,
        "spm": 0,
        "rank": 22,
        "dnf": true
      }
    ],
    "groupB": [
      {
        "name": "Delacroix",
        "split": 45.4,
        "spm": 19,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Park",
        "split": 47.3,
        "spm": 19,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Keane",
        "split": 48.2,
        "spm": 19,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Sato",
        "split": 46.9,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 47.2,
        "spm": 19,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Lehmann",
        "split": 49.6,
        "spm": 19,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Dalton",
        "split": 48.2,
        "spm": 19,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 50.3,
        "spm": 19,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 48.7,
        "spm": 19,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Cruz",
        "split": 50.2,
        "spm": 19,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 47.7,
        "spm": 19,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 50.2,
        "spm": 19,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 48.3,
        "spm": 19,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Duval",
        "split": 50.0,
        "spm": 19,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 48.1,
        "spm": 19,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 47.9,
        "spm": 19,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Fischer",
        "split": 50.3,
        "spm": 19,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 50.8,
        "spm": 19,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Hawkins",
        "split": 49.2,
        "spm": 19,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 49.1,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 51.4,
        "spm": 19,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Torres",
        "split": 53.1,
        "spm": 19,
        "rank": 22,
        "dnf": false
      }
    ],
    "teamAvgSplit": 49.4,
    "bestSplit": 46.1,
    "worstSplit": 52.5,
    "bestAthlete": "Chen",
    "groupAAvg": 49.3,
    "groupBAvg": 49.5,
    "participantCount": 43
  },
  {
    "id": "2025-02-27",
    "date": "2025-02-27",
    "workoutName": "Interval Set D",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Chen",
        "split": 45.5,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 44.9,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Novak",
        "split": 44.5,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 45.6,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Brandt",
        "split": 46.2,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Webb",
        "split": 45.0,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Hayes",
        "split": 47.2,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 45.2,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Klein",
        "split": 48.0,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 47.0,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 47.0,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 47.3,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 48.7,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Kowalski",
        "split": 47.3,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Bakker",
        "split": 48.9,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 50.0,
        "spm": 21,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 48.7,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 49.8,
        "spm": 21,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Tran",
        "split": 51.9,
        "spm": 19,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Petrov",
        "split": 999.3,
        "spm": 0,
        "rank": 20,
        "dnf": true
      }
    ],
    "groupB": [
      {
        "name": "Park",
        "split": 45.5,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Johansson",
        "split": 46.0,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Duval",
        "split": 46.4,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Delacroix",
        "split": 45.0,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Cruz",
        "split": 47.3,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 45.8,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 44.9,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Hawkins",
        "split": 45.9,
        "spm": 21,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Keane",
        "split": 48.0,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 46.0,
        "spm": 18,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 46.3,
        "spm": 21,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Lehmann",
        "split": 48.1,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Payne",
        "split": 47.0,
        "spm": 21,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Mitchell",
        "split": 46.9,
        "spm": 21,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 48.8,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Sato",
        "split": 47.0,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 46.0,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Jensen",
        "split": 48.4,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Fischer",
        "split": 48.7,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 49.0,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 47.0,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 49.8,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 48.1,
        "spm": 20,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 50.1,
        "spm": 20,
        "rank": 24,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 48.7,
        "spm": 20,
        "rank": 25,
        "dnf": false
      },
      {
        "name": "Torres",
        "split": 50.6,
        "spm": 20,
        "rank": 26,
        "dnf": false
      }
    ],
    "teamAvgSplit": 47.9,
    "bestSplit": 46.0,
    "worstSplit": 52.7,
    "bestAthlete": "Chen",
    "groupAAvg": 48.0,
    "groupBAvg": 47.8,
    "participantCount": 45
  },
  {
    "id": "2025-03-01",
    "date": "2025-03-01",
    "workoutName": "Endurance Set F",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Chen",
        "split": 44.8,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 44.7,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Webb",
        "split": 44.5,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Novak",
        "split": 44.8,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 47.3,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 45.7,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Klein",
        "split": 47.5,
        "spm": 21,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Tran",
        "split": 46.5,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Brandt",
        "split": 47.2,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 46.9,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Petrov",
        "split": 47.4,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Bakker",
        "split": 48.2,
        "spm": 21,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Kwon",
        "split": 46.4,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 48.7,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Kowalski",
        "split": 47.7,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 48.2,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Nakamura",
        "split": 49.3,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 49.4,
        "spm": 20,
        "rank": 18,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Johansson",
        "split": 44.6,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Park",
        "split": 45.6,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Keane",
        "split": 46.6,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 45.3,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Cruz",
        "split": 47.3,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Lehmann",
        "split": 47.3,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 45.3,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Jensen",
        "split": 47.8,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 46.2,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Payne",
        "split": 46.8,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 45.7,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Duval",
        "split": 48.0,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Fischer",
        "split": 48.2,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 46.6,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Hawkins",
        "split": 47.5,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 46.8,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 49.3,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 49.3,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Torres",
        "split": 49.5,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 48.0,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 49.8,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 48.6,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 50.1,
        "spm": 20,
        "rank": 23,
        "dnf": false
      }
    ],
    "teamAvgSplit": 47.7,
    "bestSplit": 45.1,
    "worstSplit": 49.7,
    "bestAthlete": "Johansson",
    "groupAAvg": 47.6,
    "groupBAvg": 47.8,
    "participantCount": 41
  },
  {
    "id": "2025-03-03",
    "date": "2025-03-03",
    "workoutName": "Mixed Fitness Test B",
    "workoutCategory": "triathlon",
    "groupA": [
      {
        "name": "Chen",
        "split": 199440.8,
        "spm": 0,
        "rank": 1,
        "dnf": false,
        "timeFormatted": "3324:00"
      },
      {
        "name": "Brandt",
        "split": 200220.2,
        "spm": 0,
        "rank": 2,
        "dnf": false,
        "timeFormatted": "3337:00"
      },
      {
        "name": "Webb",
        "split": 201238.8,
        "spm": 0,
        "rank": 3,
        "dnf": false,
        "timeFormatted": "3354:00"
      },
      {
        "name": "Cho",
        "split": 203519.9,
        "spm": 0,
        "rank": 4,
        "dnf": false,
        "timeFormatted": "3392:00"
      },
      {
        "name": "Foster",
        "split": 207719.7,
        "spm": 0,
        "rank": 5,
        "dnf": false,
        "timeFormatted": "3462:00"
      },
      {
        "name": "Bennett",
        "split": 208199.9,
        "spm": 0,
        "rank": 6,
        "dnf": false,
        "timeFormatted": "3470:00"
      },
      {
        "name": "Lindqvist",
        "split": 211558.5,
        "spm": 0,
        "rank": 7,
        "dnf": false,
        "timeFormatted": "3526:00"
      },
      {
        "name": "O'Sullivan",
        "split": 214381.0,
        "spm": 0,
        "rank": 8,
        "dnf": false,
        "timeFormatted": "3573:00"
      },
      {
        "name": "Petrov",
        "split": 216420.3,
        "spm": 0,
        "rank": 9,
        "dnf": false,
        "timeFormatted": "3607:00"
      },
      {
        "name": "Novak",
        "split": 217738.6,
        "spm": 0,
        "rank": 10,
        "dnf": false,
        "timeFormatted": "3629:00"
      },
      {
        "name": "DB",
        "split": 218701.1,
        "spm": 0,
        "rank": 11,
        "dnf": false,
        "timeFormatted": "3645:00"
      },
      {
        "name": "Kowalski",
        "split": 223379.5,
        "spm": 0,
        "rank": 12,
        "dnf": false,
        "timeFormatted": "3723:00"
      },
      {
        "name": "Tran",
        "split": 223799.9,
        "spm": 0,
        "rank": 13,
        "dnf": false,
        "timeFormatted": "3730:00"
      },
      {
        "name": "Bakker",
        "split": 234901.0,
        "spm": 0,
        "rank": 14,
        "dnf": false,
        "timeFormatted": "3915:00"
      },
      {
        "name": "Reeves",
        "split": 236520.4,
        "spm": 0,
        "rank": 15,
        "dnf": false,
        "timeFormatted": "3942:00"
      }
    ],
    "groupB": [
      {
        "name": "Johansson",
        "split": 202740.7,
        "spm": 0,
        "rank": 1,
        "dnf": false,
        "timeFormatted": "3379:00"
      },
      {
        "name": "Lehmann",
        "split": 203940.9,
        "spm": 0,
        "rank": 2,
        "dnf": false,
        "timeFormatted": "3399:00"
      },
      {
        "name": "Hawkins",
        "split": 204299.7,
        "spm": 0,
        "rank": 3,
        "dnf": false,
        "timeFormatted": "3405:00"
      },
      {
        "name": "Torres",
        "split": 208321.3,
        "spm": 0,
        "rank": 4,
        "dnf": false,
        "timeFormatted": "3472:00"
      },
      {
        "name": "Bergman",
        "split": 208378.7,
        "spm": 0,
        "rank": 5,
        "dnf": false,
        "timeFormatted": "3473:00"
      },
      {
        "name": "Hartmann",
        "split": 208439.7,
        "spm": 0,
        "rank": 6,
        "dnf": false,
        "timeFormatted": "3474:00"
      },
      {
        "name": "Tanaka",
        "split": 208918.6,
        "spm": 0,
        "rank": 7,
        "dnf": false,
        "timeFormatted": "3482:00"
      },
      {
        "name": "Thornton",
        "split": 210059.0,
        "spm": 0,
        "rank": 8,
        "dnf": false,
        "timeFormatted": "3501:00"
      },
      {
        "name": "Jensen",
        "split": 210600.9,
        "spm": 0,
        "rank": 9,
        "dnf": false,
        "timeFormatted": "3510:00"
      },
      {
        "name": "Okafor",
        "split": 211079.0,
        "spm": 0,
        "rank": 10,
        "dnf": false,
        "timeFormatted": "3518:00"
      },
      {
        "name": "Romanov",
        "split": 211379.2,
        "spm": 0,
        "rank": 11,
        "dnf": false,
        "timeFormatted": "3523:00"
      },
      {
        "name": "Dalton",
        "split": 212339.4,
        "spm": 0,
        "rank": 12,
        "dnf": false,
        "timeFormatted": "3539:00"
      },
      {
        "name": "Lim",
        "split": 212581.2,
        "spm": 0,
        "rank": 13,
        "dnf": false,
        "timeFormatted": "3543:00"
      },
      {
        "name": "Fischer",
        "split": 212821.0,
        "spm": 0,
        "rank": 14,
        "dnf": false,
        "timeFormatted": "3547:00"
      },
      {
        "name": "Payne",
        "split": 213059.8,
        "spm": 0,
        "rank": 15,
        "dnf": false,
        "timeFormatted": "3551:00"
      },
      {
        "name": "Park",
        "split": 213300.8,
        "spm": 0,
        "rank": 16,
        "dnf": false,
        "timeFormatted": "3555:00"
      },
      {
        "name": "Keane",
        "split": 213601.2,
        "spm": 0,
        "rank": 17,
        "dnf": false,
        "timeFormatted": "3560:00"
      },
      {
        "name": "Cruz",
        "split": 214681.3,
        "spm": 0,
        "rank": 18,
        "dnf": false,
        "timeFormatted": "3578:00"
      },
      {
        "name": "Larsson",
        "split": 219179.8,
        "spm": 0,
        "rank": 19,
        "dnf": false,
        "timeFormatted": "3653:00"
      },
      {
        "name": "Volkov",
        "split": 222121.2,
        "spm": 0,
        "rank": 20,
        "dnf": false,
        "timeFormatted": "3702:00"
      },
      {
        "name": "O'Brien",
        "split": 223920.8,
        "spm": 0,
        "rank": 21,
        "dnf": false,
        "timeFormatted": "3732:00"
      },
      {
        "name": "Van Berg",
        "split": 224701.4,
        "spm": 0,
        "rank": 22,
        "dnf": false,
        "timeFormatted": "3745:00"
      },
      {
        "name": "Duval",
        "split": 224880.9,
        "spm": 0,
        "rank": 23,
        "dnf": false,
        "timeFormatted": "3748:00"
      },
      {
        "name": "Petrowski",
        "split": 228059.8,
        "spm": 0,
        "rank": 24,
        "dnf": false,
        "timeFormatted": "3801:00"
      },
      {
        "name": "Malik",
        "split": 248941.5,
        "spm": 0,
        "rank": 25,
        "dnf": false,
        "timeFormatted": "4149:00"
      }
    ],
    "teamAvgSplit": 214752.7,
    "bestSplit": 199441.5,
    "worstSplit": 248940.7,
    "bestAthlete": "Chen",
    "groupAAvg": 214516.7,
    "groupBAvg": 214894.3,
    "participantCount": 40
  },
  {
    "id": "2025-03-06",
    "date": "2025-03-06",
    "workoutName": "Interval Set E",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Chen",
        "split": 39.8,
        "spm": 22,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 40.0,
        "spm": 22,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Novak",
        "split": 40.5,
        "spm": 22,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 41.4,
        "spm": 22,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 41.7,
        "spm": 22,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Brandt",
        "split": 42.4,
        "spm": 22,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Klein",
        "split": 45.1,
        "spm": 22,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 44.1,
        "spm": 22,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Webb",
        "split": 43.3,
        "spm": 22,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 43.0,
        "spm": 22,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 44.6,
        "spm": 22,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 44.9,
        "spm": 22,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Hayes",
        "split": 46.0,
        "spm": 22,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Bakker",
        "split": 46.5,
        "spm": 22,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Kowalski",
        "split": 45.2,
        "spm": 22,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 48.0,
        "spm": 23,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 48.0,
        "spm": 22,
        "rank": 17,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Johansson",
        "split": 40.5,
        "spm": 22,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Park",
        "split": 41.7,
        "spm": 22,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Hawkins",
        "split": 41.3,
        "spm": 22,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Cruz",
        "split": 43.2,
        "spm": 22,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 41.1,
        "spm": 22,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 42.2,
        "spm": 22,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 41.4,
        "spm": 22,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Keane",
        "split": 44.0,
        "spm": 22,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 41.7,
        "spm": 22,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Payne",
        "split": 43.0,
        "spm": 22,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Fischer",
        "split": 44.7,
        "spm": 22,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 43.5,
        "spm": 22,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Jensen",
        "split": 45.2,
        "spm": 22,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Dalton",
        "split": 43.7,
        "spm": 22,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Delacroix",
        "split": 43.8,
        "spm": 22,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Sato",
        "split": 44.3,
        "spm": 22,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 44.7,
        "spm": 22,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 46.1,
        "spm": 22,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Lehmann",
        "split": 45.9,
        "spm": 22,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 44.3,
        "spm": 22,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Duval",
        "split": 46.3,
        "spm": 22,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 47.0,
        "spm": 22,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 47.0,
        "spm": 22,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Mitchell",
        "split": 46.2,
        "spm": 22,
        "rank": 24,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 47.6,
        "spm": 22,
        "rank": 25,
        "dnf": false
      },
      {
        "name": "Torres",
        "split": 50.1,
        "spm": 22,
        "rank": 26,
        "dnf": false
      }
    ],
    "teamAvgSplit": 44.7,
    "bestSplit": 40.3,
    "worstSplit": 49.5,
    "bestAthlete": "Chen",
    "groupAAvg": 44.6,
    "groupBAvg": 44.8,
    "participantCount": 43
  },
  {
    "id": "2025-03-10",
    "date": "2025-03-10",
    "workoutName": "Endurance Set G",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Chen",
        "split": 43.0,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 43.8,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 45.0,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Webb",
        "split": 44.8,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 45.9,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 46.9,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Brandt",
        "split": 47.3,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 46.0,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 48.8,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Novak",
        "split": 46.4,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Petrov",
        "split": 48.4,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Kowalski",
        "split": 47.6,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 48.6,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 48.5,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Klein",
        "split": 49.6,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 48.3,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Tran",
        "split": 49.9,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 52.2,
        "spm": 20,
        "rank": 18,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Johansson",
        "split": 43.2,
        "spm": 21,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Park",
        "split": 45.6,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 46.0,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 45.3,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Jensen",
        "split": 47.7,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Keane",
        "split": 48.1,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Hawkins",
        "split": 46.6,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Delacroix",
        "split": 46.1,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 48.2,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 48.5,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 46.2,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 45.8,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 48.8,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 47.2,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Sato",
        "split": 47.2,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Dalton",
        "split": 47.1,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Fischer",
        "split": 48.7,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 47.0,
        "spm": 21,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 47.2,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Mitchell",
        "split": 48.0,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Torres",
        "split": 49.7,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 49.7,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 48.3,
        "spm": 20,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Lehmann",
        "split": 49.9,
        "spm": 20,
        "rank": 24,
        "dnf": false
      }
    ],
    "teamAvgSplit": 48.0,
    "bestSplit": 43.1,
    "worstSplit": 51.9,
    "bestAthlete": "Chen",
    "groupAAvg": 48.1,
    "groupBAvg": 47.9,
    "participantCount": 42
  },
  {
    "id": "2025-03-13",
    "date": "2025-03-13",
    "workoutName": "Interval Set C",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Chen",
        "split": 38.1,
        "spm": 24,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 38.5,
        "spm": 24,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 39.0,
        "spm": 24,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "De Vries",
        "split": 40.5,
        "spm": 24,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Brandt",
        "split": 40.2,
        "spm": 24,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Webb",
        "split": 38.8,
        "spm": 24,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 40.2,
        "spm": 24,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 42.0,
        "spm": 24,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 42.5,
        "spm": 24,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 41.2,
        "spm": 24,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Hayes",
        "split": 43.5,
        "spm": 24,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Tran",
        "split": 43.3,
        "spm": 24,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 45.2,
        "spm": 24,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 44.5,
        "spm": 24,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 46.0,
        "spm": 24,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 45.8,
        "spm": 24,
        "rank": 16,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Johansson",
        "split": 38.3,
        "spm": 24,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Park",
        "split": 40.3,
        "spm": 24,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Hawkins",
        "split": 39.5,
        "spm": 24,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Cruz",
        "split": 41.6,
        "spm": 24,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 40.3,
        "spm": 24,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 39.8,
        "spm": 24,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Duval",
        "split": 42.2,
        "spm": 24,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 40.4,
        "spm": 24,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 40.3,
        "spm": 24,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Delacroix",
        "split": 40.9,
        "spm": 23,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 43.3,
        "spm": 24,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Keane",
        "split": 43.3,
        "spm": 23,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Fischer",
        "split": 43.4,
        "spm": 24,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 44.5,
        "spm": 24,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Jensen",
        "split": 44.2,
        "spm": 24,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Dalton",
        "split": 42.8,
        "spm": 24,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Sato",
        "split": 43.2,
        "spm": 24,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 42.8,
        "spm": 24,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Mitchell",
        "split": 43.2,
        "spm": 24,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 42.8,
        "spm": 24,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 46.0,
        "spm": 24,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 46.0,
        "spm": 24,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Torres",
        "split": 47.2,
        "spm": 24,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 46.0,
        "spm": 24,
        "rank": 24,
        "dnf": false
      }
    ],
    "teamAvgSplit": 42.9,
    "bestSplit": 37.1,
    "worstSplit": 46.9,
    "bestAthlete": "Chen",
    "groupAAvg": 42.6,
    "groupBAvg": 43.1,
    "participantCount": 40
  },
  {
    "id": "2025-03-15",
    "date": "2025-03-15",
    "workoutName": "Endurance Set H",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Chen",
        "split": 45.4,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 44.8,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 45.4,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 47.4,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Webb",
        "split": 45.4,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Tran",
        "split": 46.9,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 46.4,
        "spm": 19,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 47.1,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 48.2,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Bakker",
        "split": 48.8,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 48.0,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 46.8,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Klein",
        "split": 49.4,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 48.3,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Brandt",
        "split": 48.7,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 49.8,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 49.1,
        "spm": 20,
        "rank": 17,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Johansson",
        "split": 44.6,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Park",
        "split": 46.6,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 46.5,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 45.6,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 48.4,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Jensen",
        "split": 47.9,
        "spm": 19,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 48.4,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 45.7,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Keane",
        "split": 48.3,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 46.4,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Cruz",
        "split": 48.8,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Dalton",
        "split": 47.0,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Delacroix",
        "split": 46.8,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 46.9,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Kowalski",
        "split": 47.5,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 47.0,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Fischer",
        "split": 49.6,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 50.0,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Duval",
        "split": 49.7,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 50.0,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Sato",
        "split": 48.4,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Torres",
        "split": 50.6,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 49.2,
        "spm": 20,
        "rank": 23,
        "dnf": false
      }
    ],
    "teamAvgSplit": 48.2,
    "bestSplit": 43.7,
    "worstSplit": 50.1,
    "bestAthlete": "Johansson",
    "groupAAvg": 48.1,
    "groupBAvg": 48.3,
    "participantCount": 40
  },
  {
    "id": "2025-03-20",
    "date": "2025-03-20",
    "workoutName": "Threshold Test B",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Chen",
        "split": 34.2,
        "spm": 29,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 33.7,
        "spm": 27,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 35.5,
        "spm": 30,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "De Vries",
        "split": 37.0,
        "spm": 29,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Brandt",
        "split": 36.4,
        "spm": 28,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 36.6,
        "spm": 30,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 35.5,
        "spm": 37,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Webb",
        "split": 36.2,
        "spm": 28,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Kwon",
        "split": 36.5,
        "spm": 28,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 37.5,
        "spm": 28,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Novak",
        "split": 36.3,
        "spm": 28,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 37.8,
        "spm": 28,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Tran",
        "split": 37.8,
        "spm": 27,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 39.8,
        "spm": 29,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Klein",
        "split": 40.0,
        "spm": 27,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Hayes",
        "split": 39.5,
        "spm": 27,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Jensen",
        "split": 39.9,
        "spm": 28,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 39.0,
        "spm": 27,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Payne",
        "split": 39.4,
        "spm": 28,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 40.7,
        "spm": 30,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 41.2,
        "spm": 27,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 41.4,
        "spm": 28,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Bakker",
        "split": 42.9,
        "spm": 27,
        "rank": 23,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Park",
        "split": 36.5,
        "spm": 28,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 36.1,
        "spm": 29,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 35.9,
        "spm": 29,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 35.6,
        "spm": 28,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 36.7,
        "spm": 28,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Delacroix",
        "split": 37.1,
        "spm": 28,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Sato",
        "split": 37.7,
        "spm": 30,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Keane",
        "split": 39.6,
        "spm": 26,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Fischer",
        "split": 39.5,
        "spm": 27,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 40.0,
        "spm": 27,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 38.2,
        "spm": 31,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 40.3,
        "spm": 28,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 40.6,
        "spm": 27,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 39.0,
        "spm": 30,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Dalton",
        "split": 38.7,
        "spm": 27,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 38.3,
        "spm": 29,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Lehmann",
        "split": 40.4,
        "spm": 26,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Mitchell",
        "split": 39.4,
        "spm": 27,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 41.3,
        "spm": 28,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Torres",
        "split": 43.7,
        "spm": 28,
        "rank": 20,
        "dnf": false
      }
    ],
    "teamAvgSplit": 39.0,
    "bestSplit": 34.7,
    "worstSplit": 43.1,
    "bestAthlete": "Chen",
    "groupAAvg": 38.7,
    "groupBAvg": 39.3,
    "participantCount": 43
  },
  {
    "id": "2025-03-22",
    "date": "2025-03-22",
    "workoutName": "Endurance Set F",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Chen",
        "split": 44.9,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 43.7,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 45.2,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Webb",
        "split": 44.7,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 45.7,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Klein",
        "split": 47.7,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Tran",
        "split": 46.7,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 47.0,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Petrov",
        "split": 48.2,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Novak",
        "split": 46.5,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Bakker",
        "split": 49.1,
        "spm": 21,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 46.7,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 48.2,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Kowalski",
        "split": 48.0,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Brandt",
        "split": 48.7,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 49.6,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 48.7,
        "spm": 21,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 49.5,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 1000.0,
        "spm": 0,
        "rank": 19,
        "dnf": true
      }
    ],
    "groupB": [
      {
        "name": "Johansson",
        "split": 43.9,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Park",
        "split": 44.5,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 44.6,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 46.2,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Lehmann",
        "split": 47.7,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 45.8,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Jensen",
        "split": 47.8,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 48.4,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Payne",
        "split": 47.0,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 45.9,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 46.5,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 48.9,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Fischer",
        "split": 48.9,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Mitchell",
        "split": 47.7,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Keane",
        "split": 49.3,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 48.2,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Sato",
        "split": 48.0,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 47.5,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 49.7,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 50.0,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Duval",
        "split": 49.8,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Torres",
        "split": 51.5,
        "spm": 20,
        "rank": 22,
        "dnf": false
      }
    ],
    "teamAvgSplit": 48.0,
    "bestSplit": 44.5,
    "worstSplit": 50.9,
    "bestAthlete": "Johansson",
    "groupAAvg": 48.0,
    "groupBAvg": 48.1,
    "participantCount": 40
  },
  {
    "id": "2025-03-27",
    "date": "2025-03-27",
    "workoutName": "Interval Set F",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Chen",
        "split": 34.4,
        "spm": 29,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 34.3,
        "spm": 27,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "De Vries",
        "split": 37.2,
        "spm": 28,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Brandt",
        "split": 36.6,
        "spm": 28,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 36.0,
        "spm": 30,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 36.4,
        "spm": 30,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Novak",
        "split": 36.0,
        "spm": 28,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 36.0,
        "spm": 30,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 38.0,
        "spm": 28,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 38.4,
        "spm": 28,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Payne",
        "split": 38.5,
        "spm": 27,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 40.0,
        "spm": 28,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Tran",
        "split": 39.0,
        "spm": 26,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Klein",
        "split": 40.5,
        "spm": 27,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 40.6,
        "spm": 30,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Hayes",
        "split": 40.1,
        "spm": 27,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Kowalski",
        "split": 39.4,
        "spm": 28,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 40.0,
        "spm": 27,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Petrov",
        "split": 40.6,
        "spm": 28,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Bakker",
        "split": 42.4,
        "spm": 27,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 42.3,
        "spm": 28,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 42.6,
        "spm": 27,
        "rank": 22,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Park",
        "split": 35.9,
        "spm": 28,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 36.3,
        "spm": 29,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 35.9,
        "spm": 28,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Hawkins",
        "split": 36.7,
        "spm": 26,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 35.7,
        "spm": 28,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 36.6,
        "spm": 28,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Fischer",
        "split": 39.4,
        "spm": 27,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Jensen",
        "split": 39.3,
        "spm": 27,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 38.3,
        "spm": 28,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Mitchell",
        "split": 38.1,
        "spm": 29,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 40.3,
        "spm": 29,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Dalton",
        "split": 38.4,
        "spm": 28,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 38.2,
        "spm": 30,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Lehmann",
        "split": 40.0,
        "spm": 28,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 40.8,
        "spm": 27,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Sato",
        "split": 38.9,
        "spm": 30,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 40.7,
        "spm": 27,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 38.6,
        "spm": 30,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Duval",
        "split": 40.8,
        "spm": 30,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 41.2,
        "spm": 29,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Torres",
        "split": 43.0,
        "spm": 27,
        "rank": 21,
        "dnf": false
      }
    ],
    "teamAvgSplit": 39.3,
    "bestSplit": 34.9,
    "worstSplit": 43.5,
    "bestAthlete": "Chen",
    "groupAAvg": 39.2,
    "groupBAvg": 39.3,
    "participantCount": 43
  },
  {
    "id": "2025-03-29",
    "date": "2025-03-29",
    "workoutName": "Interval Set G",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Brandt",
        "split": 43.8,
        "spm": 22,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Chen",
        "split": 44.4,
        "spm": 22,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 43.5,
        "spm": 22,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 43.3,
        "spm": 22,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 45.7,
        "spm": 22,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Hayes",
        "split": 46.6,
        "spm": 22,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Novak",
        "split": 44.7,
        "spm": 22,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 45.7,
        "spm": 22,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 46.4,
        "spm": 22,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Bakker",
        "split": 47.5,
        "spm": 22,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Tran",
        "split": 46.5,
        "spm": 22,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Klein",
        "split": 47.7,
        "spm": 22,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Petrov",
        "split": 47.2,
        "spm": 22,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Payne",
        "split": 46.9,
        "spm": 22,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 48.1,
        "spm": 22,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 46.9,
        "spm": 21,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Kowalski",
        "split": 47.0,
        "spm": 21,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 48.6,
        "spm": 23,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 46.3,
        "spm": 21,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 48.3,
        "spm": 22,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 48.2,
        "spm": 22,
        "rank": 21,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Park",
        "split": 45.6,
        "spm": 22,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 44.2,
        "spm": 22,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 45.3,
        "spm": 22,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Jensen",
        "split": 46.6,
        "spm": 21,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 45.7,
        "spm": 22,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 47.6,
        "spm": 22,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 47.4,
        "spm": 22,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Dalton",
        "split": 45.7,
        "spm": 22,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Mitchell",
        "split": 45.9,
        "spm": 22,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Duval",
        "split": 47.3,
        "spm": 22,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 45.5,
        "spm": 22,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Lehmann",
        "split": 47.5,
        "spm": 22,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 48.0,
        "spm": 22,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 45.3,
        "spm": 22,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 46.0,
        "spm": 22,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Fischer",
        "split": 48.1,
        "spm": 22,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Keane",
        "split": 48.4,
        "spm": 21,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Sato",
        "split": 46.9,
        "spm": 22,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Torres",
        "split": 48.7,
        "spm": 22,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 49.2,
        "spm": 21,
        "rank": 20,
        "dnf": false
      }
    ],
    "teamAvgSplit": 47.1,
    "bestSplit": 44.8,
    "worstSplit": 49.1,
    "bestAthlete": "Brandt",
    "groupAAvg": 47.0,
    "groupBAvg": 47.2,
    "participantCount": 41
  },
  {
    "id": "2025-04-03",
    "date": "2025-04-03",
    "workoutName": "Threshold Test C",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Chen",
        "split": 33.4,
        "spm": 30,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 33.2,
        "spm": 29,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Brandt",
        "split": 35.4,
        "spm": 29,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 34.9,
        "spm": 32,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "De Vries",
        "split": 36.5,
        "spm": 28,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 35.4,
        "spm": 30,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 36.7,
        "spm": 29,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Novak",
        "split": 35.4,
        "spm": 30,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 35.8,
        "spm": 30,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Tran",
        "split": 37.8,
        "spm": 27,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 39.2,
        "spm": 29,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 38.1,
        "spm": 27,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Hayes",
        "split": 39.0,
        "spm": 27,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 38.5,
        "spm": 27,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Klein",
        "split": 39.7,
        "spm": 27,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Petrov",
        "split": 39.7,
        "spm": 28,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 40.7,
        "spm": 30,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Kowalski",
        "split": 39.2,
        "spm": 28,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Payne",
        "split": 40.1,
        "spm": 28,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 41.0,
        "spm": 27,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Bakker",
        "split": 42.1,
        "spm": 27,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 42.5,
        "spm": 27,
        "rank": 22,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Park",
        "split": 34.9,
        "spm": 29,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Hawkins",
        "split": 35.4,
        "spm": 28,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 36.0,
        "spm": 29,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 35.7,
        "spm": 29,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 35.5,
        "spm": 28,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Fischer",
        "split": 38.2,
        "spm": 28,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Lehmann",
        "split": 38.3,
        "spm": 31,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 39.2,
        "spm": 27,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Jensen",
        "split": 39.3,
        "spm": 29,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Mitchell",
        "split": 38.0,
        "spm": 31,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 37.2,
        "spm": 29,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Keane",
        "split": 39.8,
        "spm": 27,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 38.0,
        "spm": 30,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Sato",
        "split": 38.7,
        "spm": 29,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 38.5,
        "spm": 29,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 39.5,
        "spm": 29,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 41.0,
        "spm": 28,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Duval",
        "split": 41.4,
        "spm": 29,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 42.2,
        "spm": 28,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Torres",
        "split": 42.8,
        "spm": 28,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 43.2,
        "spm": 28,
        "rank": 21,
        "dnf": false
      }
    ],
    "teamAvgSplit": 38.9,
    "bestSplit": 34.1,
    "worstSplit": 43.4,
    "bestAthlete": "Chen",
    "groupAAvg": 38.6,
    "groupBAvg": 39.2,
    "participantCount": 43
  },
  {
    "id": "2025-04-10",
    "date": "2025-04-10",
    "workoutName": "Threshold Test D",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Chen",
        "split": 38.6,
        "spm": 26,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 38.9,
        "spm": 26,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "De Vries",
        "split": 40.9,
        "spm": 26,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 39.9,
        "spm": 28,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Brandt",
        "split": 40.6,
        "spm": 26,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 40.3,
        "spm": 28,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 39.4,
        "spm": 31,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 41.2,
        "spm": 28,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Klein",
        "split": 43.3,
        "spm": 26,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Hayes",
        "split": 42.9,
        "spm": 25,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Tran",
        "split": 42.6,
        "spm": 26,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 44.1,
        "spm": 29,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 44.1,
        "spm": 28,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Payne",
        "split": 43.3,
        "spm": 26,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Kowalski",
        "split": 43.4,
        "spm": 27,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Petrov",
        "split": 44.2,
        "spm": 27,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 44.9,
        "spm": 27,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Bakker",
        "split": 45.6,
        "spm": 24,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 998.7,
        "spm": 0,
        "rank": 19,
        "dnf": true
      }
    ],
    "groupB": [],
    "teamAvgSplit": 42.6,
    "bestSplit": 37.5,
    "worstSplit": 45.3,
    "bestAthlete": "Chen",
    "groupAAvg": 42.6,
    "groupBAvg": 0.7,
    "participantCount": 18
  },
  {
    "id": "2025-04-17",
    "date": "2025-04-17",
    "workoutName": "Endurance Set J",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Chen",
        "split": 44.2,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 44.0,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 45.1,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 45.4,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Novak",
        "split": 44.5,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Brandt",
        "split": 46.3,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 45.5,
        "spm": 19,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 46.2,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "De Vries",
        "split": 47.2,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 46.5,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 48.1,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 47.9,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Tran",
        "split": 46.8,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Payne",
        "split": 47.5,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Petrov",
        "split": 48.0,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 48.1,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 48.9,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Bakker",
        "split": 48.9,
        "spm": 21,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 49.2,
        "spm": 20,
        "rank": 19,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Klein",
        "split": 45.8,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 45.0,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Lehmann",
        "split": 46.5,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Park",
        "split": 46.5,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 44.4,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 45.3,
        "spm": 19,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 46.1,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 47.7,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 45.0,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Hawkins",
        "split": 46.2,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Cruz",
        "split": 47.8,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Keane",
        "split": 47.9,
        "spm": 19,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 46.6,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Fischer",
        "split": 48.4,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Sato",
        "split": 47.1,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 49.0,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 49.1,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Jensen",
        "split": 48.9,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 47.1,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Delacroix",
        "split": 47.6,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 49.3,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Torres",
        "split": 51.7,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Santos",
        "split": 998.2,
        "spm": 0,
        "rank": 23,
        "dnf": true
      }
    ],
    "teamAvgSplit": 47.6,
    "bestSplit": 42.6,
    "worstSplit": 51.1,
    "bestAthlete": "Chen",
    "groupAAvg": 47.4,
    "groupBAvg": 47.7,
    "participantCount": 41
  },
  {
    "id": "2025-04-19",
    "date": "2025-04-19",
    "workoutName": "Endurance Set I",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Chen",
        "split": 45.0,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 44.8,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 45.1,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 46.5,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Novak",
        "split": 45.2,
        "spm": 21,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 47.9,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Brandt",
        "split": 47.1,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Tran",
        "split": 46.8,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 46.3,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Bakker",
        "split": 48.1,
        "spm": 21,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 45.7,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Payne",
        "split": 47.3,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 47.2,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 49.1,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Petrov",
        "split": 47.9,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 47.8,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 48.9,
        "spm": 21,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Kowalski",
        "split": 47.9,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 49.2,
        "spm": 21,
        "rank": 19,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Park",
        "split": 45.4,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Lehmann",
        "split": 46.8,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Keane",
        "split": 47.3,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Delacroix",
        "split": 45.3,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 45.2,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 45.9,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 45.0,
        "spm": 21,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 46.4,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 48.2,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 46.0,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Hawkins",
        "split": 47.0,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 46.4,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Jensen",
        "split": 48.3,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 48.7,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Fischer",
        "split": 48.7,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Klein",
        "split": 48.7,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 46.4,
        "spm": 21,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 48.6,
        "spm": 21,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 50.0,
        "spm": 21,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Torres",
        "split": 50.4,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Santos",
        "split": 51.3,
        "spm": 20,
        "rank": 21,
        "dnf": false
      }
    ],
    "teamAvgSplit": 47.9,
    "bestSplit": 43.4,
    "worstSplit": 52.8,
    "bestAthlete": "Chen",
    "groupAAvg": 47.7,
    "groupBAvg": 48.0,
    "participantCount": 40
  },
  {
    "id": "2025-04-21",
    "date": "2025-04-21",
    "workoutName": "Threshold Test E",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Foster",
        "split": 45.2,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Payne",
        "split": 45.8,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Petrov",
        "split": 46.4,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Rivera",
        "split": 45.4,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 46.1,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 45.9,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 47.4,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Bakker",
        "split": 47.5,
        "spm": 21,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 47.8,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Kowalski",
        "split": 46.2,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 46.6,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 47.2,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 48.4,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 45.9,
        "spm": 20,
        "rank": 14,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Keane",
        "split": 45.8,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 43.7,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Park",
        "split": 45.6,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Delacroix",
        "split": 44.1,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 44.4,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 46.8,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 45.2,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 45.3,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Bergman",
        "split": 44.7,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Klein",
        "split": 47.2,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Hawkins",
        "split": 46.1,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Dalton",
        "split": 45.8,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Fischer",
        "split": 47.6,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Jensen",
        "split": 47.5,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Cruz",
        "split": 48.0,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 45.5,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 45.9,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 48.2,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 48.3,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Lehmann",
        "split": 48.5,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Torres",
        "split": 50.3,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 48.9,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Santos",
        "split": 49.9,
        "spm": 20,
        "rank": 23,
        "dnf": false
      }
    ],
    "teamAvgSplit": 47.2,
    "bestSplit": 43.8,
    "worstSplit": 51.4,
    "bestAthlete": "Keane",
    "groupAAvg": 47.1,
    "groupBAvg": 47.2,
    "participantCount": 37
  },
  {
    "id": "2025-04-23",
    "date": "2025-04-23",
    "workoutName": "Threshold Test F",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Rivera",
        "split": 31.7,
        "spm": 28,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "De Vries",
        "split": 34.2,
        "spm": 27,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Eriksson",
        "split": 34.0,
        "spm": 27,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Lindqvist",
        "split": 33.1,
        "spm": 27,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Foster",
        "split": 34.6,
        "spm": 27,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Bennett",
        "split": 35.6,
        "spm": 27,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Ibrahimi",
        "split": 35.5,
        "spm": 26,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "O'Sullivan",
        "split": 37.0,
        "spm": 28,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Hayes",
        "split": 36.9,
        "spm": 26,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Cho",
        "split": 36.3,
        "spm": 27,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Petrov",
        "split": 37.4,
        "spm": 27,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 38.3,
        "spm": 28,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Lehmann",
        "split": 38.3,
        "spm": 27,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Reeves",
        "split": 37.9,
        "spm": 27,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Kowalski",
        "split": 37.3,
        "spm": 27,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Malik",
        "split": 39.4,
        "spm": 26,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Bakker",
        "split": 40.0,
        "spm": 27,
        "rank": 17,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Hawkins",
        "split": 33.2,
        "spm": 28,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Okafor",
        "split": 33.7,
        "spm": 27,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Hartmann",
        "split": 34.6,
        "spm": 27,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Keane",
        "split": 36.4,
        "spm": 26,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Tanaka",
        "split": 34.1,
        "spm": 27,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Petrowski",
        "split": 35.6,
        "spm": 27,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Van Berg",
        "split": 37.8,
        "spm": 27,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Romanov",
        "split": 35.7,
        "spm": 27,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Volkov",
        "split": 38.4,
        "spm": 27,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Delacroix",
        "split": 36.6,
        "spm": 26,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Thornton",
        "split": 36.5,
        "spm": 27,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Lim",
        "split": 38.8,
        "spm": 29,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Jensen",
        "split": 38.6,
        "spm": 27,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Larsson",
        "split": 39.1,
        "spm": 27,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Santos",
        "split": 39.0,
        "spm": 26,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Torres",
        "split": 41.9,
        "spm": 27,
        "rank": 16,
        "dnf": false
      }
    ],
    "teamAvgSplit": 37.2,
    "bestSplit": 33.8,
    "worstSplit": 41.3,
    "bestAthlete": "Rivera",
    "groupAAvg": 36.8,
    "groupBAvg": 37.6,
    "participantCount": 33
  }
] as Session[];

export const athletes: Athlete[] = [
  {
    "id": "chen",
    "name": "Chen",
    "group": "A",
    "rank": 1,
    "avgSplit": 42.4,
    "bestSplit": 33.4,
    "bestSplitDate": "2025-04-03",
    "sessionCount": 24,
    "trend": "improving",
    "trendDelta": -2.3,
    "consistency": 92,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 14,
        "avgSplit": 42.6
      },
      "intervals": {
        "sessions": 10,
        "avgSplit": 39.1
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 44.7
      },
      {
        "date": "2025-01-16",
        "split": 43.5
      },
      {
        "date": "2025-01-20",
        "split": 44.2
      },
      {
        "date": "2025-01-25",
        "split": 41.6
      },
      {
        "date": "2025-01-30",
        "split": 38.7
      },
      {
        "date": "2025-02-06",
        "split": 43.9
      },
      {
        "date": "2025-02-08",
        "split": 43.9
      },
      {
        "date": "2025-02-13",
        "split": 39.3
      },
      {
        "date": "2025-02-20",
        "split": 37.7
      },
      {
        "date": "2025-02-22",
        "split": 44.8
      },
      {
        "date": "2025-02-27",
        "split": 44.7
      },
      {
        "date": "2025-03-01",
        "split": 44.0
      },
      {
        "date": "2025-03-06",
        "split": 39.0
      },
      {
        "date": "2025-03-10",
        "split": 42.2
      },
      {
        "date": "2025-03-13",
        "split": 37.3
      },
      {
        "date": "2025-03-15",
        "split": 44.6
      },
      {
        "date": "2025-03-20",
        "split": 33.4
      },
      {
        "date": "2025-03-22",
        "split": 44.1
      },
      {
        "date": "2025-03-27",
        "split": 33.6
      },
      {
        "date": "2025-03-29",
        "split": 43.6
      },
      {
        "date": "2025-04-03",
        "split": 32.6
      },
      {
        "date": "2025-04-10",
        "split": 37.8
      },
      {
        "date": "2025-04-17",
        "split": 43.4
      },
      {
        "date": "2025-04-19",
        "split": 44.2
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.7,
        "spm": 20,
        "rank": 1,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 43.5,
        "spm": 20,
        "rank": 1,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 44.2,
        "spm": 20,
        "rank": 1,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 41.6,
        "spm": 22,
        "rank": 1,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 38.7,
        "spm": 22,
        "rank": 1,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 43.9,
        "spm": 20,
        "rank": 1,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 43.9,
        "spm": 20,
        "rank": 1,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 39.3,
        "spm": 22,
        "rank": 1,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 37.7,
        "spm": 24,
        "rank": 1,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.8,
        "spm": 19,
        "rank": 1,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 44.7,
        "spm": 20,
        "rank": 1,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.0,
        "spm": 20,
        "rank": 1,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 39.0,
        "spm": 22,
        "rank": 1,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 42.2,
        "spm": 20,
        "rank": 1,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 37.3,
        "spm": 24,
        "rank": 1,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.6,
        "spm": 20,
        "rank": 1,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 33.4,
        "spm": 29,
        "rank": 1,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.1,
        "spm": 20,
        "rank": 1,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 33.6,
        "spm": 29,
        "rank": 1,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 43.6,
        "spm": 22,
        "rank": 2,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 32.6,
        "spm": 30,
        "rank": 1,
        "of": 43
      },
      {
        "sessionId": "2025-04-10",
        "date": "2025-04-10",
        "workoutName": "Threshold Test D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 37.8,
        "spm": 26,
        "rank": 1,
        "of": 18
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 43.4,
        "spm": 20,
        "rank": 1,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.2,
        "spm": 20,
        "rank": 1,
        "of": 40
      }
    ]
  },
  {
    "id": "de-vries",
    "name": "De Vries",
    "group": "A",
    "rank": 2,
    "avgSplit": 42.6,
    "bestSplit": 34.2,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 14,
    "trend": "improving",
    "trendDelta": -7.6,
    "consistency": 54,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 7,
        "avgSplit": 45.1
      },
      "intervals": {
        "sessions": 7,
        "avgSplit": 38.3
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 48.4
      },
      {
        "date": "2025-01-16",
        "split": 47.7
      },
      {
        "date": "2025-01-25",
        "split": 46.2
      },
      {
        "date": "2025-01-30",
        "split": 43.1
      },
      {
        "date": "2025-02-06",
        "split": 48.1
      },
      {
        "date": "2025-02-13",
        "split": 42.3
      },
      {
        "date": "2025-02-20",
        "split": 40.5
      },
      {
        "date": "2025-03-13",
        "split": 39.6
      },
      {
        "date": "2025-03-20",
        "split": 36.1
      },
      {
        "date": "2025-03-27",
        "split": 36.3
      },
      {
        "date": "2025-04-03",
        "split": 35.6
      },
      {
        "date": "2025-04-10",
        "split": 40.0
      },
      {
        "date": "2025-04-17",
        "split": 46.3
      },
      {
        "date": "2025-04-23",
        "split": 33.3
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.4,
        "spm": 20,
        "rank": 12,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.7,
        "spm": 21,
        "rank": 12,
        "of": 48
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.2,
        "spm": 22,
        "rank": 15,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 43.1,
        "spm": 22,
        "rank": 7,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.1,
        "spm": 20,
        "rank": 9,
        "of": 45
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 42.3,
        "spm": 22,
        "rank": 3,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 40.5,
        "spm": 24,
        "rank": 5,
        "of": 45
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 39.6,
        "spm": 24,
        "rank": 4,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 36.1,
        "spm": 29,
        "rank": 4,
        "of": 43
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 36.3,
        "spm": 28,
        "rank": 3,
        "of": 43
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 35.6,
        "spm": 28,
        "rank": 5,
        "of": 43
      },
      {
        "sessionId": "2025-04-10",
        "date": "2025-04-10",
        "workoutName": "Threshold Test D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 40.0,
        "spm": 26,
        "rank": 3,
        "of": 18
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.3,
        "spm": 20,
        "rank": 9,
        "of": 41
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 33.3,
        "spm": 27,
        "rank": 2,
        "of": 33
      }
    ]
  },
  {
    "id": "johansson",
    "name": "Johansson",
    "group": "B",
    "rank": 3,
    "avgSplit": 43.3,
    "bestSplit": 38.3,
    "bestSplitDate": "2025-03-13",
    "sessionCount": 15,
    "trend": "improving",
    "trendDelta": -2.6,
    "consistency": 58,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 10,
        "avgSplit": 43.3
      },
      "intervals": {
        "sessions": 5,
        "avgSplit": 41.3
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 45.6
      },
      {
        "date": "2025-01-16",
        "split": 42.9
      },
      {
        "date": "2025-01-20",
        "split": 43.9
      },
      {
        "date": "2025-01-25",
        "split": 41.5
      },
      {
        "date": "2025-01-30",
        "split": 39.4
      },
      {
        "date": "2025-02-06",
        "split": 46.1
      },
      {
        "date": "2025-02-08",
        "split": 44.1
      },
      {
        "date": "2025-02-13",
        "split": 39.8
      },
      {
        "date": "2025-02-27",
        "split": 45.3
      },
      {
        "date": "2025-03-01",
        "split": 43.9
      },
      {
        "date": "2025-03-06",
        "split": 39.8
      },
      {
        "date": "2025-03-10",
        "split": 42.5
      },
      {
        "date": "2025-03-13",
        "split": 37.6
      },
      {
        "date": "2025-03-15",
        "split": 43.9
      },
      {
        "date": "2025-03-22",
        "split": 43.2
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 45.6,
        "spm": 20,
        "rank": 1,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 42.9,
        "spm": 20,
        "rank": 1,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 43.9,
        "spm": 20,
        "rank": 1,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 41.5,
        "spm": 22,
        "rank": 1,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 39.4,
        "spm": 22,
        "rank": 1,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.1,
        "spm": 20,
        "rank": 1,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 44.1,
        "spm": 20,
        "rank": 1,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.8,
        "spm": 22,
        "rank": 1,
        "of": 46
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 45.3,
        "spm": 20,
        "rank": 2,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 43.9,
        "spm": 20,
        "rank": 1,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.8,
        "spm": 22,
        "rank": 1,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 42.5,
        "spm": 21,
        "rank": 1,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 37.6,
        "spm": 24,
        "rank": 1,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 43.9,
        "spm": 20,
        "rank": 1,
        "of": 40
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 43.2,
        "spm": 20,
        "rank": 1,
        "of": 40
      }
    ]
  },
  {
    "id": "eriksson",
    "name": "Eriksson",
    "group": "A",
    "rank": 4,
    "avgSplit": 42.4,
    "bestSplit": 34.0,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 24,
    "trend": "improving",
    "trendDelta": -4.7,
    "consistency": 92,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 13,
        "avgSplit": 44.5
      },
      "intervals": {
        "sessions": 11,
        "avgSplit": 41.1
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 47.3
      },
      {
        "date": "2025-01-16",
        "split": 47.2
      },
      {
        "date": "2025-01-20",
        "split": 44.9
      },
      {
        "date": "2025-01-25",
        "split": 44.6
      },
      {
        "date": "2025-01-30",
        "split": 42.5
      },
      {
        "date": "2025-02-06",
        "split": 46.6
      },
      {
        "date": "2025-02-08",
        "split": 44.2
      },
      {
        "date": "2025-02-13",
        "split": 42.6
      },
      {
        "date": "2025-02-20",
        "split": 39.9
      },
      {
        "date": "2025-02-22",
        "split": 46.2
      },
      {
        "date": "2025-02-27",
        "split": 49.2
      },
      {
        "date": "2025-03-06",
        "split": 41.9
      },
      {
        "date": "2025-03-10",
        "split": 44.3
      },
      {
        "date": "2025-03-13",
        "split": 39.5
      },
      {
        "date": "2025-03-15",
        "split": 45.3
      },
      {
        "date": "2025-03-20",
        "split": 36.0
      },
      {
        "date": "2025-03-22",
        "split": 44.2
      },
      {
        "date": "2025-03-27",
        "split": 36.5
      },
      {
        "date": "2025-03-29",
        "split": 46.2
      },
      {
        "date": "2025-04-03",
        "split": 35.4
      },
      {
        "date": "2025-04-10",
        "split": 40.8
      },
      {
        "date": "2025-04-17",
        "split": 45.6
      },
      {
        "date": "2025-04-19",
        "split": 45.3
      },
      {
        "date": "2025-04-23",
        "split": 34.5
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.3,
        "spm": 18,
        "rank": 2,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.2,
        "spm": 18,
        "rank": 7,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 44.9,
        "spm": 20,
        "rank": 3,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.6,
        "spm": 21,
        "rank": 5,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 42.5,
        "spm": 22,
        "rank": 5,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.6,
        "spm": 20,
        "rank": 3,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.2,
        "spm": 19,
        "rank": 2,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 42.6,
        "spm": 22,
        "rank": 5,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 39.9,
        "spm": 24,
        "rank": 2,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.2,
        "spm": 19,
        "rank": 3,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 49.2,
        "spm": 20,
        "rank": 17,
        "of": 45
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 41.9,
        "spm": 22,
        "rank": 4,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.3,
        "spm": 20,
        "rank": 2,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 39.5,
        "spm": 24,
        "rank": 3,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 45.3,
        "spm": 20,
        "rank": 2,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 36.0,
        "spm": 30,
        "rank": 3,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.2,
        "spm": 20,
        "rank": 2,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 36.5,
        "spm": 30,
        "rank": 5,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.2,
        "spm": 22,
        "rank": 8,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 35.4,
        "spm": 32,
        "rank": 4,
        "of": 43
      },
      {
        "sessionId": "2025-04-10",
        "date": "2025-04-10",
        "workoutName": "Threshold Test D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 40.8,
        "spm": 28,
        "rank": 6,
        "of": 18
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 45.6,
        "spm": 20,
        "rank": 3,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 45.3,
        "spm": 20,
        "rank": 2,
        "of": 40
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 34.5,
        "spm": 27,
        "rank": 3,
        "of": 33
      }
    ]
  },
  {
    "id": "hayes",
    "name": "Hayes",
    "group": "A",
    "rank": 5,
    "avgSplit": 43.6,
    "bestSplit": 36.9,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 14,
    "trend": "improving",
    "trendDelta": -6.7,
    "consistency": 54,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 4,
        "avgSplit": 44.0
      },
      "intervals": {
        "sessions": 10,
        "avgSplit": 42.8
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 47.9
      },
      {
        "date": "2025-01-25",
        "split": 45.6
      },
      {
        "date": "2025-01-30",
        "split": 43.9
      },
      {
        "date": "2025-02-13",
        "split": 46.4
      },
      {
        "date": "2025-02-20",
        "split": 42.7
      },
      {
        "date": "2025-02-27",
        "split": 46.7
      },
      {
        "date": "2025-03-06",
        "split": 45.5
      },
      {
        "date": "2025-03-13",
        "split": 43.0
      },
      {
        "date": "2025-03-20",
        "split": 39.0
      },
      {
        "date": "2025-03-27",
        "split": 39.6
      },
      {
        "date": "2025-03-29",
        "split": 46.1
      },
      {
        "date": "2025-04-03",
        "split": 38.5
      },
      {
        "date": "2025-04-10",
        "split": 42.4
      },
      {
        "date": "2025-04-23",
        "split": 36.4
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.9,
        "spm": 20,
        "rank": 8,
        "of": 51
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 45.6,
        "spm": 22,
        "rank": 13,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 43.9,
        "spm": 22,
        "rank": 11,
        "of": 52
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.4,
        "spm": 22,
        "rank": 19,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 42.7,
        "spm": 24,
        "rank": 13,
        "of": 45
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.7,
        "spm": 20,
        "rank": 7,
        "of": 45
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 45.5,
        "spm": 22,
        "rank": 13,
        "of": 43
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 43.0,
        "spm": 24,
        "rank": 11,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 39.0,
        "spm": 27,
        "rank": 16,
        "of": 43
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 39.6,
        "spm": 27,
        "rank": 16,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.1,
        "spm": 22,
        "rank": 6,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 38.5,
        "spm": 27,
        "rank": 13,
        "of": 43
      },
      {
        "sessionId": "2025-04-10",
        "date": "2025-04-10",
        "workoutName": "Threshold Test D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 42.4,
        "spm": 25,
        "rank": 10,
        "of": 18
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 36.4,
        "spm": 26,
        "rank": 9,
        "of": 33
      }
    ]
  },
  {
    "id": "foster",
    "name": "Foster",
    "group": "A",
    "rank": 6,
    "avgSplit": 42.9,
    "bestSplit": 34.6,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 26,
    "trend": "improving",
    "trendDelta": -4.6,
    "consistency": 100,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 14,
        "avgSplit": 44.9
      },
      "intervals": {
        "sessions": 12,
        "avgSplit": 41.2
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 48.3
      },
      {
        "date": "2025-01-16",
        "split": 46.8
      },
      {
        "date": "2025-01-20",
        "split": 44.4
      },
      {
        "date": "2025-01-25",
        "split": 44.0
      },
      {
        "date": "2025-01-30",
        "split": 42.1
      },
      {
        "date": "2025-02-06",
        "split": 46.4
      },
      {
        "date": "2025-02-08",
        "split": 46.5
      },
      {
        "date": "2025-02-13",
        "split": 42.4
      },
      {
        "date": "2025-02-20",
        "split": 40.9
      },
      {
        "date": "2025-02-22",
        "split": 45.7
      },
      {
        "date": "2025-02-27",
        "split": 45.9
      },
      {
        "date": "2025-03-01",
        "split": 45.0
      },
      {
        "date": "2025-03-06",
        "split": 42.0
      },
      {
        "date": "2025-03-10",
        "split": 45.3
      },
      {
        "date": "2025-03-13",
        "split": 40.5
      },
      {
        "date": "2025-03-15",
        "split": 45.7
      },
      {
        "date": "2025-03-20",
        "split": 36.9
      },
      {
        "date": "2025-03-22",
        "split": 45.5
      },
      {
        "date": "2025-03-27",
        "split": 36.7
      },
      {
        "date": "2025-03-29",
        "split": 43.8
      },
      {
        "date": "2025-04-03",
        "split": 35.7
      },
      {
        "date": "2025-04-10",
        "split": 40.2
      },
      {
        "date": "2025-04-17",
        "split": 45.7
      },
      {
        "date": "2025-04-19",
        "split": 45.4
      },
      {
        "date": "2025-04-21",
        "split": 45.5
      },
      {
        "date": "2025-04-23",
        "split": 34.9
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.3,
        "spm": 18,
        "rank": 10,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.8,
        "spm": 18,
        "rank": 4,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 44.4,
        "spm": 20,
        "rank": 2,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.0,
        "spm": 21,
        "rank": 2,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 42.1,
        "spm": 22,
        "rank": 2,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.4,
        "spm": 20,
        "rank": 2,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.5,
        "spm": 19,
        "rank": 5,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 42.4,
        "spm": 22,
        "rank": 4,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 40.9,
        "spm": 24,
        "rank": 8,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 45.7,
        "spm": 19,
        "rank": 2,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 45.9,
        "spm": 20,
        "rank": 4,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 45.0,
        "spm": 20,
        "rank": 2,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 42.0,
        "spm": 22,
        "rank": 5,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 45.3,
        "spm": 20,
        "rank": 3,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 40.5,
        "spm": 24,
        "rank": 7,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 45.7,
        "spm": 20,
        "rank": 3,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 36.9,
        "spm": 30,
        "rank": 6,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 45.5,
        "spm": 20,
        "rank": 3,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 36.7,
        "spm": 30,
        "rank": 6,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 43.8,
        "spm": 22,
        "rank": 3,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 35.7,
        "spm": 30,
        "rank": 6,
        "of": 43
      },
      {
        "sessionId": "2025-04-10",
        "date": "2025-04-10",
        "workoutName": "Threshold Test D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 40.2,
        "spm": 28,
        "rank": 4,
        "of": 18
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 45.7,
        "spm": 20,
        "rank": 4,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 45.4,
        "spm": 20,
        "rank": 3,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 45.5,
        "spm": 20,
        "rank": 1,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 34.9,
        "spm": 27,
        "rank": 5,
        "of": 33
      }
    ]
  },
  {
    "id": "park",
    "name": "Park",
    "group": "B",
    "rank": 7,
    "avgSplit": 44.1,
    "bestSplit": 34.9,
    "bestSplitDate": "2025-04-03",
    "sessionCount": 24,
    "trend": "improving",
    "trendDelta": -1.9,
    "consistency": 92,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 14,
        "avgSplit": 44.8
      },
      "intervals": {
        "sessions": 10,
        "avgSplit": 41.1
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 48.2
      },
      {
        "date": "2025-01-16",
        "split": 48.0
      },
      {
        "date": "2025-01-20",
        "split": 44.5
      },
      {
        "date": "2025-01-25",
        "split": 44.3
      },
      {
        "date": "2025-01-30",
        "split": 41.6
      },
      {
        "date": "2025-02-06",
        "split": 47.1
      },
      {
        "date": "2025-02-08",
        "split": 48.6
      },
      {
        "date": "2025-02-13",
        "split": 41.1
      },
      {
        "date": "2025-02-20",
        "split": 39.5
      },
      {
        "date": "2025-02-22",
        "split": 46.5
      },
      {
        "date": "2025-02-27",
        "split": 44.7
      },
      {
        "date": "2025-03-01",
        "split": 44.8
      },
      {
        "date": "2025-03-06",
        "split": 40.9
      },
      {
        "date": "2025-03-10",
        "split": 44.8
      },
      {
        "date": "2025-03-13",
        "split": 39.5
      },
      {
        "date": "2025-03-15",
        "split": 45.8
      },
      {
        "date": "2025-03-20",
        "split": 35.7
      },
      {
        "date": "2025-03-22",
        "split": 43.7
      },
      {
        "date": "2025-03-27",
        "split": 35.1
      },
      {
        "date": "2025-03-29",
        "split": 44.8
      },
      {
        "date": "2025-04-03",
        "split": 34.1
      },
      {
        "date": "2025-04-17",
        "split": 45.7
      },
      {
        "date": "2025-04-19",
        "split": 44.6
      },
      {
        "date": "2025-04-21",
        "split": 44.8
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.2,
        "spm": 18,
        "rank": 4,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.0,
        "spm": 17,
        "rank": 10,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.5,
        "spm": 20,
        "rank": 2,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.3,
        "spm": 22,
        "rank": 3,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 41.6,
        "spm": 22,
        "rank": 2,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.1,
        "spm": 20,
        "rank": 3,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.6,
        "spm": 19,
        "rank": 17,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 41.1,
        "spm": 22,
        "rank": 2,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.5,
        "spm": 24,
        "rank": 1,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.5,
        "spm": 19,
        "rank": 2,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.7,
        "spm": 20,
        "rank": 1,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 44.8,
        "spm": 20,
        "rank": 2,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 40.9,
        "spm": 22,
        "rank": 2,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 44.8,
        "spm": 20,
        "rank": 2,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.5,
        "spm": 24,
        "rank": 2,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 45.8,
        "spm": 20,
        "rank": 2,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 35.7,
        "spm": 28,
        "rank": 1,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 43.7,
        "spm": 20,
        "rank": 2,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 35.1,
        "spm": 28,
        "rank": 1,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.8,
        "spm": 22,
        "rank": 1,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 34.1,
        "spm": 29,
        "rank": 1,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 45.7,
        "spm": 20,
        "rank": 4,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 44.6,
        "spm": 20,
        "rank": 1,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.8,
        "spm": 20,
        "rank": 3,
        "of": 37
      }
    ]
  },
  {
    "id": "rivera",
    "name": "Rivera",
    "group": "A",
    "rank": 8,
    "avgSplit": 42.6,
    "bestSplit": 31.7,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 26,
    "trend": "improving",
    "trendDelta": -5.6,
    "consistency": 100,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 14,
        "avgSplit": 45.7
      },
      "intervals": {
        "sessions": 12,
        "avgSplit": 40.6
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 47.7
      },
      {
        "date": "2025-01-16",
        "split": 46.8
      },
      {
        "date": "2025-01-20",
        "split": 48.0
      },
      {
        "date": "2025-01-25",
        "split": 44.8
      },
      {
        "date": "2025-01-30",
        "split": 42.4
      },
      {
        "date": "2025-02-06",
        "split": 47.0
      },
      {
        "date": "2025-02-08",
        "split": 47.8
      },
      {
        "date": "2025-02-13",
        "split": 41.4
      },
      {
        "date": "2025-02-20",
        "split": 39.9
      },
      {
        "date": "2025-02-22",
        "split": 49.3
      },
      {
        "date": "2025-02-27",
        "split": 45.7
      },
      {
        "date": "2025-03-01",
        "split": 46.5
      },
      {
        "date": "2025-03-06",
        "split": 40.8
      },
      {
        "date": "2025-03-10",
        "split": 46.7
      },
      {
        "date": "2025-03-13",
        "split": 39.3
      },
      {
        "date": "2025-03-15",
        "split": 47.2
      },
      {
        "date": "2025-03-20",
        "split": 34.5
      },
      {
        "date": "2025-03-22",
        "split": 46.5
      },
      {
        "date": "2025-03-27",
        "split": 35.1
      },
      {
        "date": "2025-03-29",
        "split": 44.1
      },
      {
        "date": "2025-04-03",
        "split": 34.0
      },
      {
        "date": "2025-04-10",
        "split": 39.7
      },
      {
        "date": "2025-04-17",
        "split": 46.3
      },
      {
        "date": "2025-04-19",
        "split": 47.1
      },
      {
        "date": "2025-04-21",
        "split": 46.2
      },
      {
        "date": "2025-04-23",
        "split": 32.5
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.7,
        "spm": 20,
        "rank": 5,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.8,
        "spm": 20,
        "rank": 5,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 48.0,
        "spm": 20,
        "rank": 10,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.8,
        "spm": 22,
        "rank": 7,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 42.4,
        "spm": 22,
        "rank": 3,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.0,
        "spm": 20,
        "rank": 4,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.8,
        "spm": 20,
        "rank": 13,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 41.4,
        "spm": 22,
        "rank": 2,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 39.9,
        "spm": 24,
        "rank": 3,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.3,
        "spm": 19,
        "rank": 14,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 45.7,
        "spm": 20,
        "rank": 2,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.5,
        "spm": 20,
        "rank": 6,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 40.8,
        "spm": 22,
        "rank": 2,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.7,
        "spm": 20,
        "rank": 5,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 39.3,
        "spm": 24,
        "rank": 2,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.2,
        "spm": 19,
        "rank": 7,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 34.5,
        "spm": 27,
        "rank": 2,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.5,
        "spm": 20,
        "rank": 5,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 35.1,
        "spm": 27,
        "rank": 2,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 44.1,
        "spm": 22,
        "rank": 4,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 34.0,
        "spm": 29,
        "rank": 2,
        "of": 43
      },
      {
        "sessionId": "2025-04-10",
        "date": "2025-04-10",
        "workoutName": "Threshold Test D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 39.7,
        "spm": 26,
        "rank": 2,
        "of": 18
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.3,
        "spm": 19,
        "rank": 7,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.1,
        "spm": 20,
        "rank": 9,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.2,
        "spm": 20,
        "rank": 4,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 32.5,
        "spm": 28,
        "rank": 1,
        "of": 33
      }
    ]
  },
  {
    "id": "hartmann",
    "name": "Hartmann",
    "group": "B",
    "rank": 9,
    "avgSplit": 43.6,
    "bestSplit": 34.6,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 25,
    "trend": "improving",
    "trendDelta": -4.6,
    "consistency": 96,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 14,
        "avgSplit": 45.6
      },
      "intervals": {
        "sessions": 11,
        "avgSplit": 41.8
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 47.7
      },
      {
        "date": "2025-01-16",
        "split": 46.8
      },
      {
        "date": "2025-01-20",
        "split": 46.0
      },
      {
        "date": "2025-01-25",
        "split": 44.9
      },
      {
        "date": "2025-01-30",
        "split": 43.8
      },
      {
        "date": "2025-02-06",
        "split": 48.7
      },
      {
        "date": "2025-02-08",
        "split": 46.0
      },
      {
        "date": "2025-02-13",
        "split": 44.0
      },
      {
        "date": "2025-02-20",
        "split": 41.3
      },
      {
        "date": "2025-02-22",
        "split": 47.5
      },
      {
        "date": "2025-02-27",
        "split": 46.1
      },
      {
        "date": "2025-03-01",
        "split": 45.6
      },
      {
        "date": "2025-03-06",
        "split": 42.5
      },
      {
        "date": "2025-03-10",
        "split": 46.3
      },
      {
        "date": "2025-03-13",
        "split": 40.6
      },
      {
        "date": "2025-03-15",
        "split": 46.8
      },
      {
        "date": "2025-03-20",
        "split": 36.4
      },
      {
        "date": "2025-03-22",
        "split": 46.5
      },
      {
        "date": "2025-03-27",
        "split": 36.6
      },
      {
        "date": "2025-03-29",
        "split": 45.6
      },
      {
        "date": "2025-04-03",
        "split": 36.3
      },
      {
        "date": "2025-04-17",
        "split": 45.3
      },
      {
        "date": "2025-04-19",
        "split": 46.2
      },
      {
        "date": "2025-04-21",
        "split": 45.5
      },
      {
        "date": "2025-04-23",
        "split": 34.9
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.7,
        "spm": 18,
        "rank": 2,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.8,
        "spm": 20,
        "rank": 4,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.0,
        "spm": 20,
        "rank": 5,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 44.9,
        "spm": 21,
        "rank": 4,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 43.8,
        "spm": 22,
        "rank": 9,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.7,
        "spm": 20,
        "rank": 12,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.0,
        "spm": 20,
        "rank": 4,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.0,
        "spm": 22,
        "rank": 11,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 41.3,
        "spm": 24,
        "rank": 5,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.5,
        "spm": 19,
        "rank": 5,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.1,
        "spm": 20,
        "rank": 6,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 45.6,
        "spm": 20,
        "rank": 4,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 42.5,
        "spm": 22,
        "rank": 6,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.3,
        "spm": 20,
        "rank": 3,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 40.6,
        "spm": 24,
        "rank": 5,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.8,
        "spm": 20,
        "rank": 3,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 36.4,
        "spm": 29,
        "rank": 2,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.5,
        "spm": 20,
        "rank": 4,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 36.6,
        "spm": 29,
        "rank": 2,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 45.6,
        "spm": 22,
        "rank": 3,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 36.3,
        "spm": 29,
        "rank": 3,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 45.3,
        "spm": 20,
        "rank": 2,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.2,
        "spm": 20,
        "rank": 6,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 45.5,
        "spm": 20,
        "rank": 7,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 34.9,
        "spm": 27,
        "rank": 3,
        "of": 33
      }
    ]
  },
  {
    "id": "brandt",
    "name": "Brandt",
    "group": "A",
    "rank": 10,
    "avgSplit": 44.2,
    "bestSplit": 35.4,
    "bestSplitDate": "2025-04-03",
    "sessionCount": 22,
    "trend": "improving",
    "trendDelta": -0.9,
    "consistency": 85,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 12,
        "avgSplit": 45.9
      },
      "intervals": {
        "sessions": 10,
        "avgSplit": 41.6
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-20",
        "split": 48.5
      },
      {
        "date": "2025-01-25",
        "split": 45.1
      },
      {
        "date": "2025-01-30",
        "split": 42.4
      },
      {
        "date": "2025-02-06",
        "split": 48.2
      },
      {
        "date": "2025-02-08",
        "split": 47.3
      },
      {
        "date": "2025-02-13",
        "split": 42.8
      },
      {
        "date": "2025-02-20",
        "split": 40.4
      },
      {
        "date": "2025-02-22",
        "split": 48.6
      },
      {
        "date": "2025-02-27",
        "split": 46.0
      },
      {
        "date": "2025-03-01",
        "split": 47.0
      },
      {
        "date": "2025-03-06",
        "split": 42.2
      },
      {
        "date": "2025-03-10",
        "split": 47.1
      },
      {
        "date": "2025-03-13",
        "split": 40.0
      },
      {
        "date": "2025-03-15",
        "split": 48.5
      },
      {
        "date": "2025-03-20",
        "split": 36.2
      },
      {
        "date": "2025-03-22",
        "split": 48.5
      },
      {
        "date": "2025-03-27",
        "split": 36.4
      },
      {
        "date": "2025-03-29",
        "split": 43.6
      },
      {
        "date": "2025-04-03",
        "split": 35.2
      },
      {
        "date": "2025-04-10",
        "split": 40.4
      },
      {
        "date": "2025-04-17",
        "split": 46.1
      },
      {
        "date": "2025-04-19",
        "split": 46.9
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 48.5,
        "spm": 20,
        "rank": 15,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 45.1,
        "spm": 22,
        "rank": 9,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 42.4,
        "spm": 22,
        "rank": 4,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.2,
        "spm": 20,
        "rank": 10,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.3,
        "spm": 20,
        "rank": 10,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 42.8,
        "spm": 22,
        "rank": 6,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 40.4,
        "spm": 24,
        "rank": 4,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.6,
        "spm": 19,
        "rank": 8,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.0,
        "spm": 20,
        "rank": 5,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.0,
        "spm": 20,
        "rank": 9,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 42.2,
        "spm": 22,
        "rank": 6,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.1,
        "spm": 20,
        "rank": 7,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 40.0,
        "spm": 24,
        "rank": 5,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.5,
        "spm": 20,
        "rank": 15,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 36.2,
        "spm": 28,
        "rank": 5,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.5,
        "spm": 20,
        "rank": 15,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 36.4,
        "spm": 28,
        "rank": 4,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 43.6,
        "spm": 22,
        "rank": 1,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 35.2,
        "spm": 29,
        "rank": 3,
        "of": 43
      },
      {
        "sessionId": "2025-04-10",
        "date": "2025-04-10",
        "workoutName": "Threshold Test D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 40.4,
        "spm": 26,
        "rank": 5,
        "of": 18
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.1,
        "spm": 20,
        "rank": 6,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.9,
        "spm": 20,
        "rank": 7,
        "of": 40
      }
    ]
  },
  {
    "id": "hawkins",
    "name": "Hawkins",
    "group": "B",
    "rank": 11,
    "avgSplit": 43.8,
    "bestSplit": 33.2,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 21,
    "trend": "improving",
    "trendDelta": -5.4,
    "consistency": 81,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 12,
        "avgSplit": 45.8
      },
      "intervals": {
        "sessions": 9,
        "avgSplit": 41.8
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 48.2
      },
      {
        "date": "2025-01-16",
        "split": 47.0
      },
      {
        "date": "2025-01-20",
        "split": 48.2
      },
      {
        "date": "2025-01-25",
        "split": 43.7
      },
      {
        "date": "2025-01-30",
        "split": 42.3
      },
      {
        "date": "2025-02-06",
        "split": 47.2
      },
      {
        "date": "2025-02-08",
        "split": 47.9
      },
      {
        "date": "2025-02-13",
        "split": 42.9
      },
      {
        "date": "2025-02-20",
        "split": 40.2
      },
      {
        "date": "2025-02-22",
        "split": 49.5
      },
      {
        "date": "2025-02-27",
        "split": 46.2
      },
      {
        "date": "2025-03-01",
        "split": 47.8
      },
      {
        "date": "2025-03-06",
        "split": 41.6
      },
      {
        "date": "2025-03-10",
        "split": 46.9
      },
      {
        "date": "2025-03-13",
        "split": 39.8
      },
      {
        "date": "2025-03-27",
        "split": 37.0
      },
      {
        "date": "2025-04-03",
        "split": 35.7
      },
      {
        "date": "2025-04-17",
        "split": 46.5
      },
      {
        "date": "2025-04-19",
        "split": 47.3
      },
      {
        "date": "2025-04-21",
        "split": 46.4
      },
      {
        "date": "2025-04-23",
        "split": 33.5
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.2,
        "spm": 20,
        "rank": 5,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.0,
        "spm": 20,
        "rank": 6,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 48.2,
        "spm": 20,
        "rank": 11,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 43.7,
        "spm": 22,
        "rank": 2,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 42.3,
        "spm": 22,
        "rank": 3,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.2,
        "spm": 20,
        "rank": 4,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.9,
        "spm": 20,
        "rank": 14,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 42.9,
        "spm": 22,
        "rank": 5,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 40.2,
        "spm": 24,
        "rank": 3,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.5,
        "spm": 19,
        "rank": 19,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.2,
        "spm": 21,
        "rank": 8,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.8,
        "spm": 20,
        "rank": 15,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 41.6,
        "spm": 22,
        "rank": 3,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.9,
        "spm": 20,
        "rank": 7,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.8,
        "spm": 24,
        "rank": 3,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 37.0,
        "spm": 26,
        "rank": 4,
        "of": 43
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 35.7,
        "spm": 28,
        "rank": 2,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.5,
        "spm": 20,
        "rank": 10,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.3,
        "spm": 20,
        "rank": 11,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.4,
        "spm": 20,
        "rank": 11,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 33.5,
        "spm": 28,
        "rank": 1,
        "of": 33
      }
    ]
  },
  {
    "id": "okafor",
    "name": "Okafor",
    "group": "B",
    "rank": 12,
    "avgSplit": 43.2,
    "bestSplit": 33.7,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 24,
    "trend": "improving",
    "trendDelta": -5.6,
    "consistency": 92,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 14,
        "avgSplit": 46.2
      },
      "intervals": {
        "sessions": 10,
        "avgSplit": 41.4
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 49.3
      },
      {
        "date": "2025-01-16",
        "split": 46.1
      },
      {
        "date": "2025-01-20",
        "split": 47.1
      },
      {
        "date": "2025-01-25",
        "split": 44.9
      },
      {
        "date": "2025-01-30",
        "split": 43.0
      },
      {
        "date": "2025-02-06",
        "split": 48.5
      },
      {
        "date": "2025-02-08",
        "split": 46.9
      },
      {
        "date": "2025-02-13",
        "split": 42.6
      },
      {
        "date": "2025-02-20",
        "split": 41.0
      },
      {
        "date": "2025-02-22",
        "split": 49.1
      },
      {
        "date": "2025-02-27",
        "split": 47.0
      },
      {
        "date": "2025-03-01",
        "split": 47.6
      },
      {
        "date": "2025-03-06",
        "split": 42.1
      },
      {
        "date": "2025-03-10",
        "split": 47.2
      },
      {
        "date": "2025-03-13",
        "split": 40.8
      },
      {
        "date": "2025-03-15",
        "split": 47.9
      },
      {
        "date": "2025-03-20",
        "split": 36.9
      },
      {
        "date": "2025-03-22",
        "split": 46.8
      },
      {
        "date": "2025-03-27",
        "split": 36.9
      },
      {
        "date": "2025-04-03",
        "split": 36.7
      },
      {
        "date": "2025-04-17",
        "split": 46.3
      },
      {
        "date": "2025-04-19",
        "split": 46.2
      },
      {
        "date": "2025-04-21",
        "split": 44.7
      },
      {
        "date": "2025-04-23",
        "split": 34.7
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.3,
        "spm": 20,
        "rank": 16,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.1,
        "spm": 20,
        "rank": 2,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 47.1,
        "spm": 20,
        "rank": 9,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 44.9,
        "spm": 22,
        "rank": 5,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 43.0,
        "spm": 22,
        "rank": 5,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.5,
        "spm": 20,
        "rank": 11,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.9,
        "spm": 20,
        "rank": 8,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 42.6,
        "spm": 22,
        "rank": 4,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 41.0,
        "spm": 24,
        "rank": 4,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.1,
        "spm": 19,
        "rank": 15,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 47.0,
        "spm": 18,
        "rank": 10,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.6,
        "spm": 20,
        "rank": 14,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 42.1,
        "spm": 22,
        "rank": 5,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.2,
        "spm": 20,
        "rank": 11,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 40.8,
        "spm": 24,
        "rank": 6,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.9,
        "spm": 20,
        "rank": 14,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 36.9,
        "spm": 29,
        "rank": 3,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.8,
        "spm": 20,
        "rank": 6,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 36.9,
        "spm": 28,
        "rank": 3,
        "of": 43
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 36.7,
        "spm": 29,
        "rank": 4,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.3,
        "spm": 19,
        "rank": 6,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.2,
        "spm": 20,
        "rank": 5,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.7,
        "spm": 20,
        "rank": 2,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 34.7,
        "spm": 27,
        "rank": 2,
        "of": 33
      }
    ]
  },
  {
    "id": "novak",
    "name": "Novak",
    "group": "A",
    "rank": 13,
    "avgSplit": 43.1,
    "bestSplit": 35.4,
    "bestSplitDate": "2025-04-03",
    "sessionCount": 21,
    "trend": "improving",
    "trendDelta": -3.6,
    "consistency": 81,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 13,
        "avgSplit": 45.8
      },
      "intervals": {
        "sessions": 8,
        "avgSplit": 42.4
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 47.7
      },
      {
        "date": "2025-01-16",
        "split": 45.9
      },
      {
        "date": "2025-01-20",
        "split": 46.5
      },
      {
        "date": "2025-01-25",
        "split": 44.6
      },
      {
        "date": "2025-01-30",
        "split": 43.0
      },
      {
        "date": "2025-02-06",
        "split": 47.8
      },
      {
        "date": "2025-02-08",
        "split": 47.3
      },
      {
        "date": "2025-02-13",
        "split": 43.0
      },
      {
        "date": "2025-02-20",
        "split": 40.5
      },
      {
        "date": "2025-02-22",
        "split": 48.1
      },
      {
        "date": "2025-02-27",
        "split": 45.9
      },
      {
        "date": "2025-03-01",
        "split": 46.2
      },
      {
        "date": "2025-03-06",
        "split": 41.9
      },
      {
        "date": "2025-03-10",
        "split": 47.8
      },
      {
        "date": "2025-03-20",
        "split": 37.7
      },
      {
        "date": "2025-03-22",
        "split": 47.9
      },
      {
        "date": "2025-03-27",
        "split": 37.4
      },
      {
        "date": "2025-03-29",
        "split": 46.1
      },
      {
        "date": "2025-04-03",
        "split": 36.8
      },
      {
        "date": "2025-04-17",
        "split": 45.9
      },
      {
        "date": "2025-04-19",
        "split": 46.6
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.7,
        "spm": 20,
        "rank": 6,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 45.9,
        "spm": 20,
        "rank": 2,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.5,
        "spm": 20,
        "rank": 5,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.6,
        "spm": 22,
        "rank": 6,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 43.0,
        "spm": 22,
        "rank": 6,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.8,
        "spm": 20,
        "rank": 6,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.3,
        "spm": 20,
        "rank": 9,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 43.0,
        "spm": 22,
        "rank": 7,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 40.5,
        "spm": 24,
        "rank": 6,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.1,
        "spm": 20,
        "rank": 5,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 45.9,
        "spm": 20,
        "rank": 3,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.2,
        "spm": 20,
        "rank": 4,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 41.9,
        "spm": 22,
        "rank": 3,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.8,
        "spm": 20,
        "rank": 10,
        "of": 42
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 37.7,
        "spm": 28,
        "rank": 11,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.9,
        "spm": 20,
        "rank": 10,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 37.4,
        "spm": 28,
        "rank": 7,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.1,
        "spm": 22,
        "rank": 7,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 36.8,
        "spm": 30,
        "rank": 8,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 45.9,
        "spm": 20,
        "rank": 5,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.6,
        "spm": 21,
        "rank": 5,
        "of": 40
      }
    ]
  },
  {
    "id": "webb",
    "name": "Webb",
    "group": "A",
    "rank": 14,
    "avgSplit": 43.7,
    "bestSplit": 36.2,
    "bestSplitDate": "2025-03-20",
    "sessionCount": 18,
    "trend": "improving",
    "trendDelta": -4.1,
    "consistency": 69,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 11,
        "avgSplit": 46.3
      },
      "intervals": {
        "sessions": 7,
        "avgSplit": 42.7
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 48.2
      },
      {
        "date": "2025-01-16",
        "split": 47.2
      },
      {
        "date": "2025-01-20",
        "split": 46.8
      },
      {
        "date": "2025-01-25",
        "split": 44.9
      },
      {
        "date": "2025-01-30",
        "split": 43.3
      },
      {
        "date": "2025-02-06",
        "split": 47.7
      },
      {
        "date": "2025-02-08",
        "split": 46.2
      },
      {
        "date": "2025-02-13",
        "split": 43.3
      },
      {
        "date": "2025-02-20",
        "split": 40.8
      },
      {
        "date": "2025-02-22",
        "split": 47.2
      },
      {
        "date": "2025-02-27",
        "split": 46.2
      },
      {
        "date": "2025-03-01",
        "split": 45.7
      },
      {
        "date": "2025-03-06",
        "split": 44.5
      },
      {
        "date": "2025-03-10",
        "split": 46.0
      },
      {
        "date": "2025-03-13",
        "split": 40.0
      },
      {
        "date": "2025-03-15",
        "split": 46.6
      },
      {
        "date": "2025-03-20",
        "split": 37.4
      },
      {
        "date": "2025-03-22",
        "split": 45.9
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.2,
        "spm": 20,
        "rank": 9,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.2,
        "spm": 20,
        "rank": 8,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.8,
        "spm": 20,
        "rank": 6,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.9,
        "spm": 22,
        "rank": 8,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 43.3,
        "spm": 22,
        "rank": 8,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.7,
        "spm": 20,
        "rank": 5,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.2,
        "spm": 20,
        "rank": 3,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 43.3,
        "spm": 22,
        "rank": 8,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 40.8,
        "spm": 24,
        "rank": 7,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.2,
        "spm": 19,
        "rank": 4,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.2,
        "spm": 20,
        "rank": 6,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 45.7,
        "spm": 20,
        "rank": 3,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 44.5,
        "spm": 22,
        "rank": 9,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.0,
        "spm": 20,
        "rank": 4,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 40.0,
        "spm": 24,
        "rank": 6,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.6,
        "spm": 20,
        "rank": 5,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 37.4,
        "spm": 28,
        "rank": 8,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 45.9,
        "spm": 20,
        "rank": 4,
        "of": 40
      }
    ]
  },
  {
    "id": "tanaka",
    "name": "Tanaka",
    "group": "B",
    "rank": 15,
    "avgSplit": 43.5,
    "bestSplit": 34.1,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 24,
    "trend": "improving",
    "trendDelta": -4.4,
    "consistency": 92,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 14,
        "avgSplit": 46.5
      },
      "intervals": {
        "sessions": 10,
        "avgSplit": 42.6
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 48.4
      },
      {
        "date": "2025-01-16",
        "split": 46.6
      },
      {
        "date": "2025-01-20",
        "split": 48.3
      },
      {
        "date": "2025-01-25",
        "split": 46.7
      },
      {
        "date": "2025-01-30",
        "split": 43.6
      },
      {
        "date": "2025-02-06",
        "split": 49.3
      },
      {
        "date": "2025-02-08",
        "split": 47.6
      },
      {
        "date": "2025-02-20",
        "split": 42.6
      },
      {
        "date": "2025-02-22",
        "split": 49.3
      },
      {
        "date": "2025-02-27",
        "split": 47.4
      },
      {
        "date": "2025-03-01",
        "split": 46.7
      },
      {
        "date": "2025-03-06",
        "split": 43.1
      },
      {
        "date": "2025-03-10",
        "split": 47.2
      },
      {
        "date": "2025-03-13",
        "split": 41.7
      },
      {
        "date": "2025-03-15",
        "split": 47.1
      },
      {
        "date": "2025-03-20",
        "split": 37.0
      },
      {
        "date": "2025-03-22",
        "split": 47.3
      },
      {
        "date": "2025-03-27",
        "split": 37.1
      },
      {
        "date": "2025-03-29",
        "split": 46.7
      },
      {
        "date": "2025-04-03",
        "split": 36.9
      },
      {
        "date": "2025-04-17",
        "split": 46.4
      },
      {
        "date": "2025-04-19",
        "split": 47.8
      },
      {
        "date": "2025-04-21",
        "split": 46.9
      },
      {
        "date": "2025-04-23",
        "split": 35.5
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.4,
        "spm": 20,
        "rank": 7,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.6,
        "spm": 20,
        "rank": 3,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 48.3,
        "spm": 21,
        "rank": 13,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.7,
        "spm": 20,
        "rank": 15,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 43.6,
        "spm": 22,
        "rank": 7,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.3,
        "spm": 20,
        "rank": 16,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.6,
        "spm": 20,
        "rank": 12,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 42.6,
        "spm": 24,
        "rank": 10,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.3,
        "spm": 19,
        "rank": 16,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 47.4,
        "spm": 20,
        "rank": 17,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.7,
        "spm": 20,
        "rank": 7,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 43.1,
        "spm": 22,
        "rank": 9,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.2,
        "spm": 20,
        "rank": 12,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 41.7,
        "spm": 24,
        "rank": 9,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.1,
        "spm": 20,
        "rank": 8,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 37.0,
        "spm": 28,
        "rank": 4,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.3,
        "spm": 20,
        "rank": 10,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 37.1,
        "spm": 28,
        "rank": 5,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.7,
        "spm": 22,
        "rank": 14,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 36.9,
        "spm": 28,
        "rank": 5,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.4,
        "spm": 20,
        "rank": 9,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.8,
        "spm": 21,
        "rank": 17,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.9,
        "spm": 20,
        "rank": 16,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 35.5,
        "spm": 27,
        "rank": 5,
        "of": 33
      }
    ]
  },
  {
    "id": "bergman",
    "name": "Bergman",
    "group": "B",
    "rank": 16,
    "avgSplit": 43.6,
    "bestSplit": 36.6,
    "bestSplitDate": "2025-03-27",
    "sessionCount": 24,
    "trend": "improving",
    "trendDelta": -2.3,
    "consistency": 92,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 14,
        "avgSplit": 46.2
      },
      "intervals": {
        "sessions": 10,
        "avgSplit": 43.2
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 48.8
      },
      {
        "date": "2025-01-16",
        "split": 47.8
      },
      {
        "date": "2025-01-20",
        "split": 48.2
      },
      {
        "date": "2025-01-25",
        "split": 46.1
      },
      {
        "date": "2025-01-30",
        "split": 44.1
      },
      {
        "date": "2025-02-06",
        "split": 47.2
      },
      {
        "date": "2025-02-08",
        "split": 46.6
      },
      {
        "date": "2025-02-13",
        "split": 43.7
      },
      {
        "date": "2025-02-20",
        "split": 42.1
      },
      {
        "date": "2025-02-22",
        "split": 49.0
      },
      {
        "date": "2025-02-27",
        "split": 46.2
      },
      {
        "date": "2025-03-01",
        "split": 47.0
      },
      {
        "date": "2025-03-06",
        "split": 42.7
      },
      {
        "date": "2025-03-10",
        "split": 46.6
      },
      {
        "date": "2025-03-13",
        "split": 41.7
      },
      {
        "date": "2025-03-15",
        "split": 46.9
      },
      {
        "date": "2025-03-20",
        "split": 38.0
      },
      {
        "date": "2025-03-22",
        "split": 45.9
      },
      {
        "date": "2025-03-27",
        "split": 37.9
      },
      {
        "date": "2025-03-29",
        "split": 45.5
      },
      {
        "date": "2025-04-03",
        "split": 38.5
      },
      {
        "date": "2025-04-17",
        "split": 45.7
      },
      {
        "date": "2025-04-19",
        "split": 46.3
      },
      {
        "date": "2025-04-21",
        "split": 46.0
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.8,
        "spm": 20,
        "rank": 10,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.8,
        "spm": 20,
        "rank": 8,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 48.2,
        "spm": 20,
        "rank": 10,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.1,
        "spm": 22,
        "rank": 14,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 44.1,
        "spm": 22,
        "rank": 10,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.2,
        "spm": 20,
        "rank": 5,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.6,
        "spm": 20,
        "rank": 6,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 43.7,
        "spm": 22,
        "rank": 10,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 42.1,
        "spm": 24,
        "rank": 6,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.0,
        "spm": 19,
        "rank": 11,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.2,
        "spm": 20,
        "rank": 7,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.0,
        "spm": 20,
        "rank": 11,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 42.7,
        "spm": 22,
        "rank": 7,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.6,
        "spm": 20,
        "rank": 4,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 41.7,
        "spm": 24,
        "rank": 8,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.9,
        "spm": 20,
        "rank": 4,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 38.0,
        "spm": 28,
        "rank": 5,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 45.9,
        "spm": 20,
        "rank": 3,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 37.9,
        "spm": 28,
        "rank": 6,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 45.5,
        "spm": 22,
        "rank": 2,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 38.5,
        "spm": 29,
        "rank": 11,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 45.7,
        "spm": 20,
        "rank": 5,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.3,
        "spm": 21,
        "rank": 7,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.0,
        "spm": 20,
        "rank": 9,
        "of": 37
      }
    ]
  },
  {
    "id": "van-berg",
    "name": "Van Berg",
    "group": "B",
    "rank": 17,
    "avgSplit": 46.4,
    "bestSplit": 37.8,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 24,
    "trend": "improving",
    "trendDelta": -4.8,
    "consistency": 92,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 14,
        "avgSplit": 46.6
      },
      "intervals": {
        "sessions": 10,
        "avgSplit": 42.8
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 48.3
      },
      {
        "date": "2025-01-16",
        "split": 48.8
      },
      {
        "date": "2025-01-20",
        "split": 46.0
      },
      {
        "date": "2025-01-25",
        "split": 45.2
      },
      {
        "date": "2025-01-30",
        "split": 43.7
      },
      {
        "date": "2025-02-06",
        "split": 49.1
      },
      {
        "date": "2025-02-08",
        "split": 48.7
      },
      {
        "date": "2025-02-13",
        "split": 44.1
      },
      {
        "date": "2025-02-20",
        "split": 42.5
      },
      {
        "date": "2025-02-22",
        "split": 49.4
      },
      {
        "date": "2025-02-27",
        "split": 47.4
      },
      {
        "date": "2025-03-01",
        "split": 47.9
      },
      {
        "date": "2025-03-10",
        "split": 47.1
      },
      {
        "date": "2025-03-13",
        "split": 41.9
      },
      {
        "date": "2025-03-15",
        "split": 47.0
      },
      {
        "date": "2025-03-20",
        "split": 38.6
      },
      {
        "date": "2025-03-22",
        "split": 47.0
      },
      {
        "date": "2025-03-27",
        "split": 38.9
      },
      {
        "date": "2025-03-29",
        "split": 46.6
      },
      {
        "date": "2025-04-03",
        "split": 37.8
      },
      {
        "date": "2025-04-17",
        "split": 46.3
      },
      {
        "date": "2025-04-19",
        "split": 46.8
      },
      {
        "date": "2025-04-21",
        "split": 45.4
      },
      {
        "date": "2025-04-23",
        "split": 36.4
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.3,
        "spm": 18,
        "rank": 6,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.8,
        "spm": 18,
        "rank": 15,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.0,
        "spm": 20,
        "rank": 4,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 45.2,
        "spm": 21,
        "rank": 6,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 43.7,
        "spm": 22,
        "rank": 8,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.1,
        "spm": 20,
        "rank": 14,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.7,
        "spm": 19,
        "rank": 18,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.1,
        "spm": 22,
        "rank": 12,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 42.5,
        "spm": 24,
        "rank": 8,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.4,
        "spm": 19,
        "rank": 18,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 47.4,
        "spm": 20,
        "rank": 15,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.9,
        "spm": 20,
        "rank": 17,
        "of": 41
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.1,
        "spm": 20,
        "rank": 10,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 41.9,
        "spm": 24,
        "rank": 11,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.0,
        "spm": 20,
        "rank": 7,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 38.6,
        "spm": 27,
        "rank": 10,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.0,
        "spm": 20,
        "rank": 8,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 38.9,
        "spm": 29,
        "rank": 11,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.6,
        "spm": 22,
        "rank": 13,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 37.8,
        "spm": 27,
        "rank": 8,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.3,
        "spm": 20,
        "rank": 8,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.8,
        "spm": 20,
        "rank": 9,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 45.4,
        "spm": 20,
        "rank": 6,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 36.4,
        "spm": 27,
        "rank": 7,
        "of": 33
      }
    ]
  },
  {
    "id": "keane",
    "name": "Keane",
    "group": "B",
    "rank": 18,
    "avgSplit": 46.2,
    "bestSplit": 36.4,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 24,
    "trend": "improving",
    "trendDelta": -6.0,
    "consistency": 92,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 14,
        "avgSplit": 46.4
      },
      "intervals": {
        "sessions": 10,
        "avgSplit": 43.0
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 49.0
      },
      {
        "date": "2025-01-16",
        "split": 48.0
      },
      {
        "date": "2025-01-20",
        "split": 46.8
      },
      {
        "date": "2025-01-25",
        "split": 45.8
      },
      {
        "date": "2025-01-30",
        "split": 44.5
      },
      {
        "date": "2025-02-06",
        "split": 47.9
      },
      {
        "date": "2025-02-08",
        "split": 48.4
      },
      {
        "date": "2025-02-13",
        "split": 43.7
      },
      {
        "date": "2025-02-20",
        "split": 42.5
      },
      {
        "date": "2025-02-22",
        "split": 47.0
      },
      {
        "date": "2025-02-27",
        "split": 46.8
      },
      {
        "date": "2025-03-01",
        "split": 45.4
      },
      {
        "date": "2025-03-06",
        "split": 42.8
      },
      {
        "date": "2025-03-10",
        "split": 46.9
      },
      {
        "date": "2025-03-13",
        "split": 42.1
      },
      {
        "date": "2025-03-15",
        "split": 47.1
      },
      {
        "date": "2025-03-20",
        "split": 38.4
      },
      {
        "date": "2025-03-22",
        "split": 48.1
      },
      {
        "date": "2025-03-29",
        "split": 47.2
      },
      {
        "date": "2025-04-03",
        "split": 38.6
      },
      {
        "date": "2025-04-17",
        "split": 46.7
      },
      {
        "date": "2025-04-19",
        "split": 46.1
      },
      {
        "date": "2025-04-21",
        "split": 44.6
      },
      {
        "date": "2025-04-23",
        "split": 35.2
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.0,
        "spm": 19,
        "rank": 14,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.0,
        "spm": 19,
        "rank": 11,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.8,
        "spm": 20,
        "rank": 6,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 45.8,
        "spm": 21,
        "rank": 10,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 44.5,
        "spm": 21,
        "rank": 12,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.9,
        "spm": 20,
        "rank": 7,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.4,
        "spm": 19,
        "rank": 15,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 43.7,
        "spm": 22,
        "rank": 9,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 42.5,
        "spm": 24,
        "rank": 9,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.0,
        "spm": 19,
        "rank": 3,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.8,
        "spm": 20,
        "rank": 9,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 45.4,
        "spm": 20,
        "rank": 3,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 42.8,
        "spm": 22,
        "rank": 8,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.9,
        "spm": 20,
        "rank": 6,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 42.1,
        "spm": 23,
        "rank": 12,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.1,
        "spm": 20,
        "rank": 9,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 38.4,
        "spm": 26,
        "rank": 8,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.1,
        "spm": 20,
        "rank": 15,
        "of": 40
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 47.2,
        "spm": 21,
        "rank": 17,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 38.6,
        "spm": 27,
        "rank": 12,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.7,
        "spm": 19,
        "rank": 12,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.1,
        "spm": 20,
        "rank": 3,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.6,
        "spm": 20,
        "rank": 1,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 35.2,
        "spm": 26,
        "rank": 4,
        "of": 33
      }
    ]
  },
  {
    "id": "cho",
    "name": "Cho",
    "group": "A",
    "rank": 19,
    "avgSplit": 45.0,
    "bestSplit": 36.3,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 25,
    "trend": "improving",
    "trendDelta": -5.0,
    "consistency": 96,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 14,
        "avgSplit": 46.5
      },
      "intervals": {
        "sessions": 11,
        "avgSplit": 43.2
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 48.5
      },
      {
        "date": "2025-01-16",
        "split": 47.5
      },
      {
        "date": "2025-01-20",
        "split": 48.2
      },
      {
        "date": "2025-01-25",
        "split": 45.4
      },
      {
        "date": "2025-01-30",
        "split": 44.4
      },
      {
        "date": "2025-02-06",
        "split": 49.6
      },
      {
        "date": "2025-02-08",
        "split": 46.8
      },
      {
        "date": "2025-02-13",
        "split": 45.2
      },
      {
        "date": "2025-02-20",
        "split": 42.9
      },
      {
        "date": "2025-02-22",
        "split": 48.9
      },
      {
        "date": "2025-02-27",
        "split": 47.1
      },
      {
        "date": "2025-03-01",
        "split": 47.0
      },
      {
        "date": "2025-03-06",
        "split": 44.7
      },
      {
        "date": "2025-03-10",
        "split": 47.0
      },
      {
        "date": "2025-03-13",
        "split": 42.6
      },
      {
        "date": "2025-03-15",
        "split": 47.2
      },
      {
        "date": "2025-03-20",
        "split": 37.9
      },
      {
        "date": "2025-03-22",
        "split": 47.1
      },
      {
        "date": "2025-03-27",
        "split": 38.5
      },
      {
        "date": "2025-03-29",
        "split": 45.8
      },
      {
        "date": "2025-04-03",
        "split": 38.6
      },
      {
        "date": "2025-04-17",
        "split": 46.3
      },
      {
        "date": "2025-04-19",
        "split": 46.6
      },
      {
        "date": "2025-04-21",
        "split": 46.2
      },
      {
        "date": "2025-04-23",
        "split": 36.4
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.5,
        "spm": 20,
        "rank": 14,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.5,
        "spm": 20,
        "rank": 10,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 48.2,
        "spm": 20,
        "rank": 13,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 45.4,
        "spm": 22,
        "rank": 12,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.4,
        "spm": 22,
        "rank": 15,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.6,
        "spm": 20,
        "rank": 16,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.8,
        "spm": 20,
        "rank": 6,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 45.2,
        "spm": 22,
        "rank": 14,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 42.9,
        "spm": 24,
        "rank": 14,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.9,
        "spm": 19,
        "rank": 10,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 47.1,
        "spm": 20,
        "rank": 10,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.0,
        "spm": 20,
        "rank": 10,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 44.7,
        "spm": 22,
        "rank": 11,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.0,
        "spm": 20,
        "rank": 6,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 42.6,
        "spm": 24,
        "rank": 9,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.2,
        "spm": 20,
        "rank": 8,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 37.9,
        "spm": 28,
        "rank": 12,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.1,
        "spm": 20,
        "rank": 8,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 38.5,
        "spm": 28,
        "rank": 10,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 45.8,
        "spm": 22,
        "rank": 5,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 38.6,
        "spm": 27,
        "rank": 14,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.3,
        "spm": 20,
        "rank": 8,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.6,
        "spm": 20,
        "rank": 4,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.2,
        "spm": 20,
        "rank": 5,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 36.4,
        "spm": 27,
        "rank": 10,
        "of": 33
      }
    ]
  },
  {
    "id": "bennett",
    "name": "Bennett",
    "group": "A",
    "rank": 20,
    "avgSplit": 45.0,
    "bestSplit": 35.6,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 26,
    "trend": "improving",
    "trendDelta": -5.7,
    "consistency": 100,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 14,
        "avgSplit": 46.9
      },
      "intervals": {
        "sessions": 12,
        "avgSplit": 43.1
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 49.0
      },
      {
        "date": "2025-01-16",
        "split": 48.4
      },
      {
        "date": "2025-01-20",
        "split": 49.9
      },
      {
        "date": "2025-01-25",
        "split": 46.5
      },
      {
        "date": "2025-01-30",
        "split": 44.0
      },
      {
        "date": "2025-02-06",
        "split": 47.9
      },
      {
        "date": "2025-02-08",
        "split": 47.9
      },
      {
        "date": "2025-02-13",
        "split": 44.6
      },
      {
        "date": "2025-02-20",
        "split": 42.6
      },
      {
        "date": "2025-02-22",
        "split": 48.4
      },
      {
        "date": "2025-02-27",
        "split": 47.4
      },
      {
        "date": "2025-03-01",
        "split": 48.3
      },
      {
        "date": "2025-03-06",
        "split": 44.2
      },
      {
        "date": "2025-03-10",
        "split": 48.6
      },
      {
        "date": "2025-03-13",
        "split": 42.1
      },
      {
        "date": "2025-03-15",
        "split": 48.4
      },
      {
        "date": "2025-03-20",
        "split": 37.6
      },
      {
        "date": "2025-03-22",
        "split": 48.3
      },
      {
        "date": "2025-03-27",
        "split": 38.1
      },
      {
        "date": "2025-03-29",
        "split": 46.5
      },
      {
        "date": "2025-04-03",
        "split": 36.8
      },
      {
        "date": "2025-04-10",
        "split": 41.3
      },
      {
        "date": "2025-04-17",
        "split": 46.6
      },
      {
        "date": "2025-04-19",
        "split": 47.9
      },
      {
        "date": "2025-04-21",
        "split": 46.7
      },
      {
        "date": "2025-04-23",
        "split": 35.7
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.0,
        "spm": 20,
        "rank": 17,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.4,
        "spm": 20,
        "rank": 17,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 49.9,
        "spm": 20,
        "rank": 23,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.5,
        "spm": 21,
        "rank": 17,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.0,
        "spm": 22,
        "rank": 14,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.9,
        "spm": 20,
        "rank": 8,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.9,
        "spm": 20,
        "rank": 15,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 44.6,
        "spm": 22,
        "rank": 11,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 42.6,
        "spm": 24,
        "rank": 12,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.4,
        "spm": 19,
        "rank": 7,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 47.4,
        "spm": 20,
        "rank": 12,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.3,
        "spm": 20,
        "rank": 16,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 44.2,
        "spm": 22,
        "rank": 8,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.6,
        "spm": 20,
        "rank": 14,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 42.1,
        "spm": 24,
        "rank": 8,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.4,
        "spm": 20,
        "rank": 14,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 37.6,
        "spm": 28,
        "rank": 10,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.3,
        "spm": 20,
        "rank": 13,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 38.1,
        "spm": 28,
        "rank": 9,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.5,
        "spm": 22,
        "rank": 9,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 36.8,
        "spm": 29,
        "rank": 7,
        "of": 43
      },
      {
        "sessionId": "2025-04-10",
        "date": "2025-04-10",
        "workoutName": "Threshold Test D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 41.3,
        "spm": 28,
        "rank": 8,
        "of": 18
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.6,
        "spm": 20,
        "rank": 10,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.9,
        "spm": 20,
        "rank": 16,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.7,
        "spm": 20,
        "rank": 11,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 35.7,
        "spm": 27,
        "rank": 6,
        "of": 33
      }
    ]
  },
  {
    "id": "cruz",
    "name": "Cruz",
    "group": "B",
    "rank": 21,
    "avgSplit": 46.4,
    "bestSplit": 41.1,
    "bestSplitDate": "2025-02-20",
    "sessionCount": 15,
    "trend": "declining",
    "trendDelta": 1.5,
    "consistency": 58,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 9,
        "avgSplit": 46.6
      },
      "intervals": {
        "sessions": 6,
        "avgSplit": 42.8
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 47.8
      },
      {
        "date": "2025-01-25",
        "split": 45.6
      },
      {
        "date": "2025-01-30",
        "split": 42.9
      },
      {
        "date": "2025-02-06",
        "split": 48.1
      },
      {
        "date": "2025-02-08",
        "split": 45.9
      },
      {
        "date": "2025-02-13",
        "split": 42.3
      },
      {
        "date": "2025-02-20",
        "split": 39.8
      },
      {
        "date": "2025-02-22",
        "split": 48.9
      },
      {
        "date": "2025-02-27",
        "split": 46.0
      },
      {
        "date": "2025-03-01",
        "split": 46.0
      },
      {
        "date": "2025-03-06",
        "split": 41.9
      },
      {
        "date": "2025-03-13",
        "split": 40.3
      },
      {
        "date": "2025-03-15",
        "split": 47.5
      },
      {
        "date": "2025-04-17",
        "split": 46.5
      },
      {
        "date": "2025-04-21",
        "split": 46.7
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.8,
        "spm": 20,
        "rank": 3,
        "of": 51
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 45.6,
        "spm": 21,
        "rank": 7,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 42.9,
        "spm": 22,
        "rank": 4,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.1,
        "spm": 20,
        "rank": 9,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 45.9,
        "spm": 20,
        "rank": 3,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 42.3,
        "spm": 22,
        "rank": 3,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.8,
        "spm": 24,
        "rank": 2,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.9,
        "spm": 19,
        "rank": 10,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.0,
        "spm": 20,
        "rank": 5,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.0,
        "spm": 20,
        "rank": 5,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 41.9,
        "spm": 22,
        "rank": 4,
        "of": 43
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 40.3,
        "spm": 24,
        "rank": 4,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.5,
        "spm": 20,
        "rank": 11,
        "of": 40
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.5,
        "spm": 20,
        "rank": 11,
        "of": 41
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.7,
        "spm": 20,
        "rank": 15,
        "of": 37
      }
    ]
  },
  {
    "id": "lehmann",
    "name": "Lehmann",
    "group": "B",
    "rank": 22,
    "avgSplit": 46.0,
    "bestSplit": 38.3,
    "bestSplitDate": "2025-04-03",
    "sessionCount": 22,
    "trend": "improving",
    "trendDelta": -4.3,
    "consistency": 85,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 12,
        "avgSplit": 46.4
      },
      "intervals": {
        "sessions": 10,
        "avgSplit": 43.5
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 48.9
      },
      {
        "date": "2025-01-16",
        "split": 47.9
      },
      {
        "date": "2025-01-20",
        "split": 46.9
      },
      {
        "date": "2025-01-25",
        "split": 44.6
      },
      {
        "date": "2025-02-06",
        "split": 48.7
      },
      {
        "date": "2025-02-08",
        "split": 46.4
      },
      {
        "date": "2025-02-13",
        "split": 43.4
      },
      {
        "date": "2025-02-20",
        "split": 42.4
      },
      {
        "date": "2025-02-22",
        "split": 48.7
      },
      {
        "date": "2025-02-27",
        "split": 47.2
      },
      {
        "date": "2025-03-01",
        "split": 46.4
      },
      {
        "date": "2025-03-06",
        "split": 45.0
      },
      {
        "date": "2025-03-10",
        "split": 49.0
      },
      {
        "date": "2025-03-20",
        "split": 39.5
      },
      {
        "date": "2025-03-22",
        "split": 46.8
      },
      {
        "date": "2025-03-27",
        "split": 39.1
      },
      {
        "date": "2025-03-29",
        "split": 46.6
      },
      {
        "date": "2025-04-03",
        "split": 37.4
      },
      {
        "date": "2025-04-17",
        "split": 45.6
      },
      {
        "date": "2025-04-19",
        "split": 45.9
      },
      {
        "date": "2025-04-21",
        "split": 47.6
      },
      {
        "date": "2025-04-23",
        "split": 37.4
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.9,
        "spm": 20,
        "rank": 12,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.9,
        "spm": 20,
        "rank": 9,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.9,
        "spm": 20,
        "rank": 7,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 44.6,
        "spm": 22,
        "rank": 3,
        "of": 50
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.7,
        "spm": 20,
        "rank": 13,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.4,
        "spm": 20,
        "rank": 5,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 43.4,
        "spm": 22,
        "rank": 7,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 42.4,
        "spm": 24,
        "rank": 7,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.7,
        "spm": 19,
        "rank": 6,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 47.2,
        "spm": 20,
        "rank": 12,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.4,
        "spm": 20,
        "rank": 6,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 45.0,
        "spm": 22,
        "rank": 19,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.0,
        "spm": 20,
        "rank": 24,
        "of": 42
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.5,
        "spm": 26,
        "rank": 17,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.8,
        "spm": 20,
        "rank": 5,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.1,
        "spm": 28,
        "rank": 14,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.6,
        "spm": 22,
        "rank": 12,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 37.4,
        "spm": 31,
        "rank": 7,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 45.6,
        "spm": 20,
        "rank": 3,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 45.9,
        "spm": 20,
        "rank": 2,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 47.6,
        "spm": 20,
        "rank": 20,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 37.4,
        "spm": 27,
        "rank": 13,
        "of": 33
      }
    ]
  },
  {
    "id": "lindqvist",
    "name": "Lindqvist",
    "group": "A",
    "rank": 23,
    "avgSplit": 43.7,
    "bestSplit": 33.1,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 25,
    "trend": "improving",
    "trendDelta": -5.8,
    "consistency": 96,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 13,
        "avgSplit": 47.1
      },
      "intervals": {
        "sessions": 12,
        "avgSplit": 43.2
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 49.5
      },
      {
        "date": "2025-01-16",
        "split": 48.5
      },
      {
        "date": "2025-01-20",
        "split": 48.5
      },
      {
        "date": "2025-01-25",
        "split": 46.8
      },
      {
        "date": "2025-01-30",
        "split": 44.9
      },
      {
        "date": "2025-02-06",
        "split": 49.4
      },
      {
        "date": "2025-02-08",
        "split": 48.9
      },
      {
        "date": "2025-02-13",
        "split": 46.3
      },
      {
        "date": "2025-02-20",
        "split": 45.0
      },
      {
        "date": "2025-02-22",
        "split": 49.7
      },
      {
        "date": "2025-02-27",
        "split": 46.7
      },
      {
        "date": "2025-03-06",
        "split": 44.5
      },
      {
        "date": "2025-03-10",
        "split": 47.5
      },
      {
        "date": "2025-03-13",
        "split": 42.7
      },
      {
        "date": "2025-03-15",
        "split": 48.3
      },
      {
        "date": "2025-03-20",
        "split": 37.0
      },
      {
        "date": "2025-03-22",
        "split": 48.2
      },
      {
        "date": "2025-03-27",
        "split": 37.5
      },
      {
        "date": "2025-03-29",
        "split": 47.8
      },
      {
        "date": "2025-04-03",
        "split": 37.3
      },
      {
        "date": "2025-04-10",
        "split": 40.9
      },
      {
        "date": "2025-04-17",
        "split": 45.5
      },
      {
        "date": "2025-04-19",
        "split": 47.2
      },
      {
        "date": "2025-04-21",
        "split": 47.4
      },
      {
        "date": "2025-04-23",
        "split": 34.6
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.5,
        "spm": 20,
        "rank": 20,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.5,
        "spm": 20,
        "rank": 19,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 48.5,
        "spm": 21,
        "rank": 16,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.8,
        "spm": 22,
        "rank": 19,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.9,
        "spm": 22,
        "rank": 21,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.4,
        "spm": 20,
        "rank": 14,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.9,
        "spm": 20,
        "rank": 19,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.3,
        "spm": 22,
        "rank": 18,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 45.0,
        "spm": 24,
        "rank": 20,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.7,
        "spm": 19,
        "rank": 16,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.7,
        "spm": 20,
        "rank": 8,
        "of": 45
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 44.5,
        "spm": 22,
        "rank": 10,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.5,
        "spm": 20,
        "rank": 8,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 42.7,
        "spm": 24,
        "rank": 10,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.3,
        "spm": 20,
        "rank": 12,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 37.0,
        "spm": 37,
        "rank": 7,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.2,
        "spm": 20,
        "rank": 12,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 37.5,
        "spm": 30,
        "rank": 8,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 47.8,
        "spm": 21,
        "rank": 19,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 37.3,
        "spm": 30,
        "rank": 9,
        "of": 43
      },
      {
        "sessionId": "2025-04-10",
        "date": "2025-04-10",
        "workoutName": "Threshold Test D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 40.9,
        "spm": 31,
        "rank": 7,
        "of": 18
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 45.5,
        "spm": 20,
        "rank": 2,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.2,
        "spm": 20,
        "rank": 11,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 47.4,
        "spm": 20,
        "rank": 14,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 34.6,
        "spm": 27,
        "rank": 4,
        "of": 33
      }
    ]
  },
  {
    "id": "romanov",
    "name": "Romanov",
    "group": "B",
    "rank": 24,
    "avgSplit": 44.5,
    "bestSplit": 35.7,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 25,
    "trend": "improving",
    "trendDelta": -4.6,
    "consistency": 96,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 14,
        "avgSplit": 46.8
      },
      "intervals": {
        "sessions": 11,
        "avgSplit": 43.3
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 47.6
      },
      {
        "date": "2025-01-16",
        "split": 47.7
      },
      {
        "date": "2025-01-20",
        "split": 47.0
      },
      {
        "date": "2025-01-25",
        "split": 45.7
      },
      {
        "date": "2025-01-30",
        "split": 44.9
      },
      {
        "date": "2025-02-06",
        "split": 49.9
      },
      {
        "date": "2025-02-08",
        "split": 48.4
      },
      {
        "date": "2025-02-13",
        "split": 44.7
      },
      {
        "date": "2025-02-20",
        "split": 43.1
      },
      {
        "date": "2025-02-22",
        "split": 49.1
      },
      {
        "date": "2025-02-27",
        "split": 47.1
      },
      {
        "date": "2025-03-01",
        "split": 47.0
      },
      {
        "date": "2025-03-06",
        "split": 44.3
      },
      {
        "date": "2025-03-10",
        "split": 47.8
      },
      {
        "date": "2025-03-13",
        "split": 43.6
      },
      {
        "date": "2025-03-15",
        "split": 47.2
      },
      {
        "date": "2025-03-20",
        "split": 39.0
      },
      {
        "date": "2025-03-22",
        "split": 47.3
      },
      {
        "date": "2025-03-27",
        "split": 39.0
      },
      {
        "date": "2025-03-29",
        "split": 46.8
      },
      {
        "date": "2025-04-03",
        "split": 38.8
      },
      {
        "date": "2025-04-17",
        "split": 47.4
      },
      {
        "date": "2025-04-19",
        "split": 46.8
      },
      {
        "date": "2025-04-21",
        "split": 45.2
      },
      {
        "date": "2025-04-23",
        "split": 36.5
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.6,
        "spm": 20,
        "rank": 4,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.7,
        "spm": 20,
        "rank": 11,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 47.0,
        "spm": 20,
        "rank": 8,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 45.7,
        "spm": 22,
        "rank": 9,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.9,
        "spm": 22,
        "rank": 20,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.9,
        "spm": 20,
        "rank": 18,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.4,
        "spm": 20,
        "rank": 17,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.7,
        "spm": 22,
        "rank": 16,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 43.1,
        "spm": 24,
        "rank": 15,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.1,
        "spm": 19,
        "rank": 13,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 47.1,
        "spm": 21,
        "rank": 11,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.0,
        "spm": 20,
        "rank": 9,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.3,
        "spm": 22,
        "rank": 12,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.8,
        "spm": 21,
        "rank": 18,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 43.6,
        "spm": 24,
        "rank": 18,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.2,
        "spm": 20,
        "rank": 10,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.0,
        "spm": 31,
        "rank": 11,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.3,
        "spm": 20,
        "rank": 11,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.0,
        "spm": 30,
        "rank": 13,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.8,
        "spm": 22,
        "rank": 15,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 38.8,
        "spm": 30,
        "rank": 13,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.4,
        "spm": 20,
        "rank": 13,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.8,
        "spm": 20,
        "rank": 10,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 45.2,
        "spm": 20,
        "rank": 5,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 36.5,
        "spm": 27,
        "rank": 8,
        "of": 33
      }
    ]
  },
  {
    "id": "klein",
    "name": "Klein",
    "group": "A",
    "rank": 25,
    "avgSplit": 46.3,
    "bestSplit": 39.7,
    "bestSplitDate": "2025-04-03",
    "sessionCount": 24,
    "trend": "improving",
    "trendDelta": -1.5,
    "consistency": 92,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 14,
        "avgSplit": 46.3
      },
      "intervals": {
        "sessions": 10,
        "avgSplit": 44.0
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 48.5
      },
      {
        "date": "2025-01-16",
        "split": 46.6
      },
      {
        "date": "2025-01-20",
        "split": 48.2
      },
      {
        "date": "2025-01-25",
        "split": 44.5
      },
      {
        "date": "2025-01-30",
        "split": 43.7
      },
      {
        "date": "2025-02-06",
        "split": 47.8
      },
      {
        "date": "2025-02-08",
        "split": 46.3
      },
      {
        "date": "2025-02-13",
        "split": 44.8
      },
      {
        "date": "2025-02-20",
        "split": 42.6
      },
      {
        "date": "2025-02-22",
        "split": 48.8
      },
      {
        "date": "2025-02-27",
        "split": 47.0
      },
      {
        "date": "2025-03-01",
        "split": 46.5
      },
      {
        "date": "2025-03-06",
        "split": 44.1
      },
      {
        "date": "2025-03-10",
        "split": 48.6
      },
      {
        "date": "2025-03-15",
        "split": 48.4
      },
      {
        "date": "2025-03-20",
        "split": 39.0
      },
      {
        "date": "2025-03-22",
        "split": 46.7
      },
      {
        "date": "2025-03-27",
        "split": 39.5
      },
      {
        "date": "2025-03-29",
        "split": 46.7
      },
      {
        "date": "2025-04-03",
        "split": 38.7
      },
      {
        "date": "2025-04-10",
        "split": 42.3
      },
      {
        "date": "2025-04-17",
        "split": 44.8
      },
      {
        "date": "2025-04-19",
        "split": 47.7
      },
      {
        "date": "2025-04-21",
        "split": 46.2
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.5,
        "spm": 20,
        "rank": 13,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.6,
        "spm": 20,
        "rank": 3,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 48.2,
        "spm": 20,
        "rank": 12,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.5,
        "spm": 22,
        "rank": 4,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 43.7,
        "spm": 22,
        "rank": 10,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.8,
        "spm": 20,
        "rank": 7,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.3,
        "spm": 20,
        "rank": 4,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 44.8,
        "spm": 22,
        "rank": 13,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 42.6,
        "spm": 24,
        "rank": 11,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.8,
        "spm": 19,
        "rank": 9,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 47.0,
        "spm": 20,
        "rank": 9,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.5,
        "spm": 21,
        "rank": 7,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 44.1,
        "spm": 22,
        "rank": 7,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.6,
        "spm": 20,
        "rank": 15,
        "of": 42
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.4,
        "spm": 20,
        "rank": 13,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 39.0,
        "spm": 27,
        "rank": 15,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.7,
        "spm": 20,
        "rank": 6,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 39.5,
        "spm": 27,
        "rank": 14,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.7,
        "spm": 22,
        "rank": 12,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 38.7,
        "spm": 27,
        "rank": 15,
        "of": 43
      },
      {
        "sessionId": "2025-04-10",
        "date": "2025-04-10",
        "workoutName": "Threshold Test D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 42.3,
        "spm": 26,
        "rank": 9,
        "of": 18
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 44.8,
        "spm": 20,
        "rank": 1,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.7,
        "spm": 20,
        "rank": 16,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.2,
        "spm": 20,
        "rank": 10,
        "of": 37
      }
    ]
  },
  {
    "id": "jensen",
    "name": "Jensen",
    "group": "B",
    "rank": 26,
    "avgSplit": 46.2,
    "bestSplit": 38.6,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 22,
    "trend": "improving",
    "trendDelta": -4.7,
    "consistency": 85,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 12,
        "avgSplit": 46.7
      },
      "intervals": {
        "sessions": 10,
        "avgSplit": 43.5
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 49.1
      },
      {
        "date": "2025-01-16",
        "split": 48.4
      },
      {
        "date": "2025-01-20",
        "split": 48.4
      },
      {
        "date": "2025-01-25",
        "split": 47.3
      },
      {
        "date": "2025-01-30",
        "split": 45.4
      },
      {
        "date": "2025-02-20",
        "split": 44.3
      },
      {
        "date": "2025-02-22",
        "split": 49.1
      },
      {
        "date": "2025-02-27",
        "split": 47.5
      },
      {
        "date": "2025-03-01",
        "split": 46.9
      },
      {
        "date": "2025-03-06",
        "split": 44.3
      },
      {
        "date": "2025-03-10",
        "split": 46.8
      },
      {
        "date": "2025-03-13",
        "split": 43.3
      },
      {
        "date": "2025-03-15",
        "split": 47.0
      },
      {
        "date": "2025-03-20",
        "split": 39.0
      },
      {
        "date": "2025-03-22",
        "split": 46.9
      },
      {
        "date": "2025-03-27",
        "split": 38.4
      },
      {
        "date": "2025-03-29",
        "split": 45.7
      },
      {
        "date": "2025-04-03",
        "split": 38.4
      },
      {
        "date": "2025-04-17",
        "split": 48.0
      },
      {
        "date": "2025-04-19",
        "split": 47.4
      },
      {
        "date": "2025-04-21",
        "split": 46.6
      },
      {
        "date": "2025-04-23",
        "split": 37.7
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.1,
        "spm": 20,
        "rank": 18,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.4,
        "spm": 20,
        "rank": 16,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 48.4,
        "spm": 20,
        "rank": 14,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.3,
        "spm": 22,
        "rank": 22,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 45.4,
        "spm": 22,
        "rank": 18,
        "of": 52
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.3,
        "spm": 24,
        "rank": 18,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.1,
        "spm": 19,
        "rank": 13,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 47.5,
        "spm": 20,
        "rank": 18,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.9,
        "spm": 20,
        "rank": 8,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.3,
        "spm": 22,
        "rank": 13,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.8,
        "spm": 20,
        "rank": 5,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 43.3,
        "spm": 24,
        "rank": 15,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.0,
        "spm": 19,
        "rank": 6,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 39.0,
        "spm": 28,
        "rank": 17,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.9,
        "spm": 20,
        "rank": 7,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 38.4,
        "spm": 27,
        "rank": 8,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 45.7,
        "spm": 21,
        "rank": 4,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 38.4,
        "spm": 29,
        "rank": 9,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.0,
        "spm": 20,
        "rank": 18,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.4,
        "spm": 20,
        "rank": 13,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.6,
        "spm": 20,
        "rank": 14,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 37.7,
        "spm": 27,
        "rank": 13,
        "of": 33
      }
    ]
  },
  {
    "id": "mitchell",
    "name": "Mitchell",
    "group": "B",
    "rank": 27,
    "avgSplit": 44.9,
    "bestSplit": 38.0,
    "bestSplitDate": "2025-04-03",
    "sessionCount": 16,
    "trend": "improving",
    "trendDelta": -6.8,
    "consistency": 62,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 8,
        "avgSplit": 46.2
      },
      "intervals": {
        "sessions": 8,
        "avgSplit": 44.3
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 48.5
      },
      {
        "date": "2025-01-16",
        "split": 46.9
      },
      {
        "date": "2025-01-20",
        "split": 48.2
      },
      {
        "date": "2025-01-25",
        "split": 48.1
      },
      {
        "date": "2025-01-30",
        "split": 44.1
      },
      {
        "date": "2025-02-08",
        "split": 47.4
      },
      {
        "date": "2025-02-13",
        "split": 44.4
      },
      {
        "date": "2025-02-27",
        "split": 47.3
      },
      {
        "date": "2025-03-06",
        "split": 46.6
      },
      {
        "date": "2025-03-10",
        "split": 48.4
      },
      {
        "date": "2025-03-13",
        "split": 43.6
      },
      {
        "date": "2025-03-20",
        "split": 39.8
      },
      {
        "date": "2025-03-22",
        "split": 48.1
      },
      {
        "date": "2025-03-27",
        "split": 38.5
      },
      {
        "date": "2025-03-29",
        "split": 46.3
      },
      {
        "date": "2025-04-03",
        "split": 38.4
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.5,
        "spm": 20,
        "rank": 8,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.9,
        "spm": 20,
        "rank": 5,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 48.2,
        "spm": 20,
        "rank": 12,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.1,
        "spm": 20,
        "rank": 21,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 44.1,
        "spm": 22,
        "rank": 11,
        "of": 52
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.4,
        "spm": 20,
        "rank": 9,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.4,
        "spm": 22,
        "rank": 13,
        "of": 46
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 47.3,
        "spm": 21,
        "rank": 14,
        "of": 45
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.6,
        "spm": 22,
        "rank": 24,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.4,
        "spm": 20,
        "rank": 20,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 43.6,
        "spm": 24,
        "rank": 19,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.8,
        "spm": 27,
        "rank": 18,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.1,
        "spm": 20,
        "rank": 14,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 38.5,
        "spm": 29,
        "rank": 10,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.3,
        "spm": 22,
        "rank": 9,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 38.4,
        "spm": 31,
        "rank": 10,
        "of": 43
      }
    ]
  },
  {
    "id": "tran",
    "name": "Tran",
    "group": "A",
    "rank": 28,
    "avgSplit": 45.3,
    "bestSplit": 37.8,
    "bestSplitDate": "2025-03-20",
    "sessionCount": 20,
    "trend": "improving",
    "trendDelta": -1.2,
    "consistency": 77,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 13,
        "avgSplit": 46.3
      },
      "intervals": {
        "sessions": 7,
        "avgSplit": 43.9
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 47.6
      },
      {
        "date": "2025-01-16",
        "split": 46.9
      },
      {
        "date": "2025-01-20",
        "split": 45.5
      },
      {
        "date": "2025-01-25",
        "split": 45.2
      },
      {
        "date": "2025-01-30",
        "split": 43.4
      },
      {
        "date": "2025-02-06",
        "split": 49.2
      },
      {
        "date": "2025-02-08",
        "split": 47.2
      },
      {
        "date": "2025-02-27",
        "split": 52.0
      },
      {
        "date": "2025-03-01",
        "split": 46.6
      },
      {
        "date": "2025-03-10",
        "split": 50.0
      },
      {
        "date": "2025-03-13",
        "split": 43.4
      },
      {
        "date": "2025-03-15",
        "split": 47.0
      },
      {
        "date": "2025-03-20",
        "split": 37.9
      },
      {
        "date": "2025-03-22",
        "split": 46.8
      },
      {
        "date": "2025-03-27",
        "split": 39.1
      },
      {
        "date": "2025-03-29",
        "split": 46.6
      },
      {
        "date": "2025-04-03",
        "split": 37.9
      },
      {
        "date": "2025-04-10",
        "split": 42.7
      },
      {
        "date": "2025-04-17",
        "split": 46.9
      },
      {
        "date": "2025-04-19",
        "split": 46.9
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.6,
        "spm": 18,
        "rank": 3,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.9,
        "spm": 18,
        "rank": 6,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 45.5,
        "spm": 20,
        "rank": 4,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 45.2,
        "spm": 22,
        "rank": 11,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 43.4,
        "spm": 22,
        "rank": 9,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.2,
        "spm": 19,
        "rank": 13,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.2,
        "spm": 19,
        "rank": 7,
        "of": 46
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 52.0,
        "spm": 19,
        "rank": 19,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.6,
        "spm": 20,
        "rank": 8,
        "of": 41
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 50.0,
        "spm": 20,
        "rank": 17,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 43.4,
        "spm": 24,
        "rank": 12,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.0,
        "spm": 20,
        "rank": 6,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 37.9,
        "spm": 27,
        "rank": 13,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.8,
        "spm": 20,
        "rank": 7,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 39.1,
        "spm": 26,
        "rank": 13,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.6,
        "spm": 22,
        "rank": 11,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 37.9,
        "spm": 27,
        "rank": 10,
        "of": 43
      },
      {
        "sessionId": "2025-04-10",
        "date": "2025-04-10",
        "workoutName": "Threshold Test D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 42.7,
        "spm": 26,
        "rank": 11,
        "of": 18
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.9,
        "spm": 20,
        "rank": 13,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.9,
        "spm": 20,
        "rank": 8,
        "of": 40
      }
    ]
  },
  {
    "id": "delacroix",
    "name": "Delacroix",
    "group": "B",
    "rank": 29,
    "avgSplit": 44.5,
    "bestSplit": 36.6,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 18,
    "trend": "improving",
    "trendDelta": -6.4,
    "consistency": 69,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 10,
        "avgSplit": 47.1
      },
      "intervals": {
        "sessions": 8,
        "avgSplit": 43.2
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 50.3
      },
      {
        "date": "2025-01-16",
        "split": 48.2
      },
      {
        "date": "2025-01-20",
        "split": 49.4
      },
      {
        "date": "2025-01-30",
        "split": 44.8
      },
      {
        "date": "2025-02-06",
        "split": 46.2
      },
      {
        "date": "2025-02-08",
        "split": 45.4
      },
      {
        "date": "2025-02-13",
        "split": 43.6
      },
      {
        "date": "2025-02-22",
        "split": 46.3
      },
      {
        "date": "2025-02-27",
        "split": 45.9
      },
      {
        "date": "2025-03-06",
        "split": 44.7
      },
      {
        "date": "2025-03-10",
        "split": 47.0
      },
      {
        "date": "2025-03-13",
        "split": 41.8
      },
      {
        "date": "2025-03-15",
        "split": 47.7
      },
      {
        "date": "2025-03-20",
        "split": 38.0
      },
      {
        "date": "2025-04-17",
        "split": 48.5
      },
      {
        "date": "2025-04-19",
        "split": 46.2
      },
      {
        "date": "2025-04-21",
        "split": 45.0
      },
      {
        "date": "2025-04-23",
        "split": 37.5
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 50.3,
        "spm": 18,
        "rank": 21,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.2,
        "spm": 18,
        "rank": 12,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 49.4,
        "spm": 20,
        "rank": 23,
        "of": 49
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 44.8,
        "spm": 21,
        "rank": 14,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.2,
        "spm": 20,
        "rank": 2,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 45.4,
        "spm": 19,
        "rank": 2,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 43.6,
        "spm": 22,
        "rank": 8,
        "of": 46
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.3,
        "spm": 19,
        "rank": 1,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 45.9,
        "spm": 20,
        "rank": 4,
        "of": 45
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.7,
        "spm": 22,
        "rank": 15,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.0,
        "spm": 20,
        "rank": 8,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 41.8,
        "spm": 23,
        "rank": 10,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.7,
        "spm": 20,
        "rank": 13,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 38.0,
        "spm": 28,
        "rank": 6,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.5,
        "spm": 20,
        "rank": 20,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.2,
        "spm": 20,
        "rank": 4,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 45.0,
        "spm": 20,
        "rank": 4,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 37.5,
        "spm": 26,
        "rank": 10,
        "of": 33
      }
    ]
  },
  {
    "id": "payne",
    "name": "Payne",
    "group": "A",
    "rank": 30,
    "avgSplit": 45.3,
    "bestSplit": 38.5,
    "bestSplitDate": "2025-03-27",
    "sessionCount": 22,
    "trend": "improving",
    "trendDelta": -1.3,
    "consistency": 85,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 12,
        "avgSplit": 46.8
      },
      "intervals": {
        "sessions": 10,
        "avgSplit": 44.0
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 48.9
      },
      {
        "date": "2025-01-16",
        "split": 48.0
      },
      {
        "date": "2025-01-20",
        "split": 48.1
      },
      {
        "date": "2025-01-25",
        "split": 45.7
      },
      {
        "date": "2025-01-30",
        "split": 44.0
      },
      {
        "date": "2025-02-06",
        "split": 49.0
      },
      {
        "date": "2025-02-08",
        "split": 47.2
      },
      {
        "date": "2025-02-13",
        "split": 44.6
      },
      {
        "date": "2025-02-20",
        "split": 42.2
      },
      {
        "date": "2025-02-22",
        "split": 49.0
      },
      {
        "date": "2025-02-27",
        "split": 47.2
      },
      {
        "date": "2025-03-01",
        "split": 47.0
      },
      {
        "date": "2025-03-06",
        "split": 43.2
      },
      {
        "date": "2025-03-20",
        "split": 39.6
      },
      {
        "date": "2025-03-22",
        "split": 47.2
      },
      {
        "date": "2025-03-27",
        "split": 38.7
      },
      {
        "date": "2025-03-29",
        "split": 47.1
      },
      {
        "date": "2025-04-03",
        "split": 40.3
      },
      {
        "date": "2025-04-10",
        "split": 43.5
      },
      {
        "date": "2025-04-17",
        "split": 47.7
      },
      {
        "date": "2025-04-19",
        "split": 47.5
      },
      {
        "date": "2025-04-21",
        "split": 46.0
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.9,
        "spm": 20,
        "rank": 16,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.0,
        "spm": 20,
        "rank": 14,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 48.1,
        "spm": 20,
        "rank": 11,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 45.7,
        "spm": 22,
        "rank": 14,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.0,
        "spm": 22,
        "rank": 12,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.0,
        "spm": 19,
        "rank": 12,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.2,
        "spm": 20,
        "rank": 8,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 44.6,
        "spm": 22,
        "rank": 10,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 42.2,
        "spm": 24,
        "rank": 9,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.0,
        "spm": 19,
        "rank": 12,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 47.2,
        "spm": 21,
        "rank": 13,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.0,
        "spm": 20,
        "rank": 10,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 43.2,
        "spm": 22,
        "rank": 10,
        "of": 43
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 39.6,
        "spm": 28,
        "rank": 19,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.2,
        "spm": 20,
        "rank": 9,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 38.7,
        "spm": 27,
        "rank": 11,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 47.1,
        "spm": 22,
        "rank": 14,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 40.3,
        "spm": 28,
        "rank": 19,
        "of": 43
      },
      {
        "sessionId": "2025-04-10",
        "date": "2025-04-10",
        "workoutName": "Threshold Test D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 43.5,
        "spm": 26,
        "rank": 14,
        "of": 18
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.7,
        "spm": 20,
        "rank": 14,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.5,
        "spm": 20,
        "rank": 12,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.0,
        "spm": 20,
        "rank": 2,
        "of": 37
      }
    ]
  },
  {
    "id": "duval",
    "name": "Duval",
    "group": "B",
    "rank": 31,
    "avgSplit": 46.4,
    "bestSplit": 40.8,
    "bestSplitDate": "2025-03-27",
    "sessionCount": 19,
    "trend": "improving",
    "trendDelta": -5.0,
    "consistency": 73,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 11,
        "avgSplit": 46.8
      },
      "intervals": {
        "sessions": 8,
        "avgSplit": 43.7
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 48.9
      },
      {
        "date": "2025-01-16",
        "split": 47.7
      },
      {
        "date": "2025-01-20",
        "split": 45.1
      },
      {
        "date": "2025-01-25",
        "split": 45.9
      },
      {
        "date": "2025-01-30",
        "split": 43.3
      },
      {
        "date": "2025-02-06",
        "split": 47.9
      },
      {
        "date": "2025-02-08",
        "split": 46.9
      },
      {
        "date": "2025-02-13",
        "split": 43.2
      },
      {
        "date": "2025-02-20",
        "split": 43.0
      },
      {
        "date": "2025-02-22",
        "split": 49.1
      },
      {
        "date": "2025-02-27",
        "split": 45.5
      },
      {
        "date": "2025-03-01",
        "split": 47.1
      },
      {
        "date": "2025-03-06",
        "split": 45.4
      },
      {
        "date": "2025-03-13",
        "split": 41.3
      },
      {
        "date": "2025-03-15",
        "split": 48.8
      },
      {
        "date": "2025-03-22",
        "split": 48.9
      },
      {
        "date": "2025-03-27",
        "split": 39.9
      },
      {
        "date": "2025-03-29",
        "split": 46.4
      },
      {
        "date": "2025-04-03",
        "split": 40.5
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.9,
        "spm": 18,
        "rank": 11,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.7,
        "spm": 18,
        "rank": 7,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 45.1,
        "spm": 20,
        "rank": 3,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 45.9,
        "spm": 21,
        "rank": 11,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 43.3,
        "spm": 21,
        "rank": 6,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.9,
        "spm": 20,
        "rank": 6,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.9,
        "spm": 19,
        "rank": 7,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 43.2,
        "spm": 22,
        "rank": 6,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 43.0,
        "spm": 24,
        "rank": 14,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.1,
        "spm": 19,
        "rank": 14,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 45.5,
        "spm": 20,
        "rank": 3,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.1,
        "spm": 20,
        "rank": 12,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 45.4,
        "spm": 22,
        "rank": 21,
        "of": 43
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 41.3,
        "spm": 24,
        "rank": 7,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.8,
        "spm": 20,
        "rank": 19,
        "of": 40
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.9,
        "spm": 20,
        "rank": 21,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.9,
        "spm": 30,
        "rank": 19,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.4,
        "spm": 22,
        "rank": 10,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 40.5,
        "spm": 29,
        "rank": 18,
        "of": 43
      }
    ]
  },
  {
    "id": "db",
    "name": "DB",
    "group": "A",
    "rank": 32,
    "avgSplit": 46.8,
    "bestSplit": 38.3,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 24,
    "trend": "improving",
    "trendDelta": -5.0,
    "consistency": 92,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 12,
        "avgSplit": 47.1
      },
      "intervals": {
        "sessions": 12,
        "avgSplit": 44.4
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 47.9
      },
      {
        "date": "2025-01-16",
        "split": 48.5
      },
      {
        "date": "2025-01-20",
        "split": 49.3
      },
      {
        "date": "2025-01-25",
        "split": 46.9
      },
      {
        "date": "2025-01-30",
        "split": 46.2
      },
      {
        "date": "2025-02-13",
        "split": 46.1
      },
      {
        "date": "2025-02-20",
        "split": 43.8
      },
      {
        "date": "2025-02-22",
        "split": 49.7
      },
      {
        "date": "2025-02-27",
        "split": 48.9
      },
      {
        "date": "2025-03-01",
        "split": 47.6
      },
      {
        "date": "2025-03-06",
        "split": 46.9
      },
      {
        "date": "2025-03-10",
        "split": 47.7
      },
      {
        "date": "2025-03-13",
        "split": 44.1
      },
      {
        "date": "2025-03-15",
        "split": 48.7
      },
      {
        "date": "2025-03-20",
        "split": 39.6
      },
      {
        "date": "2025-03-22",
        "split": 48.5
      },
      {
        "date": "2025-03-27",
        "split": 39.5
      },
      {
        "date": "2025-03-29",
        "split": 47.5
      },
      {
        "date": "2025-04-03",
        "split": 39.6
      },
      {
        "date": "2025-04-10",
        "split": 43.0
      },
      {
        "date": "2025-04-17",
        "split": 46.8
      },
      {
        "date": "2025-04-19",
        "split": 46.8
      },
      {
        "date": "2025-04-21",
        "split": 46.7
      },
      {
        "date": "2025-04-23",
        "split": 37.2
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.9,
        "spm": 20,
        "rank": 7,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.5,
        "spm": 20,
        "rank": 18,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 49.3,
        "spm": 21,
        "rank": 20,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.9,
        "spm": 22,
        "rank": 20,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.2,
        "spm": 22,
        "rank": 23,
        "of": 52
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.1,
        "spm": 22,
        "rank": 17,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 43.8,
        "spm": 24,
        "rank": 16,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.7,
        "spm": 20,
        "rank": 18,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 48.9,
        "spm": 21,
        "rank": 16,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.6,
        "spm": 20,
        "rank": 14,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.9,
        "spm": 23,
        "rank": 16,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.7,
        "spm": 20,
        "rank": 9,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 44.1,
        "spm": 24,
        "rank": 13,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.7,
        "spm": 20,
        "rank": 16,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 39.6,
        "spm": 30,
        "rank": 20,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.5,
        "spm": 20,
        "rank": 16,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 39.5,
        "spm": 30,
        "rank": 15,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 47.5,
        "spm": 23,
        "rank": 18,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 39.6,
        "spm": 30,
        "rank": 17,
        "of": 43
      },
      {
        "sessionId": "2025-04-10",
        "date": "2025-04-10",
        "workoutName": "Threshold Test D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 43.0,
        "spm": 29,
        "rank": 12,
        "of": 18
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.8,
        "spm": 20,
        "rank": 12,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.8,
        "spm": 20,
        "rank": 6,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.7,
        "spm": 20,
        "rank": 9,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 37.2,
        "spm": 28,
        "rank": 12,
        "of": 33
      }
    ]
  },
  {
    "id": "ibrahimi",
    "name": "Ibrahimi",
    "group": "A",
    "rank": 33,
    "avgSplit": 45.4,
    "bestSplit": 35.5,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 23,
    "trend": "improving",
    "trendDelta": -4.8,
    "consistency": 88,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 12,
        "avgSplit": 47.6
      },
      "intervals": {
        "sessions": 11,
        "avgSplit": 43.7
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 48.7
      },
      {
        "date": "2025-01-16",
        "split": 48.0
      },
      {
        "date": "2025-01-20",
        "split": 47.1
      },
      {
        "date": "2025-01-25",
        "split": 47.6
      },
      {
        "date": "2025-01-30",
        "split": 44.7
      },
      {
        "date": "2025-02-06",
        "split": 50.9
      },
      {
        "date": "2025-02-08",
        "split": 48.9
      },
      {
        "date": "2025-02-13",
        "split": 44.6
      },
      {
        "date": "2025-02-20",
        "split": 43.0
      },
      {
        "date": "2025-02-22",
        "split": 49.7
      },
      {
        "date": "2025-02-27",
        "split": 47.3
      },
      {
        "date": "2025-03-06",
        "split": 45.2
      },
      {
        "date": "2025-03-10",
        "split": 48.6
      },
      {
        "date": "2025-03-13",
        "split": 44.8
      },
      {
        "date": "2025-03-15",
        "split": 48.3
      },
      {
        "date": "2025-03-20",
        "split": 39.3
      },
      {
        "date": "2025-03-27",
        "split": 40.3
      },
      {
        "date": "2025-03-29",
        "split": 47.2
      },
      {
        "date": "2025-04-03",
        "split": 38.4
      },
      {
        "date": "2025-04-17",
        "split": 49.5
      },
      {
        "date": "2025-04-19",
        "split": 47.5
      },
      {
        "date": "2025-04-21",
        "split": 46.2
      },
      {
        "date": "2025-04-23",
        "split": 35.8
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.7,
        "spm": 20,
        "rank": 15,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.0,
        "spm": 18,
        "rank": 13,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 47.1,
        "spm": 20,
        "rank": 7,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.6,
        "spm": 22,
        "rank": 24,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.7,
        "spm": 22,
        "rank": 17,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 50.9,
        "spm": 20,
        "rank": 20,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.9,
        "spm": 19,
        "rank": 18,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 44.6,
        "spm": 22,
        "rank": 12,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 43.0,
        "spm": 24,
        "rank": 15,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.7,
        "spm": 19,
        "rank": 17,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 47.3,
        "spm": 20,
        "rank": 11,
        "of": 45
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 45.2,
        "spm": 22,
        "rank": 12,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.6,
        "spm": 20,
        "rank": 16,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 44.8,
        "spm": 24,
        "rank": 14,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.3,
        "spm": 20,
        "rank": 11,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 39.3,
        "spm": 27,
        "rank": 18,
        "of": 43
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 40.3,
        "spm": 27,
        "rank": 18,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 47.2,
        "spm": 21,
        "rank": 16,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 38.4,
        "spm": 27,
        "rank": 12,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.5,
        "spm": 20,
        "rank": 19,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.5,
        "spm": 20,
        "rank": 13,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.2,
        "spm": 20,
        "rank": 6,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 35.8,
        "spm": 26,
        "rank": 7,
        "of": 33
      }
    ]
  },
  {
    "id": "fischer",
    "name": "Fischer",
    "group": "B",
    "rank": 34,
    "avgSplit": 46.7,
    "bestSplit": 38.2,
    "bestSplitDate": "2025-04-03",
    "sessionCount": 23,
    "trend": "improving",
    "trendDelta": -0.7,
    "consistency": 88,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 13,
        "avgSplit": 46.9
      },
      "intervals": {
        "sessions": 10,
        "avgSplit": 44.0
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-16",
        "split": 48.9
      },
      {
        "date": "2025-01-20",
        "split": 48.7
      },
      {
        "date": "2025-01-25",
        "split": 46.1
      },
      {
        "date": "2025-01-30",
        "split": 44.8
      },
      {
        "date": "2025-02-06",
        "split": 49.7
      },
      {
        "date": "2025-02-08",
        "split": 47.8
      },
      {
        "date": "2025-02-13",
        "split": 44.8
      },
      {
        "date": "2025-02-20",
        "split": 42.6
      },
      {
        "date": "2025-02-22",
        "split": 49.3
      },
      {
        "date": "2025-02-27",
        "split": 47.7
      },
      {
        "date": "2025-03-01",
        "split": 47.2
      },
      {
        "date": "2025-03-06",
        "split": 43.7
      },
      {
        "date": "2025-03-10",
        "split": 47.7
      },
      {
        "date": "2025-03-13",
        "split": 42.4
      },
      {
        "date": "2025-03-15",
        "split": 48.6
      },
      {
        "date": "2025-03-20",
        "split": 38.5
      },
      {
        "date": "2025-03-22",
        "split": 47.9
      },
      {
        "date": "2025-03-27",
        "split": 38.4
      },
      {
        "date": "2025-03-29",
        "split": 47.1
      },
      {
        "date": "2025-04-03",
        "split": 37.2
      },
      {
        "date": "2025-04-17",
        "split": 47.4
      },
      {
        "date": "2025-04-19",
        "split": 47.7
      },
      {
        "date": "2025-04-21",
        "split": 46.6
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.9,
        "spm": 20,
        "rank": 17,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 48.7,
        "spm": 20,
        "rank": 15,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.1,
        "spm": 21,
        "rank": 12,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 44.8,
        "spm": 22,
        "rank": 15,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.7,
        "spm": 20,
        "rank": 17,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.8,
        "spm": 20,
        "rank": 13,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.8,
        "spm": 22,
        "rank": 17,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 42.6,
        "spm": 24,
        "rank": 11,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.3,
        "spm": 19,
        "rank": 17,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 47.7,
        "spm": 20,
        "rank": 19,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.2,
        "spm": 20,
        "rank": 13,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 43.7,
        "spm": 22,
        "rank": 11,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.7,
        "spm": 20,
        "rank": 17,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 42.4,
        "spm": 24,
        "rank": 13,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.6,
        "spm": 20,
        "rank": 17,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 38.5,
        "spm": 27,
        "rank": 9,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.9,
        "spm": 20,
        "rank": 13,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 38.4,
        "spm": 27,
        "rank": 7,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 47.1,
        "spm": 22,
        "rank": 16,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 37.2,
        "spm": 28,
        "rank": 6,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.4,
        "spm": 20,
        "rank": 14,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.7,
        "spm": 20,
        "rank": 15,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.6,
        "spm": 20,
        "rank": 13,
        "of": 37
      }
    ]
  },
  {
    "id": "volkov",
    "name": "Volkov",
    "group": "B",
    "rank": 35,
    "avgSplit": 47.0,
    "bestSplit": 38.4,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 25,
    "trend": "improving",
    "trendDelta": -4.9,
    "consistency": 96,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 14,
        "avgSplit": 47.2
      },
      "intervals": {
        "sessions": 11,
        "avgSplit": 44.1
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 49.4
      },
      {
        "date": "2025-01-16",
        "split": 48.5
      },
      {
        "date": "2025-01-20",
        "split": 48.5
      },
      {
        "date": "2025-01-25",
        "split": 45.7
      },
      {
        "date": "2025-01-30",
        "split": 44.6
      },
      {
        "date": "2025-02-06",
        "split": 48.1
      },
      {
        "date": "2025-02-08",
        "split": 48.9
      },
      {
        "date": "2025-02-13",
        "split": 45.8
      },
      {
        "date": "2025-02-20",
        "split": 43.9
      },
      {
        "date": "2025-02-22",
        "split": 49.0
      },
      {
        "date": "2025-02-27",
        "split": 47.8
      },
      {
        "date": "2025-03-01",
        "split": 48.1
      },
      {
        "date": "2025-03-06",
        "split": 44.9
      },
      {
        "date": "2025-03-10",
        "split": 47.0
      },
      {
        "date": "2025-03-13",
        "split": 44.8
      },
      {
        "date": "2025-03-15",
        "split": 48.8
      },
      {
        "date": "2025-03-20",
        "split": 39.1
      },
      {
        "date": "2025-03-22",
        "split": 47.7
      },
      {
        "date": "2025-03-27",
        "split": 39.5
      },
      {
        "date": "2025-03-29",
        "split": 46.2
      },
      {
        "date": "2025-04-03",
        "split": 39.8
      },
      {
        "date": "2025-04-17",
        "split": 47.8
      },
      {
        "date": "2025-04-19",
        "split": 47.5
      },
      {
        "date": "2025-04-21",
        "split": 47.0
      },
      {
        "date": "2025-04-23",
        "split": 37.2
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.4,
        "spm": 18,
        "rank": 17,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.5,
        "spm": 18,
        "rank": 14,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 48.5,
        "spm": 20,
        "rank": 14,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 45.7,
        "spm": 22,
        "rank": 8,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 44.6,
        "spm": 21,
        "rank": 13,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.1,
        "spm": 20,
        "rank": 8,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.9,
        "spm": 19,
        "rank": 21,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 45.8,
        "spm": 22,
        "rank": 19,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 43.9,
        "spm": 24,
        "rank": 17,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.0,
        "spm": 19,
        "rank": 12,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 47.8,
        "spm": 20,
        "rank": 20,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.1,
        "spm": 20,
        "rank": 18,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.9,
        "spm": 22,
        "rank": 18,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.0,
        "spm": 20,
        "rank": 9,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.8,
        "spm": 24,
        "rank": 21,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.8,
        "spm": 20,
        "rank": 18,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.1,
        "spm": 28,
        "rank": 12,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.7,
        "spm": 20,
        "rank": 12,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.5,
        "spm": 27,
        "rank": 17,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.2,
        "spm": 22,
        "rank": 7,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 39.8,
        "spm": 28,
        "rank": 17,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.8,
        "spm": 20,
        "rank": 16,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.5,
        "spm": 20,
        "rank": 14,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 47.0,
        "spm": 20,
        "rank": 18,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 37.2,
        "spm": 27,
        "rank": 9,
        "of": 33
      }
    ]
  },
  {
    "id": "dalton",
    "name": "Dalton",
    "group": "B",
    "rank": 36,
    "avgSplit": 45.2,
    "bestSplit": 38.4,
    "bestSplitDate": "2025-03-27",
    "sessionCount": 18,
    "trend": "improving",
    "trendDelta": -5.2,
    "consistency": 69,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 9,
        "avgSplit": 47.8
      },
      "intervals": {
        "sessions": 9,
        "avgSplit": 43.9
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 49.8
      },
      {
        "date": "2025-01-16",
        "split": 48.8
      },
      {
        "date": "2025-01-20",
        "split": 48.7
      },
      {
        "date": "2025-01-25",
        "split": 46.1
      },
      {
        "date": "2025-01-30",
        "split": 45.0
      },
      {
        "date": "2025-02-06",
        "split": 48.4
      },
      {
        "date": "2025-02-08",
        "split": 47.6
      },
      {
        "date": "2025-02-13",
        "split": 44.7
      },
      {
        "date": "2025-02-20",
        "split": 42.7
      },
      {
        "date": "2025-02-22",
        "split": 48.8
      },
      {
        "date": "2025-03-06",
        "split": 44.3
      },
      {
        "date": "2025-03-10",
        "split": 47.7
      },
      {
        "date": "2025-03-13",
        "split": 43.4
      },
      {
        "date": "2025-03-15",
        "split": 47.6
      },
      {
        "date": "2025-03-20",
        "split": 39.3
      },
      {
        "date": "2025-03-27",
        "split": 39.0
      },
      {
        "date": "2025-03-29",
        "split": 46.3
      },
      {
        "date": "2025-04-21",
        "split": 46.4
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.8,
        "spm": 20,
        "rank": 19,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.8,
        "spm": 20,
        "rank": 16,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 48.7,
        "spm": 20,
        "rank": 17,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.1,
        "spm": 22,
        "rank": 13,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 45.0,
        "spm": 22,
        "rank": 16,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.4,
        "spm": 20,
        "rank": 10,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.6,
        "spm": 20,
        "rank": 11,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.7,
        "spm": 22,
        "rank": 15,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 42.7,
        "spm": 24,
        "rank": 13,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.8,
        "spm": 19,
        "rank": 7,
        "of": 43
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.3,
        "spm": 22,
        "rank": 14,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.7,
        "spm": 20,
        "rank": 16,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 43.4,
        "spm": 24,
        "rank": 16,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.6,
        "spm": 20,
        "rank": 12,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.3,
        "spm": 27,
        "rank": 15,
        "of": 43
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.0,
        "spm": 28,
        "rank": 12,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.3,
        "spm": 22,
        "rank": 8,
        "of": 41
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.4,
        "spm": 20,
        "rank": 12,
        "of": 37
      }
    ]
  },
  {
    "id": "sato",
    "name": "Sato",
    "group": "B",
    "rank": 37,
    "avgSplit": 45.4,
    "bestSplit": 37.7,
    "bestSplitDate": "2025-03-20",
    "sessionCount": 20,
    "trend": "improving",
    "trendDelta": -4.3,
    "consistency": 77,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 12,
        "avgSplit": 47.4
      },
      "intervals": {
        "sessions": 8,
        "avgSplit": 43.5
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 50.7
      },
      {
        "date": "2025-01-16",
        "split": 48.9
      },
      {
        "date": "2025-01-25",
        "split": 47.1
      },
      {
        "date": "2025-01-30",
        "split": 45.2
      },
      {
        "date": "2025-02-06",
        "split": 50.4
      },
      {
        "date": "2025-02-08",
        "split": 47.6
      },
      {
        "date": "2025-02-13",
        "split": 44.6
      },
      {
        "date": "2025-02-20",
        "split": 42.6
      },
      {
        "date": "2025-02-22",
        "split": 47.3
      },
      {
        "date": "2025-02-27",
        "split": 47.4
      },
      {
        "date": "2025-03-06",
        "split": 44.7
      },
      {
        "date": "2025-03-10",
        "split": 47.6
      },
      {
        "date": "2025-03-13",
        "split": 43.6
      },
      {
        "date": "2025-03-15",
        "split": 48.8
      },
      {
        "date": "2025-03-20",
        "split": 38.1
      },
      {
        "date": "2025-03-22",
        "split": 48.4
      },
      {
        "date": "2025-03-27",
        "split": 39.3
      },
      {
        "date": "2025-03-29",
        "split": 47.3
      },
      {
        "date": "2025-04-03",
        "split": 39.1
      },
      {
        "date": "2025-04-17",
        "split": 47.5
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 50.7,
        "spm": 20,
        "rank": 23,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.9,
        "spm": 20,
        "rank": 18,
        "of": 48
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.1,
        "spm": 22,
        "rank": 17,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 45.2,
        "spm": 22,
        "rank": 17,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 50.4,
        "spm": 20,
        "rank": 20,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.6,
        "spm": 20,
        "rank": 10,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.6,
        "spm": 22,
        "rank": 14,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 42.6,
        "spm": 24,
        "rank": 12,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.3,
        "spm": 20,
        "rank": 4,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 47.4,
        "spm": 20,
        "rank": 16,
        "of": 45
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.7,
        "spm": 22,
        "rank": 16,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.6,
        "spm": 20,
        "rank": 15,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 43.6,
        "spm": 24,
        "rank": 17,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.8,
        "spm": 20,
        "rank": 21,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 38.1,
        "spm": 30,
        "rank": 7,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.4,
        "spm": 20,
        "rank": 17,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.3,
        "spm": 30,
        "rank": 16,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 47.3,
        "spm": 22,
        "rank": 18,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 39.1,
        "spm": 29,
        "rank": 14,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.5,
        "spm": 20,
        "rank": 15,
        "of": 41
      }
    ]
  },
  {
    "id": "petrov",
    "name": "Petrov",
    "group": "A",
    "rank": 38,
    "avgSplit": 46.2,
    "bestSplit": 37.4,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 19,
    "trend": "improving",
    "trendDelta": -3.4,
    "consistency": 73,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 11,
        "avgSplit": 47.1
      },
      "intervals": {
        "sessions": 8,
        "avgSplit": 44.1
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-20",
        "split": 48.6
      },
      {
        "date": "2025-01-25",
        "split": 47.6
      },
      {
        "date": "2025-01-30",
        "split": 44.8
      },
      {
        "date": "2025-02-06",
        "split": 50.7
      },
      {
        "date": "2025-02-08",
        "split": 48.3
      },
      {
        "date": "2025-02-13",
        "split": 46.1
      },
      {
        "date": "2025-02-20",
        "split": 44.1
      },
      {
        "date": "2025-02-22",
        "split": 48.9
      },
      {
        "date": "2025-03-01",
        "split": 47.1
      },
      {
        "date": "2025-03-10",
        "split": 48.1
      },
      {
        "date": "2025-03-22",
        "split": 47.9
      },
      {
        "date": "2025-03-27",
        "split": 40.3
      },
      {
        "date": "2025-03-29",
        "split": 46.9
      },
      {
        "date": "2025-04-03",
        "split": 39.4
      },
      {
        "date": "2025-04-10",
        "split": 43.9
      },
      {
        "date": "2025-04-17",
        "split": 47.7
      },
      {
        "date": "2025-04-19",
        "split": 47.6
      },
      {
        "date": "2025-04-21",
        "split": 46.1
      },
      {
        "date": "2025-04-23",
        "split": 37.1
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 48.6,
        "spm": 20,
        "rank": 17,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.6,
        "spm": 21,
        "rank": 23,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.8,
        "spm": 22,
        "rank": 19,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 50.7,
        "spm": 20,
        "rank": 19,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.3,
        "spm": 19,
        "rank": 16,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.1,
        "spm": 22,
        "rank": 16,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 44.1,
        "spm": 24,
        "rank": 18,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.9,
        "spm": 19,
        "rank": 11,
        "of": 43
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.1,
        "spm": 20,
        "rank": 11,
        "of": 41
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.1,
        "spm": 20,
        "rank": 11,
        "of": 42
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.9,
        "spm": 20,
        "rank": 9,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 40.3,
        "spm": 28,
        "rank": 19,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.9,
        "spm": 22,
        "rank": 13,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 39.4,
        "spm": 28,
        "rank": 16,
        "of": 43
      },
      {
        "sessionId": "2025-04-10",
        "date": "2025-04-10",
        "workoutName": "Threshold Test D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 43.9,
        "spm": 27,
        "rank": 16,
        "of": 18
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.7,
        "spm": 20,
        "rank": 15,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.6,
        "spm": 20,
        "rank": 15,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.1,
        "spm": 20,
        "rank": 3,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 37.1,
        "spm": 27,
        "rank": 11,
        "of": 33
      }
    ]
  },
  {
    "id": "osullivan",
    "name": "O'Sullivan",
    "group": "A",
    "rank": 39,
    "avgSplit": 47.0,
    "bestSplit": 37.0,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 22,
    "trend": "improving",
    "trendDelta": -6.7,
    "consistency": 85,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 12,
        "avgSplit": 47.8
      },
      "intervals": {
        "sessions": 10,
        "avgSplit": 43.9
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 51.7
      },
      {
        "date": "2025-01-16",
        "split": 49.1
      },
      {
        "date": "2025-01-20",
        "split": 49.5
      },
      {
        "date": "2025-01-30",
        "split": 46.4
      },
      {
        "date": "2025-02-06",
        "split": 51.8
      },
      {
        "date": "2025-02-08",
        "split": 47.9
      },
      {
        "date": "2025-02-13",
        "split": 47.2
      },
      {
        "date": "2025-02-20",
        "split": 44.3
      },
      {
        "date": "2025-02-22",
        "split": 48.2
      },
      {
        "date": "2025-02-27",
        "split": 47.7
      },
      {
        "date": "2025-03-01",
        "split": 46.3
      },
      {
        "date": "2025-03-10",
        "split": 51.2
      },
      {
        "date": "2025-03-15",
        "split": 46.4
      },
      {
        "date": "2025-03-20",
        "split": 38.8
      },
      {
        "date": "2025-03-27",
        "split": 39.0
      },
      {
        "date": "2025-03-29",
        "split": 47.1
      },
      {
        "date": "2025-04-03",
        "split": 38.2
      },
      {
        "date": "2025-04-10",
        "split": 43.1
      },
      {
        "date": "2025-04-17",
        "split": 47.9
      },
      {
        "date": "2025-04-19",
        "split": 47.9
      },
      {
        "date": "2025-04-21",
        "split": 46.4
      },
      {
        "date": "2025-04-23",
        "split": 36.0
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 51.7,
        "spm": 20,
        "rank": 24,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.1,
        "spm": 20,
        "rank": 20,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 49.5,
        "spm": 20,
        "rank": 21,
        "of": 49
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.4,
        "spm": 22,
        "rank": 24,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 51.8,
        "spm": 20,
        "rank": 22,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.9,
        "spm": 19,
        "rank": 14,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 47.2,
        "spm": 22,
        "rank": 20,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 44.3,
        "spm": 24,
        "rank": 19,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.2,
        "spm": 19,
        "rank": 6,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 47.7,
        "spm": 20,
        "rank": 13,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.3,
        "spm": 20,
        "rank": 5,
        "of": 41
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 51.2,
        "spm": 20,
        "rank": 18,
        "of": 42
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.4,
        "spm": 20,
        "rank": 4,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 38.8,
        "spm": 29,
        "rank": 14,
        "of": 43
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 39.0,
        "spm": 28,
        "rank": 12,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 47.1,
        "spm": 22,
        "rank": 15,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 38.2,
        "spm": 29,
        "rank": 11,
        "of": 43
      },
      {
        "sessionId": "2025-04-10",
        "date": "2025-04-10",
        "workoutName": "Threshold Test D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 43.1,
        "spm": 28,
        "rank": 13,
        "of": 18
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.9,
        "spm": 20,
        "rank": 17,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.9,
        "spm": 21,
        "rank": 17,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.4,
        "spm": 20,
        "rank": 7,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 36.0,
        "spm": 28,
        "rank": 8,
        "of": 33
      }
    ]
  },
  {
    "id": "bakker",
    "name": "Bakker",
    "group": "A",
    "rank": 40,
    "avgSplit": 47.0,
    "bestSplit": 40.0,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 20,
    "trend": "improving",
    "trendDelta": -4.5,
    "consistency": 77,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 10,
        "avgSplit": 47.5
      },
      "intervals": {
        "sessions": 10,
        "avgSplit": 44.6
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-30",
        "split": 47.3
      },
      {
        "date": "2025-02-06",
        "split": 51.1
      },
      {
        "date": "2025-02-08",
        "split": 47.6
      },
      {
        "date": "2025-02-13",
        "split": 47.4
      },
      {
        "date": "2025-02-20",
        "split": 45.4
      },
      {
        "date": "2025-02-22",
        "split": 49.7
      },
      {
        "date": "2025-02-27",
        "split": 47.9
      },
      {
        "date": "2025-03-01",
        "split": 47.2
      },
      {
        "date": "2025-03-06",
        "split": 45.5
      },
      {
        "date": "2025-03-15",
        "split": 47.8
      },
      {
        "date": "2025-03-20",
        "split": 41.9
      },
      {
        "date": "2025-03-22",
        "split": 48.1
      },
      {
        "date": "2025-03-27",
        "split": 41.4
      },
      {
        "date": "2025-03-29",
        "split": 46.5
      },
      {
        "date": "2025-04-03",
        "split": 41.1
      },
      {
        "date": "2025-04-10",
        "split": 44.6
      },
      {
        "date": "2025-04-17",
        "split": 47.9
      },
      {
        "date": "2025-04-19",
        "split": 47.1
      },
      {
        "date": "2025-04-21",
        "split": 46.5
      },
      {
        "date": "2025-04-23",
        "split": 39.0
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.3,
        "spm": 22,
        "rank": 25,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 51.1,
        "spm": 21,
        "rank": 21,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.6,
        "spm": 20,
        "rank": 12,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 47.4,
        "spm": 22,
        "rank": 21,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 45.4,
        "spm": 24,
        "rank": 21,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.7,
        "spm": 20,
        "rank": 19,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 47.9,
        "spm": 20,
        "rank": 15,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.2,
        "spm": 21,
        "rank": 12,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 45.5,
        "spm": 22,
        "rank": 14,
        "of": 43
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.8,
        "spm": 20,
        "rank": 10,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 41.9,
        "spm": 27,
        "rank": 23,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.1,
        "spm": 21,
        "rank": 11,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 41.4,
        "spm": 27,
        "rank": 20,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.5,
        "spm": 22,
        "rank": 10,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 41.1,
        "spm": 27,
        "rank": 21,
        "of": 43
      },
      {
        "sessionId": "2025-04-10",
        "date": "2025-04-10",
        "workoutName": "Threshold Test D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 44.6,
        "spm": 24,
        "rank": 18,
        "of": 18
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.9,
        "spm": 21,
        "rank": 18,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.1,
        "spm": 21,
        "rank": 10,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.5,
        "spm": 21,
        "rank": 8,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 39.0,
        "spm": 27,
        "rank": 17,
        "of": 33
      }
    ]
  },
  {
    "id": "kwon",
    "name": "Kwon",
    "group": "A",
    "rank": 41,
    "avgSplit": 45.1,
    "bestSplit": 36.5,
    "bestSplitDate": "2025-03-20",
    "sessionCount": 11,
    "trend": "improving",
    "trendDelta": -3.7,
    "consistency": 42,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 7,
        "avgSplit": 47.8
      },
      "intervals": {
        "sessions": 4,
        "avgSplit": 43.1
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 49.7
      },
      {
        "date": "2025-01-20",
        "split": 48.8
      },
      {
        "date": "2025-01-25",
        "split": 46.9
      },
      {
        "date": "2025-01-30",
        "split": 44.6
      },
      {
        "date": "2025-02-06",
        "split": 48.8
      },
      {
        "date": "2025-02-08",
        "split": 47.5
      },
      {
        "date": "2025-02-13",
        "split": 43.9
      },
      {
        "date": "2025-02-20",
        "split": 42.3
      },
      {
        "date": "2025-02-22",
        "split": 49.4
      },
      {
        "date": "2025-03-01",
        "split": 47.4
      },
      {
        "date": "2025-03-20",
        "split": 37.5
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.7,
        "spm": 20,
        "rank": 22,
        "of": 51
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 48.8,
        "spm": 21,
        "rank": 19,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.9,
        "spm": 22,
        "rank": 21,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.6,
        "spm": 22,
        "rank": 16,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.8,
        "spm": 20,
        "rank": 11,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.5,
        "spm": 20,
        "rank": 11,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 43.9,
        "spm": 22,
        "rank": 9,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 42.3,
        "spm": 24,
        "rank": 10,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.4,
        "spm": 19,
        "rank": 15,
        "of": 43
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.4,
        "spm": 20,
        "rank": 13,
        "of": 41
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 37.5,
        "spm": 28,
        "rank": 9,
        "of": 43
      }
    ]
  },
  {
    "id": "thornton",
    "name": "Thornton",
    "group": "B",
    "rank": 42,
    "avgSplit": 45.1,
    "bestSplit": 36.5,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 25,
    "trend": "improving",
    "trendDelta": -4.8,
    "consistency": 96,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 14,
        "avgSplit": 47.6
      },
      "intervals": {
        "sessions": 11,
        "avgSplit": 44.2
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 48.9
      },
      {
        "date": "2025-01-16",
        "split": 48.4
      },
      {
        "date": "2025-01-20",
        "split": 48.8
      },
      {
        "date": "2025-01-25",
        "split": 46.7
      },
      {
        "date": "2025-01-30",
        "split": 45.5
      },
      {
        "date": "2025-02-06",
        "split": 49.9
      },
      {
        "date": "2025-02-08",
        "split": 48.7
      },
      {
        "date": "2025-02-13",
        "split": 45.6
      },
      {
        "date": "2025-02-20",
        "split": 44.6
      },
      {
        "date": "2025-02-22",
        "split": 50.1
      },
      {
        "date": "2025-02-27",
        "split": 48.0
      },
      {
        "date": "2025-03-01",
        "split": 47.8
      },
      {
        "date": "2025-03-06",
        "split": 45.3
      },
      {
        "date": "2025-03-10",
        "split": 48.2
      },
      {
        "date": "2025-03-13",
        "split": 43.8
      },
      {
        "date": "2025-03-15",
        "split": 48.0
      },
      {
        "date": "2025-03-20",
        "split": 39.3
      },
      {
        "date": "2025-03-22",
        "split": 48.5
      },
      {
        "date": "2025-03-27",
        "split": 39.6
      },
      {
        "date": "2025-03-29",
        "split": 46.5
      },
      {
        "date": "2025-04-03",
        "split": 39.5
      },
      {
        "date": "2025-04-17",
        "split": 48.1
      },
      {
        "date": "2025-04-19",
        "split": 47.4
      },
      {
        "date": "2025-04-21",
        "split": 46.9
      },
      {
        "date": "2025-04-23",
        "split": 37.5
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.9,
        "spm": 20,
        "rank": 13,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.4,
        "spm": 20,
        "rank": 13,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 48.8,
        "spm": 20,
        "rank": 18,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.7,
        "spm": 22,
        "rank": 16,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 45.5,
        "spm": 22,
        "rank": 19,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.9,
        "spm": 20,
        "rank": 18,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.7,
        "spm": 20,
        "rank": 20,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 45.6,
        "spm": 22,
        "rank": 18,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.6,
        "spm": 24,
        "rank": 19,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 50.1,
        "spm": 20,
        "rank": 20,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 48.0,
        "spm": 20,
        "rank": 21,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.8,
        "spm": 20,
        "rank": 16,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 45.3,
        "spm": 22,
        "rank": 20,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.2,
        "spm": 20,
        "rank": 19,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 43.8,
        "spm": 24,
        "rank": 20,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.0,
        "spm": 20,
        "rank": 16,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.3,
        "spm": 29,
        "rank": 16,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.5,
        "spm": 20,
        "rank": 18,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.6,
        "spm": 30,
        "rank": 18,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.5,
        "spm": 22,
        "rank": 11,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 39.5,
        "spm": 29,
        "rank": 15,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.1,
        "spm": 20,
        "rank": 19,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.4,
        "spm": 20,
        "rank": 12,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.9,
        "spm": 20,
        "rank": 17,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 37.5,
        "spm": 27,
        "rank": 11,
        "of": 33
      }
    ]
  },
  {
    "id": "malik",
    "name": "Malik",
    "group": "B",
    "rank": 43,
    "avgSplit": 47.7,
    "bestSplit": 39.4,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 25,
    "trend": "improving",
    "trendDelta": -6.0,
    "consistency": 96,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 14,
        "avgSplit": 47.8
      },
      "intervals": {
        "sessions": 11,
        "avgSplit": 44.0
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 51.3
      },
      {
        "date": "2025-01-16",
        "split": 50.3
      },
      {
        "date": "2025-01-20",
        "split": 48.7
      },
      {
        "date": "2025-01-25",
        "split": 47.3
      },
      {
        "date": "2025-01-30",
        "split": 46.2
      },
      {
        "date": "2025-02-06",
        "split": 50.1
      },
      {
        "date": "2025-02-08",
        "split": 48.7
      },
      {
        "date": "2025-02-13",
        "split": 46.1
      },
      {
        "date": "2025-02-20",
        "split": 43.5
      },
      {
        "date": "2025-02-22",
        "split": 48.8
      },
      {
        "date": "2025-02-27",
        "split": 48.3
      },
      {
        "date": "2025-03-01",
        "split": 48.3
      },
      {
        "date": "2025-03-06",
        "split": 45.5
      },
      {
        "date": "2025-03-10",
        "split": 47.3
      },
      {
        "date": "2025-03-13",
        "split": 43.0
      },
      {
        "date": "2025-03-15",
        "split": 46.9
      },
      {
        "date": "2025-03-20",
        "split": 39.1
      },
      {
        "date": "2025-03-22",
        "split": 48.5
      },
      {
        "date": "2025-03-27",
        "split": 39.3
      },
      {
        "date": "2025-03-29",
        "split": 46.1
      },
      {
        "date": "2025-04-03",
        "split": 41.7
      },
      {
        "date": "2025-04-17",
        "split": 46.6
      },
      {
        "date": "2025-04-19",
        "split": 47.6
      },
      {
        "date": "2025-04-21",
        "split": 46.9
      },
      {
        "date": "2025-04-23",
        "split": 37.9
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 51.3,
        "spm": 18,
        "rank": 24,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 50.3,
        "spm": 18,
        "rank": 22,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 48.7,
        "spm": 20,
        "rank": 16,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.3,
        "spm": 21,
        "rank": 18,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.2,
        "spm": 21,
        "rank": 21,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 50.1,
        "spm": 20,
        "rank": 19,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.7,
        "spm": 19,
        "rank": 19,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.1,
        "spm": 22,
        "rank": 21,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 43.5,
        "spm": 24,
        "rank": 16,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.8,
        "spm": 19,
        "rank": 8,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 48.3,
        "spm": 20,
        "rank": 22,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.3,
        "spm": 20,
        "rank": 21,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 45.5,
        "spm": 22,
        "rank": 22,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.3,
        "spm": 20,
        "rank": 13,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 43.0,
        "spm": 24,
        "rank": 14,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.9,
        "spm": 20,
        "rank": 5,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.1,
        "spm": 27,
        "rank": 13,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.5,
        "spm": 20,
        "rank": 20,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.3,
        "spm": 27,
        "rank": 15,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.1,
        "spm": 22,
        "rank": 6,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 41.7,
        "spm": 28,
        "rank": 21,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.6,
        "spm": 20,
        "rank": 11,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.6,
        "spm": 20,
        "rank": 14,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.9,
        "spm": 20,
        "rank": 13,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 37.9,
        "spm": 26,
        "rank": 16,
        "of": 33
      }
    ]
  },
  {
    "id": "petrowski",
    "name": "Petrowski",
    "group": "B",
    "rank": 44,
    "avgSplit": 46.0,
    "bestSplit": 35.6,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 25,
    "trend": "improving",
    "trendDelta": -7.9,
    "consistency": 96,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 14,
        "avgSplit": 48.0
      },
      "intervals": {
        "sessions": 11,
        "avgSplit": 44.0
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 51.6
      },
      {
        "date": "2025-01-16",
        "split": 50.9
      },
      {
        "date": "2025-01-20",
        "split": 49.0
      },
      {
        "date": "2025-01-25",
        "split": 47.5
      },
      {
        "date": "2025-01-30",
        "split": 46.5
      },
      {
        "date": "2025-02-06",
        "split": 51.5
      },
      {
        "date": "2025-02-08",
        "split": 48.5
      },
      {
        "date": "2025-02-13",
        "split": 45.9
      },
      {
        "date": "2025-02-20",
        "split": 44.6
      },
      {
        "date": "2025-02-22",
        "split": 48.9
      },
      {
        "date": "2025-02-27",
        "split": 48.3
      },
      {
        "date": "2025-03-01",
        "split": 48.2
      },
      {
        "date": "2025-03-06",
        "split": 44.9
      },
      {
        "date": "2025-03-10",
        "split": 47.4
      },
      {
        "date": "2025-03-13",
        "split": 46.2
      },
      {
        "date": "2025-03-15",
        "split": 49.4
      },
      {
        "date": "2025-03-20",
        "split": 39.2
      },
      {
        "date": "2025-03-22",
        "split": 48.4
      },
      {
        "date": "2025-03-27",
        "split": 38.5
      },
      {
        "date": "2025-03-29",
        "split": 45.9
      },
      {
        "date": "2025-04-03",
        "split": 39.7
      },
      {
        "date": "2025-04-17",
        "split": 46.3
      },
      {
        "date": "2025-04-19",
        "split": 46.6
      },
      {
        "date": "2025-04-21",
        "split": 45.5
      },
      {
        "date": "2025-04-23",
        "split": 35.8
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 51.6,
        "spm": 18,
        "rank": 25,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 50.9,
        "spm": 18,
        "rank": 23,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 49.0,
        "spm": 20,
        "rank": 19,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.5,
        "spm": 21,
        "rank": 19,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.5,
        "spm": 22,
        "rank": 22,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 51.5,
        "spm": 20,
        "rank": 21,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.5,
        "spm": 19,
        "rank": 16,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 45.9,
        "spm": 22,
        "rank": 20,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.6,
        "spm": 24,
        "rank": 20,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.9,
        "spm": 19,
        "rank": 9,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 48.3,
        "spm": 20,
        "rank": 23,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.2,
        "spm": 20,
        "rank": 20,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.9,
        "spm": 22,
        "rank": 17,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.4,
        "spm": 20,
        "rank": 14,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.2,
        "spm": 24,
        "rank": 24,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.4,
        "spm": 20,
        "rank": 23,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.2,
        "spm": 30,
        "rank": 14,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.4,
        "spm": 20,
        "rank": 16,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 38.5,
        "spm": 28,
        "rank": 9,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 45.9,
        "spm": 22,
        "rank": 5,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 39.7,
        "spm": 29,
        "rank": 16,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.3,
        "spm": 20,
        "rank": 7,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 46.6,
        "spm": 20,
        "rank": 8,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 45.5,
        "spm": 20,
        "rank": 8,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 35.8,
        "spm": 27,
        "rank": 6,
        "of": 33
      }
    ]
  },
  {
    "id": "kowalski",
    "name": "Kowalski",
    "group": "A",
    "rank": 45,
    "avgSplit": 45.9,
    "bestSplit": 37.3,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 23,
    "trend": "improving",
    "trendDelta": -4.5,
    "consistency": 88,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 13,
        "avgSplit": 47.7
      },
      "intervals": {
        "sessions": 10,
        "avgSplit": 44.6
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 49.3
      },
      {
        "date": "2025-01-16",
        "split": 49.3
      },
      {
        "date": "2025-01-20",
        "split": 47.9
      },
      {
        "date": "2025-01-25",
        "split": 46.7
      },
      {
        "date": "2025-01-30",
        "split": 45.3
      },
      {
        "date": "2025-02-06",
        "split": 49.6
      },
      {
        "date": "2025-02-08",
        "split": 49.5
      },
      {
        "date": "2025-02-13",
        "split": 45.3
      },
      {
        "date": "2025-02-20",
        "split": 44.0
      },
      {
        "date": "2025-02-22",
        "split": 49.8
      },
      {
        "date": "2025-02-27",
        "split": 47.8
      },
      {
        "date": "2025-03-01",
        "split": 48.2
      },
      {
        "date": "2025-03-06",
        "split": 45.7
      },
      {
        "date": "2025-03-10",
        "split": 48.1
      },
      {
        "date": "2025-03-15",
        "split": 48.0
      },
      {
        "date": "2025-03-22",
        "split": 48.5
      },
      {
        "date": "2025-03-27",
        "split": 39.9
      },
      {
        "date": "2025-03-29",
        "split": 47.5
      },
      {
        "date": "2025-04-03",
        "split": 39.7
      },
      {
        "date": "2025-04-10",
        "split": 43.9
      },
      {
        "date": "2025-04-19",
        "split": 48.4
      },
      {
        "date": "2025-04-21",
        "split": 46.7
      },
      {
        "date": "2025-04-23",
        "split": 37.8
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.3,
        "spm": 18,
        "rank": 19,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.3,
        "spm": 18,
        "rank": 21,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 47.9,
        "spm": 20,
        "rank": 8,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.7,
        "spm": 22,
        "rank": 18,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 45.3,
        "spm": 22,
        "rank": 22,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.6,
        "spm": 20,
        "rank": 15,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.5,
        "spm": 19,
        "rank": 21,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 45.3,
        "spm": 22,
        "rank": 15,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 44.0,
        "spm": 24,
        "rank": 17,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.8,
        "spm": 19,
        "rank": 20,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 47.8,
        "spm": 20,
        "rank": 14,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.2,
        "spm": 20,
        "rank": 15,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 45.7,
        "spm": 22,
        "rank": 15,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.1,
        "spm": 20,
        "rank": 12,
        "of": 42
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.0,
        "spm": 20,
        "rank": 15,
        "of": 40
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.5,
        "spm": 20,
        "rank": 14,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 39.9,
        "spm": 28,
        "rank": 17,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 47.5,
        "spm": 21,
        "rank": 17,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 39.7,
        "spm": 28,
        "rank": 18,
        "of": 43
      },
      {
        "sessionId": "2025-04-10",
        "date": "2025-04-10",
        "workoutName": "Threshold Test D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 43.9,
        "spm": 27,
        "rank": 15,
        "of": 18
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.4,
        "spm": 20,
        "rank": 18,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.7,
        "spm": 20,
        "rank": 10,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 37.8,
        "spm": 27,
        "rank": 15,
        "of": 33
      }
    ]
  },
  {
    "id": "magnusson",
    "name": "Magnusson",
    "group": "A",
    "rank": 46,
    "avgSplit": 45.4,
    "bestSplit": 42.7,
    "bestSplitDate": "2025-01-30",
    "sessionCount": 5,
    "trend": "stable",
    "trendDelta": 0.0,
    "consistency": 19,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 4,
        "avgSplit": 46.4
      },
      "intervals": {
        "sessions": 1,
        "avgSplit": 47.9
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 48.3
      },
      {
        "date": "2025-01-16",
        "split": 48.1
      },
      {
        "date": "2025-01-20",
        "split": 47.9
      },
      {
        "date": "2025-01-25",
        "split": 45.1
      },
      {
        "date": "2025-01-30",
        "split": 44.0
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.3,
        "spm": 20,
        "rank": 11,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.1,
        "spm": 20,
        "rank": 15,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 47.9,
        "spm": 20,
        "rank": 9,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 45.1,
        "spm": 22,
        "rank": 10,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.0,
        "spm": 22,
        "rank": 13,
        "of": 52
      }
    ]
  },
  {
    "id": "lim",
    "name": "Lim",
    "group": "B",
    "rank": 47,
    "avgSplit": 48.0,
    "bestSplit": 38.8,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 25,
    "trend": "improving",
    "trendDelta": -5.2,
    "consistency": 96,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 14,
        "avgSplit": 48.2
      },
      "intervals": {
        "sessions": 11,
        "avgSplit": 44.8
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 49.9
      },
      {
        "date": "2025-01-16",
        "split": 49.5
      },
      {
        "date": "2025-01-20",
        "split": 49.7
      },
      {
        "date": "2025-01-25",
        "split": 48.1
      },
      {
        "date": "2025-01-30",
        "split": 47.0
      },
      {
        "date": "2025-02-06",
        "split": 49.3
      },
      {
        "date": "2025-02-08",
        "split": 49.1
      },
      {
        "date": "2025-02-13",
        "split": 46.4
      },
      {
        "date": "2025-02-20",
        "split": 44.9
      },
      {
        "date": "2025-02-22",
        "split": 50.2
      },
      {
        "date": "2025-02-27",
        "split": 48.9
      },
      {
        "date": "2025-03-01",
        "split": 48.9
      },
      {
        "date": "2025-03-06",
        "split": 45.8
      },
      {
        "date": "2025-03-10",
        "split": 48.5
      },
      {
        "date": "2025-03-13",
        "split": 44.8
      },
      {
        "date": "2025-03-15",
        "split": 48.8
      },
      {
        "date": "2025-03-20",
        "split": 40.1
      },
      {
        "date": "2025-03-22",
        "split": 48.5
      },
      {
        "date": "2025-03-27",
        "split": 40.0
      },
      {
        "date": "2025-03-29",
        "split": 48.0
      },
      {
        "date": "2025-04-03",
        "split": 41.0
      },
      {
        "date": "2025-04-17",
        "split": 47.9
      },
      {
        "date": "2025-04-19",
        "split": 48.8
      },
      {
        "date": "2025-04-21",
        "split": 47.1
      },
      {
        "date": "2025-04-23",
        "split": 37.6
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.9,
        "spm": 19,
        "rank": 20,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.5,
        "spm": 20,
        "rank": 21,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 49.7,
        "spm": 21,
        "rank": 25,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.1,
        "spm": 22,
        "rank": 22,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.0,
        "spm": 22,
        "rank": 23,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.3,
        "spm": 20,
        "rank": 15,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.1,
        "spm": 20,
        "rank": 23,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.4,
        "spm": 22,
        "rank": 22,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.9,
        "spm": 24,
        "rank": 21,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 50.2,
        "spm": 19,
        "rank": 21,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 48.9,
        "spm": 20,
        "rank": 24,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.9,
        "spm": 20,
        "rank": 23,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 45.8,
        "spm": 22,
        "rank": 23,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.5,
        "spm": 20,
        "rank": 22,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 44.8,
        "spm": 24,
        "rank": 22,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.8,
        "spm": 20,
        "rank": 20,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 40.1,
        "spm": 28,
        "rank": 19,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.5,
        "spm": 20,
        "rank": 19,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 40.0,
        "spm": 29,
        "rank": 20,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 48.0,
        "spm": 21,
        "rank": 20,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 41.0,
        "spm": 28,
        "rank": 19,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.9,
        "spm": 20,
        "rank": 17,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.8,
        "spm": 21,
        "rank": 19,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 47.1,
        "spm": 20,
        "rank": 19,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 37.6,
        "spm": 29,
        "rank": 12,
        "of": 33
      }
    ]
  },
  {
    "id": "reeves",
    "name": "Reeves",
    "group": "A",
    "rank": 48,
    "avgSplit": 47.6,
    "bestSplit": 37.9,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 24,
    "trend": "improving",
    "trendDelta": -6.5,
    "consistency": 92,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 12,
        "avgSplit": 48.7
      },
      "intervals": {
        "sessions": 12,
        "avgSplit": 45.7
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 51.4
      },
      {
        "date": "2025-01-16",
        "split": 51.5
      },
      {
        "date": "2025-01-20",
        "split": 49.8
      },
      {
        "date": "2025-01-25",
        "split": 49.5
      },
      {
        "date": "2025-01-30",
        "split": 47.9
      },
      {
        "date": "2025-02-08",
        "split": 52.3
      },
      {
        "date": "2025-02-13",
        "split": 49.3
      },
      {
        "date": "2025-02-20",
        "split": 47.1
      },
      {
        "date": "2025-02-27",
        "split": 49.4
      },
      {
        "date": "2025-03-01",
        "split": 49.0
      },
      {
        "date": "2025-03-06",
        "split": 47.6
      },
      {
        "date": "2025-03-10",
        "split": 48.2
      },
      {
        "date": "2025-03-13",
        "split": 45.6
      },
      {
        "date": "2025-03-15",
        "split": 47.8
      },
      {
        "date": "2025-03-20",
        "split": 40.8
      },
      {
        "date": "2025-03-22",
        "split": 49.1
      },
      {
        "date": "2025-03-27",
        "split": 41.9
      },
      {
        "date": "2025-03-29",
        "split": 47.9
      },
      {
        "date": "2025-04-03",
        "split": 40.6
      },
      {
        "date": "2025-04-10",
        "split": 44.5
      },
      {
        "date": "2025-04-17",
        "split": 47.7
      },
      {
        "date": "2025-04-19",
        "split": 48.8
      },
      {
        "date": "2025-04-21",
        "split": 46.8
      },
      {
        "date": "2025-04-23",
        "split": 37.5
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 51.4,
        "spm": 19,
        "rank": 23,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 51.5,
        "spm": 20,
        "rank": 23,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 49.8,
        "spm": 20,
        "rank": 22,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.5,
        "spm": 22,
        "rank": 25,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.9,
        "spm": 22,
        "rank": 26,
        "of": 52
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 52.3,
        "spm": 20,
        "rank": 22,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 49.3,
        "spm": 23,
        "rank": 22,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 47.1,
        "spm": 24,
        "rank": 22,
        "of": 45
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 49.4,
        "spm": 21,
        "rank": 18,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.0,
        "spm": 20,
        "rank": 18,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 47.6,
        "spm": 22,
        "rank": 17,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.2,
        "spm": 20,
        "rank": 13,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 45.6,
        "spm": 24,
        "rank": 15,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.8,
        "spm": 20,
        "rank": 9,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 40.8,
        "spm": 27,
        "rank": 21,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.1,
        "spm": 20,
        "rank": 18,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 41.9,
        "spm": 28,
        "rank": 21,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 47.9,
        "spm": 22,
        "rank": 20,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 40.6,
        "spm": 27,
        "rank": 20,
        "of": 43
      },
      {
        "sessionId": "2025-04-10",
        "date": "2025-04-10",
        "workoutName": "Threshold Test D",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 44.5,
        "spm": 27,
        "rank": 17,
        "of": 18
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.7,
        "spm": 20,
        "rank": 16,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.8,
        "spm": 21,
        "rank": 19,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.8,
        "spm": 20,
        "rank": 12,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 37.5,
        "spm": 27,
        "rank": 14,
        "of": 33
      }
    ]
  },
  {
    "id": "callahan",
    "name": "Callahan",
    "group": "B",
    "rank": 49,
    "avgSplit": 46.8,
    "bestSplit": 44.9,
    "bestSplitDate": "2025-01-30",
    "sessionCount": 3,
    "trend": "stable",
    "trendDelta": 0.0,
    "consistency": 12,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 2,
        "avgSplit": 46.7
      },
      "intervals": {
        "sessions": 1,
        "avgSplit": 49.1
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-20",
        "split": 49.1
      },
      {
        "date": "2025-01-25",
        "split": 47.8
      },
      {
        "date": "2025-01-30",
        "split": 45.6
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 49.1,
        "spm": 20,
        "rank": 21,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.8,
        "spm": 22,
        "rank": 20,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 45.6,
        "spm": 22,
        "rank": 20,
        "of": 52
      }
    ]
  },
  {
    "id": "larsson",
    "name": "Larsson",
    "group": "B",
    "rank": 50,
    "avgSplit": 47.4,
    "bestSplit": 39.1,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 25,
    "trend": "improving",
    "trendDelta": -3.8,
    "consistency": 96,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 14,
        "avgSplit": 48.9
      },
      "intervals": {
        "sessions": 11,
        "avgSplit": 46.0
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 49.6
      },
      {
        "date": "2025-01-16",
        "split": 49.5
      },
      {
        "date": "2025-01-20",
        "split": 49.6
      },
      {
        "date": "2025-01-25",
        "split": 49.2
      },
      {
        "date": "2025-01-30",
        "split": 47.3
      },
      {
        "date": "2025-02-06",
        "split": 52.7
      },
      {
        "date": "2025-02-08",
        "split": 49.0
      },
      {
        "date": "2025-02-13",
        "split": 47.3
      },
      {
        "date": "2025-02-20",
        "split": 45.4
      },
      {
        "date": "2025-02-22",
        "split": 51.1
      },
      {
        "date": "2025-02-27",
        "split": 48.9
      },
      {
        "date": "2025-03-01",
        "split": 48.8
      },
      {
        "date": "2025-03-06",
        "split": 47.8
      },
      {
        "date": "2025-03-10",
        "split": 48.5
      },
      {
        "date": "2025-03-13",
        "split": 46.0
      },
      {
        "date": "2025-03-15",
        "split": 49.3
      },
      {
        "date": "2025-03-20",
        "split": 41.6
      },
      {
        "date": "2025-03-22",
        "split": 48.9
      },
      {
        "date": "2025-03-27",
        "split": 42.8
      },
      {
        "date": "2025-03-29",
        "split": 48.4
      },
      {
        "date": "2025-04-03",
        "split": 42.7
      },
      {
        "date": "2025-04-17",
        "split": 49.5
      },
      {
        "date": "2025-04-19",
        "split": 48.8
      },
      {
        "date": "2025-04-21",
        "split": 49.1
      },
      {
        "date": "2025-04-23",
        "split": 39.3
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.6,
        "spm": 20,
        "rank": 21,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.5,
        "spm": 20,
        "rank": 22,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 49.6,
        "spm": 20,
        "rank": 24,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.2,
        "spm": 21,
        "rank": 23,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 47.3,
        "spm": 22,
        "rank": 24,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 52.7,
        "spm": 20,
        "rank": 23,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.0,
        "spm": 20,
        "rank": 22,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 47.3,
        "spm": 22,
        "rank": 23,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 45.4,
        "spm": 24,
        "rank": 22,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 51.1,
        "spm": 19,
        "rank": 21,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 48.9,
        "spm": 20,
        "rank": 25,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.8,
        "spm": 20,
        "rank": 22,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 47.8,
        "spm": 22,
        "rank": 25,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.5,
        "spm": 20,
        "rank": 23,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 46.0,
        "spm": 24,
        "rank": 16,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.3,
        "spm": 20,
        "rank": 17,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 41.6,
        "spm": 28,
        "rank": 22,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.9,
        "spm": 21,
        "rank": 17,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 42.8,
        "spm": 27,
        "rank": 22,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 48.4,
        "spm": 22,
        "rank": 21,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 42.7,
        "spm": 27,
        "rank": 22,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.5,
        "spm": 20,
        "rank": 21,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.8,
        "spm": 21,
        "rank": 18,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 49.1,
        "spm": 20,
        "rank": 22,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.3,
        "spm": 27,
        "rank": 14,
        "of": 33
      }
    ]
  },
  {
    "id": "santos",
    "name": "Santos",
    "group": "A",
    "rank": 51,
    "avgSplit": 47.0,
    "bestSplit": 39.0,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 10,
    "trend": "improving",
    "trendDelta": -0.7,
    "consistency": 38,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 7,
        "avgSplit": 48.3
      },
      "intervals": {
        "sessions": 3,
        "avgSplit": 46.4
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 48.6
      },
      {
        "date": "2025-01-16",
        "split": 47.5
      },
      {
        "date": "2025-01-20",
        "split": 48.7
      },
      {
        "date": "2025-01-25",
        "split": 46.4
      },
      {
        "date": "2025-01-30",
        "split": 44.8
      },
      {
        "date": "2025-02-06",
        "split": 49.9
      },
      {
        "date": "2025-02-08",
        "split": 49.1
      },
      {
        "date": "2025-04-19",
        "split": 52.1
      },
      {
        "date": "2025-04-21",
        "split": 50.7
      },
      {
        "date": "2025-04-23",
        "split": 39.8
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.6,
        "spm": 18,
        "rank": 9,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 47.5,
        "spm": 18,
        "rank": 9,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupA",
        "split": 48.7,
        "spm": 20,
        "rank": 18,
        "of": 49
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 46.4,
        "spm": 22,
        "rank": 16,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 44.8,
        "spm": 22,
        "rank": 18,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.9,
        "spm": 20,
        "rank": 17,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 49.1,
        "spm": 19,
        "rank": 20,
        "of": 46
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 52.1,
        "spm": 20,
        "rank": 21,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 50.7,
        "spm": 20,
        "rank": 23,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 39.8,
        "spm": 26,
        "rank": 15,
        "of": 33
      }
    ]
  },
  {
    "id": "torres",
    "name": "Torres",
    "group": "B",
    "rank": 52,
    "avgSplit": 49.2,
    "bestSplit": 41.9,
    "bestSplitDate": "2025-04-23",
    "sessionCount": 23,
    "trend": "improving",
    "trendDelta": -3.6,
    "consistency": 88,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 13,
        "avgSplit": 49.4
      },
      "intervals": {
        "sessions": 10,
        "avgSplit": 45.9
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 49.2
      },
      {
        "date": "2025-01-25",
        "split": 51.4
      },
      {
        "date": "2025-01-30",
        "split": 48.9
      },
      {
        "date": "2025-02-06",
        "split": 54.4
      },
      {
        "date": "2025-02-08",
        "split": 49.7
      },
      {
        "date": "2025-02-13",
        "split": 48.1
      },
      {
        "date": "2025-02-20",
        "split": 46.0
      },
      {
        "date": "2025-02-22",
        "split": 51.8
      },
      {
        "date": "2025-02-27",
        "split": 49.3
      },
      {
        "date": "2025-03-01",
        "split": 48.2
      },
      {
        "date": "2025-03-06",
        "split": 48.8
      },
      {
        "date": "2025-03-10",
        "split": 48.4
      },
      {
        "date": "2025-03-13",
        "split": 45.9
      },
      {
        "date": "2025-03-15",
        "split": 49.3
      },
      {
        "date": "2025-03-20",
        "split": 42.4
      },
      {
        "date": "2025-03-22",
        "split": 50.2
      },
      {
        "date": "2025-03-27",
        "split": 41.7
      },
      {
        "date": "2025-03-29",
        "split": 47.4
      },
      {
        "date": "2025-04-03",
        "split": 41.5
      },
      {
        "date": "2025-04-17",
        "split": 50.4
      },
      {
        "date": "2025-04-19",
        "split": 49.1
      },
      {
        "date": "2025-04-21",
        "split": 49.0
      },
      {
        "date": "2025-04-23",
        "split": 40.6
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.2,
        "spm": 20,
        "rank": 15,
        "of": 51
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 51.4,
        "spm": 21,
        "rank": 25,
        "of": 50
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.9,
        "spm": 22,
        "rank": 26,
        "of": 52
      },
      {
        "sessionId": "2025-02-06",
        "date": "2025-02-06",
        "workoutName": "Threshold Test A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 54.4,
        "spm": 20,
        "rank": 22,
        "of": 45
      },
      {
        "sessionId": "2025-02-08",
        "date": "2025-02-08",
        "workoutName": "Endurance Set D",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.7,
        "spm": 20,
        "rank": 24,
        "of": 46
      },
      {
        "sessionId": "2025-02-13",
        "date": "2025-02-13",
        "workoutName": "Interval Set B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 48.1,
        "spm": 22,
        "rank": 24,
        "of": 46
      },
      {
        "sessionId": "2025-02-20",
        "date": "2025-02-20",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 46.0,
        "spm": 24,
        "rank": 23,
        "of": 45
      },
      {
        "sessionId": "2025-02-22",
        "date": "2025-02-22",
        "workoutName": "Endurance Set E",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 51.8,
        "spm": 19,
        "rank": 22,
        "of": 43
      },
      {
        "sessionId": "2025-02-27",
        "date": "2025-02-27",
        "workoutName": "Interval Set D",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 49.3,
        "spm": 20,
        "rank": 26,
        "of": 45
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.2,
        "spm": 20,
        "rank": 19,
        "of": 41
      },
      {
        "sessionId": "2025-03-06",
        "date": "2025-03-06",
        "workoutName": "Interval Set E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 48.8,
        "spm": 22,
        "rank": 26,
        "of": 43
      },
      {
        "sessionId": "2025-03-10",
        "date": "2025-03-10",
        "workoutName": "Endurance Set G",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.4,
        "spm": 20,
        "rank": 21,
        "of": 42
      },
      {
        "sessionId": "2025-03-13",
        "date": "2025-03-13",
        "workoutName": "Interval Set C",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 45.9,
        "spm": 24,
        "rank": 23,
        "of": 40
      },
      {
        "sessionId": "2025-03-15",
        "date": "2025-03-15",
        "workoutName": "Endurance Set H",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.3,
        "spm": 20,
        "rank": 22,
        "of": 40
      },
      {
        "sessionId": "2025-03-20",
        "date": "2025-03-20",
        "workoutName": "Threshold Test B",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 42.4,
        "spm": 28,
        "rank": 20,
        "of": 43
      },
      {
        "sessionId": "2025-03-22",
        "date": "2025-03-22",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 50.2,
        "spm": 20,
        "rank": 22,
        "of": 40
      },
      {
        "sessionId": "2025-03-27",
        "date": "2025-03-27",
        "workoutName": "Interval Set F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 41.7,
        "spm": 27,
        "rank": 21,
        "of": 43
      },
      {
        "sessionId": "2025-03-29",
        "date": "2025-03-29",
        "workoutName": "Interval Set G",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 47.4,
        "spm": 22,
        "rank": 19,
        "of": 41
      },
      {
        "sessionId": "2025-04-03",
        "date": "2025-04-03",
        "workoutName": "Threshold Test C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 41.5,
        "spm": 28,
        "rank": 20,
        "of": 43
      },
      {
        "sessionId": "2025-04-17",
        "date": "2025-04-17",
        "workoutName": "Endurance Set J",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 50.4,
        "spm": 20,
        "rank": 22,
        "of": 41
      },
      {
        "sessionId": "2025-04-19",
        "date": "2025-04-19",
        "workoutName": "Endurance Set I",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.1,
        "spm": 20,
        "rank": 20,
        "of": 40
      },
      {
        "sessionId": "2025-04-21",
        "date": "2025-04-21",
        "workoutName": "Threshold Test E",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 49.0,
        "spm": 20,
        "rank": 21,
        "of": 37
      },
      {
        "sessionId": "2025-04-23",
        "date": "2025-04-23",
        "workoutName": "Threshold Test F",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 40.6,
        "spm": 27,
        "rank": 16,
        "of": 33
      }
    ]
  },
  {
    "id": "nakamura",
    "name": "Nakamura",
    "group": "B",
    "rank": 53,
    "avgSplit": 49.7,
    "bestSplit": 49.3,
    "bestSplitDate": "2025-03-01",
    "sessionCount": 3,
    "trend": "stable",
    "trendDelta": 0.0,
    "consistency": 12,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 2,
        "avgSplit": 48.9
      },
      "intervals": {
        "sessions": 1,
        "avgSplit": 49.0
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-16",
        "split": 49.2
      },
      {
        "date": "2025-01-20",
        "split": 49.0
      },
      {
        "date": "2025-03-01",
        "split": 48.5
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.2,
        "spm": 20,
        "rank": 19,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 49.0,
        "spm": 21,
        "rank": 20,
        "of": 49
      },
      {
        "sessionId": "2025-03-01",
        "date": "2025-03-01",
        "workoutName": "Endurance Set F",
        "workoutCategory": "steady_state",
        "side": "groupA",
        "split": 48.5,
        "spm": 20,
        "rank": 17,
        "of": 41
      }
    ]
  },
  {
    "id": "varga",
    "name": "Varga",
    "group": "B",
    "rank": 54,
    "avgSplit": 50.4,
    "bestSplit": 50.4,
    "bestSplitDate": "2025-01-20",
    "sessionCount": 1,
    "trend": "stable",
    "trendDelta": 0.0,
    "consistency": 4,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 0,
        "avgSplit": null
      },
      "intervals": {
        "sessions": 1,
        "avgSplit": 49.4
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-20",
        "split": 49.4
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 49.4,
        "spm": 20,
        "rank": 22,
        "of": 49
      }
    ]
  },
  {
    "id": "andersen",
    "name": "Andersen",
    "group": "B",
    "rank": 55,
    "avgSplit": 49.5,
    "bestSplit": 49.4,
    "bestSplitDate": "2025-01-16",
    "sessionCount": 2,
    "trend": "stable",
    "trendDelta": 0.0,
    "consistency": 8,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 2,
        "avgSplit": 49.6
      },
      "intervals": {
        "sessions": 0,
        "avgSplit": null
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 49.8
      },
      {
        "date": "2025-01-16",
        "split": 49.5
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.8,
        "spm": 18,
        "rank": 18,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 49.5,
        "spm": 18,
        "rank": 20,
        "of": 48
      }
    ]
  },
  {
    "id": "nolan",
    "name": "Nolan",
    "group": "B",
    "rank": 56,
    "avgSplit": 50.6,
    "bestSplit": 50.2,
    "bestSplitDate": "2025-01-13",
    "sessionCount": 2,
    "trend": "stable",
    "trendDelta": 0.0,
    "consistency": 8,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 2,
        "avgSplit": 51.0
      },
      "intervals": {
        "sessions": 0,
        "avgSplit": null
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 50.6
      },
      {
        "date": "2025-01-25",
        "split": 51.3
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 50.6,
        "spm": 20,
        "rank": 22,
        "of": 51
      },
      {
        "sessionId": "2025-01-25",
        "date": "2025-01-25",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 51.3,
        "spm": 22,
        "rank": 24,
        "of": 50
      }
    ]
  },
  {
    "id": "ruiz",
    "name": "Ruiz",
    "group": "B",
    "rank": 57,
    "avgSplit": 51.8,
    "bestSplit": 49.1,
    "bestSplitDate": "2025-01-30",
    "sessionCount": 4,
    "trend": "stable",
    "trendDelta": 0.0,
    "consistency": 15,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 3,
        "avgSplit": 51.1
      },
      "intervals": {
        "sessions": 1,
        "avgSplit": 50.9
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 53.2
      },
      {
        "date": "2025-01-16",
        "split": 51.7
      },
      {
        "date": "2025-01-20",
        "split": 50.9
      },
      {
        "date": "2025-01-30",
        "split": 48.3
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 53.2,
        "spm": 20,
        "rank": 26,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 51.7,
        "spm": 20,
        "rank": 24,
        "of": 48
      },
      {
        "sessionId": "2025-01-20",
        "date": "2025-01-20",
        "workoutName": "Interval Set A",
        "workoutCategory": "intervals",
        "side": "groupB",
        "split": 50.9,
        "spm": 21,
        "rank": 26,
        "of": 49
      },
      {
        "sessionId": "2025-01-30",
        "date": "2025-01-30",
        "workoutName": "Endurance Set C",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 48.3,
        "spm": 22,
        "rank": 25,
        "of": 52
      }
    ]
  },
  {
    "id": "obrien",
    "name": "O'Brien",
    "group": "B",
    "rank": 58,
    "avgSplit": 53.7,
    "bestSplit": 52.8,
    "bestSplitDate": "2025-01-16",
    "sessionCount": 2,
    "trend": "stable",
    "trendDelta": 0.0,
    "consistency": 8,
    "categoryBreakdown": {
      "steady_state": {
        "sessions": 2,
        "avgSplit": 52.9
      },
      "intervals": {
        "sessions": 0,
        "avgSplit": null
      },
      "threshold": {
        "sessions": 0,
        "avgSplit": null
      }
    },
    "sparklineData": [
      {
        "date": "2025-01-13",
        "split": 53.7
      },
      {
        "date": "2025-01-16",
        "split": 52.0
      }
    ],
    "sessions": [
      {
        "sessionId": "2025-01-13",
        "date": "2025-01-13",
        "workoutName": "Endurance Set A",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 53.7,
        "spm": 20,
        "rank": 27,
        "of": 51
      },
      {
        "sessionId": "2025-01-16",
        "date": "2025-01-16",
        "workoutName": "Endurance Set B",
        "workoutCategory": "steady_state",
        "side": "groupB",
        "split": 52.0,
        "spm": 21,
        "rank": 25,
        "of": 48
      }
    ]
  }
] as Athlete[];

export const sessionDates: string[] = ["2025-01-13", "2025-01-16", "2025-01-20", "2025-01-25", "2025-01-30", "2025-02-06", "2025-02-08", "2025-02-10", "2025-02-13", "2025-02-20", "2025-02-22", "2025-02-27", "2025-03-01", "2025-03-03", "2025-03-06", "2025-03-10", "2025-03-13", "2025-03-15", "2025-03-20", "2025-03-22", "2025-03-27", "2025-03-29", "2025-04-03", "2025-04-10", "2025-04-17", "2025-04-19", "2025-04-21", "2025-04-23"];
