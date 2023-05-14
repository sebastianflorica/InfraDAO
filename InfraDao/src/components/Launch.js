import React, { useState, useEffect } from 'react';
import MetaMaskSDK from '@metamask/sdk';
import './Launch.css'
import { useNavigate } from 'react-router-dom';
import VotingPage from './VotingPage';

import { Link } from 'react-router-dom'
// import logo from './logo192.png'
// import Modal from './Modal'
import './Modal.css'
import Modali from './Modal';

const showData = () =>{
  ""
}

let wallet = "Connect Wallet"

function ConnectButton() {
  
  const MMSDK = new MetaMaskSDK()

  const ethereum = MMSDK.getProvider() // You can also access via window.ethereum
  try{
    ethereum.request({ method: "eth_requestAccounts", params: [] }).then((accounts)=>{
      wallet = accounts[0]
      console.log(wallet);
    })
    
  }
  catch{
    console.log("twice")
  }
 
  
}



function Modal({ setOpenModal }) {
  const [modalOpen9, setModalOpen9] = useState(false);
  const navigate = useNavigate();
    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="modalHeader">
            <h2>Project Details</h2>
            <button className="closeBtn" onClick={() => setOpenModal(false)}>
              X
            </button>
          </div>
          <div className="modalBody">
            <div className="card2">
              <div className="cardImage">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5KhG2b3S09iLU5bXr6t9t-4oBWk5e8k7L4LNzrZzT&s"
                  alt=""
                />
              </div>
              <div className='detail'>
              <h4>The school building project is a vital undertaking aimed at providing a safe and stimulating learning environment for students. </h4>
              
              </div>
              <div className="cardText">
                <p>Receipt token Hash: -0x304d98c163a55d4d6RPYwFcf</p>
                <p>Project: School building project</p>
                <p>Community votes: 5 Votes</p>
                <p>Date started: 2023/05/09</p>
              </div>
            </div>

            <div className="modalButtons">
            <button className="buyBtn" onClick={() => {navigate('/buytoken')}}>Buy Token</button>
            <button className="voteBtn" onClick={() => setModalOpen9(true)}>Vote</button>
            </div>
          </div>
          <div className="modalFooter">
            <button className="closeBtn" onClick={() => setOpenModal(false)}>
              Close
            </button>
          </div>
        </div>
        {modalOpen9 && <Modali setOpenModal9={setModalOpen9} project={"dam bulding project"}/>}
      </div>
    );
  }

  function Modal1({ setOpenModal1 }) {
    const [modalOpen9, setModalOpen9] = useState(false);
    const navigate = useNavigate();
    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="modalHeader">
            <h2>Project Details</h2>
            <button className="closeBtn" onClick={() => setOpenModal1(false)}>
              X
            </button>
          </div>
          <div className="modalBody">
            <div className="card2">
              <div className="cardImage">
                <img
                  src="https://media.licdn.com/dms/image/C5612AQE-Cr8dq8ljRA/article-cover_image-shrink_720_1280/0/1610946517389?e=2147483647&v=beta&t=vUBXCqrJKzmRuV-REegASPHouRRUo0oHQUH5SEAD-dQ"
                  alt=""
                />
              </div>
              <div className='detail'>
              <h4>The hospital building project is a vital initiative aimed at providing state-of-the-art healthcare facilities for the community. </h4>
              
              </div>
              <div className="cardText">
                <p>Receipt token Hash: -0x304d98c163a55d4d6RPYwFcf</p>
                <p>Project: School building project</p>
                <p>Community votes: 5 Votes</p>
                <p>Date started: 2023/05/09</p>
              </div>
            </div>
            <div className="modalButtons">
            <button className="buyBtn" onClick={() => {navigate('/buytoken')}}>Buy Token</button>
            <button className="voteBtn" onClick={() => setModalOpen9(true)}>Vote</button>
            </div>
          </div>
          <div className="modalFooter">
            <button className="closeBtn" onClick={() => setOpenModal1(false)}>
              Close
            </button>
          </div>
        </div>
        {modalOpen9 && <Modali setOpenModal9={setModalOpen9} project="dam bulding project"/>}
      </div>
    );
  }

  function Modal2({ setOpenModal2 }) {
    const navigate = useNavigate();
    const [show, setshow] = useState(false);
    const [modalOpen9, setModalOpen9] = useState(false);
    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="modalHeader">
            <h2>Project Details</h2>
            <button className="closeBtn" onClick={() => setOpenModal2(false)}>
              X
            </button>
          </div>
          <div className="modalBody">
            <div className="card2">
              <div className="cardImage">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5MbTybREIh8LSgjeCUVRnwBjz0ufCt8ja7Q&usqp=CAU"
                  alt=""
                />
              </div>
              <div className='detail'>
              <h4>The dam building project is an ambitious undertaking aimed at providing a reliable source of clean energy and water for a region. </h4>
              
              </div>
              <div className="cardText">
                <h5>Receipt token Hash :-0x304d98c163a55d4d6RPYwFcf</h5>
                <h5>Project :School building project</h5>
                <h5>Community votes : 5 Votes</h5>
                <h5>Date started : 2023/05/09</h5>
              </div>
            </div>
            <br/>
            <div className="modalButtons">
              <button className="buyBtn" onClick={() => {navigate('/buytoken')}}>Buy Token</button>
              <button className="voteBtn" onClick={() => setModalOpen9(true)}>Vote</button>
            </div>
          </div>
          <div className="modalFooter">
            <button className="closeBtn" onClick={() => setOpenModal2(false)}>
              Close
            </button>

          </div>
        </div>
        {modalOpen9 && <Modali setOpenModal9={setModalOpen9} project="dam bulding project"/>}
      </div>
    );
  }

const Launch = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen1, setModalOpen1] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    
    
  return (
    <div>
        <nav>
            <h2 className='inh11'><span className='inspan1'>Infra</span>Dao</h2>

            <button onClick={ConnectButton} className='connectbtn'>{wallet}</button>
            <Link to='/'  className="btn-primary2">Home</Link>
            <a href="#main" className="btn-primary3">Projects</a>
            <Link to='/submit'  className="btn-primary5">Submit</Link> 
            <Link to='/join' className="btn-primary4"> Join Dao </Link>
        </nav>
        
        
        <section id='main'>
            <div className="card" style={{position:"relative", left:"-4%"}}>
                <div className="card-content">
                
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5KhG2b3S09iLU5bXr6t9t-4oBWk5e8k7L4LNzrZzT&s'} alt=''/>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet commodo ipsum a cursus. Suspendisse euismod ullamcorper odio, id bibendum dolor aliquet vitae.</p>
                <h3>School building project</h3>
                </div>
                <div className="card-buttons">
                <button className="token-button">Get Tokens</button>
                <button className="project-details-button" onClick={
                    () => {setModalOpen(true);}
                }>Project Details</button>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                
                <img src={'https://media.licdn.com/dms/image/C5612AQE-Cr8dq8ljRA/article-cover_image-shrink_720_1280/0/1610946517389?e=2147483647&v=beta&t=vUBXCqrJKzmRuV-REegASPHouRRUo0oHQUH5SEAD-dQ'} alt='' />

                <p>Ut ac nibh et leo luctus varius. Mauris congue eleifend sem, a aliquet enim. Morbi accumsan augue vel nisl malesuada vestibulum.</p>
                <h3>Hospital building project</h3>
                </div>
                <div className="card-buttons">
                <button className="token-button">Get Tokens</button>
                <button className="project-details-button" onClick={
                    () => {setModalOpen1(1)}
                }>Project Details</button>
                </div>
            </div>
            
            <div className="card" style={{position:"relative", left:"3%"}}>
                <div className="card-content">
                
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5MbTybREIh8LSgjeCUVRnwBjz0ufCt8ja7Q&usqp=CAU' alt='' />                
                <p>Phasellus varius lorem vel sapien interdum, at molestie risus pretium. Sed iaculis mauris augue, ut tempor metus ullamcorper at.</p>
                <h3>Dam building project</h3>
                </div>
                <div className="card-buttons">
                <button className="token-button">Get Tokens</button>
                <button className="project-details-button" onClick={
                    () => {setModalOpen2(true);}
                }>Project Details</button>
                </div>
            </div>

        </section>

        {modalOpen && <Modal setOpenModal={setModalOpen}/>}
        {modalOpen1 && <Modal1 setOpenModal1={setModalOpen1}/>}
        {modalOpen2 && <Modal2 setOpenModal2={setModalOpen2}/>}
    </div>
  )
}



export default Launch