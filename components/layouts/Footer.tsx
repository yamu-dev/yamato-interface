import {
  Box,
  Flex,
  Container,
  Text,
  Link,
  chakra,
  Select,
  Image,
  Tooltip,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import gitbook from "public/gitbook.svg";
import { useTranslation } from "react-i18next";
import SvgCommunityLogoBlack from "../svgs/CommunityLogoBlack";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box px={{ base: 0, md: 4 }} pb={4} top={"0"} zIndex={100} bg={"gray.900"} opacity={0.975}>
      <Container maxW="container.2xl" px={{ base: 2, md: 4 }}>
        <Flex py="4" justifyContent="space-between" alignItems="center">
          <chakra.div flex={1}></chakra.div>
          <Flex flex={2} py="4" gridGap={4} justifyContent="center" alignItems="center">
            <Tooltip hasArrow label={<Text whiteSpace={"pre-wrap"}>DeFiGeek Community JAPAN</Text>}>
              <Link
                href="https://defigeek.xyz/"
                target={"_blank"}
                fontSize={"3xl"}
                _hover={{ opacity: 0.8 }}
              >
                <SvgCommunityLogoBlack width="2.5rem" height="2.5rem" />
              </Link>
            </Tooltip>
            <Tooltip hasArrow label={<Text whiteSpace={"pre-wrap"}>GitHub</Text>}>
              <Link
                href="https://github.com/DeFiGeek-Community/"
                target={"_blank"}
                fontSize={"3xl"}
                _hover={{ opacity: 0.8 }}
                padding={"0.3125rem"}
              >
                <AiFillGithub color={'#FFFFFF'} />
              </Link>
            </Tooltip>
            <Tooltip hasArrow label={<Text whiteSpace={"pre-wrap"}>GitBook</Text>}>
              <Link
                href="https://docs.yamato.fi"
                target={"_blank"}
                fontSize={"3xl"}
                _hover={{ opacity: 0.8 }}
                padding={"0.3125rem"}
              >
                <Image w={"30px"} h={"30px"} src={gitbook.src} />
              </Link>
            </Tooltip>
          </Flex>
          <Box flex={1}>
            <Select
              w={"100px"}
              size={"xs"}
              value={"ja"}
              onChange={(e) => console.log("change", e.target.value)}
              float={"right"}
              placeholder='言語'
            >
              {/* <option value={"ja"}>日本語</option>
              <option value={"en"}>English</option> */}
            </Select>
          </Box>
        </Flex>
        <Flex justifyContent={"center"} fontSize={"sm"} color={"gray.400"}>
          © DeFiGeek Community JAPAN
        </Flex>
      </Container>
    </Box>
  );
}