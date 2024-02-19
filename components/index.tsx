import Router from "next/router";
import {
  Spinner,
  Container,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  Center,
  Grid,
} from "@chakra-ui/react";
import { useAccount } from "wagmi";
import Layout from "components/layouts/layout";
import MetaTags from "components/layouts/MetaTags";
import VotingEscrow from "components/votingEscrow/index";
import { useTranslation } from "react-i18next";

export default function AccountDashboard() {
  const { t } = useTranslation();
  const account = useAccount();

  return (
    <Layout>
      <MetaTags/>
      <Container maxW="container.xl" py={16}>

        <Center >
          <Grid
            bg="white"
            templateColumns="repeat(1, 1fr)"
            gap={8}
            mt={{ base: 4, md: 8 }}
            width="80%"
          >
            <VotingEscrow address={account.address} />
          </Grid>
        </Center>

      </Container>
    </Layout>
  );
}
