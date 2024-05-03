import React from 'react'
import './Product.css'
import Watch from '../../images/p1.png'

function Product() {
  return (
      <div className='product'>
          <div className="product__info">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error impedit odio quisquam iste voluptates eum quas rerum quo ipsa veritatis.</p>
              <p className="product__price">
                  <small>Ksh</small>
                  <strong>300.1</strong>
              </p>
                <div className="product__rating">
                    <p>⭐</p>
                    <p>⭐</p>
                  <p>⭐</p>
                </div>
          </div>
          <img src={Watch} alt="" className='product__image' />
            <button>Add to Cart</button>
    </div>
  )
}

export default Product