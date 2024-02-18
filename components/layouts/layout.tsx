import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <>
      <Header title={title ? title : "VotingEscrow"} />
      <Box style={{ backgroundColor: "gray", minHeight: "100vh" }}>
        {children}
      </Box>
      <Footer />
    </>
  );
}
