import React from 'react'
import imga from './Tradimages/Group 68 (1).svg'
import imgb from './Tradimages/Group 69 (1).svg'
import First from './First';
import Ojuelegba from './Ojuelegba';
import Gyrate from './Gyrate';
import Ready from './Ready';
import Customer from './Customer';
import Footer from './Footer';



const Home = () => {
  return (
       <div className='div1'>
        <div className='container'>
        <div className='circle1'></div>
        <div className='circle2'></div>

        <h1>Buy, sell and manage your <br />Crypto on TradExpress.</h1>
        <p className='p1'>Easily Trade Cryptocurrencies like BTC, USDT,ETH,LTC & XRP <br />with NGN</p>
        
        <div>
            <button className='btn1'>Get Started</button>
        </div>
        <div className='imgs'>
            <img src={imga} alt="" /> <span className='mg'> <img src= {imgb} alt="" /></span>
        </div>
        </div>
        <div>
        </div>


        <First/> 
        <Ojuelegba/>
        <Gyrate/>
        <Ready/>
        <Customer/>
        <Footer/>
        


    </div>
  )
}

export default Home