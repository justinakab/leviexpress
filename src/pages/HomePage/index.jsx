import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journeydata) => {
    setJourney(journeydata);
  };
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey !== null ? (
        <JourneyDetail journeys={journey.results}></JourneyDetail>
      ) : null}
    </main>
  );
};
