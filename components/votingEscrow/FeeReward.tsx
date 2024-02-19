import { Button, HStack, Spinner, Box, useToast } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { zeroAddress } from "viem";

export default function Reward({
  address,
  token,
}: {
  address: `0x${string}`;
  token: `0x${string}`;
}) {
  const { t } = useTranslation();

  return (
    <HStack spacing={2}>
      <Box fontSize={"2xl"}>
        <Spinner />
        <Box
          as={"span" as React.ElementType}
          color={"gray.400"}
          fontSize={"lg"}
          ml={1}
        >
          {token === zeroAddress ? "ETH" : "TODO"}
        </Box>
      </Box>
      <Button
        variant={"solid"}
        colorScheme="green"
        size={"sm"}
      >
        {t("CLAIM")}
      </Button>
    </HStack>
  );
}
