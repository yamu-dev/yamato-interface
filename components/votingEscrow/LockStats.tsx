import { HStack, Text, chakra, Spinner } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import NewLockForm from "./NewLockForm";

export default function LockStats({ address }: { address?: `0x${string}` }) {
  const { t } = useTranslation();

  return (
    <>
      <HStack justifyContent={"space-between"}>
        <chakra.p color={"gray.400"}>{t("BALANCE")}</chakra.p>
        <chakra.p fontSize={"2xl"} color={"white"}>
          <>{"0.0"}</>
          <chakra.span color={"gray.400"} fontSize={"lg"} ml={1}>
            veYMT
          </chakra.span>
        </chakra.p>
      </HStack>
      <HStack justifyContent={"space-between"} mt={1}>
        <chakra.p color={"gray.400"}>{t("YMT_LOCKED")}</chakra.p>
        <chakra.p fontSize={"2xl"} color={"white"}>
          <>{"0.0"}</>
          <chakra.span color={"gray.400"} fontSize={"lg"} ml={1}>
            YMT
          </chakra.span>
        </chakra.p>
      </HStack>
      <HStack justifyContent={"space-between"} mt={1}>
        <chakra.p color={"gray.400"}>{t("LOCKED_UNTIL")}</chakra.p>
        <chakra.p fontSize={"2xl"} color={"white"}>
          {"-- / -- / --"}
        </chakra.p>
      </HStack>

      <HStack spacing={4} justifyContent={"flex-end"} mt={2}>
        <NewLockForm address={address} />
      </HStack>
    </>
  );
}
