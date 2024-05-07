import React from 'react'
import './cart.css'
import Camera from '../../images/p3.png'
import CartItems from '../CartItems'
import CartTotal from '../CartTotal'

function index() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={Camera} alt="" className='checkout__ad' />
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