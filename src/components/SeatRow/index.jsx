import { Seat } from '../Seat';

export const SeatRow = ({ row }) => {
  return (
    <div className="seat-row">
      {row.map((seat) => (
        <Seat
          isOccupied={seat.isOccupied}
          key={seat.number}
          number={seat.number}
        ></Seat>
      ))}
    </div>
  );
};
