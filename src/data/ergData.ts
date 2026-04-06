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
        "name": "Phelps",
        "split": 45.1,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 48.5,
        "spm": 18,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Skinner",
        "split": 48.0,
        "spm": 18,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 48.7,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 47.1,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Brahms",
        "split": 49.1,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 48.8,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Neil",
        "split": 46.9,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Ryan",
        "split": 49.3,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 47.6,
        "spm": 18,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Siemering",
        "split": 49.5,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Wolfaardt",
        "split": 49.3,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Treger",
        "split": 48.5,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 49.1,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 48.3,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Waddell",
        "split": 50.3,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 47.8,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Wright",
        "split": 49.3,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Jorgensen",
        "split": 47.9,
        "spm": 18,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 50.5,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 50.6,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Morton",
        "split": 49.4,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 50.4,
        "spm": 19,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 51.4,
        "spm": 20,
        "rank": 24,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Kristensen",
        "split": 46.4,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 48.8,
        "spm": 18,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Holt",
        "split": 47.5,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Gold",
        "split": 49.5,
        "spm": 18,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Baroni",
        "split": 47.2,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 48.4,
        "spm": 18,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 48.0,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Arnold",
        "split": 48.8,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Banovic",
        "split": 49.3,
        "spm": 18,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 48.5,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Menzies",
        "split": 48.9,
        "spm": 18,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Horvitz",
        "split": 48.1,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 47.9,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Dedic",
        "split": 49.1,
        "spm": 19,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Walker",
        "split": 48.3,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 50.7,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 50.1,
        "spm": 18,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Greenberg",
        "split": 49.5,
        "spm": 18,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Cameron",
        "split": 50.7,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 48.9,
        "spm": 19,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Morreau",
        "split": 49.1,
        "spm": 18,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Reid",
        "split": 51.6,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Kurth",
        "split": 50.9,
        "spm": 20,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 50.2,
        "spm": 18,
        "rank": 24,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 52.5,
        "spm": 18,
        "rank": 25,
        "dnf": false
      },
      {
        "name": "Gibor",
        "split": 54.2,
        "spm": 20,
        "rank": 26,
        "dnf": false
      },
      {
        "name": "MacKinney",
        "split": 54.6,
        "spm": 20,
        "rank": 27,
        "dnf": false
      }
    ],
    "teamAvgSplit": 49.7,
    "bestSplit": 45.6,
    "worstSplit": 54.4,
    "bestAthlete": "Phelps",
    "groupAAvg": 48.6,
    "groupBAvg": 49.4,
    "participantCount": 51
  },
  {
    "id": "2025-01-16",
    "date": "2025-01-16",
    "workoutName": "Endurance Set B",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Phelps",
        "split": 43.9,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Brahms",
        "split": 47.3,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Treger",
        "split": 46.6,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 46.1,
        "spm": 18,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 46.2,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Skinner",
        "split": 47.3,
        "spm": 18,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 48.4,
        "spm": 18,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Ryan",
        "split": 48.3,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Banovic",
        "split": 48.2,
        "spm": 18,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 48.1,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 48.8,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Wolfaardt",
        "split": 48.6,
        "spm": 21,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 47.6,
        "spm": 18,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Waddell",
        "split": 49.4,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Siemering",
        "split": 49.3,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Wright",
        "split": 48.6,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 47.2,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 49.4,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 49.5,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 48.8,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Jorgensen",
        "split": 47.9,
        "spm": 18,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 50.5,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 50.5,
        "spm": 20,
        "rank": 23,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Kristensen",
        "split": 43.7,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 47.5,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 46.2,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 47.9,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Arnold",
        "split": 47.2,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Baroni",
        "split": 46.0,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Menzies",
        "split": 47.7,
        "spm": 18,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 47.5,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Horvitz",
        "split": 47.1,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Gold",
        "split": 49.3,
        "spm": 17,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Dedic",
        "split": 48.1,
        "spm": 19,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Morreau",
        "split": 47.0,
        "spm": 18,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 47.4,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 49.2,
        "spm": 18,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 48.9,
        "spm": 18,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Cameron",
        "split": 49.7,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Hanson",
        "split": 49.9,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Kurth",
        "split": 49.1,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Bird",
        "split": 50.1,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Greenberg",
        "split": 49.2,
        "spm": 18,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 48.5,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 49.2,
        "spm": 18,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 51.8,
        "spm": 18,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Gibor",
        "split": 52.7,
        "spm": 20,
        "rank": 24,
        "dnf": false
      },
      {
        "name": "MacKinney",
        "split": 52.9,
        "spm": 21,
        "rank": 25,
        "dnf": false
      }
    ],
    "teamAvgSplit": 48.8,
    "bestSplit": 43.8,
    "worstSplit": 52.7,
    "bestAthlete": "Kristensen",
    "groupAAvg": 47.8,
    "groupBAvg": 48.4,
    "participantCount": 48
  },
  {
    "id": "2025-01-20",
    "date": "2025-01-20",
    "workoutName": "Interval Set A",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Phelps",
        "split": 44.6,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 43.7,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 46.1,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Skinner",
        "split": 45.9,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Brahms",
        "split": 47.9,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Ryan",
        "split": 47.9,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 46.7,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Jorgensen",
        "split": 46.5,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Siemering",
        "split": 49.1,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 47.4,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Waddell",
        "split": 49.5,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Treger",
        "split": 48.2,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 48.8,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Wright",
        "split": 48.6,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Unold",
        "split": 48.3,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 49.5,
        "spm": 21,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Cecchini",
        "split": 49.7,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Banovic",
        "split": 49.4,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Morton",
        "split": 48.5,
        "spm": 21,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 50.2,
        "spm": 21,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 49.2,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 48.8,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 48.7,
        "spm": 20,
        "rank": 23,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Kristensen",
        "split": 44.7,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Gold",
        "split": 45.8,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Menzies",
        "split": 45.1,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 46.1,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 47.1,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Dedic",
        "split": 46.9,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Horvitz",
        "split": 46.1,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 48.1,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 48.5,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 47.9,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Baroni",
        "split": 47.2,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Arnold",
        "split": 48.5,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 47.9,
        "spm": 21,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 49.2,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Hanson",
        "split": 49.7,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 47.6,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Cameron",
        "split": 49.6,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 47.8,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 49.9,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Bird",
        "split": 49.9,
        "spm": 21,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Bradbery",
        "split": 48.5,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Derks",
        "split": 49.0,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Morreau",
        "split": 48.2,
        "spm": 20,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 50.6,
        "spm": 20,
        "rank": 24,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 48.7,
        "spm": 21,
        "rank": 25,
        "dnf": false
      },
      {
        "name": "Gibor",
        "split": 51.9,
        "spm": 21,
        "rank": 26,
        "dnf": false
      },
      {
        "name": "Greenberg",
        "split": 998.7,
        "spm": 0,
        "rank": 27,
        "dnf": true
      }
    ],
    "teamAvgSplit": 48.5,
    "bestSplit": 43.6,
    "worstSplit": 51.6,
    "bestAthlete": "Kristensen",
    "groupAAvg": 47.7,
    "groupBAvg": 47.9,
    "participantCount": 49
  },
  {
    "id": "2025-01-25",
    "date": "2025-01-25",
    "workoutName": "Endurance Set B",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Phelps",
        "split": 42.0,
        "spm": 22,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 43.3,
        "spm": 21,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Gold",
        "split": 45.6,
        "spm": 22,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Treger",
        "split": 44.5,
        "spm": 22,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 45.8,
        "spm": 21,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Brahms",
        "split": 46.0,
        "spm": 22,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 44.2,
        "spm": 22,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Ryan",
        "split": 46.0,
        "spm": 22,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Unold",
        "split": 44.9,
        "spm": 22,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Siemering",
        "split": 46.3,
        "spm": 22,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Skinner",
        "split": 45.6,
        "spm": 22,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 46.0,
        "spm": 22,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Neil",
        "split": 44.6,
        "spm": 22,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Waddell",
        "split": 47.1,
        "spm": 22,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Wolfaardt",
        "split": 47.1,
        "spm": 22,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Banovic",
        "split": 47.1,
        "spm": 22,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 45.3,
        "spm": 21,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Jorgensen",
        "split": 45.3,
        "spm": 22,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 47.8,
        "spm": 22,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 47.8,
        "spm": 22,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Morton",
        "split": 46.6,
        "spm": 22,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Wright",
        "split": 47.5,
        "spm": 22,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Cecchini",
        "split": 48.7,
        "spm": 21,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 47.2,
        "spm": 22,
        "rank": 24,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 48.5,
        "spm": 22,
        "rank": 25,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 998.7,
        "spm": 0,
        "rank": 26,
        "dnf": true
      }
    ],
    "groupB": [
      {
        "name": "Kristensen",
        "split": 42.3,
        "spm": 22,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Baroni",
        "split": 42.7,
        "spm": 22,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Horvitz",
        "split": 43.8,
        "spm": 22,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 46.0,
        "spm": 21,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 46.3,
        "spm": 22,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 45.3,
        "spm": 21,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Holt",
        "split": 45.3,
        "spm": 21,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 46.4,
        "spm": 22,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 46.8,
        "spm": 22,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Dedic",
        "split": 45.9,
        "spm": 21,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Menzies",
        "split": 45.9,
        "spm": 21,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Hanson",
        "split": 47.1,
        "spm": 21,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Cameron",
        "split": 47.0,
        "spm": 22,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 45.8,
        "spm": 22,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 46.3,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 45.7,
        "spm": 22,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Kurth",
        "split": 47.3,
        "spm": 22,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 46.2,
        "spm": 21,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 48.4,
        "spm": 21,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Bradbery",
        "split": 47.2,
        "spm": 22,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Arnold",
        "split": 48.4,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 47.1,
        "spm": 22,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 50.2,
        "spm": 21,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Reid",
        "split": 52.3,
        "spm": 22,
        "rank": 24,
        "dnf": false
      },
      {
        "name": "Walker",
        "split": 50.5,
        "spm": 21,
        "rank": 25,
        "dnf": false
      },
      {
        "name": "Greenberg",
        "split": 998.7,
        "spm": 0,
        "rank": 26,
        "dnf": true
      },
      {
        "name": "Bird",
        "split": 999.9,
        "spm": 0,
        "rank": 27,
        "dnf": true
      }
    ],
    "teamAvgSplit": 46.8,
    "bestSplit": 42.4,
    "worstSplit": 52.1,
    "bestAthlete": "Kristensen",
    "groupAAvg": 45.8,
    "groupBAvg": 46.5,
    "participantCount": 50
  },
  {
    "id": "2025-01-30",
    "date": "2025-01-30",
    "workoutName": "Endurance Set C",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Phelps",
        "split": 39.1,
        "spm": 22,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 41.4,
        "spm": 22,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 41.8,
        "spm": 22,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Unold",
        "split": 42.2,
        "spm": 22,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 43.7,
        "spm": 22,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Brahms",
        "split": 44.4,
        "spm": 22,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Wolfaardt",
        "split": 44.0,
        "spm": 22,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Ryan",
        "split": 44.4,
        "spm": 22,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Skinner",
        "split": 43.8,
        "spm": 22,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Treger",
        "split": 43.7,
        "spm": 22,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Neil",
        "split": 42.9,
        "spm": 22,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Waddell",
        "split": 45.4,
        "spm": 22,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Siemering",
        "split": 45.2,
        "spm": 22,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 42.8,
        "spm": 22,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 45.0,
        "spm": 22,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Morton",
        "split": 44.3,
        "spm": 22,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 44.3,
        "spm": 22,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Banovic",
        "split": 45.5,
        "spm": 22,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Cecchini",
        "split": 45.9,
        "spm": 22,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 46.0,
        "spm": 22,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 45.9,
        "spm": 22,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Jorgensen",
        "split": 43.9,
        "spm": 22,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 47.1,
        "spm": 22,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 46.1,
        "spm": 22,
        "rank": 24,
        "dnf": false
      },
      {
        "name": "Regen",
        "split": 47.8,
        "spm": 22,
        "rank": 25,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 46.9,
        "spm": 22,
        "rank": 26,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Kristensen",
        "split": 40.2,
        "spm": 22,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Gold",
        "split": 42.9,
        "spm": 22,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Baroni",
        "split": 41.3,
        "spm": 22,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Holt",
        "split": 42.6,
        "spm": 22,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 44.4,
        "spm": 22,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Menzies",
        "split": 43.3,
        "spm": 21,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 43.2,
        "spm": 22,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 43.8,
        "spm": 22,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 44.9,
        "spm": 22,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 43.8,
        "spm": 22,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Arnold",
        "split": 44.4,
        "spm": 22,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Dedic",
        "split": 44.6,
        "spm": 21,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 45.3,
        "spm": 21,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Morreau",
        "split": 43.6,
        "spm": 21,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Hanson",
        "split": 45.8,
        "spm": 22,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Cameron",
        "split": 45.9,
        "spm": 22,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Kurth",
        "split": 45.4,
        "spm": 22,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Wright",
        "split": 45.6,
        "spm": 22,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 44.5,
        "spm": 22,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Bradbery",
        "split": 45.0,
        "spm": 22,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 45.1,
        "spm": 21,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 47.4,
        "spm": 22,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 46.0,
        "spm": 22,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 48.3,
        "spm": 22,
        "rank": 24,
        "dnf": false
      },
      {
        "name": "Gibor",
        "split": 49.3,
        "spm": 22,
        "rank": 25,
        "dnf": false
      },
      {
        "name": "Walker",
        "split": 48.0,
        "spm": 22,
        "rank": 26,
        "dnf": false
      }
    ],
    "teamAvgSplit": 45.1,
    "bestSplit": 37.8,
    "worstSplit": 49.6,
    "bestAthlete": "Phelps",
    "groupAAvg": 44.1,
    "groupBAvg": 44.7,
    "participantCount": 52
  },
  {
    "id": "2025-02-06",
    "date": "2025-02-06",
    "workoutName": "Threshold Test A",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Phelps",
        "split": 44.3,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 45.7,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 47.8,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 46.4,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Ryan",
        "split": 48.8,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Brahms",
        "split": 49.2,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Treger",
        "split": 47.8,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 46.7,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Wolfaardt",
        "split": 49.0,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Unold",
        "split": 48.0,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Morton",
        "split": 48.5,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Waddell",
        "split": 50.4,
        "spm": 19,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Skinner",
        "split": 49.6,
        "spm": 19,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 50.4,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Jorgensen",
        "split": 48.2,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 50.2,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Banovic",
        "split": 50.6,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 51.0,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Cecchini",
        "split": 51.8,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 50.5,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Regen",
        "split": 51.6,
        "spm": 21,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 51.5,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 53.7,
        "spm": 20,
        "rank": 23,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Kristensen",
        "split": 46.9,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Morreau",
        "split": 45.0,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Gold",
        "split": 48.4,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Baroni",
        "split": 46.2,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 46.9,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Menzies",
        "split": 47.9,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Dedic",
        "split": 48.0,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 48.8,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Holt",
        "split": 47.8,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Cameron",
        "split": 49.3,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 49.9,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 49.8,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Horvitz",
        "split": 47.9,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 49.2,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 48.3,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 48.9,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Hanson",
        "split": 50.7,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 48.9,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 49.0,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Kurth",
        "split": 50.6,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 52.4,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Walker",
        "split": 53.5,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Arnold",
        "split": 999.3,
        "spm": 0,
        "rank": 23,
        "dnf": true
      },
      {
        "name": "Wright",
        "split": 999.2,
        "spm": 0,
        "rank": 24,
        "dnf": true
      },
      {
        "name": "Bradbery",
        "split": 998.4,
        "spm": 0,
        "rank": 25,
        "dnf": true
      }
    ],
    "teamAvgSplit": 49.5,
    "bestSplit": 43.3,
    "worstSplit": 55.1,
    "bestAthlete": "Phelps",
    "groupAAvg": 48.9,
    "groupBAvg": 48.8,
    "participantCount": 45
  },
  {
    "id": "2025-02-08",
    "date": "2025-02-08",
    "workoutName": "Endurance Set D",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Phelps",
        "split": 44.3,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 45.4,
        "spm": 19,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Ryan",
        "split": 47.3,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Treger",
        "split": 46.3,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 45.8,
        "spm": 19,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 47.4,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Skinner",
        "split": 47.6,
        "spm": 19,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Waddell",
        "split": 48.6,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Brahms",
        "split": 48.7,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Unold",
        "split": 47.1,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Morton",
        "split": 47.2,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Regen",
        "split": 48.1,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 47.2,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 47.6,
        "spm": 19,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 46.7,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Cecchini",
        "split": 49.4,
        "spm": 19,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 49.5,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 48.5,
        "spm": 19,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 49.9,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Banovic",
        "split": 49.8,
        "spm": 19,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Jorgensen",
        "split": 48.1,
        "spm": 19,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 51.3,
        "spm": 20,
        "rank": 22,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Kristensen",
        "split": 44.9,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Morreau",
        "split": 44.2,
        "spm": 19,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Holt",
        "split": 45.6,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 47.1,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Horvitz",
        "split": 45.6,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 46.3,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Menzies",
        "split": 46.9,
        "spm": 19,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 48.3,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Arnold",
        "split": 47.7,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Kurth",
        "split": 47.8,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Cameron",
        "split": 48.5,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 47.2,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Hanson",
        "split": 48.8,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Baroni",
        "split": 46.9,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Dedic",
        "split": 48.5,
        "spm": 19,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 49.4,
        "spm": 19,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Gold",
        "split": 49.9,
        "spm": 19,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 48.8,
        "spm": 19,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 47.6,
        "spm": 19,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 47.7,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 49.6,
        "spm": 19,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 50.0,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 48.1,
        "spm": 20,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Walker",
        "split": 48.8,
        "spm": 20,
        "rank": 24,
        "dnf": false
      }
    ],
    "teamAvgSplit": 48.3,
    "bestSplit": 43.0,
    "worstSplit": 53.0,
    "bestAthlete": "Phelps",
    "groupAAvg": 47.6,
    "groupBAvg": 47.6,
    "participantCount": 46
  },
  {
    "id": "2025-02-10",
    "date": "2025-02-10",
    "workoutName": "Mixed Fitness Test A",
    "workoutCategory": "triathlon",
    "groupA": [
      {
        "name": "Phelps",
        "split": 144660.4,
        "spm": 0,
        "rank": 1,
        "dnf": false,
        "timeFormatted": "2411:00"
      },
      {
        "name": "Unold",
        "split": 147119.8,
        "spm": 0,
        "rank": 2,
        "dnf": false,
        "timeFormatted": "2452:00"
      },
      {
        "name": "Barbey",
        "split": 147600.6,
        "spm": 0,
        "rank": 3,
        "dnf": false,
        "timeFormatted": "2460:00"
      },
      {
        "name": "Luledzija",
        "split": 148199.6,
        "spm": 0,
        "rank": 4,
        "dnf": false,
        "timeFormatted": "2470:00"
      },
      {
        "name": "Luledzija",
        "split": 148199.6,
        "spm": 0,
        "rank": 5,
        "dnf": false,
        "timeFormatted": "2470:00"
      },
      {
        "name": "Beale",
        "split": 149159.3,
        "spm": 0,
        "rank": 6,
        "dnf": false,
        "timeFormatted": "2486:00"
      },
      {
        "name": "Pfautsch",
        "split": 149161.2,
        "spm": 0,
        "rank": 7,
        "dnf": false,
        "timeFormatted": "2486:00"
      },
      {
        "name": "Ryan",
        "split": 149641.1,
        "spm": 0,
        "rank": 8,
        "dnf": false,
        "timeFormatted": "2494:00"
      },
      {
        "name": "Gallagher",
        "split": 151918.8,
        "spm": 0,
        "rank": 9,
        "dnf": false,
        "timeFormatted": "2532:00"
      },
      {
        "name": "Moreno",
        "split": 152461.0,
        "spm": 0,
        "rank": 10,
        "dnf": false,
        "timeFormatted": "2541:00"
      },
      {
        "name": "Koudraiev",
        "split": 155161.1,
        "spm": 0,
        "rank": 11,
        "dnf": false,
        "timeFormatted": "2586:00"
      },
      {
        "name": "DB",
        "split": 155700.9,
        "spm": 0,
        "rank": 12,
        "dnf": false,
        "timeFormatted": "2595:00"
      },
      {
        "name": "Waddell",
        "split": 155821.4,
        "spm": 0,
        "rank": 13,
        "dnf": false,
        "timeFormatted": "2597:00"
      },
      {
        "name": "DiStefano",
        "split": 156839.7,
        "spm": 0,
        "rank": 14,
        "dnf": false,
        "timeFormatted": "2614:00"
      },
      {
        "name": "Brahms",
        "split": 158161.4,
        "spm": 0,
        "rank": 15,
        "dnf": false,
        "timeFormatted": "2636:00"
      },
      {
        "name": "Jorgensen",
        "split": 158758.6,
        "spm": 0,
        "rank": 16,
        "dnf": false,
        "timeFormatted": "2646:00"
      },
      {
        "name": "Cecchini",
        "split": 161101.1,
        "spm": 0,
        "rank": 17,
        "dnf": false,
        "timeFormatted": "2685:00"
      },
      {
        "name": "Skinner",
        "split": 161400.4,
        "spm": 0,
        "rank": 18,
        "dnf": false,
        "timeFormatted": "2690:00"
      },
      {
        "name": "Banovic",
        "split": 167160.7,
        "spm": 0,
        "rank": 19,
        "dnf": false,
        "timeFormatted": "2786:00"
      },
      {
        "name": "Browning",
        "split": 173699.0,
        "spm": 0,
        "rank": 20,
        "dnf": false,
        "timeFormatted": "2895:00"
      }
    ],
    "groupB": [
      {
        "name": "Bottomley",
        "split": 147119.0,
        "spm": 0,
        "rank": 1,
        "dnf": false,
        "timeFormatted": "2452:00"
      },
      {
        "name": "Horvitz",
        "split": 147299.2,
        "spm": 0,
        "rank": 2,
        "dnf": false,
        "timeFormatted": "2455:00"
      },
      {
        "name": "Kristensen",
        "split": 148260.8,
        "spm": 0,
        "rank": 3,
        "dnf": false,
        "timeFormatted": "2471:00"
      },
      {
        "name": "Dedic",
        "split": 151800.1,
        "spm": 0,
        "rank": 4,
        "dnf": false,
        "timeFormatted": "2530:00"
      },
      {
        "name": "Baroni",
        "split": 152639.0,
        "spm": 0,
        "rank": 5,
        "dnf": false,
        "timeFormatted": "2544:00"
      },
      {
        "name": "Walker",
        "split": 152879.1,
        "spm": 0,
        "rank": 6,
        "dnf": false,
        "timeFormatted": "2548:00"
      },
      {
        "name": "Heerding",
        "split": 152999.7,
        "spm": 0,
        "rank": 7,
        "dnf": false,
        "timeFormatted": "2550:00"
      },
      {
        "name": "Cameron",
        "split": 153420.9,
        "spm": 0,
        "rank": 8,
        "dnf": false,
        "timeFormatted": "2557:00"
      },
      {
        "name": "Kurth",
        "split": 153600.2,
        "spm": 0,
        "rank": 9,
        "dnf": false,
        "timeFormatted": "2560:00"
      },
      {
        "name": "Rodenburg",
        "split": 153901.1,
        "spm": 0,
        "rank": 10,
        "dnf": false,
        "timeFormatted": "2565:00"
      },
      {
        "name": "Ferrera",
        "split": 155279.6,
        "spm": 0,
        "rank": 11,
        "dnf": false,
        "timeFormatted": "2588:00"
      },
      {
        "name": "Weiss",
        "split": 155939.0,
        "spm": 0,
        "rank": 12,
        "dnf": false,
        "timeFormatted": "2599:00"
      },
      {
        "name": "Holt",
        "split": 156239.7,
        "spm": 0,
        "rank": 13,
        "dnf": false,
        "timeFormatted": "2604:00"
      },
      {
        "name": "Arnold",
        "split": 156360.3,
        "spm": 0,
        "rank": 14,
        "dnf": false,
        "timeFormatted": "2606:00"
      },
      {
        "name": "Enders",
        "split": 157201.0,
        "spm": 0,
        "rank": 15,
        "dnf": false,
        "timeFormatted": "2620:00"
      },
      {
        "name": "Wojnovich",
        "split": 157800.9,
        "spm": 0,
        "rank": 16,
        "dnf": false,
        "timeFormatted": "2630:00"
      },
      {
        "name": "Hanson",
        "split": 158221.0,
        "spm": 0,
        "rank": 17,
        "dnf": false,
        "timeFormatted": "2637:00"
      },
      {
        "name": "Furrer",
        "split": 158341.4,
        "spm": 0,
        "rank": 18,
        "dnf": false,
        "timeFormatted": "2639:00"
      },
      {
        "name": "Gold",
        "split": 158521.3,
        "spm": 0,
        "rank": 19,
        "dnf": false,
        "timeFormatted": "2642:00"
      },
      {
        "name": "Spira",
        "split": 160800.7,
        "spm": 0,
        "rank": 20,
        "dnf": false,
        "timeFormatted": "2680:00"
      },
      {
        "name": "MacKinney",
        "split": 161880.9,
        "spm": 0,
        "rank": 21,
        "dnf": false,
        "timeFormatted": "2698:00"
      },
      {
        "name": "Van Doren",
        "split": 162300.1,
        "spm": 0,
        "rank": 22,
        "dnf": false,
        "timeFormatted": "2705:00"
      },
      {
        "name": "Menzies",
        "split": 170100.0,
        "spm": 0,
        "rank": 23,
        "dnf": false,
        "timeFormatted": "2835:00"
      },
      {
        "name": "Regen",
        "split": 171840.5,
        "spm": 0,
        "rank": 24,
        "dnf": false,
        "timeFormatted": "2864:00"
      },
      {
        "name": "Morreau",
        "split": 179698.8,
        "spm": 0,
        "rank": 25,
        "dnf": false,
        "timeFormatted": "2995:00"
      },
      {
        "name": "Jett",
        "split": 181798.9,
        "spm": 0,
        "rank": 26,
        "dnf": false,
        "timeFormatted": "3030:00"
      }
    ],
    "teamAvgSplit": 156699.8,
    "bestSplit": 144658.9,
    "worstSplit": 181800.7,
    "bestAthlete": "Phelps",
    "groupAAvg": 154596.0,
    "groupBAvg": 158316.9,
    "participantCount": 46
  },
  {
    "id": "2025-02-13",
    "date": "2025-02-13",
    "workoutName": "Interval Set B",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Phelps",
        "split": 39.7,
        "spm": 22,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 40.8,
        "spm": 22,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Wolfaardt",
        "split": 43.2,
        "spm": 22,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 41.7,
        "spm": 22,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 43.8,
        "spm": 22,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Unold",
        "split": 42.6,
        "spm": 22,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Brahms",
        "split": 44.4,
        "spm": 22,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Ryan",
        "split": 44.4,
        "spm": 22,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Morton",
        "split": 43.6,
        "spm": 22,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Waddell",
        "split": 46.0,
        "spm": 22,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 43.4,
        "spm": 22,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 44.2,
        "spm": 22,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Treger",
        "split": 44.8,
        "spm": 22,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 45.8,
        "spm": 22,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Jorgensen",
        "split": 43.9,
        "spm": 22,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Cecchini",
        "split": 47.2,
        "spm": 22,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 47.0,
        "spm": 22,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 47.3,
        "spm": 22,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Neil",
        "split": 45.4,
        "spm": 22,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 46.9,
        "spm": 22,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Regen",
        "split": 47.9,
        "spm": 22,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 48.3,
        "spm": 23,
        "rank": 22,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Kristensen",
        "split": 40.6,
        "spm": 22,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Gold",
        "split": 42.4,
        "spm": 22,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Holt",
        "split": 42.0,
        "spm": 22,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 44.0,
        "spm": 22,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Baroni",
        "split": 41.9,
        "spm": 22,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Menzies",
        "split": 43.2,
        "spm": 22,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Horvitz",
        "split": 42.6,
        "spm": 22,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Morreau",
        "split": 42.4,
        "spm": 22,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Dedic",
        "split": 43.8,
        "spm": 22,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 43.4,
        "spm": 22,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 45.1,
        "spm": 22,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 44.2,
        "spm": 22,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Arnold",
        "split": 44.7,
        "spm": 22,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Kurth",
        "split": 44.8,
        "spm": 22,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Cameron",
        "split": 45.6,
        "spm": 22,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 45.8,
        "spm": 22,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Hanson",
        "split": 45.8,
        "spm": 22,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 44.6,
        "spm": 22,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 46.5,
        "spm": 22,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 46.8,
        "spm": 22,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 45.0,
        "spm": 22,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 45.4,
        "spm": 22,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 48.3,
        "spm": 22,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Walker",
        "split": 47.2,
        "spm": 22,
        "rank": 24,
        "dnf": false
      }
    ],
    "teamAvgSplit": 45.1,
    "bestSplit": 38.4,
    "worstSplit": 50.0,
    "bestAthlete": "Phelps",
    "groupAAvg": 44.5,
    "groupBAvg": 44.3,
    "participantCount": 46
  },
  {
    "id": "2025-02-20",
    "date": "2025-02-20",
    "workoutName": "Interval Set C",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Phelps",
        "split": 38.1,
        "spm": 24,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 41.1,
        "spm": 24,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 39.3,
        "spm": 24,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Unold",
        "split": 40.2,
        "spm": 24,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Wolfaardt",
        "split": 41.4,
        "spm": 24,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Brahms",
        "split": 41.9,
        "spm": 24,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Ryan",
        "split": 41.9,
        "spm": 24,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 40.2,
        "spm": 24,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Waddell",
        "split": 43.6,
        "spm": 24,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Morton",
        "split": 42.0,
        "spm": 24,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Treger",
        "split": 42.6,
        "spm": 24,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 41.4,
        "spm": 24,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Neil",
        "split": 41.7,
        "spm": 24,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 43.5,
        "spm": 24,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 42.6,
        "spm": 24,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 44.7,
        "spm": 24,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Jorgensen",
        "split": 42.6,
        "spm": 24,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Cecchini",
        "split": 45.2,
        "spm": 24,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 44.0,
        "spm": 24,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 46.0,
        "spm": 24,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Regen",
        "split": 45.9,
        "spm": 24,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 46.1,
        "spm": 24,
        "rank": 22,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Gold",
        "split": 40.8,
        "spm": 24,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Holt",
        "split": 39.5,
        "spm": 24,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Baroni",
        "split": 39.2,
        "spm": 24,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 42.4,
        "spm": 24,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 42.4,
        "spm": 24,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 41.8,
        "spm": 24,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Horvitz",
        "split": 41.6,
        "spm": 24,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 42.6,
        "spm": 24,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Dedic",
        "split": 42.6,
        "spm": 24,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 42.2,
        "spm": 24,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Hanson",
        "split": 43.6,
        "spm": 24,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Kurth",
        "split": 42.8,
        "spm": 24,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Cameron",
        "split": 43.6,
        "spm": 24,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Menzies",
        "split": 43.0,
        "spm": 24,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 44.2,
        "spm": 24,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 42.4,
        "spm": 24,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 44.6,
        "spm": 24,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Wright",
        "split": 44.5,
        "spm": 24,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 43.6,
        "spm": 24,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 45.5,
        "spm": 24,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 43.9,
        "spm": 24,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 46.4,
        "spm": 24,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Walker",
        "split": 45.1,
        "spm": 24,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Morreau",
        "split": 997.8,
        "spm": 0,
        "rank": 24,
        "dnf": true
      }
    ],
    "teamAvgSplit": 43.3,
    "bestSplit": 36.5,
    "worstSplit": 47.8,
    "bestAthlete": "Phelps",
    "groupAAvg": 42.4,
    "groupBAvg": 42.8,
    "participantCount": 45
  },
  {
    "id": "2025-02-22",
    "date": "2025-02-22",
    "workoutName": "Endurance Set E",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Phelps",
        "split": 45.2,
        "spm": 19,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 45.0,
        "spm": 19,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 47.4,
        "spm": 19,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Ryan",
        "split": 48.3,
        "spm": 19,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Brahms",
        "split": 49.5,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 47.9,
        "spm": 19,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 47.2,
        "spm": 19,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Unold",
        "split": 48.4,
        "spm": 19,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Treger",
        "split": 48.8,
        "spm": 19,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 49.5,
        "spm": 19,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Cecchini",
        "split": 50.0,
        "spm": 19,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Waddell",
        "split": 50.4,
        "spm": 19,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Wright",
        "split": 49.3,
        "spm": 19,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 48.7,
        "spm": 19,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Morton",
        "split": 49.1,
        "spm": 19,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 50.7,
        "spm": 19,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 49.3,
        "spm": 19,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 50.6,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Regen",
        "split": 50.2,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Jorgensen",
        "split": 48.4,
        "spm": 19,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 52.1,
        "spm": 19,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 998.0,
        "spm": 0,
        "rank": 22,
        "dnf": true
      }
    ],
    "groupB": [
      {
        "name": "Morreau",
        "split": 45.1,
        "spm": 19,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Gold",
        "split": 47.8,
        "spm": 19,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Dedic",
        "split": 47.1,
        "spm": 19,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Kurth",
        "split": 47.5,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 48.6,
        "spm": 19,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Horvitz",
        "split": 47.9,
        "spm": 19,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Cameron",
        "split": 49.7,
        "spm": 19,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 47.7,
        "spm": 19,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 49.8,
        "spm": 19,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Holt",
        "split": 48.6,
        "spm": 19,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 48.7,
        "spm": 19,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 49.7,
        "spm": 19,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 50.2,
        "spm": 19,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Menzies",
        "split": 49.1,
        "spm": 19,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 50.5,
        "spm": 19,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 48.9,
        "spm": 19,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Hanson",
        "split": 50.3,
        "spm": 19,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 49.5,
        "spm": 19,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Baroni",
        "split": 48.5,
        "spm": 19,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 49.1,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 49.2,
        "spm": 19,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Walker",
        "split": 50.9,
        "spm": 19,
        "rank": 22,
        "dnf": false
      }
    ],
    "teamAvgSplit": 49.4,
    "bestSplit": 43.9,
    "worstSplit": 52.5,
    "bestAthlete": "Phelps",
    "groupAAvg": 48.6,
    "groupBAvg": 48.8,
    "participantCount": 43
  },
  {
    "id": "2025-02-27",
    "date": "2025-02-27",
    "workoutName": "Interval Set D",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Phelps",
        "split": 45.1,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 45.1,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Brahms",
        "split": 47.3,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 45.2,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Unold",
        "split": 45.8,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Ryan",
        "split": 47.3,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Neil",
        "split": 45.7,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 47.7,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Treger",
        "split": 47.0,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 47.7,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 46.9,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 46.2,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 47.4,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Jorgensen",
        "split": 46.4,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Regen",
        "split": 48.4,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 49.8,
        "spm": 21,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 50.4,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 48.4,
        "spm": 21,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Skinner",
        "split": 52.4,
        "spm": 19,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Cecchini",
        "split": 1000.1,
        "spm": 0,
        "rank": 20,
        "dnf": true
      }
    ],
    "groupB": [
      {
        "name": "Gold",
        "split": 46.0,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Kristensen",
        "split": 46.1,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Menzies",
        "split": 45.5,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Morreau",
        "split": 44.7,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Holt",
        "split": 45.7,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 47.2,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 45.9,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Baroni",
        "split": 45.2,
        "spm": 21,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Dedic",
        "split": 46.9,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 48.4,
        "spm": 18,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 48.2,
        "spm": 21,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Horvitz",
        "split": 46.4,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Waddell",
        "split": 48.6,
        "spm": 21,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Arnold",
        "split": 47.6,
        "spm": 21,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 47.5,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Kurth",
        "split": 47.6,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 47.0,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Wright",
        "split": 47.7,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Hanson",
        "split": 48.7,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 48.5,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 47.0,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 47.2,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 49.2,
        "spm": 20,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 47.9,
        "spm": 20,
        "rank": 24,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 49.9,
        "spm": 20,
        "rank": 25,
        "dnf": false
      },
      {
        "name": "Walker",
        "split": 48.4,
        "spm": 20,
        "rank": 26,
        "dnf": false
      }
    ],
    "teamAvgSplit": 47.9,
    "bestSplit": 43.8,
    "worstSplit": 52.7,
    "bestAthlete": "Phelps",
    "groupAAvg": 47.3,
    "groupBAvg": 47.1,
    "participantCount": 45
  },
  {
    "id": "2025-03-01",
    "date": "2025-03-01",
    "workoutName": "Endurance Set F",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Phelps",
        "split": 44.4,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 44.3,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Ryan",
        "split": 46.8,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Brahms",
        "split": 47.6,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 46.0,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 45.9,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Treger",
        "split": 46.5,
        "spm": 21,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Skinner",
        "split": 47.0,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Unold",
        "split": 46.8,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 47.6,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Cecchini",
        "split": 48.2,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Regen",
        "split": 47.7,
        "spm": 21,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Morton",
        "split": 47.1,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 48.5,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Jorgensen",
        "split": 46.8,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 47.1,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Bird",
        "split": 49.4,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 48.0,
        "spm": 20,
        "rank": 18,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Kristensen",
        "split": 44.7,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Gold",
        "split": 46.1,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Dedic",
        "split": 45.5,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 46.7,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Holt",
        "split": 45.7,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Horvitz",
        "split": 45.6,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 46.3,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Wright",
        "split": 47.1,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 48.1,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Waddell",
        "split": 48.4,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 46.7,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Menzies",
        "split": 47.1,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Hanson",
        "split": 48.2,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 49.0,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Baroni",
        "split": 46.8,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 46.8,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 48.0,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 48.8,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Walker",
        "split": 47.3,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 49.1,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 47.2,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 49.8,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 47.9,
        "spm": 20,
        "rank": 23,
        "dnf": false
      }
    ],
    "teamAvgSplit": 47.7,
    "bestSplit": 42.9,
    "worstSplit": 49.7,
    "bestAthlete": "Kristensen",
    "groupAAvg": 46.9,
    "groupBAvg": 47.1,
    "participantCount": 41
  },
  {
    "id": "2025-03-03",
    "date": "2025-03-03",
    "workoutName": "Mixed Fitness Test B",
    "workoutCategory": "triathlon",
    "groupA": [
      {
        "name": "Phelps",
        "split": 199440.4,
        "spm": 0,
        "rank": 1,
        "dnf": false,
        "timeFormatted": "3324:00"
      },
      {
        "name": "Unold",
        "split": 200219.8,
        "spm": 0,
        "rank": 2,
        "dnf": false,
        "timeFormatted": "3337:00"
      },
      {
        "name": "Ryan",
        "split": 201241.1,
        "spm": 0,
        "rank": 3,
        "dnf": false,
        "timeFormatted": "3354:00"
      },
      {
        "name": "Barbey",
        "split": 203520.6,
        "spm": 0,
        "rank": 4,
        "dnf": false,
        "timeFormatted": "3392:00"
      },
      {
        "name": "Beale",
        "split": 207719.3,
        "spm": 0,
        "rank": 5,
        "dnf": false,
        "timeFormatted": "3462:00"
      },
      {
        "name": "Gallagher",
        "split": 208198.8,
        "spm": 0,
        "rank": 6,
        "dnf": false,
        "timeFormatted": "3470:00"
      },
      {
        "name": "Moreno",
        "split": 211561.0,
        "spm": 0,
        "rank": 7,
        "dnf": false,
        "timeFormatted": "3526:00"
      },
      {
        "name": "DiStefano",
        "split": 214379.7,
        "spm": 0,
        "rank": 8,
        "dnf": false,
        "timeFormatted": "3573:00"
      },
      {
        "name": "Cecchini",
        "split": 216421.1,
        "spm": 0,
        "rank": 9,
        "dnf": false,
        "timeFormatted": "3607:00"
      },
      {
        "name": "Brahms",
        "split": 217741.4,
        "spm": 0,
        "rank": 10,
        "dnf": false,
        "timeFormatted": "3629:00"
      },
      {
        "name": "DB",
        "split": 218700.9,
        "spm": 0,
        "rank": 11,
        "dnf": false,
        "timeFormatted": "3645:00"
      },
      {
        "name": "Jorgensen",
        "split": 223378.6,
        "spm": 0,
        "rank": 12,
        "dnf": false,
        "timeFormatted": "3723:00"
      },
      {
        "name": "Skinner",
        "split": 223800.4,
        "spm": 0,
        "rank": 13,
        "dnf": false,
        "timeFormatted": "3730:00"
      },
      {
        "name": "Regen",
        "split": 234900.5,
        "spm": 0,
        "rank": 14,
        "dnf": false,
        "timeFormatted": "3915:00"
      },
      {
        "name": "Browning",
        "split": 236519.0,
        "spm": 0,
        "rank": 15,
        "dnf": false,
        "timeFormatted": "3942:00"
      }
    ],
    "groupB": [
      {
        "name": "Kristensen",
        "split": 202740.8,
        "spm": 0,
        "rank": 1,
        "dnf": false,
        "timeFormatted": "3379:00"
      },
      {
        "name": "Horvitz",
        "split": 203939.2,
        "spm": 0,
        "rank": 2,
        "dnf": false,
        "timeFormatted": "3399:00"
      },
      {
        "name": "Baroni",
        "split": 204299.0,
        "spm": 0,
        "rank": 3,
        "dnf": false,
        "timeFormatted": "3405:00"
      },
      {
        "name": "Walker",
        "split": 208319.1,
        "spm": 0,
        "rank": 4,
        "dnf": false,
        "timeFormatted": "3472:00"
      },
      {
        "name": "Heerding",
        "split": 208379.7,
        "spm": 0,
        "rank": 5,
        "dnf": false,
        "timeFormatted": "3473:00"
      },
      {
        "name": "Rodenburg",
        "split": 208441.1,
        "spm": 0,
        "rank": 6,
        "dnf": false,
        "timeFormatted": "3474:00"
      },
      {
        "name": "Ferrera",
        "split": 208919.6,
        "spm": 0,
        "rank": 7,
        "dnf": false,
        "timeFormatted": "3482:00"
      },
      {
        "name": "Bottomley",
        "split": 210059.0,
        "spm": 0,
        "rank": 8,
        "dnf": false,
        "timeFormatted": "3501:00"
      },
      {
        "name": "Wright",
        "split": 210600.2,
        "spm": 0,
        "rank": 9,
        "dnf": false,
        "timeFormatted": "3510:00"
      },
      {
        "name": "Furrer",
        "split": 211081.4,
        "spm": 0,
        "rank": 10,
        "dnf": false,
        "timeFormatted": "3518:00"
      },
      {
        "name": "Koudraiev",
        "split": 211381.1,
        "spm": 0,
        "rank": 11,
        "dnf": false,
        "timeFormatted": "3523:00"
      },
      {
        "name": "Cameron",
        "split": 212340.9,
        "spm": 0,
        "rank": 12,
        "dnf": false,
        "timeFormatted": "3539:00"
      },
      {
        "name": "Weiss",
        "split": 212579.0,
        "spm": 0,
        "rank": 13,
        "dnf": false,
        "timeFormatted": "3543:00"
      },
      {
        "name": "Hanson",
        "split": 212821.0,
        "spm": 0,
        "rank": 14,
        "dnf": false,
        "timeFormatted": "3547:00"
      },
      {
        "name": "Waddell",
        "split": 213061.4,
        "spm": 0,
        "rank": 15,
        "dnf": false,
        "timeFormatted": "3551:00"
      },
      {
        "name": "Gold",
        "split": 213301.3,
        "spm": 0,
        "rank": 16,
        "dnf": false,
        "timeFormatted": "3555:00"
      },
      {
        "name": "Dedic",
        "split": 213600.1,
        "spm": 0,
        "rank": 17,
        "dnf": false,
        "timeFormatted": "3560:00"
      },
      {
        "name": "Holt",
        "split": 214679.7,
        "spm": 0,
        "rank": 18,
        "dnf": false,
        "timeFormatted": "3578:00"
      },
      {
        "name": "Enders",
        "split": 219181.0,
        "spm": 0,
        "rank": 19,
        "dnf": false,
        "timeFormatted": "3653:00"
      },
      {
        "name": "Spira",
        "split": 222120.7,
        "spm": 0,
        "rank": 20,
        "dnf": false,
        "timeFormatted": "3702:00"
      },
      {
        "name": "MacKinney",
        "split": 223920.9,
        "spm": 0,
        "rank": 21,
        "dnf": false,
        "timeFormatted": "3732:00"
      },
      {
        "name": "Van Doren",
        "split": 224700.1,
        "spm": 0,
        "rank": 22,
        "dnf": false,
        "timeFormatted": "3745:00"
      },
      {
        "name": "Menzies",
        "split": 224880.0,
        "spm": 0,
        "rank": 23,
        "dnf": false,
        "timeFormatted": "3748:00"
      },
      {
        "name": "Wojnovich",
        "split": 228060.9,
        "spm": 0,
        "rank": 24,
        "dnf": false,
        "timeFormatted": "3801:00"
      },
      {
        "name": "Jett",
        "split": 248938.9,
        "spm": 0,
        "rank": 25,
        "dnf": false,
        "timeFormatted": "4149:00"
      }
    ],
    "teamAvgSplit": 214752.7,
    "bestSplit": 199438.9,
    "worstSplit": 248940.7,
    "bestAthlete": "Phelps",
    "groupAAvg": 214516.0,
    "groupBAvg": 214893.6,
    "participantCount": 40
  },
  {
    "id": "2025-03-06",
    "date": "2025-03-06",
    "workoutName": "Interval Set E",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Phelps",
        "split": 39.4,
        "spm": 22,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 40.2,
        "spm": 22,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Brahms",
        "split": 43.3,
        "spm": 22,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 43.1,
        "spm": 22,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 41.3,
        "spm": 22,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Unold",
        "split": 42.0,
        "spm": 22,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Treger",
        "split": 44.1,
        "spm": 22,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 43.0,
        "spm": 22,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Ryan",
        "split": 45.6,
        "spm": 22,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 45.5,
        "spm": 22,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 45.3,
        "spm": 22,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 44.8,
        "spm": 22,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Neil",
        "split": 44.5,
        "spm": 22,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Regen",
        "split": 46.0,
        "spm": 22,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Jorgensen",
        "split": 44.3,
        "spm": 22,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 47.8,
        "spm": 23,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 46.6,
        "spm": 22,
        "rank": 17,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Kristensen",
        "split": 40.6,
        "spm": 22,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Gold",
        "split": 42.2,
        "spm": 22,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Baroni",
        "split": 40.6,
        "spm": 22,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Holt",
        "split": 41.6,
        "spm": 22,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 43.5,
        "spm": 22,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 43.6,
        "spm": 22,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 42.4,
        "spm": 22,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Dedic",
        "split": 42.9,
        "spm": 22,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 42.7,
        "spm": 22,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Waddell",
        "split": 44.6,
        "spm": 22,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Hanson",
        "split": 44.7,
        "spm": 22,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 45.4,
        "spm": 22,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Wright",
        "split": 44.5,
        "spm": 22,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Cameron",
        "split": 45.2,
        "spm": 22,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Morreau",
        "split": 43.5,
        "spm": 22,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Kurth",
        "split": 44.9,
        "spm": 22,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 45.8,
        "spm": 22,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 45.6,
        "spm": 22,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Horvitz",
        "split": 44.2,
        "spm": 22,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 44.3,
        "spm": 22,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Menzies",
        "split": 45.4,
        "spm": 22,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 44.4,
        "spm": 22,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 44.8,
        "spm": 22,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Arnold",
        "split": 46.9,
        "spm": 22,
        "rank": 24,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 48.8,
        "spm": 22,
        "rank": 25,
        "dnf": false
      },
      {
        "name": "Walker",
        "split": 47.9,
        "spm": 22,
        "rank": 26,
        "dnf": false
      }
    ],
    "teamAvgSplit": 44.7,
    "bestSplit": 38.1,
    "worstSplit": 49.5,
    "bestAthlete": "Phelps",
    "groupAAvg": 43.9,
    "groupBAvg": 44.1,
    "participantCount": 43
  },
  {
    "id": "2025-03-10",
    "date": "2025-03-10",
    "workoutName": "Endurance Set G",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Phelps",
        "split": 42.6,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 45.5,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 44.6,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Ryan",
        "split": 47.1,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 46.1,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 47.6,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Unold",
        "split": 46.9,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 48.5,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 48.6,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Brahms",
        "split": 49.2,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Cecchini",
        "split": 49.2,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Jorgensen",
        "split": 46.7,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 47.2,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 47.4,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Treger",
        "split": 48.6,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 48.2,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Skinner",
        "split": 50.4,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 50.9,
        "spm": 20,
        "rank": 18,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Kristensen",
        "split": 43.3,
        "spm": 21,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Gold",
        "split": 46.1,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 47.4,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 46.3,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Wright",
        "split": 47.0,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Dedic",
        "split": 47.0,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Baroni",
        "split": 45.9,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Morreau",
        "split": 45.8,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 47.7,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 47.2,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 48.6,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 46.8,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 46.2,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 48.3,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Kurth",
        "split": 47.8,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Cameron",
        "split": 48.6,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Hanson",
        "split": 48.7,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 48.9,
        "spm": 21,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 47.2,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Arnold",
        "split": 48.7,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Walker",
        "split": 47.5,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 47.5,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 49.5,
        "spm": 20,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Horvitz",
        "split": 48.2,
        "spm": 20,
        "rank": 24,
        "dnf": false
      }
    ],
    "teamAvgSplit": 48.0,
    "bestSplit": 41.4,
    "worstSplit": 51.9,
    "bestAthlete": "Phelps",
    "groupAAvg": 47.4,
    "groupBAvg": 47.2,
    "participantCount": 42
  },
  {
    "id": "2025-03-13",
    "date": "2025-03-13",
    "workoutName": "Interval Set C",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Phelps",
        "split": 37.7,
        "spm": 24,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 38.7,
        "spm": 24,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 40.7,
        "spm": 24,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Wolfaardt",
        "split": 40.5,
        "spm": 24,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Unold",
        "split": 39.8,
        "spm": 24,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Ryan",
        "split": 41.1,
        "spm": 24,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 39.8,
        "spm": 24,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 40.9,
        "spm": 24,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 43.2,
        "spm": 24,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 43.7,
        "spm": 24,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Neil",
        "split": 42.0,
        "spm": 24,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Skinner",
        "split": 43.8,
        "spm": 24,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 45.0,
        "spm": 24,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 44.4,
        "spm": 24,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 44.6,
        "spm": 24,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 47.0,
        "spm": 24,
        "rank": 16,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Kristensen",
        "split": 38.4,
        "spm": 24,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Gold",
        "split": 40.8,
        "spm": 24,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Baroni",
        "split": 38.8,
        "spm": 24,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Holt",
        "split": 40.0,
        "spm": 24,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 41.7,
        "spm": 24,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 42.2,
        "spm": 24,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Menzies",
        "split": 41.3,
        "spm": 24,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 41.4,
        "spm": 24,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 41.3,
        "spm": 24,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Morreau",
        "split": 40.6,
        "spm": 23,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 42.0,
        "spm": 24,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Dedic",
        "split": 42.2,
        "spm": 23,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Hanson",
        "split": 43.4,
        "spm": 24,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 41.9,
        "spm": 24,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Wright",
        "split": 43.5,
        "spm": 24,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Cameron",
        "split": 44.3,
        "spm": 24,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Kurth",
        "split": 43.8,
        "spm": 24,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 44.7,
        "spm": 24,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Arnold",
        "split": 43.9,
        "spm": 24,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 42.8,
        "spm": 24,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 45.5,
        "spm": 24,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 43.8,
        "spm": 24,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Walker",
        "split": 45.0,
        "spm": 24,
        "rank": 23,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 47.1,
        "spm": 24,
        "rank": 24,
        "dnf": false
      }
    ],
    "teamAvgSplit": 42.9,
    "bestSplit": 38.2,
    "worstSplit": 46.9,
    "bestAthlete": "Phelps",
    "groupAAvg": 41.9,
    "groupBAvg": 42.4,
    "participantCount": 40
  },
  {
    "id": "2025-03-15",
    "date": "2025-03-15",
    "workoutName": "Endurance Set H",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Phelps",
        "split": 45.0,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 46.5,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 45.0,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 46.1,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Ryan",
        "split": 47.7,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Skinner",
        "split": 47.4,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 46.6,
        "spm": 19,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 47.8,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 46.8,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Regen",
        "split": 48.3,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 47.9,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 49.3,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Treger",
        "split": 48.4,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 47.2,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Unold",
        "split": 48.3,
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
        "name": "Enders",
        "split": 50.3,
        "spm": 20,
        "rank": 17,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Kristensen",
        "split": 44.7,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Gold",
        "split": 47.1,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 47.9,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 46.6,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 45.8,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Wright",
        "split": 47.2,
        "spm": 19,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 47.1,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 46.7,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Dedic",
        "split": 47.2,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 48.3,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Holt",
        "split": 47.2,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Cameron",
        "split": 48.5,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Morreau",
        "split": 46.5,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 49.3,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Jorgensen",
        "split": 46.6,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 47.0,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Hanson",
        "split": 49.6,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 49.5,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Menzies",
        "split": 48.8,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 47.8,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Kurth",
        "split": 49.0,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Walker",
        "split": 48.4,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 50.3,
        "spm": 20,
        "rank": 23,
        "dnf": false
      }
    ],
    "teamAvgSplit": 48.2,
    "bestSplit": 44.8,
    "worstSplit": 50.1,
    "bestAthlete": "Kristensen",
    "groupAAvg": 47.4,
    "groupBAvg": 47.6,
    "participantCount": 40
  },
  {
    "id": "2025-03-20",
    "date": "2025-03-20",
    "workoutName": "Threshold Test B",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Phelps",
        "split": 33.8,
        "spm": 29,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 33.9,
        "spm": 27,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 37.2,
        "spm": 30,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Wolfaardt",
        "split": 37.0,
        "spm": 29,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Unold",
        "split": 36.0,
        "spm": 28,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 36.2,
        "spm": 30,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 38.0,
        "spm": 37,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Ryan",
        "split": 38.5,
        "spm": 28,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Morton",
        "split": 37.2,
        "spm": 28,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 36.4,
        "spm": 28,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Brahms",
        "split": 39.1,
        "spm": 28,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 38.5,
        "spm": 28,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Skinner",
        "split": 38.3,
        "spm": 27,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 38.5,
        "spm": 29,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Treger",
        "split": 39.0,
        "spm": 27,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Neil",
        "split": 38.0,
        "spm": 27,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Wright",
        "split": 39.2,
        "spm": 28,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 38.9,
        "spm": 27,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Waddell",
        "split": 41.0,
        "spm": 28,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 40.5,
        "spm": 30,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 39.8,
        "spm": 27,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 42.6,
        "spm": 28,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Regen",
        "split": 42.4,
        "spm": 27,
        "rank": 23,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Gold",
        "split": 37.0,
        "spm": 28,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 37.5,
        "spm": 29,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 38.3,
        "spm": 29,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 36.6,
        "spm": 28,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 37.7,
        "spm": 28,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Morreau",
        "split": 36.8,
        "spm": 28,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Kurth",
        "split": 38.3,
        "spm": 30,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Dedic",
        "split": 38.5,
        "spm": 26,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Hanson",
        "split": 39.5,
        "spm": 27,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 38.7,
        "spm": 27,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 40.1,
        "spm": 31,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 39.8,
        "spm": 28,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 38.0,
        "spm": 27,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 40.1,
        "spm": 30,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Cameron",
        "split": 40.2,
        "spm": 27,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 38.3,
        "spm": 29,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Horvitz",
        "split": 38.7,
        "spm": 26,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Arnold",
        "split": 40.1,
        "spm": 27,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 39.1,
        "spm": 28,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Walker",
        "split": 41.5,
        "spm": 28,
        "rank": 20,
        "dnf": false
      }
    ],
    "teamAvgSplit": 39.0,
    "bestSplit": 32.5,
    "worstSplit": 43.1,
    "bestAthlete": "Phelps",
    "groupAAvg": 38.0,
    "groupBAvg": 38.6,
    "participantCount": 43
  },
  {
    "id": "2025-03-22",
    "date": "2025-03-22",
    "workoutName": "Endurance Set F",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Phelps",
        "split": 44.5,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 45.4,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 44.8,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Ryan",
        "split": 47.0,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 45.9,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Treger",
        "split": 46.7,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Skinner",
        "split": 47.2,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 47.7,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Cecchini",
        "split": 49.0,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Brahms",
        "split": 49.3,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Regen",
        "split": 48.6,
        "spm": 21,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 49.2,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 47.1,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Jorgensen",
        "split": 47.1,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Unold",
        "split": 48.3,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 49.4,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 49.9,
        "spm": 21,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 48.1,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 998.7,
        "spm": 0,
        "rank": 19,
        "dnf": true
      }
    ],
    "groupB": [
      {
        "name": "Kristensen",
        "split": 44.0,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Gold",
        "split": 45.0,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 45.6,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 47.6,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Horvitz",
        "split": 46.0,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 48.2,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Wright",
        "split": 47.1,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 47.1,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Waddell",
        "split": 48.6,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 46.9,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 48.4,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 48.4,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Hanson",
        "split": 48.9,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Arnold",
        "split": 48.4,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Dedic",
        "split": 48.2,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 49.3,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Kurth",
        "split": 48.6,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 47.5,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 47.5,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 47.4,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Menzies",
        "split": 48.9,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Walker",
        "split": 49.3,
        "spm": 20,
        "rank": 22,
        "dnf": false
      }
    ],
    "teamAvgSplit": 48.0,
    "bestSplit": 42.3,
    "worstSplit": 50.9,
    "bestAthlete": "Kristensen",
    "groupAAvg": 47.3,
    "groupBAvg": 47.4,
    "participantCount": 40
  },
  {
    "id": "2025-03-27",
    "date": "2025-03-27",
    "workoutName": "Interval Set F",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Phelps",
        "split": 34.0,
        "spm": 29,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 34.5,
        "spm": 27,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Wolfaardt",
        "split": 37.2,
        "spm": 28,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Unold",
        "split": 36.2,
        "spm": 28,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 37.7,
        "spm": 30,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 36.0,
        "spm": 30,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Brahms",
        "split": 38.8,
        "spm": 28,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 38.5,
        "spm": 30,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 36.9,
        "spm": 28,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 39.1,
        "spm": 28,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Waddell",
        "split": 40.1,
        "spm": 27,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 38.7,
        "spm": 28,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Skinner",
        "split": 39.5,
        "spm": 26,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Treger",
        "split": 39.5,
        "spm": 27,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 40.4,
        "spm": 30,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Neil",
        "split": 38.6,
        "spm": 27,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Jorgensen",
        "split": 38.5,
        "spm": 28,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 39.9,
        "spm": 27,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Cecchini",
        "split": 41.4,
        "spm": 28,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Regen",
        "split": 41.9,
        "spm": 27,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 40.9,
        "spm": 28,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 43.8,
        "spm": 27,
        "rank": 22,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Gold",
        "split": 36.4,
        "spm": 28,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 37.7,
        "spm": 29,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 38.3,
        "spm": 28,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Baroni",
        "split": 36.0,
        "spm": 26,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 36.7,
        "spm": 28,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 37.6,
        "spm": 28,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Hanson",
        "split": 39.4,
        "spm": 27,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Wright",
        "split": 38.6,
        "spm": 27,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 39.4,
        "spm": 28,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Arnold",
        "split": 38.8,
        "spm": 29,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 39.0,
        "spm": 29,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Cameron",
        "split": 39.9,
        "spm": 28,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 40.1,
        "spm": 30,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Horvitz",
        "split": 38.3,
        "spm": 28,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 38.2,
        "spm": 27,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Kurth",
        "split": 39.5,
        "spm": 30,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 40.2,
        "spm": 27,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 38.6,
        "spm": 30,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Menzies",
        "split": 39.9,
        "spm": 30,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 39.0,
        "spm": 29,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Walker",
        "split": 40.8,
        "spm": 27,
        "rank": 21,
        "dnf": false
      }
    ],
    "teamAvgSplit": 39.3,
    "bestSplit": 32.7,
    "worstSplit": 43.5,
    "bestAthlete": "Phelps",
    "groupAAvg": 38.5,
    "groupBAvg": 38.6,
    "participantCount": 43
  },
  {
    "id": "2025-03-29",
    "date": "2025-03-29",
    "workoutName": "Interval Set G",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Unold",
        "split": 43.4,
        "spm": 22,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Phelps",
        "split": 44.0,
        "spm": 22,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 43.1,
        "spm": 22,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 43.5,
        "spm": 22,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 46.4,
        "spm": 22,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Neil",
        "split": 45.1,
        "spm": 22,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Brahms",
        "split": 47.5,
        "spm": 22,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 47.4,
        "spm": 22,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 45.3,
        "spm": 22,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Regen",
        "split": 47.0,
        "spm": 22,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Skinner",
        "split": 47.0,
        "spm": 22,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Treger",
        "split": 46.7,
        "spm": 22,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Cecchini",
        "split": 48.0,
        "spm": 22,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Waddell",
        "split": 48.5,
        "spm": 22,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 46.8,
        "spm": 22,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 46.8,
        "spm": 21,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Jorgensen",
        "split": 46.1,
        "spm": 21,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 48.4,
        "spm": 23,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 48.8,
        "spm": 21,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 46.9,
        "spm": 22,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 49.4,
        "spm": 22,
        "rank": 21,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Gold",
        "split": 46.1,
        "spm": 22,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 45.2,
        "spm": 22,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 46.7,
        "spm": 22,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Wright",
        "split": 45.9,
        "spm": 21,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 46.8,
        "spm": 22,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 45.0,
        "spm": 22,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 46.9,
        "spm": 22,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Cameron",
        "split": 47.2,
        "spm": 22,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Arnold",
        "split": 46.6,
        "spm": 22,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Menzies",
        "split": 46.4,
        "spm": 22,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 45.5,
        "spm": 22,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Horvitz",
        "split": 45.8,
        "spm": 22,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 46.7,
        "spm": 22,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 46.3,
        "spm": 22,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 47.9,
        "spm": 22,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Hanson",
        "split": 48.1,
        "spm": 22,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Dedic",
        "split": 47.3,
        "spm": 21,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Kurth",
        "split": 47.5,
        "spm": 22,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Walker",
        "split": 46.5,
        "spm": 22,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 47.0,
        "spm": 21,
        "rank": 20,
        "dnf": false
      }
    ],
    "teamAvgSplit": 47.1,
    "bestSplit": 42.6,
    "worstSplit": 49.1,
    "bestAthlete": "Unold",
    "groupAAvg": 46.3,
    "groupBAvg": 46.5,
    "participantCount": 41
  },
  {
    "id": "2025-04-03",
    "date": "2025-04-03",
    "workoutName": "Threshold Test C",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Phelps",
        "split": 33.0,
        "spm": 30,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 33.4,
        "spm": 29,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Unold",
        "split": 35.0,
        "spm": 29,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 36.6,
        "spm": 32,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Wolfaardt",
        "split": 36.5,
        "spm": 28,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 35.0,
        "spm": 30,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 35.6,
        "spm": 29,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Brahms",
        "split": 38.2,
        "spm": 30,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 38.3,
        "spm": 30,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Skinner",
        "split": 38.3,
        "spm": 27,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 37.9,
        "spm": 29,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 38.0,
        "spm": 27,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Neil",
        "split": 37.5,
        "spm": 27,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 39.2,
        "spm": 27,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Treger",
        "split": 38.7,
        "spm": 27,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Cecchini",
        "split": 40.5,
        "spm": 28,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 40.5,
        "spm": 30,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Jorgensen",
        "split": 38.3,
        "spm": 28,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Waddell",
        "split": 41.7,
        "spm": 28,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 39.6,
        "spm": 27,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Regen",
        "split": 41.6,
        "spm": 27,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 43.7,
        "spm": 27,
        "rank": 22,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Gold",
        "split": 35.4,
        "spm": 29,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Baroni",
        "split": 34.7,
        "spm": 28,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 37.4,
        "spm": 29,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 38.1,
        "spm": 29,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 36.5,
        "spm": 28,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Hanson",
        "split": 38.2,
        "spm": 28,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Horvitz",
        "split": 36.6,
        "spm": 31,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 37.9,
        "spm": 27,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Wright",
        "split": 38.6,
        "spm": 29,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Arnold",
        "split": 38.7,
        "spm": 31,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 38.2,
        "spm": 29,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Dedic",
        "split": 38.7,
        "spm": 27,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 39.9,
        "spm": 30,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Kurth",
        "split": 39.3,
        "spm": 29,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 38.5,
        "spm": 29,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 40.6,
        "spm": 29,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 40.5,
        "spm": 28,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Menzies",
        "split": 40.5,
        "spm": 29,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 40.0,
        "spm": 28,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Walker",
        "split": 40.6,
        "spm": 28,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 40.6,
        "spm": 28,
        "rank": 21,
        "dnf": false
      }
    ],
    "teamAvgSplit": 38.9,
    "bestSplit": 31.5,
    "worstSplit": 43.4,
    "bestAthlete": "Phelps",
    "groupAAvg": 37.9,
    "groupBAvg": 38.5,
    "participantCount": 43
  },
  {
    "id": "2025-04-10",
    "date": "2025-04-10",
    "workoutName": "Threshold Test D",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Phelps",
        "split": 38.2,
        "spm": 26,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 39.1,
        "spm": 26,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Wolfaardt",
        "split": 40.9,
        "spm": 26,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 39.5,
        "spm": 28,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Unold",
        "split": 40.2,
        "spm": 26,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 42.0,
        "spm": 28,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 41.9,
        "spm": 31,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 40.1,
        "spm": 28,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Treger",
        "split": 42.3,
        "spm": 26,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Neil",
        "split": 41.4,
        "spm": 25,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Skinner",
        "split": 43.1,
        "spm": 26,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 43.9,
        "spm": 29,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 42.8,
        "spm": 28,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Waddell",
        "split": 44.9,
        "spm": 26,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Jorgensen",
        "split": 42.5,
        "spm": 27,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Cecchini",
        "split": 45.0,
        "spm": 27,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 43.5,
        "spm": 27,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Regen",
        "split": 45.1,
        "spm": 24,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 998.6,
        "spm": 0,
        "rank": 19,
        "dnf": true
      }
    ],
    "groupB": [],
    "teamAvgSplit": 42.6,
    "bestSplit": 37.4,
    "worstSplit": 45.3,
    "bestAthlete": "Phelps",
    "groupAAvg": 41.9,
    "groupBAvg": 0,
    "participantCount": 18
  },
  {
    "id": "2025-04-17",
    "date": "2025-04-17",
    "workoutName": "Endurance Set J",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Phelps",
        "split": 43.8,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 46.5,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 46.8,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 45.0,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Brahms",
        "split": 47.3,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Unold",
        "split": 45.9,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 45.7,
        "spm": 19,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 46.9,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Wolfaardt",
        "split": 47.2,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 45.4,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 45.5,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 47.7,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Skinner",
        "split": 47.3,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Waddell",
        "split": 49.1,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Cecchini",
        "split": 48.8,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 46.7,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 47.6,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Regen",
        "split": 48.4,
        "spm": 21,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 49.1,
        "spm": 20,
        "rank": 19,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Treger",
        "split": 44.8,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 46.4,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Horvitz",
        "split": 44.8,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Gold",
        "split": 47.0,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 45.4,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 47.7,
        "spm": 19,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 47.2,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 46.4,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 46.0,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Baroni",
        "split": 45.5,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Holt",
        "split": 46.2,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Dedic",
        "split": 46.8,
        "spm": 19,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 48.5,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Hanson",
        "split": 48.4,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Kurth",
        "split": 47.7,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 48.5,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 46.9,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Wright",
        "split": 48.2,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 47.1,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Morreau",
        "split": 47.3,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 50.5,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Walker",
        "split": 49.5,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Banovic",
        "split": 999.7,
        "spm": 0,
        "rank": 23,
        "dnf": true
      }
    ],
    "teamAvgSplit": 47.6,
    "bestSplit": 44.1,
    "worstSplit": 51.1,
    "bestAthlete": "Phelps",
    "groupAAvg": 46.7,
    "groupBAvg": 47.0,
    "participantCount": 41
  },
  {
    "id": "2025-04-19",
    "date": "2025-04-19",
    "workoutName": "Endurance Set I",
    "workoutCategory": "steady_state",
    "groupA": [
      {
        "name": "Phelps",
        "split": 44.6,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 46.5,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 44.7,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 47.2,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Brahms",
        "split": 48.0,
        "spm": 21,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 47.7,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Unold",
        "split": 46.7,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Skinner",
        "split": 47.3,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 46.5,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Regen",
        "split": 47.6,
        "spm": 21,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 48.2,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Waddell",
        "split": 48.9,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 47.1,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 46.5,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Cecchini",
        "split": 48.7,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 46.7,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 47.6,
        "spm": 21,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Jorgensen",
        "split": 47.0,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 47.8,
        "spm": 21,
        "rank": 19,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Gold",
        "split": 45.9,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Horvitz",
        "split": 45.1,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Dedic",
        "split": 46.2,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Morreau",
        "split": 45.0,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 47.6,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 47.3,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 46.0,
        "spm": 21,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 47.5,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 46.9,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 47.9,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Baroni",
        "split": 46.3,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 46.4,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Wright",
        "split": 47.6,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 48.2,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Hanson",
        "split": 48.7,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Treger",
        "split": 47.7,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 47.4,
        "spm": 21,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 49.8,
        "spm": 21,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 47.8,
        "spm": 21,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Walker",
        "split": 48.2,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Banovic",
        "split": 52.8,
        "spm": 20,
        "rank": 21,
        "dnf": false
      }
    ],
    "teamAvgSplit": 47.9,
    "bestSplit": 44.9,
    "worstSplit": 52.8,
    "bestAthlete": "Phelps",
    "groupAAvg": 47.0,
    "groupBAvg": 47.3,
    "participantCount": 40
  },
  {
    "id": "2025-04-21",
    "date": "2025-04-21",
    "workoutName": "Threshold Test E",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Beale",
        "split": 44.8,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Waddell",
        "split": 47.4,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Cecchini",
        "split": 47.2,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Manton",
        "split": 45.6,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 46.8,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 45.8,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 46.1,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Regen",
        "split": 47.0,
        "spm": 21,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 47.6,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Jorgensen",
        "split": 45.3,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 45.5,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 45.8,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 45.8,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 48.4,
        "spm": 20,
        "rank": 14,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Dedic",
        "split": 44.7,
        "spm": 20,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 46.1,
        "spm": 20,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Gold",
        "split": 46.1,
        "spm": 20,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Morreau",
        "split": 43.8,
        "spm": 20,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 46.3,
        "spm": 20,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 45.5,
        "spm": 20,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 46.6,
        "spm": 20,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 46.4,
        "spm": 20,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Heerding",
        "split": 45.7,
        "spm": 20,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Treger",
        "split": 46.2,
        "spm": 20,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Baroni",
        "split": 45.4,
        "spm": 20,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Cameron",
        "split": 47.3,
        "spm": 20,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Hanson",
        "split": 47.6,
        "spm": 20,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Wright",
        "split": 46.8,
        "spm": 20,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Holt",
        "split": 46.4,
        "spm": 20,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 46.5,
        "spm": 20,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 45.9,
        "spm": 20,
        "rank": 17,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 47.7,
        "spm": 20,
        "rank": 18,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 46.1,
        "spm": 20,
        "rank": 19,
        "dnf": false
      },
      {
        "name": "Horvitz",
        "split": 46.8,
        "spm": 20,
        "rank": 20,
        "dnf": false
      },
      {
        "name": "Walker",
        "split": 48.1,
        "spm": 20,
        "rank": 21,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 50.1,
        "spm": 20,
        "rank": 22,
        "dnf": false
      },
      {
        "name": "Banovic",
        "split": 51.4,
        "spm": 20,
        "rank": 23,
        "dnf": false
      }
    ],
    "teamAvgSplit": 47.2,
    "bestSplit": 45.3,
    "worstSplit": 51.4,
    "bestAthlete": "Dedic",
    "groupAAvg": 46.4,
    "groupBAvg": 46.5,
    "participantCount": 37
  },
  {
    "id": "2025-04-23",
    "date": "2025-04-23",
    "workoutName": "Threshold Test F",
    "workoutCategory": "intervals",
    "groupA": [
      {
        "name": "Manton",
        "split": 31.9,
        "spm": 28,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Wolfaardt",
        "split": 34.2,
        "spm": 27,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Pfautsch",
        "split": 35.7,
        "spm": 27,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Moreno",
        "split": 35.6,
        "spm": 27,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Beale",
        "split": 34.2,
        "spm": 27,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Gallagher",
        "split": 34.5,
        "spm": 27,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Luledzija",
        "split": 35.4,
        "spm": 26,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "DiStefano",
        "split": 35.7,
        "spm": 28,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Neil",
        "split": 35.4,
        "spm": 26,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Barbey",
        "split": 37.0,
        "spm": 27,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Cecchini",
        "split": 38.2,
        "spm": 27,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "DB",
        "split": 38.1,
        "spm": 28,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Horvitz",
        "split": 36.6,
        "spm": 27,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Browning",
        "split": 36.5,
        "spm": 27,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Jorgensen",
        "split": 36.4,
        "spm": 27,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Jett",
        "split": 36.8,
        "spm": 26,
        "rank": 16,
        "dnf": false
      },
      {
        "name": "Regen",
        "split": 39.5,
        "spm": 27,
        "rank": 17,
        "dnf": false
      }
    ],
    "groupB": [
      {
        "name": "Baroni",
        "split": 32.5,
        "spm": 28,
        "rank": 1,
        "dnf": false
      },
      {
        "name": "Furrer",
        "split": 36.1,
        "spm": 27,
        "rank": 2,
        "dnf": false
      },
      {
        "name": "Rodenburg",
        "split": 36.0,
        "spm": 27,
        "rank": 3,
        "dnf": false
      },
      {
        "name": "Dedic",
        "split": 35.3,
        "spm": 26,
        "rank": 4,
        "dnf": false
      },
      {
        "name": "Ferrera",
        "split": 35.1,
        "spm": 27,
        "rank": 5,
        "dnf": false
      },
      {
        "name": "Wojnovich",
        "split": 36.7,
        "spm": 27,
        "rank": 6,
        "dnf": false
      },
      {
        "name": "Van Doren",
        "split": 36.5,
        "spm": 27,
        "rank": 7,
        "dnf": false
      },
      {
        "name": "Koudraiev",
        "split": 37.6,
        "spm": 27,
        "rank": 8,
        "dnf": false
      },
      {
        "name": "Spira",
        "split": 37.9,
        "spm": 27,
        "rank": 9,
        "dnf": false
      },
      {
        "name": "Morreau",
        "split": 36.3,
        "spm": 26,
        "rank": 10,
        "dnf": false
      },
      {
        "name": "Bottomley",
        "split": 36.5,
        "spm": 27,
        "rank": 11,
        "dnf": false
      },
      {
        "name": "Weiss",
        "split": 36.6,
        "spm": 29,
        "rank": 12,
        "dnf": false
      },
      {
        "name": "Wright",
        "split": 37.9,
        "spm": 27,
        "rank": 13,
        "dnf": false
      },
      {
        "name": "Enders",
        "split": 40.3,
        "spm": 27,
        "rank": 14,
        "dnf": false
      },
      {
        "name": "Banovic",
        "split": 40.5,
        "spm": 26,
        "rank": 15,
        "dnf": false
      },
      {
        "name": "Walker",
        "split": 39.7,
        "spm": 27,
        "rank": 16,
        "dnf": false
      }
    ],
    "teamAvgSplit": 37.2,
    "bestSplit": 31.6,
    "worstSplit": 41.3,
    "bestAthlete": "Manton",
    "groupAAvg": 36.1,
    "groupBAvg": 36.9,
    "participantCount": 33
  }
] as Session[];

export const athletes: Athlete[] = [
  {
    "id": "phelps",
    "name": "Phelps",
    "group": "A",
    "rank": 1,
    "avgSplit": 40.2,
    "bestSplit": 33.0,
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
    "id": "wolfaardt",
    "name": "Wolfaardt",
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
    "id": "kristensen",
    "name": "Kristensen",
    "group": "B",
    "rank": 3,
    "avgSplit": 43.4,
    "bestSplit": 38.4,
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
    "id": "pfautsch",
    "name": "Pfautsch",
    "group": "A",
    "rank": 4,
    "avgSplit": 44.1,
    "bestSplit": 35.7,
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
    "id": "neil",
    "name": "Neil",
    "group": "A",
    "rank": 5,
    "avgSplit": 42.1,
    "bestSplit": 35.4,
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
    "id": "beale",
    "name": "Beale",
    "group": "A",
    "rank": 6,
    "avgSplit": 42.5,
    "bestSplit": 34.2,
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
    "id": "gold",
    "name": "Gold",
    "group": "B",
    "rank": 7,
    "avgSplit": 44.6,
    "bestSplit": 35.4,
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
    "id": "manton",
    "name": "Manton",
    "group": "A",
    "rank": 8,
    "avgSplit": 42.8,
    "bestSplit": 31.9,
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
    "id": "rodenburg",
    "name": "Rodenburg",
    "group": "B",
    "rank": 9,
    "avgSplit": 45.0,
    "bestSplit": 36.0,
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
    "id": "unold",
    "name": "Unold",
    "group": "A",
    "rank": 10,
    "avgSplit": 43.8,
    "bestSplit": 35.0,
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
    "id": "baroni",
    "name": "Baroni",
    "group": "B",
    "rank": 11,
    "avgSplit": 43.1,
    "bestSplit": 32.5,
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
    "id": "furrer",
    "name": "Furrer",
    "group": "B",
    "rank": 12,
    "avgSplit": 45.6,
    "bestSplit": 36.1,
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
    "id": "brahms",
    "name": "Brahms",
    "group": "A",
    "rank": 13,
    "avgSplit": 45.9,
    "bestSplit": 38.2,
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
    "id": "ryan",
    "name": "Ryan",
    "group": "A",
    "rank": 14,
    "avgSplit": 46.0,
    "bestSplit": 38.5,
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
    "id": "ferrera",
    "name": "Ferrera",
    "group": "B",
    "rank": 15,
    "avgSplit": 44.5,
    "bestSplit": 35.1,
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
    "id": "heerding",
    "name": "Heerding",
    "group": "B",
    "rank": 16,
    "avgSplit": 44.6,
    "bestSplit": 37.6,
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
    "id": "van-doren",
    "name": "Van Doren",
    "group": "B",
    "rank": 17,
    "avgSplit": 45.1,
    "bestSplit": 36.5,
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
    "id": "dedic",
    "name": "Dedic",
    "group": "B",
    "rank": 18,
    "avgSplit": 45.1,
    "bestSplit": 35.3,
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
    "id": "barbey",
    "name": "Barbey",
    "group": "A",
    "rank": 19,
    "avgSplit": 45.7,
    "bestSplit": 37.0,
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
    "id": "gallagher",
    "name": "Gallagher",
    "group": "A",
    "rank": 20,
    "avgSplit": 43.9,
    "bestSplit": 34.5,
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
    "id": "holt",
    "name": "Holt",
    "group": "B",
    "rank": 21,
    "avgSplit": 44.8,
    "bestSplit": 39.5,
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
    "id": "horvitz",
    "name": "Horvitz",
    "group": "B",
    "rank": 22,
    "avgSplit": 44.3,
    "bestSplit": 36.6,
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
    "id": "moreno",
    "name": "Moreno",
    "group": "A",
    "rank": 23,
    "avgSplit": 46.2,
    "bestSplit": 35.6,
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
    "id": "koudraiev",
    "name": "Koudraiev",
    "group": "B",
    "rank": 24,
    "avgSplit": 46.4,
    "bestSplit": 37.6,
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
    "id": "treger",
    "name": "Treger",
    "group": "A",
    "rank": 25,
    "avgSplit": 45.3,
    "bestSplit": 38.7,
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
    "id": "wright",
    "name": "Wright",
    "group": "B",
    "rank": 26,
    "avgSplit": 45.5,
    "bestSplit": 37.9,
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
    "id": "arnold",
    "name": "Arnold",
    "group": "B",
    "rank": 27,
    "avgSplit": 45.6,
    "bestSplit": 38.7,
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
    "id": "skinner",
    "name": "Skinner",
    "group": "A",
    "rank": 28,
    "avgSplit": 45.8,
    "bestSplit": 38.3,
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
    "id": "morreau",
    "name": "Morreau",
    "group": "B",
    "rank": 29,
    "avgSplit": 44.2,
    "bestSplit": 36.3,
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
    "id": "waddell",
    "name": "Waddell",
    "group": "A",
    "rank": 30,
    "avgSplit": 46.9,
    "bestSplit": 40.1,
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
    "id": "menzies",
    "name": "Menzies",
    "group": "B",
    "rank": 31,
    "avgSplit": 45.5,
    "bestSplit": 39.9,
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
    "avgSplit": 46.6,
    "bestSplit": 38.1,
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
    "id": "luledzija",
    "name": "Luledzija",
    "group": "A",
    "rank": 33,
    "avgSplit": 45.3,
    "bestSplit": 35.4,
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
    "id": "hanson",
    "name": "Hanson",
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
    "id": "spira",
    "name": "Spira",
    "group": "B",
    "rank": 35,
    "avgSplit": 46.5,
    "bestSplit": 37.9,
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
    "id": "cameron",
    "name": "Cameron",
    "group": "B",
    "rank": 36,
    "avgSplit": 46.7,
    "bestSplit": 39.9,
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
    "id": "kurth",
    "name": "Kurth",
    "group": "B",
    "rank": 37,
    "avgSplit": 46.0,
    "bestSplit": 38.3,
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
    "id": "cecchini",
    "name": "Cecchini",
    "group": "A",
    "rank": 38,
    "avgSplit": 47.0,
    "bestSplit": 38.2,
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
    "id": "distefano",
    "name": "DiStefano",
    "group": "A",
    "rank": 39,
    "avgSplit": 45.7,
    "bestSplit": 35.7,
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
    "id": "regen",
    "name": "Regen",
    "group": "A",
    "rank": 40,
    "avgSplit": 46.5,
    "bestSplit": 39.5,
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
    "id": "morton",
    "name": "Morton",
    "group": "A",
    "rank": 41,
    "avgSplit": 45.8,
    "bestSplit": 37.2,
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
    "id": "bottomley",
    "name": "Bottomley",
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
    "id": "jett",
    "name": "Jett",
    "group": "B",
    "rank": 43,
    "avgSplit": 45.1,
    "bestSplit": 36.8,
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
    "id": "wojnovich",
    "name": "Wojnovich",
    "group": "B",
    "rank": 44,
    "avgSplit": 47.1,
    "bestSplit": 36.7,
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
    "id": "jorgensen",
    "name": "Jorgensen",
    "group": "A",
    "rank": 45,
    "avgSplit": 45.0,
    "bestSplit": 36.4,
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
    "id": "siemering",
    "name": "Siemering",
    "group": "A",
    "rank": 46,
    "avgSplit": 47.9,
    "bestSplit": 45.2,
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
    "id": "weiss",
    "name": "Weiss",
    "group": "B",
    "rank": 47,
    "avgSplit": 45.8,
    "bestSplit": 36.6,
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
    "id": "browning",
    "name": "Browning",
    "group": "A",
    "rank": 48,
    "avgSplit": 46.2,
    "bestSplit": 36.5,
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
    "id": "bradbery",
    "name": "Bradbery",
    "group": "B",
    "rank": 49,
    "avgSplit": 46.9,
    "bestSplit": 45.0,
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
    "id": "enders",
    "name": "Enders",
    "group": "B",
    "rank": 50,
    "avgSplit": 48.6,
    "bestSplit": 40.3,
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
    "id": "banovic",
    "name": "Banovic",
    "group": "A",
    "rank": 51,
    "avgSplit": 48.5,
    "bestSplit": 40.5,
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
    "id": "walker",
    "name": "Walker",
    "group": "B",
    "rank": 52,
    "avgSplit": 47.0,
    "bestSplit": 39.7,
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
    "id": "bird",
    "name": "Bird",
    "group": "B",
    "rank": 53,
    "avgSplit": 49.8,
    "bestSplit": 49.4,
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
    "id": "derks",
    "name": "Derks",
    "group": "B",
    "rank": 54,
    "avgSplit": 49.0,
    "bestSplit": 49.0,
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
    "id": "greenberg",
    "name": "Greenberg",
    "group": "B",
    "rank": 55,
    "avgSplit": 49.3,
    "bestSplit": 49.2,
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
    "id": "reid",
    "name": "Reid",
    "group": "B",
    "rank": 56,
    "avgSplit": 52.0,
    "bestSplit": 51.6,
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
    "id": "gibor",
    "name": "Gibor",
    "group": "B",
    "rank": 57,
    "avgSplit": 52.0,
    "bestSplit": 49.3,
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
    "id": "mackinney",
    "name": "MacKinney",
    "group": "B",
    "rank": 58,
    "avgSplit": 53.8,
    "bestSplit": 52.9,
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
