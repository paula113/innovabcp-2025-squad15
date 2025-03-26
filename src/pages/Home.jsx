import React from "react";
import { useNavigate } from "react-router-dom";
import {  Typography, Button } from "@mui/material";
import MainLayout from "../layouts/MainLayout";

const DashboardPage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    // localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    navigate("/register");
    return null;
  }


  return (
    <MainLayout>
      <Typography variant="h4">Bienvenido, {user.name} 🎉</Typography>
      
      <Button variant="contained" color="secondary" sx={{ mt: 3 }} onClick={handleLogout}>
        Cerrar sesión
      </Button>
    </MainLayout>
  );
};

export default DashboardPage;
