import { Container, Center, Grid, GridItem, Box } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import Layout from "components/layouts/layout";
import VotingEscrow from "components/votingEscrow";
import TotalStats from "components/TotalStats";
import EarlyUserReward from "components/EarlyUserReward";
import Dashboard from "components/Dashboard";
import World from "./World";
import Infographics from "./Infographics";

export default function AccountDashboard() {
  const account = useAccount();

  return (
    <Layout>
      <Container maxW="container.xl" py={10}>
        <Center>
          <Dashboard address={account.address} />
        </Center>
        <Center mt={10}>
          <TotalStats address={account.address} />
        </Center>
        <Center mt={10}>
          {/* <VotingEscrow address={account.address} /> */}
        </Center>
        <Center mt={10}>
          {/* <EarlyUserReward address={account.address} /> */}
        </Center>
      </Container>
    </Layout>

  );
}
