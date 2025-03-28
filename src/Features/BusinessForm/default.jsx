import { Container } from "@mui/material";
import React, { useState } from "react";
import Form from "../../components/Form/default";
import HorizontalLinearStepper from "../../components/VerticalStepper/default";
import {
  formFields,
  formFieldsLastStep,
  formFieldsSecondStep,
} from "./formFields";

const UserProfile = () => {
  const [showGoBack, setShowGoBack] = useState(true);

  // Definición de vistas para cada paso del formulario
  const getBusinessInfoView = () => (
    <Form fields={formFields} showButton={false} />
  );

  const getUploadFilesView = () => (
    <>
      <Form fields={formFieldsSecondStep} showButton={false} />
    </>
  );

  const handleFinalSubmit = (data) => {
    setShowGoBack(false);
    console.log("🚀 ~ handleFinalSubmit ~ data:", data);
    // setFormData((prev) => {
    //   const updatedData = { ...prev, ...getValues(), files: files.map((file) => file.name) };
    //   console.log("Datos enviados después de actualizar:", updatedData);
    //   mutation.mutate(updatedData);
    //   return updatedData;
    // });
  };

  const getFinalReviewView = () => (
    <>
      <Form onSubmit={handleFinalSubmit} fields={formFieldsLastStep} />
    </>
  );

  // Definición de pasos del formulario
  const steps = ["Ingresos", "Administración", "Meta"];
  const stepContents = [
    getBusinessInfoView(),
    getUploadFilesView(),
    getFinalReviewView(),
  ];

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <HorizontalLinearStepper
        stepContents={stepContents}
        steps={steps}
        showGoBack={showGoBack}
      />
    </Container>
  );
};

export default UserProfile;
