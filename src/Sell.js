import React from 'react'
import { Link } from 'react-router-dom'

const Sell = () => {
  return (
    <div>
      <div className='container'>
        <div className='sell mt-5'>
        <h4 className='m-4 sellh4'>Buy/Sell Instantly</h4>
       <div className='sellbtn m-4'>
         <button className='sell1 m-2'>
           <Link to='/Buy'>Buy</Link>
         </button>
         <button className='sell2'>
           <Link to='/Sell'>Sell</Link>
         </button>
       </div>
         <div className='coin'>
          <h5>Coin to sell</h5>
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
          <h5>Quantity</h5>
          <form action="#">
            <input type="text" placeholder='USD | 10,000.00' className='form3' />
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

export default Sell