// SPDX-License-Identifier: MIT 

import './ProjectSubmission.sol';

pragma solidity ^0.8.0;
contract DAO is ProjectSubmission {

    event NewMember(address indexed member); 
    event ProjectApproved( address indexed projectOwner, string projectName, uint projectGoal, uint projectDeadline ); 
    event ProjectFunded( address indexed projectOwner, string projectName, uint projectGoal, uint projectDeadline ); 
    event RevenueDistributed( address indexed projectOwner, string projectName, uint revenue, uint numTokensBurned );

    mapping(address => bool) public members; 
    mapping(string => uint) public projectFunds; 
    mapping(string => uint) public projectTokens;

    constructor() { 
        owner = msg.sender; 
    }
    
    function join() public {
        members[msg.sender] = true; 
        emit NewMember(msg.sender); 
    }

    function approveProject(string memory projectName) public { 
        require(members[msg.sender]); 
        require(block.timestamp <= projects[projectName].deadline); 
        projectGoals[projectName] = projects[projectName].goal; 
        projectDeadlines[projectName] = projects[projectName].deadline; 
        emit ProjectApproved(projects[projectName].owner, projectName, projectGoals[projectName], projectDeadlines[projectName]); 
    }

    function fundProject(string memory projectName, uint amount) public { 
        require(members[msg.sender]); 
        require(block.timestamp <= projects[projectName].deadline); 
        projectFunds[projectName] += amount; 
        emit ProjectFunded(projects[projectName].owner, projectName, projectGoals[projectName], projectDeadlines[projectName]); 
    }

    function distributeRevenue(string memory projectName, uint revenue) public { 
        require(members[msg.sender]); 
        require(block.timestamp >= projects[projectName].deadline); 
        uint numTokensBurned = revenue / projects[projectName].goal; 
        projectTokens[projectName] -= numTokensBurned; 
        emit RevenueDistributed(projects[projectName].owner, projectName, revenue, numTokensBurned); 
    }
}

