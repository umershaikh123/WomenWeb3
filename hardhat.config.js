require("@nomicfoundation/hardhat-toolbox")
require("hardhat-gas-reporter")
require("solidity-coverage")

require("dotenv").config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
   solidity: "0.8.9",
   networks: {
      hardhat: {
         chainId: 1337,
      },
      mumbai: {
         url: process.env.STAGING_INFURA_URL,
         accounts: [`0x${process.env.STAGING_PRIVATE_KEY}`],
         gas: 2100000,
         gasPrice: 8000000000,
      },
   },

   gasReporter: {
      enabled: true,
      currency: "USD",
      outputFile: "gas-report.txt",
      noColors: true,
      coinmarketcap: "92863336-eff2-44a7-869d-6521d7c6a414",
   },
}
