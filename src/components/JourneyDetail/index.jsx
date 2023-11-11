import { BusStop } from '../BusStop';
import './style.css';

export const JourneyDetail = ({ journeys }) => {
  console.log(journeys);

  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {journeys.stops.map((stop) => (
          <BusStop
            key={stop.code}
            name={stop.name}
            station={stop.station}
            time={stop.time}
          ></BusStop>
        ))}
      </div>
    </div>
  );
};
