import { Seat } from '../Seat';

export const SeatRow = ({ row, rowSelectedSeat, onSeatSelected }) => {
  return (
    <div className="seat-row">
      {row.map((seat) => (
        <Seat
          onSelect={onSeatSelected}
          isSelected={rowSelectedSeat === seat.number}
          isOccupied={seat.isOccupied}
          key={seat.number}
          number={seat.number}
        ></Seat>
      ))}
    </div>
  );
};
