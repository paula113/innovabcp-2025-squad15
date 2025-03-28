/* eslint-disable react/prop-types */
import React from "react";
import { Container, Box } from "@mui/material";
import Header from "../Components/Header/header";
// import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" sx={{ backgroundColor: "primary.main"}}>
      <Header />
      <Container component="main" sx={{ flexGrow: 1, mt: 3, paddingBottom: '50px' }}      >
        {children}
      </Container>
      {/* <Footer /> */}
    </Box>
  );
};

export default MainLayout;
