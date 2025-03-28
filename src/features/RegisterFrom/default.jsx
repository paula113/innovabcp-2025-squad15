import { Email, PhoneAndroid } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/Form/default';

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    setIsLoading(true);

    // Simulate sign-up
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/next-steps');
    }, 3000);
  };

  const formFields = [
    {
      name: 'name',
      label: 'Nombres',
      type: 'text',
      icon: <PersonIcon />,
      validation: { required: 'El nombre es obligatorio' },
    },
    {
      name: 'lastName',
      label: 'Apellidos',
      type: 'text',
      icon: <PersonIcon />,
      validation: { required: 'Los apellidos son obligatorios' },
    },
    {
      name: 'document',
      label: 'Documento',
      type: 'text',
      validation: { required: 'El documento es obligatorio' },
    },
    {
      name: 'phone',
      label: 'Teléfono',
      type: 'tel',
      icon: <PhoneAndroid />,
      validation: {
        required: 'El teléfono es obligatorio',
        pattern: {
          value: /^[0-9]{9,15}$/,
          message: 'Debe ser un número válido',
        },
      },
    },
    {
      name: 'email',
      label: 'Correo',
      type: 'email',
      icon: <Email />,
      validation: {
        required: 'El correo es obligatorio',
        pattern: { value: /\S+@\S+\.\S+/, message: 'Correo inválido' },
      },
    },
  ];

  if (isLoading) {
    return null;
  }

  return (
    <Box display='flex' alignContent='center' flexDirection='column'>
      <Box display='flex' alignContent='center' flexDirection='column' mt={3}>
        <Typography fontSize='28px' textAlign='center' mb={3}>
          Crédito Hipotecario BCP
        </Typography>

        <Typography textAlign='center' mb={5}>
          Llena tus datos para saber si puedes obtener tu crédito hipotecario
        </Typography>
      </Box>

      <Form fields={formFields} onSubmit={handleFormSubmit} buttonText='Continuar' />
    </Box>
  );
};

export default SignUpForm;
