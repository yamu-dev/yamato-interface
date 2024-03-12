import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Link,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  VStack,
} from "@chakra-ui/react";
import SvgYamatoLogWithTitle from "../svgs/YamatoLogo";
import i18next from 'i18next';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BsTranslate } from 'react-icons/bs';
import styled from 'styled-components';

type HeaderProps = {
  title?: string;
};

export default function Header({ title }: HeaderProps) {
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
          <HStack>
            <Link href="/">
              <SvgYamatoLogWithTitle width={200} height={30} />
            </Link>
          </HStack>
          <HStack spacing={{ base: 2, md: 4 }}>
            {/* <LangugeChange /> */}
            <w3m-button balance={"hide"} />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}


const StyledPollingNumber = styled.div<{
  breathe: boolean;
}>`
  font-size: 1rem;
  color: #5bad92;
  transition: opacity 0.25s ease;
  opacity: ${({ breathe }) => (breathe ? 0.5 : 1)};
`;

const LanguageButton = styled.button`
  margin: 0 1rem;
`;

// const TranslateIcon = styled(BsTranslate)`
//   font-size: 2.0rem;
//   color: ${({ theme }) => theme.bg1};
// `;
const TranslateIcon = styled(BsTranslate)`
  font-size: 2rem;
  color: #5bad92;
`;

const LanguageListButton = styled.button`
  font-size: 1.0rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text1};
`;

const changeLanguage = (i18next: any, lang: any) => {
  i18next.changeLanguage(lang);
};


export function LangugeChange() {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <LanguageButton>
          <TranslateIcon />
        </LanguageButton>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <>
            <VStack>
              <LanguageListButton onClick={() => changeLanguage(i18next, 'en')}>
                english
              </LanguageListButton>
              <LanguageListButton onClick={() => changeLanguage(i18next, 'ja')}>
                日本語
              </LanguageListButton>
            </VStack>
          </>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
