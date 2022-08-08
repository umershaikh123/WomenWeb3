const { expect, assert } = require("chai")
const hre = require("hardhat")
// describe("SimpleStorage", () => {})

describe("Event Contract", function () {
   let Web3RSVPFactory, Web3RSVPContract
   beforeEach(async function () {
      Web3RSVPFactory = await hre.ethers.getContractFactory("Web3RSVP")
      Web3RSVPContract = await Web3RSVPFactory.deploy()
   })
})
