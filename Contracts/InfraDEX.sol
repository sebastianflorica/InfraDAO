// SPDX-License-Identifier: MIT 

pragma solidity ^0.8.0;

contract Trading {

  // Events

  event TokenTraded(
    address indexed buyer,
    address indexed seller,
    string projectName,
    uint amount,
    uint price
  );

  // Project Structure

    struct Project {
    address owner;
    string name;
    uint goal;
    uint deadline;
    uint tokens;
    uint price;
    }

  // Variables

  address public owner;
  mapping(string => Project) public projects;
  mapping(string => uint) public projectGoals;
  mapping(string => uint) public projectDeadlines;
  mapping(string => uint) public projectTokens;
  mapping(string => uint) public projectPrice;
  mapping(string => mapping(address => uint)) public balances;

  // Constructor

  constructor() {
    owner = msg.sender;
  }

  // Methods

  function tradeTokens(
    string memory projectName,
    address buyer,
    address seller,
    uint amount
  ) public {
    require(msg.sender == owner);
    require(block.timestamp >= projects[projectName].deadline);
    require(balances[projectName][buyer] + amount >= 0);
    require(balances[projectName][seller] + amount >= 0);
    balances[projectName][buyer] += amount;
    balances[projectName][seller] -= amount;
    emit TokenTraded(buyer, seller, projectName, amount, projectPrice[projectName]);
  }

  function getProject(string memory projectName) public view returns(
    address _owner,
    string memory name,
    uint goal,
    uint deadline,
    uint tokens,
    uint price
  ) {
    return (projects[projectName].owner, 
        projects[projectName].name, 
        projects[projectName].goal, 
        projects[projectName].deadline, 
        projectTokens[projectName], 
        projectPrice[projectName]);
  }

  function getBalance(string memory projectName, address user) public view returns(uint balance) {
    return balances[projectName][user];
  }

}
