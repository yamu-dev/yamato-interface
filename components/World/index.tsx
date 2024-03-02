import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Tooltip,
  Divider,
  HStack,
  chakra,
  CardFooter,
  Text,
  Grid,
  GridItem,
  VStack,
  Link,
  Flex,
  Spacer,
  Box,
  Avatar,
  useMediaQuery
} from "@chakra-ui/react";
import { CategoryTitle, ConentBox, HeaderBox1 } from '../CommonItem';
import { ExternalLink } from '../ExternalLink';
// import LogViewer from './LogViewer';

export default function World() {
  // const { chainId } = useActiveWeb3React();

  return (
    <>
      {/* <HeaderBox1> */}
      {/* <CategoryTitle> */}
      {/* Real Time TX{' '} */}
      {/* </CategoryTitle> */}
      {/* </HeaderBox1> */}
      {/* <ConentBox> */}
      {/* <LogViewer /> */}
      {/* </ConentBox> */}

      <Card
        flex={1}
        maxW="5xl"
        bg={"#fcfaf2"}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.25) 3px 3px 0px",
          borderRadius: "0px",
        }}
        color={"#818181"}
      >
        <CardHeader bg={"#5bad92"} py={2}>
          <Heading size="md" color={"white"}>
            Real Time TX
          </Heading>
        </CardHeader>
        <CardBody>
          <HStack justifyContent={"space-between"}>
            <chakra.p>借入: 0x9999...FFFFが999,999CJPYを借り入れました!</chakra.p>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <chakra.p>借入: 0x9999...FFFFが999,999CJPYを借り入れました!</chakra.p>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <chakra.p>借入: 0x9999...FFFFが999,999CJPYを借り入れました!</chakra.p>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <chakra.p>借入: 0x9999...FFFFが999,999CJPYを借り入れました!</chakra.p>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <chakra.p>借入: 0x9999...FFFFが999,999CJPYを借り入れました!</chakra.p>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
}
