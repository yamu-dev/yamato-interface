import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Tooltip,
  Divider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import LockStats from "components/votingEscrow/LockStats";
import Reward from "components/votingEscrow/Rewards";

export default function VotingEscrow({ address }: { address?: `0x${string}` }) {
  const { t } = useTranslation();

  return (
    <Card flex={1} maxW="lg" p={4}>
      <CardHeader>
        <Heading size="md">My VotingEscrow</Heading>
      </CardHeader>
      <CardBody>
        <Heading fontSize={"xl"}>
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
