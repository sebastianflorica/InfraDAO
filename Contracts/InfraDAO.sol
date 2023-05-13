// SPDX-License-Identifier: MIT 

pragma solidity ^0.8.0;
contract DAO {

    // Events
    event NewMember(address indexed member); 
    event ProjectSubmitted( address indexed projectOwner, string projectName, uint projectGoal, uint projectDeadline ); 
    event ProjectApproved( address indexed projectOwner, string projectName, uint projectGoal, uint projectDeadline ); 
    event ProjectFunded( address indexed projectOwner, string projectName, uint projectGoal, uint projectDeadline ); 
    event RevenueDistributed( address indexed projectOwner, string projectName, uint revenue, uint numTokensBurned );

    // Project Structure
    struct Project { address owner; string name; uint goal; uint deadline; }

    // Variables
    address public owner; 
    mapping(address => bool) public members; 
    mapping(string => Project) public projects; 
    mapping(string => uint) public projectGoals; 
    mapping(string => uint) public projectDeadlines; 
    mapping(string => uint) public projectFunds; 
    mapping(string => uint) public projectTokens;

    // Constructor
    constructor() { owner = msg.sender; }
    
    // Methods
    function join() public {
        members[msg.sender] = true; 
        emit NewMember(msg.sender); 
    }

    function submitProject( string memory projectName, uint projectGoal, uint projectDeadline ) public { 
        require(members[msg.sender]); 
        projects[projectName] = Project(msg.sender, projectName, projectGoal, projectDeadline); 
        emit ProjectSubmitted(msg.sender, projectName, projectGoal, projectDeadline); 
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

