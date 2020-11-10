// VIEW SEats
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import SeatReservation from '../SeatReservation/SeatReservation';
import './viewSeats.css'
import * as seatsApi from '../../../api/Seats.js'

const SeatLayout = () => {
    const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    const dispatch = useDispatch()
    
    const reservedSeats = useSelector(state => state.seats.reservedSeats) || []
    const selectedSeats = useSelector(state => state.seats.selectedSeats) || []


    const handleEvent = (e, seatNumber) => {
        
        if (!reservedSeats.includes(seatNumber))
            dispatch({ type: 'SELECT_SEATS', seatNumber })
        
        
    }

    useEffect(() => {

        seatsApi.showReseve(reservedSeats)
        .then(response =>response.data)
        .then(data =>{
            console.log("here in seatlayout")
            let reservedSeats = data.result.reservation.seats
            dispatch({ type: 'LOAD_RESERVED_SEATS', reservedSeats })
        })
    }, [])


    const changeBgColor = (item) => {
        if (reservedSeats.includes(item))
            return 'red'
        if (selectedSeats.includes(item))
            return 'green'
        else
            return 'grey'
    }
    console.log(selectedSeats)
    console.log(reservedSeats)

    const renderSeats = () => {
        return (arr).map(item => {
            return (
                <li  style={{backgroundColor: changeBgColor(item)}}
                   
                    onClick={e => handleEvent(e, item)}
                    
                    className="spanEi" key={item}
                    // className={reservedSeats.includes(item)?'bookedSeat':selectedSeats.includes(item)?'selectSeat':''}
                    >
                    {item}
                    
                </li>
            )
        })
    }

    return (
        <div>
        <div className="mainRender" >
            {renderSeats()}
            
        </div>
        <div class="passangerDetails">
            <SeatReservation/>
        </div>
       </div>
    );
};

export default SeatLayout;  