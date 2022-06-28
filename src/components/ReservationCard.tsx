import { useDispatch } from 'react-redux';
import '../App.css';
import { removeReservation } from '../features/reservationSlice';

interface ReservationCardTypes {
    name: string
    index: number
}

export default function ReservationCard({ name, index }: ReservationCardTypes) {
    
    const dispatch = useDispatch();

    return (
        <div onClick={()=> dispatch(removeReservation(index))} className="reservationCard">
            {name}
        </div>
    )
}