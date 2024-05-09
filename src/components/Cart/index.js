import React from 'react'
import './cart.css'
import CartItems from '../CartItems'
import CartTotal from '../CartTotal'

function index() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
        <dir>
          <h2 className="checkout__title">
            Your shopping Basket
          </h2>
          <CartItems />
        </dir>
      </div>
      <div className="checkout__right">
        <CartTotal />
      </div>
    </div>
  )
}

export default index