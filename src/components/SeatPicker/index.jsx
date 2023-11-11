import './style.css';
import { Seat } from '../Seat';
import { SeatRow } from '../SeatRow';

export const SeatPicker = ({ seats, journeyId, selectedSeat }) => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((seat, index) => (
          <SeatRow
            rowSelectedSeat={selectedSeat}
            key={index}
            row={seat}
          ></SeatRow>
        ))}
      </div>
    </div>
  );
};
