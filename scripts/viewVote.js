const { ethers } = require("hardhat");
require("dotenv").config();

const ElectionContractInfo = require("/home/asif/hp/blockchian/asif_VottingApp_project/artifacts/contracts/Election.sol/Election.json");
const electionAbi = ElectionContractInfo.abi;
const electionAddress = "0xfD7fb2a938Bb2E4a266E90c30a30717f98269c8F";
const candidateId = 1; 
const rpcUrl = "http://127.0.0.1:7545";
const provider = new ethers.JsonRpcProvider(rpcUrl); 

const electionContract = new ethers.Contract(electionAddress, electionAbi, provider);

const main = async () => {
    try {
        // Retrieve candidate information
        const candidateData = await electionContract.getCandidate(candidateId);
        console.log("Candidate information:", candidateData);
    } catch (error) {
        console.error("Failed to fetch candidate information:", error);
    }
};

main();
