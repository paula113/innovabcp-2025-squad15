import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const NextSteps = () => {
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

  // const modalContent = {
  //   titulo: "BCP",
  //   descripcion: "Estoy aqui para ayudarte",
  //   showButtom: true,
  //   buttomText: "Continuar",
  // };

  return (
    <MainLayout>
      <Typography variant="h4">
        {`Bienvenida ${user?.name || ""}`} 🎉
      </Typography>
      {/* <BasicModal modalContent={modalContent} /> */}
      {/* <BusinessForm /> */}
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

export default NextSteps;
