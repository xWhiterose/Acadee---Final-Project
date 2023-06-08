const hre = require("hardhat");

async function main() {
  const contracts = [
    {
      project: "SweatShirt",
      name: "contracts/MonProjetSweatShirt.sol:MonProjetSweatShirt",
      address: "0x76cefC1ee88a710E6F603D95282dcCD2c7746082",
      constructorArguments: [
        "https://gateway.pinata.cloud/ipfs/QmWkPSQUYM5aCfh32nHF6bkBdp5e1kp5iMbUJtuYSjw2aR",
      ],
    },
    {
      project: "Hoodie",
      name: "contracts/MonProjetHoodie.sol:MonProjetHoodie",
      address: "0x6F262c8f2f8a60cc04a7a00C2370df5a93B70162",
      constructorArguments: [
        "https://gateway.pinata.cloud/ipfs/QmX3TiL9C6eTFk5LmL9mimybfoL9djTbU4eQ9Nj7FMNDPR",
      ],
    },
    {
      project: "T Shirt",
      name: "contracts/MonProjetTShirt.sol:MonProjetTShirt",
      address: "0x5a5a000B2bAB6EA9043EC3c2aA872EC964D4eeEB",
      constructorArguments: [
        "https://gateway.pinata.cloud/ipfs/QmYzTDVbxwnweKMDdmbPV97Ch7TxaSahUYPu2dye3r3ecX",
      ],
    },
    {
      project: "Echarpe",
      name: "contracts/MonProjetEcharpe.sol:MonProjetEcharpe",
      address: "0x3819933154502BCD3c268e5803C73e04bcc1dAf6",
      constructorArguments: [
        "https://gateway.pinata.cloud/ipfs/QmXDFhGXjNmi5oCZeuKHyDJQmaijVNhz1T11jtks2PSHGT",
      ],
    },
  ];

  for (const contract of contracts) {
    console.log(`Verification pour ${contract.project}...`);
    await hre.run("verify:verify", {
      address: contract.address,
      contract: contract.name,
      constructorArguments: contract.constructorArguments,
    });
    console.log(`${contract.project} vérifié!\n`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
