import { useAppStore } from '@/store/useAppStore'
import RosterView from '@/components/roster/RosterView'
import ProfileView from '@/components/profile/ProfileView'

export default function AthletesView() {
  const { selectedAthleteProfileId, selectAthleteProfile } = useAppStore()

  if (selectedAthleteProfileId) {
    return (
      <ProfileView
        athleteId={selectedAthleteProfileId}
        onBack={() => selectAthleteProfile(null)}
      />
    )
  }

  return <RosterView onSelectAthlete={id => selectAthleteProfile(id)} />
}
