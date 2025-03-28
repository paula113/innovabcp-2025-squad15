import React from "react";
//import MainLayout from "../layouts/MainLayout";
import { Box, Button, Container, Typography } from "@mui/material";
//import mainLogo from "../../assets/bcp-logo.png";
import mainLogo from "../assets/bcp-logo.png";
import mainsonLogo from "../assets/mainson-logo.png";
import { useNavigate } from "react-router-dom";

const HomeResults = () => {
  const navigate = useNavigate();
  const respuesta = {
    negativo: "Por el momento no contamos con una oferta Pre Aprobada para tí.",
    solucion:
      "Queremos conocerte para ayudarte a mejorar tu score crediticio y puedas obtener lo mas pronto posible tu crédito hipotecario",
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/about-credit");
  };

  return (
    // <MainLayout>
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      sx={{ backgroundColor: "primary.main", position: "relative" }}
    >
      <Box sx={{ position: "absolute", top: 10, left: 30, width: 150 }}>
        <img src={mainLogo} alt="Logo BCP" style={{ width: "100%" }} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 120,
          left: "50%",
          transform: "translateX(-50%)",
          width: 300,
        }}
      >
        <img src={mainsonLogo} alt="Logo Maison" style={{ width: "100%" }} />
      </Box>
      <Container sx={{ flexGrow: 1, mt: 55 }}>
        <Typography variant="p" sx={{ fontSize: "24px" }}>
          {respuesta.negativo} {respuesta.solucion}
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          sx={{
            mt: 5,
            width: "286px",
            borderRadius: "20px",
            height: "54px",
            color: "black",
            fontSize: "20px",
          }}
          onClick={handleSubmit}
        >
          Continuar
        </Button>
      </Container>
    </Box>
    // </MainLayout>
  );
};

export default HomeResults;
