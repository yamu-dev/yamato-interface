import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Tooltip,
  Divider,
  HStack,
  chakra,
  Text,
  Image,
  Grid,
  Box
} from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import { DashboardItem } from "./Dashboard/Item";

export default function VotingEscrow({ address }: { address?: `0x${string}` }) {
  const { t } = useTranslation();

  return (
    <Card
      flex={1}
      maxW="5xl"
      bg={"#fcfaf2"}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.25) 3px 3px 0px",
        borderRadius: "0px",
      }}
      color={"#818181"}
    >
      <CardHeader bg={"#F9AEA5"} py={2}>
        <Heading size="md" color={"white"}>
          My Pledge
        </Heading>
      </CardHeader>
      <CardBody>
        <HStack>
          <Box>担保量</Box>
          <Box>　　　　0 ETH</Box>
        </HStack>
        <HStack>
          <Box>評価額</Box>
          <Box>　　　　¥0.0</Box>
        </HStack>

        {/* <DashboardItem
          title={'評価額'}
          stat={`¥0.0`}
          firstLoadCompleted={true}
        /> */}
        {/* <HStack justifyContent={"space-between"}>
          <chakra.p>{t("TOTAL_YMT_VOTE_LOCKED")}</chakra.p>
          <chakra.p fontSize={"2xl"}>
            <>{"0.0"}</>
            <chakra.span fontSize={"lg"} ml={1}>
              YMT
            </chakra.span>
          </chakra.p>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <chakra.p>{t("PERCENTAGE_YMT_LOCKED")}</chakra.p>
          <chakra.p fontSize={"2xl"}>
            <>{"0.0"}</>
            <chakra.span fontSize={"lg"} ml={1}>
              %
            </chakra.span>
          </chakra.p>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <chakra.p>{t("TOTAL_VE_YMT")}</chakra.p>
          <chakra.p fontSize={"2xl"}>
            <>{"0.0"}</>
            <chakra.span fontSize={"lg"} ml={1}>
              veYMT
            </chakra.span>
          </chakra.p>
        </HStack> */}
      </CardBody>
    </Card>
  );
}
