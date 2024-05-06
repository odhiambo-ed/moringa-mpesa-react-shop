import React from 'react'
import './Home.css'
import Hero from '../../images/hero-ecom-2.jpg'
import Product from '../Product/Product'
import Watch from '../../images/p1.png'

function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img src={Hero} alt="" className='home__image' />
        <div className="home__row">
          <Product
            id='123'
            title='The Lean Startup'
            price={29.99}
            rating={5}
            image={Watch}
          />
          <Product
            id='123'
            title='The Lean Startup'
            price={29.99}
            rating={5}
            image={Watch}
          />
        </div>
        <div className="home__row">
          <Product
            id='123'
            title='The Lean Startup'
            price={29.99}
            rating={5}
            image={Watch}
          />
          <Product
            id='123'
            title='The Lean Startup'
            price={29.99}
            rating={5}
            image={Watch}
          />
          <Product
            id='123'
            title='The Lean Startup'
            price={29.99}
            rating={5}
            image={Watch}
          />
        </div>
        <div className="home__row">
          <Product
            id='123'
            title='The Lean Startup'
            price={29.99}
            rating={5}
            image={Watch}
          />
        </div>
      </div>
    </div>
  )
}

export default Home