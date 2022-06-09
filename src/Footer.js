import React from 'react'
import anoti from './Tradimages/Group 79.svg'
import c from './Tradimages/Group 78.svg'
const Footer = () => {
  return (
    <div>
        <div className='container-fluid foot'>
            <div className='row'>
                <div className='col-2'>
                    <h5>Products</h5>
                    <p>Bitcoin <br />Alt <br />Fiat <br />Refill <br /> P2P</p>
                </div>

                <div className='col-2'>
                    <h5>Learn</h5>
                    <p>Blog <br />Help center</p>
                </div>

                <div className='col-2'>
                    <h5>Contact</h5>
                    <p>hello@tradeexpress.com <br />support@tradeexpress.com <br /><img src={anoti} alt="" /></p>
                </div>

                <div className='col-2 company'>
                <h5>Company</h5>
                <p>About us <br />Careers <br />Rates <br />Mobile</p>
                </div>

                <div className='col-2 legal'>
                    <h5>Legal</h5>
                    <p>Privacy policy <br />Anti-money Laundering <br />Terms and Conditions</p>
                </div>
                <div className='col-2'>
                    
                </div>
                <p className='c container'><img src={c} alt=""  /></p>
            </div>
        </div>
    </div>
  )
}

export default Footer