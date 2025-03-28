import { Box, Button, Typography } from '@mui/material';
import { PieChart } from '@mui/x-charts';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { criteria } from '../../public/data';
import loader from '../assets/loader.svg';
import MainLayout from '../layouts/MainLayout';
import financialAnalysisClient from '../lib/financial-analysis/client';

const CATEGORIES_TO_SPANISH_NAME_MAPPING = {
  bankTransactions: 'Transacciones bancarias',
  billPayment: 'Pagos de servicios',
  residenceAge: 'Tiempo de permanencia en un domicilio',
  socialMedia: 'Manejo de redes sociales',
  stabilityEmployment: 'Estabilidad laboral',
};

const ColorLabel = ({ color, label }) => {
  return (
    <Box display='flex' alignItems='center'>
      <Box
        sx={{
          width: 20,
          height: 20,
          backgroundColor: color,
          borderRadius: '50%',
          mr: 1.5,
        }}
      />
      <Typography>{label}</Typography>
    </Box>
  );
};

ColorLabel.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const CreditEvaluation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [report, setReport] = useState({
    bankTransactions: {
      score: 170,
      qualify: true,
    },
    billPayment: {
      score: 100,
      qualify: false,
    },
    residenceAge: {
      score: 80,
      qualify: false,
    },
    socialMedia: {
      score: 200,
      qualify: true,
    },
    stabilityEmployment: {
      score: 30,
      qualify: false,
    },
  });
  const navigate = useNavigate();

  const handleSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate('/plan');
    }, 5000);
  };

  const chartData = Object.entries(report).map(([category, values]) => ({
    id: category,
    value: values.score,
    label: CATEGORIES_TO_SPANISH_NAME_MAPPING[category],
    color: values.qualify ? criteria[category].color : null,
  }));

  useEffect(() => {
    const fetchData = async () => {
      isLoading(true);
      try {
        const response = await financialAnalysisClient.calculateScore(1);

        console.log(response);
        setReport(response);
      } catch (error) {
        console.error('Error fetching score:', error);
      } finally {
        isLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <MainLayout>
      <Box maxWidth='sm' display='flex' alignItems='flex' flexDirection='column'>
        {isLoading ? (
          <Box
            component='img'
            src={loader}
            alt='Cargando...'
            className='rotating-svg'
            sx={{ height: 100, display: 'block', mx: 'auto' }}
          />
        ) : (
          <Box display='flex' alignItems='center' flexDirection='column'>
            <Typography fontSize='25px' textAlign='center' mb={5} mt={3}>
              Diagnóstico
            </Typography>

            <Box position='relative' display='flex' justifyContent='center' alignItems='center'>
              <Box
                position='absolute'
                top='50%'
                left='50%'
                zIndex={2}
                textAlign='center'
                sx={{
                  transform: 'translate(-50%, -50%)',
                }}>
                <Typography variant='h4' fontWeight='bold'>
                  345
                </Typography>
                <Typography variant='body1' color='gray'>
                  Riesgo Moderado
                </Typography>
              </Box>

              <PieChart
                series={[
                  {
                    data: chartData,
                    innerRadius: 86,
                    outerRadius: 109,
                    paddingAngle: 6,
                    cornerRadius: 10,
                    startAngle: -122,
                  },
                ]}
                width={400}
                height={250}
                sx={{
                  '& .MuiChartsLegend-root': { display: 'none' },
                  zIndex: 1,
                  marginLeft: '100px',
                }}
              />
            </Box>

            <Box display='flex' gap={2} mt={6} mb={6} alignItems='baseline' flexDirection='column'>
              {Object.entries(report).map(([category]) => (
                <ColorLabel
                  key={category}
                  color={criteria[category]?.color || null}
                  label={CATEGORIES_TO_SPANISH_NAME_MAPPING[category]}
                />
              ))}
            </Box>
            <Typography variant='p' textAlign='center' mb={7} fontSize='13px'>
              Detectamos ciertos problemas financieros, pero con tu compromiso y nuestro plan, los
              vamos a superar.{' '}
            </Typography>
            <Button
              variant='contained'
              color='secondary'
              sx={{
                mt: 6,
                width: '80%',
                borderRadius: '25px',
                height: '54px',
                color: 'black',
                fontSize: '20px',
              }}
              onClick={handleSubmit}
              disabled={isLoading}>
              Continuar
            </Button>
          </Box>
        )}
      </Box>
    </MainLayout>
  );
};

export default CreditEvaluation;
