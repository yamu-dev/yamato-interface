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
} from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

export default function VotingEscrow({ address }: { address?: `0x${string}` }) {
  const { t } = useTranslation();

  return (
    <Card
      flex={1}
      maxW="xl"
      bg={"#fcfaf2"}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.25) 3px 3px 0px",
        borderRadius: "0px",
      }}
      color={"#818181"}
    >
      <CardHeader bg={"#5bad92"} py={2}>
        <Heading size="md" color={"white"}>
          Total YMT Overview
        </Heading>
      </CardHeader>
      <CardBody>
        <Heading fontSize={"xl"} pb={1}>
          <HStack>
            <Image src="/logo192.png" alt="Logo" boxSize="24px" />
            <Text>{t("VE_YMT")}</Text>
            <Tooltip
              hasArrow
              label={
                <Text whiteSpace={"pre-wrap"}>{t("VE_YMT_REWARD_HELP")}</Text>
              }
            >
              <QuestionIcon fontSize={"lg"} cursor="help" />
            </Tooltip>
          </HStack>
        </Heading>
        <Divider variant="dashed" my={2} />
        <HStack justifyContent={"space-between"}>
          <chakra.p>{t("TOTAL_YMT")}</chakra.p>
          <chakra.p fontSize={"2xl"}>
            <>{"0.0"}</>
            <chakra.span fontSize={"lg"} ml={1}>
              YMT
            </chakra.span>
          </chakra.p>
        </HStack>
        <HStack justifyContent={"space-between"}>
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
        </HStack>
      </CardBody>
    </Card>
  );
}
