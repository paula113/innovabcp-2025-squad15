import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import MainLayout from "../layouts/MainLayout";
import BasicModal from "../Components/Modal/default";

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
  const modalContent = {
    titulo: "BCP",
    descripcion: "Estoy aqui para ayudarte",
    showButtom: true,
    buttomText: "Continuar",
  };
  const modalTexto = {
    titulo: "Lo vas a lograr!",
    descripcion: "Hola mundo",
    showButtom: true,
    buttomText: "Vamos",
  };

  return (
    <MainLayout>
      <Typography variant="h4">Bienvenido, {user.name} 🎉</Typography>
      <BasicModal modalContent={modalContent} />
      <BasicModal modalContent={modalTexto} />

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

export default DashboardPage;
