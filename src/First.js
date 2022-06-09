import React, {useState, useEffect} from 'react';

const First = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.coinlore.net/api/tickers/?start=100&limit=5')

  .then((response) => response.json())
  .then((json) => setData(json.data))
    })
  return (
    
    <div className='allinfo container-fluid'>
        {data.map((d)=>{
            const {symbol, id, percent_change_24h, market_cap_usd}= d 
            return(
                <div key={id} className = 'coins'>
                  <ul className='men'>
                    <li>
                <h6 className='map1'>{symbol}/NGN</h6>
                {market_cap_usd}NGN
                </li>
                <li>
                <h6 className='map2'>{percent_change_24h}</h6>
                </li>
                </ul>
                </div>
            )
        })}
    </div>
  )
}

export default First