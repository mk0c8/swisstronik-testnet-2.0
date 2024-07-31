const hre = require("hardhat");

async function main() {
  // The name of your contract defined in Hello_swtr.sol
  const Contract = await hre.ethers.deployContract("Swisstronik", ["Hello Swisstronik!!"]);

  await Contract.waitForDeployment();

  console.log(`Swisstronik contract deployed to ${await Contract.getAddress()}`);
}

// DEFAULT BY HARDHAT: We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
