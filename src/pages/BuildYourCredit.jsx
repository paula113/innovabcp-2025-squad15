import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import BusinessForm from '../features/BusinessForm/default';
import MainLayout from '../layouts/MainLayout';

const BuildYourCredit = () => {

  return (
    <MainLayout>
      <Box display='flex' alignContent='center' flexDirection='column'>
        <Typography fontSize='25px' textAlign='center'>
          Construyamos tu crédito 🎉
        </Typography>

        <BusinessForm />

      </Box>
    </MainLayout>
  );
};

export default BuildYourCredit;
