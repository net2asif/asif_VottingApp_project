const { ethers } = require("hardhat");
require("dotenv").config();

const ElectionContractDetails = require("/home/zaheerkhan/Desktop/Untitled Folder 14/VottingApp/artifacts/contracts/Election.sol/Election.json");
const electionABI = ElectionContractDetails.abi;
const electionContractAddress = "0xfD7fb2a938Bb2E4a266E90c30a30717f98269c8F";
const candidateID = "1";
const rpcUrl = "HTTP://127.0.0.1:7545";
const provider = new ethers.JsonRpcProvider(rpcUrl);
const userPrivateKey = "0x79ce2696b830d4bbd5932d8d51632183257843903467e91d562a4cea56b71470";

const deployerWallet = new ethers.Wallet(userPrivateKey, provider);
const electionContract = new ethers.Contract(electionContractAddress, electionABI, provider);

const main = async () => {
    const connectedContract = electionContract.connect(deployerWallet);

    console.log("Casting vote...");

    const { gasPrice } = await provider.getFeeData();

    const transaction = await connectedContract.vote(candidateID, { gasPrice });

    await transaction.wait();

    console.log("Vote successfully casted:", transaction);
};

main().catch((error) => {
    console.error("An error occurred:", error);
    process.exitCode = 1;
});
