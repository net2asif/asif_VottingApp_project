// Explicitly requiring the Hardhat Runtime Environment. This is optional
// but useful for running the script independently with `node <script>`.
//
// Alternatively, use `npx hardhat run <script>`, which will compile your contracts,
// include the Hardhat Runtime Environment's members globally, and execute the script.
const hre = require("hardhat");

async function main() {
    // Fetching the current gas fee data from the provider
    const gasData = await hre.ethers.provider.getFeeData();
   
    // Deploying the Election contract with the specified gas price
    const Election = await hre.ethers.deployContract("Election", { gasPrice: gasData.gasPrice });
    await Election.waitForDeployment();
    console.log("Election Contract successfully deployed to:", Election.target);
}

// Recommended pattern to enable async/await usage throughout your script
// and properly handle any errors.
main().catch((error) => {
    console.error("Error encountered:", error);
    process.exitCode = 1;
});
