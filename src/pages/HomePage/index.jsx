import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journeydata) => {
    setJourney(journeydata);
  };
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey !== null ? (
        <p>Nalezeno spojení s id: {journey.results.journeyId}</p>
      ) : null}
    </main>
  );
};
