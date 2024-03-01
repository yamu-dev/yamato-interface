import { ButtonProps, Button } from "@chakra-ui/react";

export default function WithdrawButton(props: ButtonProps) {
  return (
    <>
      <Button
        variant={"solid"}
        colorScheme="green"
        size={"sm"}
        isDisabled={true}
        {...props}
      >
        Withdraw
      </Button>
    </>
  );
}
