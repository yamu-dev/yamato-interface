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
          Total Information
        </Heading>
      </CardHeader>
      <CardBody>
      </CardBody>
    </Card>
  );
}
