import React from 'react'
import check from './Tradimages/Icon awesome-check-circle (2).svg'

const Login = () => {
  return (
    <div>
      <div className='container m-5'>
        <div className='login'>
          <h4 className='m-5 text-center'>Welcome Back</h4>
          <div className='container m-4'>
          <form action="#">
            <label htmlFor="Username">
              <input type="text" placeholder='Username' className='user'/>
            </label>
          </form>
          </div>
          <div className='container m-4'>
          <form action="#">
            <label htmlFor="Password">
              <input type="text" placeholder='Password' className='pass' />
            </label>
          </form>
          </div>
          <div>
            <img src={check} alt="" className='check' /> 
            <p> <small className='remember'>Remember password</small></p>
            <span>
              <a href="#"> <small className='forgot'>forgot password?</small></a>
            </span>
          </div>
          <div className='text-center m-3'>
            <button className='logbtn m-2'>Log in</button>
            <p>New user? <a href="#">click here</a></p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login