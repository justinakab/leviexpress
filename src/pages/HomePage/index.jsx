import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail';
import { SelectedSeat } from '../../components/SelectedSeat';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journeydata) => {
    setJourney(journeydata);
  };

  const handleBuy = async () => {
    console.log('Funguju');

    const response4 = await fetch(
      'https://apps.kodim.cz/daweb/leviexpress/api/reservation',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'create',
          seat: journey.results.autoSeat,
          journeyId: journey.results.journeyId,
        }),
      },
    );

    const data4 = await response4.json();
    // console.log(data4.results.reservationId);
    navigate(`/reservation/${data4.results.reservationId}`);
  };
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey !== null ? (
        <>
          <JourneyDetail journeys={journey.results}></JourneyDetail>{' '}
          <SelectedSeat number={journey.results.autoSeat}></SelectedSeat>
        </>
      ) : null}
      <div className="controls container">
        <button onClick={handleBuy} className="btn btn--big" type="button">
          Rezervovat
        </button>
      </div>
    </main>
  );
};
