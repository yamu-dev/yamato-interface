import React from "react";
import { Box } from "@chakra-ui/react";
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
  return (
    <>
      <MetaTags />
      <Header title={title ? title : "VotingEscrow"} />
      <Box bg={"gray.800"}>
        {children}
      </Box>
      <Footer />
    </>
  );
}
