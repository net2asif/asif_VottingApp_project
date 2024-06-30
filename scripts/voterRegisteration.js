// Importing the Hardhat Runtime Environment explicitly. This is optional but useful
// for running the script independently via `node <script>`. Alternatively, you can use
// `npx hardhat run <script>`, which will compile your contracts, add the Hardhat Runtime
// Environment's members to the global scope, and execute the script.
const hre = require("hardhat");

const electionAddress = "0xfD7fb2a938Bb2E4a266E90c30a30717f98269c8F";
const voter = "";

async function main() {
    // Fetch the contract factory for the Election contract
    const Election = await ethers.getContractFactory("Election");

    // Attach the contract instance to the specified address
    const electionInstance = Election.attach(electionAddress);
  
    // Register a new voter
    const transaction = await electionInstance.registerVoter(voter);
    await transaction.wait();
    console.log("Voter successfully registered:", transaction);
}

// Recommended pattern to enable async/await usage throughout your script
// and properly handle any errors that occur.
main().catch((error) => {
    console.error("An error occurred:", error);
    process.exitCode = 1;
});
