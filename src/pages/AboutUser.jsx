import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import MainLayout from "../layouts/MainLayout";
import BusinessForm from "../Features/BusinessForm/default";

const AboutUser = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    // localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <MainLayout>
      <Typography variant="h4">{`Bienvenida ${user.name || ""}`} 🎉</Typography>

      <BusinessForm />

      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 3 }}
        onClick={handleLogout}
      >
        Cerrar sesión
      </Button>
    </MainLayout>
  );
};

export default AboutUser;
