import { Container, Center } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import Layout from "components/layouts/layout";
import VotingEscrow from "components/votingEscrow";
import EarlyUserReward from "components/EarlyUserReward";

export default function AccountDashboard() {
  const account = useAccount();

  return (
    <Layout>
      <Container maxW="container.xl" py={10}>
        <Center>
          <VotingEscrow address={account.address} />
        </Center>
        <Center mt={10}>
          <EarlyUserReward address={account.address} />
        </Center>
      </Container>
    </Layout>
  );
}
