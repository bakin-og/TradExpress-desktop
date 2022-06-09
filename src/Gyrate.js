import React from 'react'
import wiza from './Tradimages/Group 28.svg'
import wizb from './Tradimages/Group 52.svg'

const Gyrate = () => {
  return (
    <div className='container-fluid buynsell'>
        <h4>Buy and Sell your Cryptocurrency in 3 simple Steps</h4>
        <div className='container steps'>
        <div className='row'>
            <div className='col-8 gyrate1'>
            <div className='one'>1</div>
            <div className='create'>
                <h4>Create a free Account</h4>
                <p>Sign up for your free TradExpress wallet on web,IOS or Andriod devices <br /> and follow our easy process to set up your profile.</p>
                </div>
            </div>
            <div className='col-4'>
                <img src={wiza} alt="" className='gyrate1img' />
            </div>

            <div className='row mt-5'>
                <div className='col-4'>
                    <img src={wizb} alt="" />
                </div>
                <div className='col-8 depo'>
                <div className='two'>2</div>
                <div className='deposit'>
                    <h4>Deposit</h4>
                    <p>Choose your preferred deposit option like bank transfer, credit/debit card <br /> or send digital asset directly to your wallet for easing funding/withdrawal.</p>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-8'>
                    <div className='three'>3</div>
                    <div className='Buy'>
                        <h4>Buy/Sell Crypto</h4>
                        <p>Buy BTC, USDT, ETH,LTC,XRP,DOGE and securely secure store it <br /> in your wallet or send it easily to friends and family.</p>
                        </div>
                    </div>
                    <div className='col-4'>
                        <img src={wiza} alt="" className='buyimg' />
                    </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Gyrate