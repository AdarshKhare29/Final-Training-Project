import React,{useState} from 'react';

const Payment = ({history}) => {

  const [showSuccess,setshowSuccess]=useState(false)

  const handleCancel=()=>{
    history.push('/Login')

  }
    return (
      <div> 
          <div className="payment">
                <div className="cardType">
                  <label id="cardLabel" htmlFor="card type">Card Type</label>
                  <input type="radio" id="visa" name="cardType" value="visa" required/>
                  <label id="cardLabel" htmlFor="visa">Visa</label>
                  <input type="radio" id="visa" name="cardType" value="Mastercard" required/>
                  <label htmlFor="ms">MasterCard</label><br/><br/>
                </div>
                <div className="cardNumber">
                  <label htmlfor="CardNumber">Card Number</label>
                  <input type="text" required/><br/> <br/>
                </div>
                <div className="cardName">
                  <label htmlfor="cardname">Name on Card</label>
                  <input type="text" required></input><br/> <br/>
                </div>
                <div className="cvv">
                  <label htmlfor="cvv">CVV</label>
                  <input type="password" required/><br/> <br/>
                  
                </div>
                <div className="expiryDate">
                  <label htmlfor="expirayDate">Expiry Date</label>
                  <input id="monthEx" type="text" placeholder="month"/>
                  <input id="yearEx" type="text" placeholder="year"/><br/> <br/>
                </div>

                <div className="paymentBtn">
                  <button className="submitBtn" onClick={()=>setshowSuccess(!showSuccess)} type="submit">Pay Now</button>
                  <button className="cancelBtn" onClick={()=>handleCancel()} type="submit">Cancel</button>
                </div>

              </div>    
              {showSuccess &&<h4>
                Payement is Successful proceed to show ticket</h4>}
              </div>
    );
};

export default Payment;