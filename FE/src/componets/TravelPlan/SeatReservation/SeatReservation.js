
import React from 'react';
import { useSelector } from 'react-redux'
import * as seatsApi from '../../../api/Seats.js'
import './seatReservation.css'
const SeatReservation = () => {


    let selectedSeats = useSelector(state => state.seats.selectedSeats) || []

    const handleSubmitEvent = () => {
        seatsApi.doReserve(selectedSeats)
            .then(response => response.data)
            .then(data => {
                console.log(data)
            })
        
    }

    const renderNameAgeFields = () => {
        return selectedSeats.map(item => {
            return (
                <li className="bookingDetails" key={item}>
                    <span className="seatNo">{item}</span>
                    <div>
                        <div>
                            <input className="passDetails" placeholder="Name" />
                        </div>
                        <div>
                            <input className="passDetails" placeholder="Age" />
                        </div>
                    </div>
                </li>
            )
        })
    }

    return (
        <div>
            <p>Selected Seats : {selectedSeats.join(",")}</p>
                <hr/>
            <ul>
                {renderNameAgeFields()}
            </ul>
            <hr />
            <button onClick={e => handleSubmitEvent()}  className="submitBtn">Proceed For Payment</button>
            
        </div>
    );
};

export default SeatReservation;