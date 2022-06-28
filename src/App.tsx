import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { RootState } from './app/store';
import ReservationCard from './components/ReservationCard';
import { addReservation } from './features/reservationSlice';

function App() {

  const [reservationNameInput, setReservationNameInput] = useState("");

  const dispatch = useDispatch();
  const reservations = useSelector((state: RootState) => state.reservations.value);

  const handleAddReservation =()=>{
    if(!reservationNameInput) return
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className='item1'>
            <div className="headerItem1">
              <div className="title">
                Reservations
              </div>
            </div>
            <div className="bodyItem1">
              <div className='bodyContent'>
                <div className='cardsContainer'>
                  {reservations.map((name, index) => {
                    return <ReservationCard key={index} name={name} index={index} />
                  })}
                </div>
              </div>
            </div>
            <div className="footerItem1">
              <div className='formInputs'>
                <input type="text" value={reservationNameInput} onChange={(e)=> setReservationNameInput(e.target.value)} name="person" id="person" />
                <button onClick={()=> handleAddReservation()} >send</button>
              </div>
            </div>
          </div>
          <div className='item2'>Right</div>
        </div>
      </header>
    </div>
  );
}

export default App;
