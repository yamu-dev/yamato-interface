import { ButtonProps, Button } from "@chakra-ui/react";

export default function NewLockForm({
  address,
  ...props
}: { address?: `0x${string}` } & ButtonProps) {
  return (
    <>
      <Button variant={"solid"} colorScheme="green" size={"sm"} {...props}>
        ロックを作成
      </Button>
    </>
  );
}
