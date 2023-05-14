// SPDX-License-Identifier: MIT 

pragma solidity ^0.8.0;

contract Tokenization {

    event TokenCreated(
        address indexed projectOwner,
        string projectName,
        uint amount,
        uint price
    );

    struct Project {
    address owner;
    string name;
    uint goal;
    uint deadline;
    uint tokens;
    uint price;
    }

    address public owner;
    mapping(string => Project) public projects;
    mapping(string => uint) public projectGoals;
    mapping(string => uint) public projectDeadlines;
    mapping(string => uint) public projectTokens;
    mapping(string => uint) public projectPrice;

    constructor() {
        owner = msg.sender;
    }

    function createTokens(
        string memory projectName,
        uint amount,
        uint price,
        uint _goal,
        uint _deadline
    ) public {
        require(msg.sender == owner);
        projects[projectName] = Project(msg.sender, projectName, _goal, _deadline, amount, price);
        projectTokens[projectName] = amount;
        projectPrice[projectName] = price;
        emit TokenCreated(msg.sender, projectName, amount, price);
    }

    function buyTokens(
        string memory projectName,
        uint amount
    ) public payable {
        require(block.timestamp <= projects[projectName].deadline);
        require(msg.value >= amount * projects[projectName].price);
        projectTokens[projectName] -= amount;
        payable(owner).transfer(msg.value);
    }

    function getProject(string memory projectName) public view returns(
        address _owner,
        string memory name,
        uint goal,
        uint deadline,
        uint tokens,
        uint price
    ) {
        return (projects[projectName].owner, projects[projectName].name, projects[projectName].goal, projects[projectName].deadline, projectTokens[projectName], projectPrice[projectName]);
    }

}
