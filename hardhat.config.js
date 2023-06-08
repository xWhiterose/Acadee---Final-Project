require('@nomiclabs/hardhat-etherscan');
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.18",

  networks: {
    goerli: {
      url: process.env.RPC_URL,
      accounts: [process.env.WALLET_PRIVATE_KEY],    
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  plugins: [
    "hardhat-etherscan",
  ],
};
