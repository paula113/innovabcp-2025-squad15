import React from "react";
import { Container, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../Context/AuthContext";
import Form from "../../components/Form/default";

const LoginForm = () => {
  const navigate = useNavigate();
  // const { login } = useAuth();

  const handleFormSubmit = (data) => {
    console.log("Login data:", data);

    // Simulating authentication
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log("🚀 ~ handleFormSubmit ~ storedUser:", storedUser, data);
    navigate("/");
    // if (storedUser && storedUser.email === data.email && storedUser.password === data.password) {
    //   // login(storedUser);
    // } else {
    //   alert("Invalid credentials");
    // }
  };

  const formFields = [
    {
      name: "email",
      label: "Correo",
      type: "email",
      validation: { required: "El correo es obligatorio" },
    },
    {
      name: "password",
      label: "Contraseña",
      type: "password",
      validation: { required: "La contraseña es obligatoria" },
    },
  ];

  return (
    <Container maxWidth="sm" sx={{ mt: 5, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Iniciar Sesión
      </Typography>
      <Form
        fields={formFields}
        onSubmit={handleFormSubmit}
        buttonText="Ingresar"
      />
      <Typography variant="button" sx={{ m: 5 }} gutterBottom>
        <Link to="/Register">Registrar</Link>
      </Typography>
    </Container>
  );
};

export default LoginForm;
