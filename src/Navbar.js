import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Trad from './Tradimages/TradExpress.svg'

const Navbar = () => {
  return (
    <div className='nav1'>
        <nav class="navbar navbar-expand-lg">
  <div class="container-lg">
    <Link to='/' class="navbar-brand" href="#" > <img src= {Trad} alt="" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse justify-content-end navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to='/Instant' class="nav-link p-3 text-light">Instant Buy/Sell</Link>
        </li>
        <li class="nav-item">
          <Link to='/Learn' class="nav-link p-3 text-light">Learn</Link>
        </li>
        <li class="nav-item">
          <Link to='/Login' class="nav-link p-3 navlogin">Login</Link>
        </li>
        <li class="nav-item">
          <Link to='/Getstarted' class="nav-link p-3 navstarted">Get Started</Link>
        </li>
          </ul>
    </div>
  </div>
</nav>
<Outlet/>
    </div>
  )
}  

export default Navbar