import { Container, Center, Grid, GridItem, Box } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import Layout from "components/layouts/layout";
import Pledge from "components/Pledge";
import EarlyUserReward from "components/EarlyUserReward";
import Dashboard from "components/Dashboard";
import World from "./World";
import Infographics from "./Infographics";
import Redemption from "./Redemption";

// export default function AccountDashboard() {
//   const account = useAccount();

//   return (
//     <Layout>
//       <Container maxW="container.xl" py={10}>
//         <Center>
//           <Dashboard address={account.address} />
//         </Center>
//         <Center mt={10}>
//           <TotalStats address={account.address} />
//         </Center>
//         <Center mt={10}>
//           {/* <VotingEscrow address={account.address} /> */}
//         </Center>
//         <Center mt={10}>
//           {/* <EarlyUserReward address={account.address} /> */}
//         </Center>
//       </Container>
//     </Layout>

//   );
// }


export default function AccountDashboard() {
  // const { account } = useWeb3React();
  const { isConnected } = useAccount();
  // const account = useAccount();

  return (
    <Layout>
      <Container maxW="container.xl" py={10}>
        {!!isConnected ? (
          <Grid
            templateColumns="repeat(4, 1fr)"
            gap={8}
            style={{ maxWidth: '1280px', margin: 'auto' }}
          >
            <GridItem colSpan={3}>
              <Dashboard />

              <Box className="divider" mt={'20px'} />

              <Pledge />

              <Box className="divider" mt={'20px'} />

              <Redemption />
            </GridItem>

            <GridItem colSpan={1}>
              <World />

              <Box className="divider" mt={'20px'} />

              <Infographics />
            </GridItem>
          </Grid>
        ) : (
          <Grid
            templateColumns="repeat(3, 1fr)"
            templateRows="repeat(4, 1fr)"
            gap={8}
            style={{
              maxWidth: '960px',
              margin: 'auto',
              height: 'calc(100vh - 4rem - 7rem - 6.6rem )',
            }}
          >
            <GridItem rowSpan={1} colSpan={3}>
              <Box className="divider" mt={'20px'} />

              <Dashboard />
            </GridItem>

            <GridItem rowSpan={1} colSpan={2}>
              <World />
            </GridItem>

            <GridItem rowSpan={1} colSpan={1}>
              <Infographics />
            </GridItem>
          </Grid>
        )}
      </Container>
    </Layout>
  );
}
