import {
  Button,
  HStack,
  VStack,
  Spinner,
  Tooltip,
  Text,
  chakra,
  useToast,
  Box,
} from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

export default function Reward({ address }: { address?: `0x${string}` }) {
  const { t } = useTranslation();
  const toast = useToast({ position: "top-right", isClosable: true });

  return (
    <>
      <HStack justifyContent={"space-between"} alignItems={"baseline"} mt={4}>
        <Text color={"gray.400"}>
          {t("REWARDS")}
          <Tooltip
            hasArrow
            label={<Text whiteSpace={"pre-wrap"}>{t("REWARDS_HELP")}</Text>}
          >
            <QuestionIcon fontSize={"md"} mb={1} ml={1} />
          </Tooltip>
        </Text>
        <VStack spacing={4} alignItems={"end"}>
          <HStack spacing={2}>
            <Box fontSize={"2xl"}>
              <Spinner />
              {/* {typeof claimableTokens.data === "undefined" && <Spinner />}
              {!!claimableTokens.data &&
                typeof claimableTokens.data.result === "bigint" && (
                  <>{etherAmountFormat(claimableTokens.data.result, 6)}</>
                )} */}
              <chakra.span color={"gray.400"} fontSize={"lg"} ml={1}>
                YMT
              </chakra.span>
            </Box>
            <Button
              variant={"solid"}
              colorScheme="green"
              size={"sm"}
              // isDisabled={
              //   !claimableTokens.data ||
              //   !claimableTokens.data.result ||
              //   !writeFn.write
              // }
              // isLoading={writeFn.isLoading || waitFn.isLoading}
              // onClick={() => writeFn.write!()}
            >
              {t("CLAIM")}
            </Button>
          </HStack>
          <Spinner />
          {/* {typeof tokens.data === "undefined" && <Spinner />} */}
          {/* {!!tokens.data &&
            !!address &&
            tokens.data.map((token: `0x${string}`) => (
              <FeeReward key={token} address={address} token={token} />
            ))} */}
        </VStack>
      </HStack>
    </>
  );
}
