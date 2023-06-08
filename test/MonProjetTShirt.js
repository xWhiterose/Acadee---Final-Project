const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");
const { expect } = require("chai");

require("@nomicfoundation/hardhat-chai-matchers");

describe("MonProjetTShirt", function () {
  let monProjetTShirt;
  let owner;
  let addr1;

  const priceOfMint = ethers.utils.parseEther("0.03");

  beforeEach(async function () {
    const MonProjetTShirt = await ethers.getContractFactory(
      "MonProjetTShirt"
    );
    [owner, addr1] = await ethers.getSigners();

    monProjetTShirt = await MonProjetTShirt.deploy("URI");
    await monProjetTShirt.deployed();
  });

  it("should mint an NFT when the required amount is sent", async function () {
    const MonProjetTShirt = await ethers.getContractFactory(
      "MonProjetTShirt"
    );
    const contract = await MonProjetTShirt.deploy("URI");
    const initialBalance = await contract.getBalance();
    const mintTx = await contract.mint({
      value: ethers.utils.parseEther("0.03"),
    });
    await mintTx.wait();

    const finalBalance = await contract.getBalance();
    expect(finalBalance.toNumber()).to.equal(initialBalance.toNumber() + 1);
  });

  it("should revert if an insufficient amount is sent", async function () {
    const [deployer, user] = await ethers.getSigners();
    const contract = await ethers.getContractFactory("MonProjetTShirt");
    const instance = await contract.deploy("URI");
    await instance.connect(user).setApprovalForAll(deployer.address, true);

    await expect(
      instance.connect(user).mint({ value: ethers.utils.parseEther("0.02") })
    ).to.be.revertedWith("Erreur : Montant incorrect");
  });

  it("should burn an NFT when the user owns at least one", async function () {
    const MonProjetTShirt = await ethers.getContractFactory(
      "MonProjetTShirt"
    );
    const contract = await MonProjetTShirt.deploy("URI");
    await contract.mint({ value: ethers.utils.parseEther("0.03") });

    const initialBalance = await contract.getBalance();
    expect(initialBalance.toNumber()).to.be.above(0);

    const burnTx = await contract.burn();
    await burnTx.wait();

    const finalBalance = await contract.getBalance();
    expect(finalBalance.toNumber()).to.equal(initialBalance.toNumber() - 1);
  });

  it("should revert if the user doesn't own any NFT to burn", async function () {
    const balanceBefore = await monProjetTShirt.getBalance();
    expect(balanceBefore).to.equal(
      0,
      "User should not own any NFTs before burning"
    );

    await expect(monProjetTShirt.burn()).to.be.revertedWith(
      "Erreur : Cet utilisateur n'a pas de NFT"
    );
  });

  it("should not allow non-owners to withdraw ether", async function () {
    const amountToWithdraw = ethers.utils.parseEther("1.0");
    const initialBalance = await ethers.provider.getBalance(addr1.address);
    const ownerInitialBalance = await ethers.provider.getBalance(owner.address);

    await expect(
      monProjetTShirt.connect(addr1).withdraw(addr1.address, amountToWithdraw)
    ).to.be.revertedWith("Ownable: caller is not the owner");

    const finalBalance = await ethers.provider.getBalance(addr1.address);
    const ownerFinalBalance = await ethers.provider.getBalance(owner.address);
    const tolerance = ethers.utils.parseEther("0.0001");

    expect(finalBalance).to.be.closeTo(initialBalance, tolerance);
    expect(ownerFinalBalance).to.be.closeTo(ownerInitialBalance, tolerance);
  });
});
