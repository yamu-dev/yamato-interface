import { Button, HStack, Box, chakra } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { zeroAddress } from "viem";

export default function Reward({
  address,
  token,
}: {
  address?: `0x${string}`;
  token?: `0x${string}`;
}) {
  const { t } = useTranslation();

  return (
    <HStack spacing={2}>
      <Box fontSize={"2xl"}>
        {"0.0"}
        <chakra.span fontSize={"lg"} ml={1}>
          {"ETH"}
        </chakra.span>
      </Box>
      <Button variant={"solid"} colorScheme="green" size={"sm"}>
        {t("CLAIM")}
      </Button>
    </HStack>
  );
}
