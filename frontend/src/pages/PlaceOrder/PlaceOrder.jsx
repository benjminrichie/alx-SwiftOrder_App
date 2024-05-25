import React from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext)

  return (
    <div>
      <form action="" className="placeOrder">
        <div className="placeOrderLeft">
          <p className="title">Delivery Information</p>
          <div className="multiFields">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
          </div>
          <input type="email" placeholder='Email Address' />
          <input type="text" placeholder='Street' />
          <div className="multiFields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
          </div>
          <div className="multiFields">
            <input type="text" placeholder='Zip Code' />
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='Phone Number' />
        </div>
        <div className="placeOrderRight">
        <div className="cartTotal">
            <h2>Cart Total</h2>
            <div>
              <div className="cartTotalDeails">
                <p>Sub Total</p>
                <p>₦{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartTotalDeails">
                <p>Delivery Fee</p>
                <p>₦ {getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr />
              <div className="cartTotalDeails">
                <b>Total</b>
                <b>₦{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
            </div>
            <button>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder