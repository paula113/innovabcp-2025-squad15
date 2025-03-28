import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import './plan-card.scss';

const PlanCard = () => {
  return (
    <MainLayout>
      <Box className='plan-card'>
        <Box className='plan-card__header'>
          <span className='plan-card__icon' role='img' aria-label='icono'>
            ✈️
          </span>
          <span className='plan-card__points'>600</span>
        </Box>

        <Box className='plan-card__body'>
          <Typography className='plan-card__title'>Ahorro programado</Typography>

          <Box className='plan-card__amount-row'>
            <span className='plan-card__current'>S/ 800</span>
            <span className='plan-card__divider'>/</span>
            <span className='plan-card__target'>S/ 1000</span>
            <span className='plan-card__time'>1 mes</span>
          </Box>

          <Box className='plan-card__progress-container'>
            <Box className='plan-card__progress-bar' style={{ width: '80%' }} />
            <span className='plan-card__progress-text'>80%</span>
          </Box>

          <Typography className='plan-card__description'>
            ¿Cómo separar una parte de tus ingresos para ahorrar?
          </Typography>

          <Box
            className='plan-card__video'
            sx={{
              backgroundImage: "url('src/assets/image-video.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>
            <Button className='plan-card__play-btn'>▶</Button>
          </Box>
        </Box>
      </Box>

      <Box className='plan-card'>
        <Box className='plan-card__header plan-card__header_collapsed'>
          <span className='plan-card__icon' role='img' aria-label='icono'>
            ✈️
          </span>
          <span className='plan-card__points'>600</span>
        </Box>

        <Box className='plan-card__body'>
          <Typography className='plan-card__title'>Tarjeta de credito</Typography>

          <Typography className='plan-card__description plan-card__description_collapsed'>
            ¿Cómo usar adecuadamente tu tarjeta?
          </Typography>
        </Box>
      </Box>

      <Box className='plan-card'>
        <Box className='plan-card__header plan-card__header_collapsed'>
          <span className='plan-card__icon' role='img' aria-label='icono'>
            ✈️
          </span>
          <span className='plan-card__points'>600</span>
        </Box>

        <Box className='plan-card__body'>
          <Typography className='plan-card__title'>Crédito para su negocio</Typography>

          <Typography className='plan-card__description plan-card__description_collapsed' mb={0}>
            ¿Cómo separar una parte de tus ingresos para ahorrar?
          </Typography>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default PlanCard;
