import { Box, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loader from '../../assets/loader.svg';
import Form from '../../components/Form/default';
import HorizontalLinearStepper from '../../components/VerticalStepper/default';
import { formFields, formFieldsLastStep, formFieldsSecondStep } from '../BusinessForm/formFields';

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showGoBack, setShowGoBack] = useState(true);
  const navigate = useNavigate();

  // Definición de vistas para cada paso del formulario
  const getBusinessInfoView = () => (
    <>
      <Typography variant='h4' align='center' mb={4}>
        {'Cuales son tus ingresos?'}
      </Typography>
      <Form fields={formFields} showButton={false} />
    </>
  );

  const getUploadFilesView = () => (
    <>
      <Typography variant='h4' align='center' mb={4}>
        {'¿Cómo administras tus ingresos?'}
      </Typography>
      <Form fields={formFieldsSecondStep} showButton={false} />
    </>
  );

  const handleFinalSubmit = (data) => {
    setShowGoBack(false);
    console.log('🚀 ~ handleFinalSubmit ~ data:', data);

    setIsLoading(true);

    // Simulate Auth
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/diagnosis');
    }, 3000);
    // setFormData((prev) => {
    //   const updatedData = { ...prev, ...getValues(), files: files.map((file) => file.name) };
    //   console.log("Datos enviados después de actualizar:", updatedData);
    //   mutation.mutate(updatedData);
    //   return updatedData;
    // });
  };

  const getFinalReviewView = () => (
    <>
      <Typography fontSize='25px' align='center' mb={4} mt={4}>
        Construyamos tu crédito 🚀
      </Typography>
      <Form onSubmit={handleFinalSubmit} fields={formFieldsLastStep} />
    </>
  );

  const getLoaderView = () => {
    if (!isLoading) return null;

    return (
      <div className='loader-wrapper'>
        <Box
          component='img'
          src={loader}
          alt='BCP Logo'
          className='rotating-svg'
          sx={{ height: 230 }}
        />
      </div>
    );
  };

  const getStepperView = () => {
    if (isLoading) return null;

    return (
      <HorizontalLinearStepper stepContents={stepContents} steps={steps} showGoBack={showGoBack} />
    );
  };

  // Definición de pasos del formulario
  const steps = ['Ingresos', 'Administración', 'Meta'];
  const stepContents = [getBusinessInfoView(), getUploadFilesView(), getFinalReviewView()];

  return (
    <Container maxWidth='sm' sx={{ mt: 5 }}>
      {getStepperView()}
      {getLoaderView()}
    </Container>
  );
};

export default UserProfile;
