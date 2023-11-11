import { Seat } from '../Seat';

export const SeatRow = ({ row, rowSelectedSeat }) => {
  return (
    <div className="seat-row">
      {row.map((seat) => (
        <Seat
          isSelected={rowSelectedSeat === seat.number}
          isOccupied={seat.isOccupied}
          key={seat.number}
          number={seat.number}
        ></Seat>
      ))}
    </div>
  );
};
