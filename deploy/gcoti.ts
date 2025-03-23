import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;

    const { deploy } = deployments;

    const { deployer } = await getNamedAccounts();

    const initialOwner = "";
    const recipient = "";
    const totalSupply = 0n

    const res = await deploy('gCOTI', {
        from: deployer,
        args: [initialOwner, recipient, totalSupply],
        deterministicDeployment: true
    })

    console.log(res)
}

export default func;
