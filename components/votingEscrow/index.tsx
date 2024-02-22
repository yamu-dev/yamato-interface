import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Tooltip,
  Divider,
  Text,
} from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import LockStats from "components/votingEscrow/LockStats";
import Reward from "components/votingEscrow/Rewards";

export default function VotingEscrow({ address }: { address?: `0x${string}` }) {
  const { t } = useTranslation();

  return (
    <Card
      flex={1}
      maxW="lg"
      bg={"#fcfaf2"}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.25) 3px 3px 0px",
        borderRadius: "0px",
      }}
      color={"#818181"}
    >
      <CardHeader bg={"#f9aea5"} py={2}>
        <Heading size="md" color={"white"}>
          MY {t("VE_YMT")}
        </Heading>
      </CardHeader>
      <CardBody>
        <Heading fontSize={"xl"} py={2}>
          {t("VE_YMT")}
          <Tooltip
            hasArrow
            label={
              <Text whiteSpace={"pre-wrap"}>{t("VE_YMT_REWARD_HELP")}</Text>
            }
          >
            <QuestionIcon fontSize={"lg"} mb={1} ml={1} cursor="help" />
          </Tooltip>
        </Heading>
        <Divider variant="dashed" mt={4} mb={4} />
        <LockStats address={address} />
        <Divider variant="dashed" py={2} />
        <Reward address={address} />
      </CardBody>
    </Card>
  );
}
