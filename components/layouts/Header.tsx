import { Box, Container, Flex, Link, HStack, useMediaQuery } from "@chakra-ui/react";
import SvgYamatoLogWithTitle from "../svgs/YamatoLogo";

type HeaderProps = {
  title?: string;
};

export default function Header({ title }: HeaderProps) {
  const [isPC] = useMediaQuery("(min-width: 1000px)");
  return (
    <Box
      px={{ base: 0, md: 4 }}
      position={"sticky"}
      top={"0"}
      zIndex={100}
      bg={"#fcfaf2"}
      opacity={0.975}
    >
      <Container maxW="container.2xl" px={{ base: 2, md: 4 }}>
        <Flex
          as="header"
          py="4"
          justifyContent="space-between"
          alignItems="center"
        >
          {isPC ? <HeaderItem /> : <HeaderItemForMobile />}
        </Flex>
      </Container>
    </Box>
  );
}

export function HeaderItem({ title }: HeaderProps) {
  return (
    <>
      <HStack>
        <Link href="/">
          <SvgYamatoLogWithTitle width={200} height={30} />
        </Link>
      </HStack>
      <HStack spacing={{ base: 2, md: 4 }}>
        <w3m-button balance={"hide"} size="md" />
      </HStack>
    </>
  );
}

export function HeaderItemForMobile({ title }: HeaderProps) {
  return (
    <>
      <HStack>
        <Link href="/">
          <SvgYamatoLogWithTitle width={160} height={30} />
        </Link>
      </HStack>
      <HStack spacing={{ base: 2, md: 4 }}>
        <w3m-button balance={"hide"} disabled={true} size="sm" />
      </HStack>
    </>
  );
}
