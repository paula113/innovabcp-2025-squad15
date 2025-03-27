import { Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Form from "../../Components/Form/default";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';

const RegisterFrom = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    console.log("Sent data:", data);
    
    // Simulate Auth
    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    }, 1000);
  };

  const formFields = [
    { name: "name", label: "Nombre", type: "text", icon: <PersonIcon/> ,validation: { required: "El nombre es obligatorio" } },
    { name: "email", label: "Correo", type: "email", icon: <PersonIcon/> ,validation: { required: "El correo es obligatorio", pattern: { value: /\S+@\S+\.\S+/, message: "Correo inválido" } } },
    { name: "phone", label: "Teléfono", type: "tel", icon: <PersonIcon/> ,validation: { required: "El teléfono es obligatorio", pattern: { value: /^[0-9]{9,15}$/, message: "Debe ser un número válido" } } },
    { name: "password", label: "Contraseña", type: "password", icon: <PersonIcon/> , validation: { required: "La contraseña es obligatoria", minLength: { value: 6, message: "Mínimo 6 caracteres" } } },
  ];

  return (
    <Container maxWidth="sm" sx={{ mt: 5, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Registro de Usuario
      </Typography>
      <Form fields={formFields} onSubmit={handleFormSubmit} buttonText="Registrar" />
      <Typography variant="button" sx={{ m: 5 }} gutterBottom>
        <Link to="/login">Login</Link>
      </Typography>
    </Container>
  );
};

export default RegisterFrom;
