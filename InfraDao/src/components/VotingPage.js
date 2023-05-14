import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './VotingPage.css'


const projects = [
    {
      id: 1,
      title: "Building a new bridge",
      description: "Constructing a new bridge to connect two cities",
      votes: 0,
    },
    {
      id: 2,
      title: "Renovating public schools",
      description: "Upgrading and renovating public schools in the area",
      votes: 0,
    },
    {
      id: 3,
      title: "Installing solar panels",
      description: "Equipping public buildings with solar panels for energy efficiency",
      votes: 0,
    },
  ];

const VotingPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleVote = (projectId) => {
    // TODO: handle voting for the selected project
  };

  return (
    <>
        <nav>
            <h2 className='inh11'><span className='inspan1'>Infra</span>Dao</h2>
            <Link to='/'  className="btn-primary2" style={{position: "absolute",
            top: "10px",
            left: "82.39%",}}>
            Home</Link>

            <Link to='/launch' className="btn-primary3" style={{position: "absolute",
            top: "10px",
            left: "86.39%",}}>
            Projects</Link>
            
            <Link to='/join' className="btn-primary4" > Join Dao </Link>

        </nav>
        <div className="voting-card">
        <h1>Vote for the project</h1>
        <div className="project-list">
            
            <div
                
                className={`project`}
                onClick={() => setSelectedProject()}
            >
                <h1>Yes</h1>
                <span className="project-name">{}</span>
                <button className="vote-button" onClick={() => handleVote(projects.id)}>Vote yes</button>
            </div>
            
            <div
                
                className={`project`}
                onClick={() => setSelectedProject()}
            >
                <h1>No</h1>
                <span className="project-name">{}</span>
                <button className="vote-button" onClick={() => handleVote(projects[0].id)}>Vote no</button>
            </div>

            <div
                
                className={`project`}
                onClick={() => setSelectedProject()}
            >
                <h1>Abstain</h1>
                <span className="project-name">{}</span>
                <button className="vote-button" onClick={() => handleVote(projects.id)}>Vote abstain</button>
            </div>

        </div>
        </div>
    </>
  );
};

export default VotingPage;
