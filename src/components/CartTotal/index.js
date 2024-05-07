import React from 'react'
import './cart_total.css'
import CurrencyFormat from 'react-currency-format'

function index() {
  return (
      <div className="subtotal">
          <CurrencyFormat
              renderText={(value) => (
                  <>
                      <p>
                          Subtotal (0 items): <strong>0</strong>
                      </p>
                      <small className="subtotal__gift">
                          <input type="checkbox" /> This order contains a gift
                      </small>
                  </>
              )}
              decimalScale={2}
              value={0}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"Ksh"}
          />
          <button>Proceed to Checkout</button>
    </div>
  )
}

export default index