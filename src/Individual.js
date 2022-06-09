import React from 'react'
import { Link } from 'react-router-dom'
const Individual = () => {
  return (
    <div>
        <div className='container'>
         <div className='individual mt-5'>
         <h4 className='indih4 m-4'>Welcome</h4>
         <div className='indibtn m-4'>
             <button className='indi1 m-2'>
                 <Link to='/Individual'>Individual</Link>
             </button>
             <button className='indi2'>
                 <Link to='/Business'> Business</Link>
             </button>
         </div>
         <div className='coin'>
          
          <form action="#">
              <label htmlFor="username"></label>
            <input type="text" placeholder='username' className='form1' />
          </form>
        </div>
        <div className='coin'>
          <form action="#">
              <label htmlFor="FullName"></label>
            <input type="text" placeholder='Full Name' className='form2' />
          </form>
        </div>
        <div className='coin'>
          <form action="#">
              <label htmlFor="Email"></label>
            <input type="email" placeholder='Email' className='form3' />
          </form>
        </div>
        <div className='coin'>
          <form action="#">
              <label htmlFor="Phone Number"></label>
            <input type="email" placeholder='Phone Number' className='form3' />
          </form>
        </div>
        <div className='coin'>
          <form action="#">
              <label htmlFor="Referral code"></label>
            <input type="text" placeholder='Referral code' className='form3' />
          </form>
        </div>
        <p className='indip m-5 text-center'>By clicking the sign up button below, you agree to TradExpress <a href="#">terms and services</a></p>
        <button className='signup m-4'>
          Sign up
        </button> 
        <p className='text-center'>Already have an account? <a href="#">Click here</a></p>   
        </div>   
        </div>
    </div>
  )
}

export default Individual