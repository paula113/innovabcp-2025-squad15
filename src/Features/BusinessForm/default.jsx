import React, { useState } from "react";

import { Container, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";

import Form from "../../Components/Form/default";
import { formFields, formFieldsSecondStep } from "./formFields";
import HorizontalLinearStepper from "../../Components/VerticalStepper/default";
import Dropzone from "../../Components/DropoutZone/default";
import DynamicList from "../../Components/DinamicList/default";
import { useFieldArray, useForm } from "react-hook-form";

const postData = async (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Enviando datos:", data);
      resolve({ success: true });
    }, 2000);
  });
};
const BusinessForm = () => {
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({});
  
  const { control, register, reset, getValues } = useForm({
    defaultValues: {
      userProfile: '',
      incomeStream: '',
      businessAge: '',
      businessEvolution: '',
      incomeAverage: '',
      businessPercentage: '',
      extraIncomePercentage: '',
      businessAdmin: ""
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "incomeSources",
  });

  const mutation = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      alert("Formulario enviado con éxito");
      reset();
      setFiles([]);
      setFormData({});
    },
  });

  // // Guardar datos por paso correctamente
  // const handleStepSubmit = () => {
  //   const currentData = getValues();
  //   console.log("🚀 ~ handleStepSubmit ~ currentData:", currentData)
    
  //   setFormData((prev) => ({ ...prev, ...currentData }));
  // };

  // Enviar datos finales
  const handleFinalSubmit = () => {
    
    const finalData = {
      ...formData,
      ...getValues(),
      files: files.map((file) => file.name),
    };
    
    console.log("Datos enviados: Mitate", finalData);
    mutation.mutate(finalData);
  };

  // Paso 1: Información del negocio
  const getBusinessInfoView = () => (
    <Form fields={formFields} showButton={false}>
      <DynamicList 
        fields={fields} 
        register={register} 
        append={append} 
        remove={remove} 
        title="Presencia Digital" 
        name="digitalWebs" 
        options={['Página web', 'Mercado en libre']} 
      />
    </Form>
  );

  // Paso 2: Carga de archivos
  const getUploadFilesView = () => (
    <>
      <Form fields={formFieldsSecondStep} showButton={false} />
      <Dropzone files={files} setFiles={setFiles} />
    </>
  );

  // Paso 3: Revisión final y envío
  const getFinalReviewView = () => (
    <>
      <Typography variant="h6">Revisión Final</Typography>
      <Typography>Verifica la información antes de enviar.</Typography>
      <button onClick={handleFinalSubmit} >
        {mutation.isLoading ? "Enviando..." : "Enviar"}
      </button>
    </>
  );

  const steps = ["Ingresos", "Administración", "Meta"];
  const stepContents = [getBusinessInfoView(), getUploadFilesView(), getFinalReviewView()];

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <HorizontalLinearStepper stepContents={stepContents} steps={steps} handleOnCLick={handleFinalSubmit} disabled={mutation.isLoading}/>
    </Container>
  );
};

export default BusinessForm;
