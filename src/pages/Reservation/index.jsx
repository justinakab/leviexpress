import { useState } from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const ReservationPage = () => {
  let { id } = useParams();

  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    const handleUseEffect = async () => {
      const response5 = await fetch(
        `https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`,
      );
      const data5 = await response5.json();
      setReservation(data5);
      console.log(data5);
    };
    handleUseEffect();
  }, []);

  return (
    <>
      {reservation !== null ? (
        <div className="reservation container">
          <h2>Vaše e-jízdenka s č. {reservation.results.reservationId}</h2>
          <div className="reservation__body">
            <div className="reservation__headings">
              <p>Datum cesty:</p>
              <p>Odjezd:</p>
              <p>Příjezd:</p>
              <p>Sedadlo:</p>
            </div>
            <div className="reservation__info">
              <p>{reservation.results.date}</p>
              <p>{reservation.results.fromCity.name}</p>
              <p>{reservation.results.toCity.name}</p>
              <p>{reservation.results.seatNumber}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
