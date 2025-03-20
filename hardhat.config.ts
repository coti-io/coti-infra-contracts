import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import dotenv from "dotenv"

dotenv.config()

import "hardhat-deploy"

const config: HardhatUserConfig = {
  defaultNetwork: "coti-testnet",
  solidity: {
    version: "0.8.19",
    settings: {
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: "none",
      }
    }
  },
  networks: {
    "coti-testnet": {
      url: "https://testnet.coti.io/rpc",
      chainId: 7082400,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY!]
    },
    "coti-mainnet": {
      url: "https://mainnet.coti.io/rpc",
      chainId: 2632500,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY!]
    }
  },
  namedAccounts: {
    deployer: {
      default: process.env.DEPLOYER_PUBLIC_KEY!
    }
  },
  deterministicDeployment: {
    default: {
      factory: "0x4e59b44847b379578588920cA78FbF26c0B4956C",
      deployer: process.env.DEPLOYER_PUBLIC_KEY!,
      funding: "0",
      signedTx: ""
    }
  },
  etherscan: {
    apiKey: {
      "coti-testnet": 'empty'
    },
    customChains: [
      {
        network: "coti-testnet",
        chainId: 7082400,
        urls: {
          apiURL: "http://40.160.4.130/api",
          browserURL: "http://40.160.4.130"
        }
      }
    ]
  }
}

export default config
