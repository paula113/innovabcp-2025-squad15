/* eslint-disable react/prop-types */
import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import mainLogo from "../../assets/bcp-logo.png";
import mainsonLogo from "../../assets/mainson-logo.png";
import BasicModal from "../Modal/default";

const Header = ({ showGoal }) => {
  const location = useLocation(); // Hook para obtener la ruta actual

  const mainLogoList = ["/login", "/register", "/"];
  const showMainLogo = mainLogoList.includes(location.pathname);
  const logo = !showMainLogo ? mainsonLogo : mainLogo;

  const modalContent = {
    titulo: "BCP",
    descripcion: "Estoy aqui para ayudarte",
    showButtom: true,
    buttomText: "Continuar",
    openButtonText: "Mi meta",
  };

  const getModalBtn = () => {
    if (!showGoal) return null;

    
    return <BasicModal modalContent={modalContent} /> 
  }

  return (
    <AppBar position="static" color="primary" sx={{ boxShadow: "none" }}>
      <Toolbar display="flex" justifyContent="space-between" >
      <Box display="flex" flexDirection="row"  sx={{ justifyContent: 'space-between', alignContent: 'center', width: '100%' }}>
      <Box component="img" src={logo} alt="BCP Logo" sx={{ height: 40 }} />
      {getModalBtn()}
      </Box>  
      </Toolbar>
    </AppBar>
  );
};

export default Header;
