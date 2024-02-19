import {
  HStack,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import NewLockForm from "./NewLockForm";

export default function LockStats({ address }: { address?: `0x${string}` }) {
  const { t } = useTranslation();

  return (
    <>
      <HStack justifyContent={"space-between"}>
        <Text color={"gray.400"}>{t("BALANCE")}</Text>
        <Text fontSize={"2xl"}>
          0.00 veYMT
        </Text>
      </HStack>
      <HStack justifyContent={"space-between"} mt={1}>
        <Text color={"gray.400"}>{t("YMT_LOCKED")}</Text>
        <Text fontSize={"2xl"}>
          0.00 YMT
        </Text>
      </HStack>
      <HStack justifyContent={"space-between"} mt={1}>
        <Text color={"gray.400"}>{t("LOCKED_UNTIL")}</Text>
        <Text fontSize={"2xl"}>
          -- / -- / --
        </Text>
      </HStack>

      <HStack spacing={4} justifyContent={"flex-end"} mt={2}>
        <NewLockForm address={address} />
      </HStack>
    </>
  );
}
