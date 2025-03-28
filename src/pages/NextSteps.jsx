import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import mainsonLogo from '../assets/mainson-logo.png';
import MainLayout from '../layouts/MainLayout';

const NextSteps = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/build-your-credit');
  };

  return (
    <MainLayout>
      <Box display='flex' alignItems='center' flexDirection='column'>
        <Box width='50%' height='50%' mb={3}>
          <img src={mainsonLogo} alt='Logo Maison' style={{ width: '100%' }} />
        </Box>

        <Typography
          variant='p'
          sx={{ fontSize: '15px', textAlign: 'center', marginBottom: '3rem' }}>
          Por el momento no contamos con una oferta Pre Aprobada para tí. Queremos conocerte para
          ayudarte a mejorar tu score crediticio y puedas obtener lo mas pronto posible tu crédito
          hipotecario
        </Typography>

        <Button
          variant='contained'
          fullWidth
          sx={{ color: 'black', fontWeight: 500, letterSpacing: '0.4px', width: '80%' }}
          onClick={handleSubmit}>
          Continuar
        </Button>
      </Box>
    </MainLayout>
  );
};

export default NextSteps;
