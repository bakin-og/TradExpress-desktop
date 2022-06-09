import React from 'react'
import grp1 from './Tradimages/Group 28.svg'
import grp2 from './Tradimages/Group 28.svg'
import grp3 from './Tradimages/Group 28.svg'

const Ojuelegba = () => {
  return (
    <div className='container ojus'>
        <h4 className='h4a'>Why do people get involved with Cryptocurrencies?</h4>
        <div className='container'> 
        <div className='row conts container'>          
                <div className='col-4 ease'>
                <img src={grp1} alt="" />
                <h5>Ease Mode of Payment</h5>
                <p>People can now easily send and receive money from anywhere in the world to purchase goods and pay for services. </p>
            </div>
            <div className='col-4 financial'>
                <img src={grp2} alt="" />
                <h4>Financial Freedom</h4>
                <p>Just like the internet, no single entity controls the Crpto network which provides user transparency and privacy, which puts you in absolute control of your money.</p>
            </div>
            <div className='col-4  investment'>
                <img src={grp3} alt="" />
                <h4>Investment</h4>
                <p>The constant demand has made Cryptocurrencies a Digital Gold used for alternative store of wealth on long term investments</p>
            </div>
            <div>
              <button className='learn'>Learn More</button>
            </div>
          
            </div>
        </div>
    </div>
  )
}

export default Ojuelegba