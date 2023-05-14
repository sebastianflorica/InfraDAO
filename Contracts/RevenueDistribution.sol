// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract RevenueDistribution {

  event RevenueDistributed(
    address indexed projectOwner,
    string projectName,
    uint revenue,
    uint numTokensBurned
  );

    struct Project {
    address owner;
    string name;
    uint goal;
    uint deadline;
    uint tokens;
    uint revenue;
    }

  address public owner;
  mapping(string => Project) public projects;
  mapping(string => uint) public projectGoals;
  mapping(string => uint) public projectDeadlines;
  mapping(string => uint) public projectTokens;
  mapping(string => uint) public projectRevenue;

  constructor() {
    owner = msg.sender;
  }

  function distributeRevenue(
    string memory projectName,
    uint revenue
  ) public {
    require(msg.sender == owner);
    require(block.timestamp >= projects[projectName].deadline);
    uint numTokensBurned = revenue / projects[projectName].goal;
    projectTokens[projectName] -= numTokensBurned;
    projectRevenue[projectName] += revenue;
    emit RevenueDistributed(projects[projectName].owner, projectName, revenue, numTokensBurned);
  }

  function getProject(string memory projectName) public view returns(
    address _owner,
    string memory name,
    uint goal,
    uint deadline,
    uint tokens,
    uint revenue
  ) {
    return (projects[projectName].owner, 
        projects[projectName].name, 
        projects[projectName].goal, 
        projects[projectName].deadline, 
        projectTokens[projectName], 
        projectRevenue[projectName]);
  }

}
