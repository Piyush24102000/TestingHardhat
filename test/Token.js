const {expect} = require("chai");
const { ethers } = require("hardhat");

describe("Token contract",function(){
    it("Deployment assign total supply",async function(){
      
        const [owner] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("Token");
        const hardhatToken = await Token.deploy();
       
        const ownerBalance = await hardhatToken.balancesOf(owner.address);
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);//1000000);
    } )
})