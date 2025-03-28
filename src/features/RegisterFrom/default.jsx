import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/default";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import loader from "../../assets/loader.svg";
import React, { useEffect, useState } from "react";

const RegisterFrom = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    console.log("Sent data:", data);
    setIsLoading(true);

    // Simulate Auth
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/home");
    }, 3000);
  };

  const formFields = [
    {
      name: "name",
      label: "Nombre",
      type: "text",
      icon: <PersonIcon />,
      validation: { required: "El nombre es obligatorio" },
    },
    {
      name: "email",
      label: "Correo",
      type: "email",
      icon: <PersonIcon />,
      validation: {
        required: "El correo es obligatorio",
        pattern: { value: /\S+@\S+\.\S+/, message: "Correo inválido" },
      },
    },
    {
      name: "phone",
      label: "Teléfono",
      type: "tel",
      icon: <PersonIcon />,
      validation: {
        required: "El teléfono es obligatorio",
        pattern: {
          value: /^[0-9]{9,15}$/,
          message: "Debe ser un número válido",
        },
      },
    },
    {
      name: "password",
      label: "Contraseña",
      type: "password",
      icon: <PersonIcon />,
      validation: {
        required: "La contraseña es obligatoria",
        minLength: { value: 6, message: "Mínimo 6 caracteres" },
      },
    },
  ];

  const getLoaderView = () => {
    if (!isLoading) return null;

    return (
      <div className="loader-wrapper">
        <Box
          component="img"
          src={loader}
          alt="BCP Logo"
          className="rotating-svg"
          sx={{ height: 230 }}
        />
      </div>
    );
  };

  const getFormView = () => {
    if (isLoading) return null;

    return (
      <>
        <Typography variant="h4" gutterBottom>
          Registro de Usuario
        </Typography>
        <Form
          fields={formFields}
          onSubmit={handleFormSubmit}
          buttonText="Registrar"
        />
        <Typography variant="button" sx={{ m: 5 }} gutterBottom>
          <Link to="/login">Login</Link>
        </Typography>
      </>
    );
  };

  useEffect(() => {
    console.log(isLoading);

    return () => {};
  }, [isLoading]);

  return (
    <Container maxWidth="sm" sx={{ mt: 5, mb: 4 }}>
      {getLoaderView()}
      {getFormView()}
    </Container>
  );
};

export default RegisterFrom;
