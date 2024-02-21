import React from "react";
import { useContext, useEffect } from "react";

import { Box, useColorMode } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import MetaTags from "./MetaTags";

export default function Layout({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  // Dark mode only for now
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    if (colorMode === "light") toggleColorMode();
  }, [colorMode]);

  return (
    <>
      <MetaTags />
      <Header title={title ? title : "VotingEscrow"} />
      <Box bg={"gray.800"}>{children}</Box>
      <Footer />
    </>
  );
}
