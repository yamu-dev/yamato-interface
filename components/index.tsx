import { Container, Center } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import Layout from "components/layouts/layout";
import VotingEscrow from "components/votingEscrow/index";

export default function AccountDashboard() {
  const account = useAccount();

  return (
    <Layout>
      <Container maxW="container.xl" py={16}>
        <Center>
          <VotingEscrow address={account.address} />
        </Center>
      </Container>
    </Layout>
  );
}
