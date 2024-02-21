import {
  Card,
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
  const cardBackground = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("gray.700", "white");
  const dividerColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Card flex={1} bg={cardBackground} boxShadow="base" maxW='lg'>
      <CardBody>
        <Heading fontSize={"2xl"} color={headingColor} fontWeight="bold">
          {t("VE_YMT")}
          <Tooltip
            hasArrow
            label={<Text whiteSpace={"pre-wrap"}>{t("VE_YMT_REWARD_HELP")}</Text>}
            bg={cardBackground}
            color={headingColor}
          >
            <QuestionIcon fontSize={"lg"} mb={1} ml={1} cursor="help" />
          </Tooltip>
        </Heading>
        <Divider mt={2} mb={4} borderColor={dividerColor} />
        <LockStats address={address} />
        <Divider variant="dashed" py={2} borderColor={dividerColor} />
        <Reward address={address} />
      </CardBody>
    </Card>
  );
}