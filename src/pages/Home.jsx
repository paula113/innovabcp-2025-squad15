import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import MainLayout from "../layouts/MainLayout";
import BasicModal from "../Components/Modal/default";
import BusinessForm from "../Features/BusinessForm/default";

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    // localStorage.removeItem("user");
    navigate("/login");
  };

  // if (!user) {
  //   navigate("/register");
  //   return null;
  // }

  const modalContent = {
    titulo: "BCP",
    descripcion: "Estoy aqui para ayudarte",
    showButtom: true,
    buttomText: "Continuar",
  };

  return (
    <MainLayout>
      <Typography variant="h4">
        {`Bienvenida ${user?.name || ""}`} 🎉
      </Typography>
      <BasicModal modalContent={modalContent} />
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

export default Home;
