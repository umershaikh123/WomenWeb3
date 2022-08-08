require("@nomicfoundation/hardhat-toolbox")
require("hardhat-gas-reporter")
require("solidity-coverage")
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
   solidity: "0.8.9",
   gasReporter: {
      enabled: true,
      currency: "USD",
      outputFile: "gas-report.txt",
      noColors: true,
      coinmarketcap: "92863336-eff2-44a7-869d-6521d7c6a414",
   },
}
