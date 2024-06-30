// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.24;

contract Voting {
    // State variables
    address public admin;
    uint public totalCandidates = 0;

    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    mapping(uint => Candidate) public candidateList;
    mapping(address => bool) public hasVoted;
    mapping(address => bool) public isRegistered;

    // Modifiers

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only the admin can execute this function");
        _;
    }

    // Constructor
    constructor() {
        admin = msg.sender;
    }

    // Functions

    // Register a voter
    function registerVoter(address _voter) public onlyAdmin {
        require(!isRegistered[_voter], "Voter is already registered");
        isRegistered[_voter] = true;
    }

    // Add a new candidate (only by the admin)
    function addCandidate(string memory _name) public onlyAdmin {
        totalCandidates++;
        candidateList[totalCandidates] = Candidate(totalCandidates, _name, 0);
    }

    // Vote for a candidate
    function vote(uint _candidateId) public {
        require(isRegistered[msg.sender], "You are not registered to vote. Contact the admin.");
        require(!hasVoted[msg.sender], "You have already voted.");
        require(_candidateId > 0 && _candidateId <= totalCandidates, "Invalid candidate ID");

        hasVoted[msg.sender] = true;
        candidateList[_candidateId].voteCount++;
    }

    // Get details of a specific candidate
    function getCandidate(uint _candidateId) public view returns (uint, string memory, uint) {
        require(_candidateId > 0 && _candidateId <= totalCandidates, "Invalid candidate ID");
        
        Candidate memory candidate = candidateList[_candidateId];
        return (candidate.id, candidate.name, candidate.voteCount);
    }

    // Get details of all candidates
    function getAllCandidates() public view returns (Candidate[] memory) {
        Candidate[] memory allCandidates = new Candidate[](totalCandidates);
        
        for (uint i = 1; i <= totalCandidates; i++) {
            allCandidates[i - 1] = candidateList[i];
        }
        
        return allCandidates;
    }
}
