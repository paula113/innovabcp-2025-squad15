import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BusinessForm from '../features/BusinessForm/default';
import MainLayout from '../layouts/MainLayout';

const BuildYourCredit = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <MainLayout>
      <Box display='flex' alignContent='center' flexDirection='column'>
        <Typography fontSize='25px' textAlign='center'>
          Construyamos tu crédito 🎉
        </Typography>

        <BusinessForm />

        <Button variant='contained' color='secondary' sx={{ mt: 3 }} onClick={handleLogout}>
          Cerrar sesión
        </Button>
      </Box>
    </MainLayout>
  );
};

export default BuildYourCredit;
