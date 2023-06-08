const { ethers } = require("hardhat");

async function main() {
  const [
    MonProjetSweatShirt,
    MonProjetHoodie,
    MonProjetTShirt,
    MonProjetEcharpe,
  ] = await Promise.all([
    ethers.getContractFactory("MonProjetSweatShirt"),
    ethers.getContractFactory("MonProjetHoodie"),
    ethers.getContractFactory("MonProjetTShirt"),
    ethers.getContractFactory("MonProjetEcharpe"),
  ]);

  console.log("Déploiement des contrats en cours ..");

  const SweatContractURI =
    "https://gateway.pinata.cloud/ipfs/QmWkPSQUYM5aCfh32nHF6bkBdp5e1kp5iMbUJtuYSjw2aR";
  const monProjetSweatShirt = await MonProjetSweatShirt.deploy(
    SweatContractURI
  );
  await monProjetSweatShirt.deployed();

  const HoodieContractURI =
    "https://gateway.pinata.cloud/ipfs/QmX3TiL9C6eTFk5LmL9mimybfoL9djTbU4eQ9Nj7FMNDPR";
  const monProjetHoodie = await MonProjetHoodie.deploy(HoodieContractURI);
  await monProjetHoodie.deployed();

  const TShirtContractURI =
    "https://gateway.pinata.cloud/ipfs/QmYzTDVbxwnweKMDdmbPV97Ch7TxaSahUYPu2dye3r3ecX";
  const monProjetTShirt = await MonProjetTShirt.deploy(TShirtContractURI);
  await monProjetTShirt.deployed();

  const EcharpeContractURI =
    "https://gateway.pinata.cloud/ipfs/QmXDFhGXjNmi5oCZeuKHyDJQmaijVNhz1T11jtks2PSHGT";
  const monProjetEcharpe = await MonProjetEcharpe.deploy(EcharpeContractURI);
  await monProjetEcharpe.deployed();

  const contracts = {
    MonProjetSweatShirt: monProjetSweatShirt.address,
    MonProjetHoodie: monProjetHoodie.address,
    MonProjetTShirt: monProjetTShirt.address,
    MonProjetEcharpe: monProjetEcharpe.address,
  };

  console.log("Adresses des contrats déployés :", contracts);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
