import "../src/css/styles.css";
import type { AppProps } from "next/app";
import "lib/i18nConfig";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { WagmiProvider } from "wagmi";
import { sepolia, mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  ChakraBaseProvider,
  ColorModeScript,
  extendBaseTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
// import "rsuite/dist/rsuite-no-reset.min.css";
// import "src/css/rsuite-override.css";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  initialColorMode: "dark",
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("gray.700", "gray.900")(props),
      },
    }),
  },
  components: { Button },
});

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string;

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, sepolia] as const;
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  enableWalletConnect: true,
  enableInjected: true,
  enableEIP6963: true,
  enableCoinbase: true,
});

createWeb3Modal({
  wagmiConfig: config,
  themeMode: "dark",
  projectId,
  enableAnalytics: true,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ColorModeScript initialColorMode={"dark"} />
          <Component {...pageProps} />
        </QueryClientProvider>
      </WagmiProvider>
    </ChakraBaseProvider>
  );
}

export default MyApp;
