import React from 'react'
import './Home.css'
import Hero from '../../images/hero-ecom.jpg'
import Product from '../Product/Product'

function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img src={Hero} alt="" className='home__image' />
      </div>
      <div className="home__row">
        <Product />
        <Product />
      </div>
      <div className="home__row">
        <Product />
        <Product />
        <Product />
      </div>
      <div className="home__row">
        <Product />
      </div>
    </div>
  )
}

export default Home