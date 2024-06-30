// Importing the Hardhat Runtime Environment
// This import is optional but useful for running the script standalone using `node <script>`.
// Alternatively, use `npx hardhat run <script>` which will compile your contracts, include Hardhat
// Runtime Environment members globally, and execute the script.
const hre = require("hardhat");

const electionContractAddress = "0xfD7fb2a938Bb2E4a266E90c30a30717f98269c8F";
const candidateName = "Muhammad Asif";

async function main() {
    // Retrieve the Election contract factory
    const Election = await hre.ethers.getContractFactory("Election");

    // Attach the Election contract instance to the specified address
    const electionInstance = Election.attach(electionContractAddress);
  
    // Add a candidate to the election contract
    const transaction = await electionInstance.addCandidate(candidateName);
    await transaction.wait();
    
    console.log("Candidate successfully added:", transaction);
}

// Recommended pattern to enable async/await usage throughout your code
// and to properly handle errors.
main().catch((error) => {
    console.error("Error occurred:", error);
    process.exitCode = 1;
});
