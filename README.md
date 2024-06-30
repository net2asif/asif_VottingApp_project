# VotingApp

## Overview

VotingApp is a decentralized application designed to facilitate secure and transparent voting using blockchain technology. The system uses smart contracts to manage the voting process, ensuring integrity and reliability.

## Installation Guide

### Prerequisites

- **Node.js**: Make sure Node.js is installed on your machine. Download it [here](https://nodejs.org/).
- **Hardhat**: A robust development environment for Ethereum smart contracts.
- **Ganache**: A personal blockchain for local development and testing purposes.

### Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/votingapp.git
   cd votingapp
   ```

2. **Install Required Packages**
   ```bash
   npm install
   ```

3. **Initialize Hardhat**
   ```bash
   npx hardhat
   ```
   Follow the setup instructions to create a sample project.

4. **Create Smart Contract**
   - Develop your smart contract in the `contracts` directory.

5. **Compile the Smart Contract**
   ```bash
   npx hardhat compile
   ```

6. **Setup Ganache**
   - Launch Ganache and create a workspace.
   - Take note of the RPC server URL and network ID.

7. **Configure Hardhat for Ganache Network**
   - Update `hardhat.config.js` with the network details from Ganache.
   ```javascript
   module.exports = {
     networks: {
       ganache: {
         url: 'http://127.0.0.1:7545',
         accounts: [/* Add private keys from Ganache */],
         chainID: 5777
       }
     }
   };
   ```

8. **Deploy Smart Contract to Ganache**
   ```bash
   npx hardhat run scripts/deployElection.js --network ganache
   ```

## How to Use

### Admin Operations

1. **Deploy the Election Contract**
   ```bash
   npx hardhat run scripts/deployElection.js --network ganache
   ```

2. **Add Candidates to the Election**
   ```bash
   npx hardhat run scripts/addCandidate.js --network ganache
   ```

3. **Register Voters**
   ```bash
   npx hardhat run scripts/voterRegistration.js --network ganache
   ```

### Voter Operations

1. **Cast a Vote**
   ```bash
   node scripts/castVote.js
   ```

2. **View Voting Results**
   ```bash
   node scripts/viewVote.js
   ```

## Technology Stack

- **Hardhat**: Ethereum development environment.
- **Ganache**: Local blockchain simulator for Ethereum.
- **Node.js**: JavaScript runtime for server-side applications.

### Configuration Details

- **Integrating Hardhat with Ganache**: Update `hardhat.config.js` to connect to the Ganache network by providing the Ganache RPC URL and account credentials.

