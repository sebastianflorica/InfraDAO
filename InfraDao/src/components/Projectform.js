import React, { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";

import './project.css';

const InfrastructureDAOForm = () => {
  const [projectOwner, setProjectOwner] = useState("");
  const [projectShortDescription, setProjectShortDescription] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [projectCategory, setProjectCategory] = useState("");
  const [projectStatus, setProjectStatus] = useState("");
  const [fundingRaiseRequired, setFundingRaiseRequired] = useState(0);
  const [totalTokenToBeCreated, setTotalTokenToBeCreated] = useState(0);
  const [pricePerToken, setPricePerToken] = useState(0);
  const [projectDocumentation, setProjectDocumentation] = useState([]);
  const [fileList, setFileList] = useState(null);
  const data = new FormData()

  const handleProjectOwnerChange = (event) => {
    setProjectOwner(event.target.value);
  };

  const handleProjectShortDescriptionChange = (event) => {
    setProjectShortDescription(event.target.value);
  };

  const handleProjectDetailsChange = (event) => {
    setProjectDetails(event.target.value);
  };

  const handleProjectCategoryChange = (event) => {
    setProjectCategory(event.target.value);
  };

  const handleProjectStatusChange = (event) => {
    setProjectStatus(event.target.value);
  };

  const handleFundingRaiseRequiredChange = (event) => {
    setFundingRaiseRequired(Number(event.target.value));
    setPricePerToken(fundingRaiseRequired / totalTokenToBeCreated);
  };

  const handleTotalTokenToBeCreatedChange = (event) => {
    setTotalTokenToBeCreated(Number(event.target.value));
    setPricePerToken(fundingRaiseRequired / totalTokenToBeCreated);
  };

  const handleProjectDocumentationChange = (event) => {
    setProjectDocumentation(event.target.files);
  };

  const handleSubmit = (event) => {
    // TODO: Submit the form data to the server
    event.preventDefault();
  };

  const [totalTokensToBeCreated, setTotalTokensToBeCreated] = useState(0);

  const handleTotalTokensToBeCreatedChange = (event) => {
    setTotalTokensToBeCreated(parseInt(event.target.value));
    setPricePerToken(fundingRaiseRequired / totalTokensToBeCreated);
  };

  

  const handleFileChange = e => {
    setFileList(e.target.files)
  }

  const handleUploadClick = () => {
    if (!fileList) {
      return
    }

    // 👇 Create new FormData object and append files
    const data = new FormData()
    files.forEach((file, i) => {
      data.append(`file-${i}`, file, file.name)
    })

    // 👇 Uploading the files using the fetch API to the server
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: data
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))
  }

  // 👇 files is not an array, but it's iterable, spread to get an array of files
  const files = fileList ? [...fileList] : []


  const submitForm = () => {
    console.log("Submitting form...");
    console.log(
      {
        projectOwner,
        projectShortDescription,
        projectDetails,
        projectCategory,
        projectStatus,
        fundingRaiseRequired,
        totalTokensToBeCreated,
        pricePerToken,
        projectDocumentation,
      }
    );
  };

  return (
    <div className="Subdiv">
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
      <span><br/><br/><br/><br/><br/></span>
      
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='projectOwner' className='form-label'>
            Project Owner/Lead Developer
          </label>
          <br className="brr"/>
          <input
            type='text'
            id='projectOwner'
            className='form-input'
            value={projectOwner}
           
            onChange={handleProjectOwnerChange}
          />
          
        </div>
        <div>
        <br className="brr"/>
          <label htmlFor="projectShortDescription">Project Short Description</label>
          <input
            type="text"
            id="projectShortDescription"
            value={projectShortDescription}
            onChange={handleProjectShortDescriptionChange}
          />
          
        </div>
        <div>
        <br className="brr"/>
          <label htmlFor="projectDetails">Project Details</label>
          <textarea
            id="projectDetails"
            rows="10"
            cols="50"
            value={projectDetails}
            onChange={handleProjectDetailsChange}
          />
        </div>
        <div>
        <br className="brr"/>
          <label htmlFor="projectCategory">Project Category</label>
          <select
            id="projectCategory"
            value={projectCategory}
            onChange={handleProjectCategoryChange}
          >
            <option value="Housing">Housing</option>
            <option value="Commercial">Commercial</option>
            <option value="Transportation">Transportation</option>
            <option value="Network">Network</option>
            <option value="Water & sanitation">Water & sanitation</option>
            <option value="Telecommunications">Telecommunications</option>
            <option value="Education">Education</option>
            <option value="Public goods">Public goods</option>
          </select>
        </div>
        
        <div>
        <br className="brr"/>
          <label htmlFor="projectStatus">Project Status</label>
          <select
            id="projectStatus"
            value={projectStatus}
            onChange={handleProjectStatusChange}
          >
            <option value="Planning">Planning</option>
            <option value="Started <20%">Started {'<'}20%</option>
            <option value="In Progress <50">In progress {'<'}50%</option>
            <option value="Advanced <70">Advanced {'<'}70%</option>
            </select>
            </div>
      <div>
      <br className="brr"/>
        <label>Funding Raise Required ($)</label>
        <input
          type="number"
          value={fundingRaiseRequired}
          onChange={handleFundingRaiseRequiredChange}
        />
      </div>
      <div>
      <br className="brr"/>
        <label>Total Tokens To Be Created</label>
        <input
          type="number"
          value={totalTokensToBeCreated}
          onChange={handleTotalTokensToBeCreatedChange}
        />
      </div>
      <div>
      <br className="brr"/>
        <label>Price Per Token</label>
        <input
          type="number"
          value={pricePerToken}
          readOnly
        />
        
      </div>
      <br className="brr"/>
      <div className="project-documentation">
      <br className="brr"/>
        <label>Project Documentation</label>
       
        <input type="file"
          className="file-input"
          multiple
          onChange={handleFileChange} />

        <ul>
        {files.map((file, i) => (
            <li key={i}>
            {file.name} - {file.type}
            </li>
        ))}
        </ul>

        {/* <button onClick={handleUploadClick}>Upload</button> */}
      </div>
      <div>
        <button onClick={submitForm} className="subm">Submit</button>
      </div>
      </form>
    </div>
  );
};

export default InfrastructureDAOForm;