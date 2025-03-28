import { Box, Container } from "@mui/material";
import React from "react";
import Header from "../components/Header/header";

const MainLayout = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      sx={{ backgroundColor: "primary.main" }}
    >
      <Header />
      <Container
        component="main"
        sx={{ flexGrow: 1, mt: 3, paddingBottom: "50px" }}
      >
        {children}
      </Container>
      {/* <Footer /> */}
    </Box>
  );
};

export default MainLayout;
