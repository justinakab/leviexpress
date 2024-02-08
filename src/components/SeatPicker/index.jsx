import './style.css';
import { Seat } from '../Seat';
import { SeatRow } from '../SeatRow';

export const SeatPicker = ({ seats, selectedSeat, onSeatSelected }) => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((seat, index) => (
          <SeatRow
            onSeatSelected={onSeatSelected}
            rowSelectedSeat={selectedSeat}
            key={index}
            row={seat}
          ></SeatRow>
        ))}
      </div>
    </div>
  );
};
