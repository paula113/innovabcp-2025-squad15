/* eslint-disable react/prop-types */
import { Box, Container } from "@mui/material";
import React from "react";
import Header from "../Components/Header/header";
// import Footer from "./Footer";

const MainLayout = ({ children, showGoal = false }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" sx={{ backgroundColor: "primary.main"}}>
      <Header showGoal={showGoal} />
      <Container component="main" sx={{ flexGrow: 1, mt: 3, paddingBottom: '50px' }}      >
        {children}
      </Container>
      {/* <Footer /> */}
    </Box>
  );
};

export default MainLayout;
