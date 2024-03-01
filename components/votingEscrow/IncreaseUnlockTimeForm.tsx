import { ButtonProps, Button, useDisclosure } from "@chakra-ui/react";
import { LockType } from "lib/types/VotingEscrow";
import { useTranslation } from "react-i18next";
import FormModal from "./FormModal";

export default function IncreaseUnlockTimeForm({
  address,
  ...props
}: { address?: `0x${string}` } & ButtonProps) {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        variant={"solid"}
        colorScheme="green"
        size={"sm"}
        onClick={onOpen}
        {...props}
      >
        {t("VE_INCREASE_UNLOCK_TIME")}
      </Button>
      {isOpen && (
        <FormModal
          address={address}
          type={LockType.INCREASE_UNLOCK_TIME}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </>
  );
}
