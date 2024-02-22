import "src/css/rsuite-override.css";
import type { AppProps } from "next/app";
import "lib/i18nConfig";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { State, WagmiProvider } from "wagmi";
import { config, projectId } from "lib/connector";

import { sepolia, mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

const queryClient = new QueryClient();

createWeb3Modal({
  wagmiConfig: config,
  themeMode: "dark",
  projectId: projectId,
  enableAnalytics: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ColorModeScript initialColorMode={"light"} />
          <Component {...pageProps} />
        </QueryClientProvider>
      </WagmiProvider>
    </ChakraProvider>
  );
}

export default MyApp;
