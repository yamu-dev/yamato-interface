import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage } from "wagmi";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./site";
import { mainnet, sepolia, Chain } from "viem/chains";

export const chains = [mainnet, sepolia] as [Chain, ...Chain[]];

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID ?? "";

export const config = defaultWagmiConfig({
  projectId: projectId,
  chains: chains,
  metadata: {
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    icons: [],
  },
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
