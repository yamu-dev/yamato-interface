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
import VotingEscrow from "components/votingEscrow/index";
import { useTranslation } from "react-i18next";

export default function AccountDashboard() {
  const { t } = useTranslation();
  const account = useAccount();

  return (
    <Layout>
      <Container maxW="container.xl" py={16}>
        <Heading size={"lg"}>{t("DASHBOARD")}</Heading>
        <Center>
          <VotingEscrow address={account.address} />
        </Center>
      </Container>
    </Layout>
  );
}
