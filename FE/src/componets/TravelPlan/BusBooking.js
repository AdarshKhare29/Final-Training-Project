import React,{useContext} from 'react';
import UserContext from '../../UserContext/UserContext';
import SecondaryNavbar from '../SecondaryNavbar/SecondaryNavbar'
import './BusBooking.css'
import Tabs from './Tabs.js'
import ViewSeats from './ViewSeats/ViewSeats'
import PlanTravel from './PlanTravel/PlanTravel'
import Payment from './Payment/Payment'
const BusBooking = ({history})=> {

 
    const {userDet} = useContext(UserContext)
    const renderContent=()=>{
      let {isLoggedIn}= userDet
      let {isSignedIn}=userDet
      if(isLoggedIn){
        return <h1>Welcome </h1>
      }
      if(isSignedIn){
        return <h1>Welcome Ak</h1>
      }
      else{
        return <h1>Welcome Guest</h1>
      }
    }

    return (
        <>
        <SecondaryNavbar/>
        <div className="mainCover">
          
          <div className="userWelcome">
              { renderContent()}
                
              <Tabs>
              <div label="1. Plan Your Travel" className="planTravel">
                <hr />
                <PlanTravel/>
              </div>
              <div label="2. Select Your Seat">
                <hr />
                <ViewSeats/>
              </div>
              <div label="3. Payment">
                <hr />
                <Payment history={history}/>
              </div>
              <div label="4. Ticket Confirmation">
                <hr />
                Nothing to see here, this tab is <em>extinct</em>!
              </div>
              </Tabs>
          </div>
        </div>
        </>
    );
  }
const container = document.createElement('div');
document.body.appendChild(container);
//render(<BusBooking />, container);
export default BusBooking;