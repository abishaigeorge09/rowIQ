import HeroHeader from './components/HeroHeader';
import PerformanceTimeline from './components/PerformanceTimeline';
import WorkoutBreakdown from './components/WorkoutBreakdown';
import SeasonComparison from './components/SeasonComparison';
import RankProgression from './components/RankProgression';
import SessionDeepDive from './components/SessionDeepDive';
import PacingAnalysis from './components/PacingAnalysis';
import PersonalRecords from './components/PersonalRecords';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A0F1E' }}>
      <HeroHeader />
      <div className="max-w-6xl mx-auto">
        <PerformanceTimeline />
        <WorkoutBreakdown />
        <SeasonComparison />
        <RankProgression />
        <SessionDeepDive />
        <PacingAnalysis />
        <PersonalRecords />
      </div>
      <Footer />
    </div>
  );
}
