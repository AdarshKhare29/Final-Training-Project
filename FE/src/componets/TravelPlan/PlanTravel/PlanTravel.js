import React ,{useState} from 'react';
import './planTravel.css'
import '../SeatReservation/SeatReservation'
import * as busApi from '../../../api/Bus'

const PlanTravel = ({history}) => {
  const [showDetails,setshowDetails]=useState(false)
  const [searchData, setSearchData] = useState({
    Source: '',
    Destination: '',
    TravelDate: '',
    loading: false,
    Error: '',
    BusData: '',
    didRender: false
})
const { Source, Destination, TravelDate, loading, didRender, Error, BusData } = searchData
const handleSubmitEvent = e => {
    e.preventDefault()
    setSearchData({ ...searchData, loading: true, Error: '', didRender: false })
    busApi.doSearch(searchData)
    .then((data) => {
        if (data.message) {
          
            setSearchData({ ...searchData, Error: data.message, loading: false, BusData: [], didRender: false })
        }
        else {
            console.log('here in else')
           

            setSearchData({ ...searchData, didRender: true, loading: false, Error: '', BusData: data })
        }
    })
    .catch((err) => {
        
        setSearchData({ ...searchData, Error: "Failed to load data", loading: false, BusData: [], didRender: false })
    })
        
        
}
console.log(BusData)
const handleChangeEvent = (e, field) => {
    const fieldValue = e.target.value
    setSearchData({ ...searchData, [field]: fieldValue })
}


const performRender = () => {
    if (didRender) {
        return (
            <div className="busResult">
                <ul>
                    
                    <li>{BusData.data.data  .map((bus, idx) => {
                        return (<ul key={idx}>
                            <li>{bus.busNumber}</li>
                            <li>{bus.busType}</li>
                            <li>{bus.dep}</li>
                            <li>{bus.arr}</li>
                           
                            <li>{bus.totalSeats}</li>
                            <li>{bus.fare}</li>
                            <li><button>View Seats</button></li>
                        </ul>
                        )
                    })}
                    </li>
                </ul>
            </div>
        )
    }
}


    return (
      
        <div> 
            <form onSubmit={e => handleSubmitEvent(e)}>
                  <div className="fromCity">
                    <label htmlFor="From">From</label><br/>
                    <input list="city"  type="text" placeholder="Select a city" onChange={e => handleChangeEvent(e, 'from')}/>
                    <datalist id="city"> 
                      <option value="Indore"/>
                      <option value="Bhopal"/>
                      <option value="Chennai"/>
                      <option value="Pune"/>
                      <option value="Tikamgarh"/>
                    </datalist>
                  </div>
                  
                  <div className="toCity">
                    <label htmlFor="To">To</label><br/>
                    <input list="city" type="text" placeholder="Select a city" onChange={e => handleChangeEvent(e, 'to')}/>
                      <datalist id="city"> 
                        <option value="Indore"/>
                        <option value="Bhopal"/>
                        <option value="Chennai"/>
                        <option value="Pune"/>
                        <option value="Tikamgarh"/>
                      </datalist>
                  </div>
                  <div className="travelDate">
                    <label htmlFor="Travel date">Travel Date</label><br/>
                    <input type="date" placeholder="mm/dd/yyyy"/>
                    <button className="tripBtn" onClick={()=>setshowDetails(!showDetails)}>Plan Trip</button>
                  </div>
                  </form>
                  
                  <div>
                  {showDetails && <div className="BusDetails">
                        <h2 id="busSelect">Select Bus</h2>
                        <div className="busInfo">
                          <ul>
                            <li>Bus Number</li>
                            <li>Bus Type</li>
                            <li>Departure</li>
                            <li>Arrival</li>
                            <li>Available</li>
                            <li>Fare</li>
                            </ul>
                         </div>
                      </div>}
                  </div> 
                  {performRender()}
                </div>
                 
              
    );
};

export default PlanTravel;