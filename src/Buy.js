import React from 'react'
import { Link } from 'react-router-dom'

const Buy = () => {
  return (
    <div>
      <div className='container'>
        <div className='buyandsell mt-5'>
          <h4 className='m-4 buyh4'>Buy/Sell Instantly</h4>
          <div className='buybtn m-4'>
          <button className='m-2 buy1'>
            <Link to='/Buy'>Buy</Link>
             </button>
             <button className='buy2'>
             <Link to='/Sell'>Sell</Link>
             </button>
        </div>
        <div className='coin'>
          <h5>Coin to buy</h5>
          <form action="#">
            <input type="text" placeholder='Bitcoin Btc' className='form1' />
          </form>
        </div>
        <div className='coin'>
          <h5>Currency</h5>
          <form action="#">
            <input type="text" placeholder='Naira (NGN)' className='form2' />
          </form>
        </div>
        <div className='coin'>
          <h5>Amount</h5>
          <form action="#">
            <input type="text" placeholder='NGN | 3,000,000.00' className='form3' />
          </form>
        </div>
        <button className='continue'>
          continue
        </button>
        </div>
      </div>
    </div>
    
  )
}

export default Buy