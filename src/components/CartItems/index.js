import React from 'react'
import './cart_items.css'

function index(id, title, price, rating, image) {
  return (
      <div className="cart__items">
          <div className="product__info">
              <p>{title}</p>
              <p className="product__price">
                  <small>Ksh</small>
                  <strong>{price}</strong>
              </p>
              <div className="product__rating">
                  {Array(rating)
                      .fill()
                      .map((_, i) => (
                          <p>⭐</p>
                      ))}
              </div>
          </div>
          <img src={image} alt="" className="product__image" />
          <button>Add to Cart</button>
      </div>
  )
}

export default index