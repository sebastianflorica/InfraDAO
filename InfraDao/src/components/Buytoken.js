import React from 'react';
import './BuyToken.css';

import { Link } from 'react-router-dom';

export function BuyToken() {
  return (
    <>
      <nav>
        <Link to='/'  className="btn-primary2" style={{ left: '80%'}}>Home</Link>
        <Link to='/launch' className="btn-primary3" style={{ left: '85.8%'}}>Projects</Link>
        {/* <Link to='/launch' className='launch1'>Vote</Link> */}
        <Link to='/join' className="btn-primary4"> Join Dao </Link>

      </nav>
      <h1>----------</h1>
    <div className="card1">

      <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xJ1oIvaIpdps5-TpjySY6IaZRgt_Ou4_DQ&usqp=CAU'} alt={''} />
      <h2>Buy Tokens</h2>
      <p>Enter the amount of tokens you want to purchase:</p>
      <input type="text" placeholder="Token Amount" />
      <button className='button'>Buy Tokens</button>
    </div>
    </>
  );
};

export function BuyToken1() {
  return (
    <>
      <nav>
        <Link to='/'  className="btn-primary2" style={{ left: '83%'}}>Home</Link>
        <Link to='/launch' className="btn-primary3" style={{ left: '86.8%'}}>Projects</Link>
        {/* <Link to='/launch' className='launch1'>Vote</Link> */}
        <Link to='/join' className="btn-primary4"> Join Dao </Link>

      </nav>
      <h1>----------</h1>
    <div className="card1">

      <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5MbTybREIh8LSgjeCUVRnwBjz0ufCt8ja7Q&usqp=CAU'} alt={''} />
      <h2>Dam project</h2>
      <p>Enter the amount of tokens you want to purchase:</p>
      <input type="text" placeholder="Token Amount" />
      <button className='button'>Buy Tokens</button>
    </div>
    </>
  );
};

export function BuyToken2() {
  return (
    <>
      <nav>
        <Link to='/'  className="btn-primary2" style={{ left: '83%'}}>Home</Link>
        <Link to='/launch' className="btn-primary3" style={{ left: '86.8%'}}>Projects</Link>
        {/* <Link to='/launch' className='launch1'>Vote</Link> */}
        <Link to='/join' className="btn-primary4"> Join Dao </Link>

      </nav>
      <h1>----------</h1>
    <div className="card1">

      <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5MbTybREIh8LSgjeCUVRnwBjz0ufCt8ja7Q&usqp=CAU'} alt={''} />
      <h2>Dam project</h2>
      <p>Enter the amount of tokens you want to purchase:</p>
      <input type="text" placeholder="Token Amount" />
      <button className='button'>Buy Tokens</button>
    </div>
    </>
  );
};
