import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './stylesheets/style.css';
import Logout from './componets/Logout.js'
import Home from './componets/Home/Home'
import UserContext   from './UserContext/UserContext'
import userReducer from './reducer/userReducer'

import Login from '../src/componets/Login/Login'

import BusBooking from './componets/TravelPlan/BusBooking'



const initialState = {
  UserEmail: '',
  Password: '',
  isLoggedIn: false,
  isSignedIn: false
}

function App() {
  let [userDet, dispatch] = useReducer(userReducer, initialState)
  return (
  <Router>
     <UserContext.Provider value={{ userDet, dispatch }}>
    
   
      
        <Switch>	
        
        <Route path="/BusBooking" render={props => <BusBooking {...props}/>}></Route>
        
          <div className="Wrapper">
          <Route exact path="/" render={props => <Home {...props} />}></Route>
          <Route path="/Logout" render={props => <Logout {...props} />}></Route>
          
          
          <Route path="/Login" render={props => <Login {...props}/>}></Route>
          </div>
        </Switch>
      
  
    </UserContext.Provider>
</Router>
  );
}

export default App;
