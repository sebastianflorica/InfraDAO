import React from 'react'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import MetaMaskSDK, { ConnectionStatus } from '@metamask/sdk';

const Home = () => {
  return (
    <div>
        <nav>
        <h2 className='inh1'><span className='inspan'>Infra</span>Dao</h2>
            <Link to='/'  className="btn-primary">Home</Link>
            <a href="#sec1" className="btn-primary1">About</a>
            <Link to='/launch'  className="launch">Launch dApp</Link>
        </nav>

        <header className="App-header">
            
            <img className='homimg' src='https://oecd-development-matters.org/wp-content/uploads/2022/11/Quality-infrastructure-development.jpg' alt='' />
            <h1>Welcome to Infrastructure DAO</h1>
            <p>Decentralizing infrastructure for a better future.</p>
        </header>

        <br/>
        
        <section className='sec1' id='sec1'>
        <img className='homimg2' src='https://static.wixstatic.com/media/3fcfaf_8b8e4f645dbe4132954e363859a888a7~mv2.png/v1/fill/w_640,h_544,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3fcfaf_8b8e4f645dbe4132954e363859a888a7~mv2.png' alt='' />
        <h1 style={{"margin-top": "-46.8rem", "margin-right":"190"}}>About Us</h1>

        <div className='abt'>
        <p>
          Our Infrastructure DAO is committed to investing in sustainable
          infrastructure projects across the globe. With a focus on renewable
          energy, transportation, and water management, we aim to support
          projects that create long-lasting value for both local communities and
          the planet.
        </p>
        </div>
        <div className="statistics">
          <p>$7 trillion<br/> worth of infrastructure</p>
          <p>{'>'} 1000 DAO<br/> projects</p>
        </div>
      </section>
    </div>
  )
}

export default Home