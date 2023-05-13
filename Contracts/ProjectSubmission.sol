// SPDX-License-Identifier: MIT 

pragma solidity ^0.8.0;
contract ProjectSubmission {

    // Events
    event ProjectSubmitted( 
        address indexed projectOwner, 
        string projectName, 
        uint projectGoal, 
        uint projectDeadline 
        );

    // Project Structure
    struct Project { 
        address owner; 
        string name; 
        uint goal; 
        uint deadline; }

    // Variables
    address public owner; 
    mapping(string => Project) public projects; 
    mapping(string => uint) public projectGoals; 
    mapping(string => uint) public projectDeadlines;

    // Constructor
    constructor() { owner = msg.sender; }

    // Methods
    function submitProject( string memory projectName, 
        uint projectGoal, 
        uint projectDeadline ) public { 
        require(msg.sender == owner); 
        projects[projectName] = Project(msg.sender, projectName, projectGoal, projectDeadline); 
        emit ProjectSubmitted(msg.sender, projectName, projectGoal, projectDeadline); 
    }

    function getProject(string memory projectName) 
        public 
        view returns( address _owner, string memory name, uint goal, uint deadline ) { 
        return (projects[projectName].owner, 
                projects[projectName].name, 
                projects[projectName].goal, 
                projects[projectName].deadline
                ); 
    }
}

