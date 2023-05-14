import React, {useState} from 'react'
import './Join.css'
import { Link } from 'react-router-dom'

const Join = () => {
  const [amount, setAmount] = useState("");
  const [infraDao, setInfraDao] = useState("");

  const handleAmountChange = (event) => {
    const value = event.target.value;
    setAmount(value);
    setInfraDao(value / 16);
  };
  return (
    <div>
        <nav>
            <Link to='/'  className="btn-primary2" style={{ left: '81%'}}>Home</Link>
            <Link to='/launch' className="btn-primary3" style={{ left: '85.8%'}}>Projects</Link>
            {/* <Link to='/launch' className='launch1'>Vote</Link> */}
            <Link to='/join' className="btn-primary4"> Join Dao </Link>

        </nav>
        <br/><br/>

        <header class="page-header">
    <h1>Dao Token Exchange</h1>
  </header>
  
    <div class="cardi">
        <div className='span'>
        <img className='bnbimg' src='https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xB8c77482e45F1F44dE1745F52C74426C631bDD52/logo.png' alt=''/>
        <p className='bnbp'>BNB</p>
        </div>
    
        <input
          type="text"
          className="card-input"
          placeholder="Enter amount to exchange"
          value={amount}
          onChange={handleAmountChange}
        />
        <input
          type="text"
          className="card-input"
          placeholder="Enter infra Dao"
          id="infra"
          value={infraDao}
          disabled
        />
        <button class="card-button">Exchange</button>
    </div>
    </div>
  )
}

export default Join