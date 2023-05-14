import React, { useState } from "react";
import './VotingPage.css'
import './Modal.css'
import PropTypes from 'prop-types';


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


function Modali({ setOpenModal9 } , {project}) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleVote = (projectId) => {
    // TODO: handle voting for the selected project
  }
    return (
      <div className="modalBackground">
        <div className="modalContainer1">
          <div className="modalHeader">
          <div className="voting-card1">
          <button className="closeBtn" onClick={() => setOpenModal9(false)}>
              X
            </button>
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
          </div>
        </div>
      </div>
    );
  }

Modali.propTypes = {
  project: PropTypes.string.isRequired,
  
};

export default Modali;
