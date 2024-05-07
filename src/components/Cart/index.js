import React from 'react'
import 'cart.css'
import { Camera } from '../../images/p3.png'
import CartItems from '../CartItems'

function index() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={Camera} alt="" />
        <dir>
          <h2 className="checkout__title">
            Your shopping Basket
          </h2>
          <CartItems />
        </dir>
      </div>
    </div>
  )
}

export default index