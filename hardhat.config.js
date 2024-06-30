require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    ganacheLocal: {
      url: "http://127.0.0.1:7545",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 1337,
    },
    hardhat: {
      allowUnlimitedContractSize: true,
    },
  },
};
