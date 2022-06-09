import React from 'react';
import mail from './Tradimages/mailing.svg'

const Learn = () => {
  return (
    <div className='m-5'>
      <div className='container text-center m-4 ysf'>
        <h2 className='m-4'> You're almost in!</h2>
        <div className='m-4'>
        <h2>Welcome Iretiayo.</h2>
        </div>
        <div className='m-4'>
          <img src={mail} alt="" />
        </div>
        <p>An email has been sent to <a href="#">ireti4tech@gmail.com</a> <br />Pls click on the link to verify your email and <br />activate your TradExpress account.</p>
        <div>
          <button className='m-4 learnbtn'>Continue</button>
        </div>
        <p>Didn't get an email? kindly click <a href="#">resend email </a> <br />Wrong email Supplied? kindly click on <a href="">Edit email address</a></p>
      </div>
    </div>
  )
}

export default Learn