import React, { useEffect, useState } from "react";

import { Button, Container, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";

import Form from "../../Components/Form/default";
import { formFields, formFieldsLastStep, formFieldsSecondStep } from "./formFields";
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

/**
 * Componente BusinessForm
 * 
 * Este componente gestiona un formulario multi-paso para recolectar información de un negocio.
 * Utiliza `react-hook-form` para manejar el estado del formulario y `react-query` para enviar los datos.
 * 
 * Flujo del formulario:
 * 1. Ingresos (Información del negocio)
 * 2. Administración (Carga de archivos)
 * 3. Meta (Revisión final y envío)
 */

const BusinessForm = () => {
  // Estado para almacenar archivos y datos del formulario
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({});
  
  // Inicialización del formulario con valores por defecto
  const { control, register, reset, getValues } = useForm({
    defaultValues: {
      userProfile: '',
      incomeStream: '',
      businessAge: '',
      businessEvolution: '',
      incomeAverage: '',
      businessPercentage: '',
      extraIncomePercentage: '',
      businessAdmin: "",
      homeType: '',
      totalAmount: '',
      initialAmount: '',
      quote: '',
    },
  });

  // Manejo de listas dinámicas dentro del formulario
  const { fields, append, remove } = useFieldArray({
    control,
    name: "incomeSources",
  });

  // Mutación para enviar datos del formulario
  const mutation = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      alert("Formulario enviado con éxito");
      reset();
      setFiles([]);
      setFormData({});
    },
  });

  /**
   * Guardar los datos de cada paso intermedio en el estado `formData`
   */
  const handleStepSubmit = () => {
    const currentData = getValues();
    console.log("🚀 ~ handleStepSubmit ~ currentData:", currentData);
    setFormData((prev) => ({ ...prev, ...currentData }));
  };

  /**
   * Enviar los datos finales del formulario al completar el último paso.
   */
  const handleFinalSubmit = () => {
    setFormData((prev) => {
      const updatedData = { ...prev, ...getValues(), files: files.map((file) => file.name) };
      console.log("Datos enviados después de actualizar:", updatedData);
      mutation.mutate(updatedData);
      return updatedData;
    });
  };

  // Definición de vistas para cada paso del formulario
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

  const getUploadFilesView = () => (
    <>
      <Form fields={formFieldsSecondStep} showButton={false} />
      <Dropzone files={files} setFiles={setFiles} />
    </>
  );

  const getFinalReviewView = () => (
    <>
      <Form fields={formFieldsLastStep} showButton={false} />
      <Button onClick={handleFinalSubmit} disabled={mutation.isLoading}>
        {mutation.isLoading ? "Enviando..." : "Finalizar"}
      </Button>
    </>
  );

  // Definición de pasos del formulario
  const steps = ["Ingresos", "Administración", "Meta"];
  const stepContents = [getBusinessInfoView(), getUploadFilesView(), getFinalReviewView()];

  useEffect(() => {
    console.log("Valores actuales del formulario:", getValues());
  }, [formData]);
  
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <HorizontalLinearStepper 
        stepContents={stepContents} 
        steps={steps} 
        handleOnCLick={(stepIndex) => {
          if (stepIndex === steps.length - 1) {
            handleFinalSubmit();  // Enviar datos al completar el último paso
          } else {
            handleStepSubmit();  // Guardar datos en los otros pasos
          }
        }} 
        disabled={mutation.isLoading}
      />
    </Container>
  );
};



// const postData = async (data) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Enviando datos:", data);
//       resolve({ success: true });
//     }, 2000);
//   });
// };
// const BusinessForm = () => {
//   const [files, setFiles] = useState([]);
//   const [formData, setFormData] = useState({});
  
//   const { control, register, reset, getValues } = useForm({
//     defaultValues: {
//       userProfile: '',
//       incomeStream: '',
//       businessAge: '',
//       businessEvolution: '',
//       incomeAverage: '',
//       businessPercentage: '',
//       extraIncomePercentage: '',
//       businessAdmin: "",
//       homeType: '',
//       totalAmount: '',
//       initialAmount: '',
//       quote: '',
//     },
//   });

//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "incomeSources",
//   });

//   const mutation = useMutation({
//     mutationFn: postData,
//     onSuccess: () => {
//       alert("Formulario enviado con éxito");
//       reset();
//       setFiles([]);
//       setFormData({});
//     },
//   });

//   // // Guardar datos por paso correctamente
//   // const handleStepSubmit = () => {
//   //   const currentData = getValues();
//   //   console.log("🚀 ~ handleStepSubmit ~ currentData:", currentData)
    
//   //   setFormData((prev) => ({ ...prev, ...currentData }));
//   // };

//   const handleStepSubmit = () => {
//     const currentData = getValues();
//     setFormData((prev) => ({ ...prev, ...currentData }));
//   };
  

//   // Enviar datos finales
//   // const handleFinalSubmit = () => {
    
//   //   const finalData = {
//   //     ...formData,
//   //     ...getValues(),
//   //     files: files.map((file) => file.name),
//   //   };
    
//   //   console.log("Datos enviados: Mitate", finalData);
//   //   mutation.mutate(finalData);
//   // };
//   const handleFinalSubmit = () => {
//     const finalData = {
//       ...formData,  // ← Ahora contiene los datos previos
//       ...getValues(),  
//       files: files.map((file) => file.name),
//     };
  
//     console.log("Datos enviados:", finalData);
//     mutation.mutate(finalData);
//   };
  

//   // Paso 1: Información del negocio
//   const getBusinessInfoView = () => (
//     <Form fields={formFields} showButton={false}>
//       <DynamicList 
//         fields={fields} 
//         register={register} 
//         append={append} 
//         remove={remove} 
//         title="Presencia Digital" 
//         name="digitalWebs" 
//         options={['Página web', 'Mercado en libre']} 
//       />
//     </Form>
//   );

//   // Paso 2: Carga de archivos
//   const getUploadFilesView = () => (
//     <>
//       <Form fields={formFieldsSecondStep} showButton={false} />
//       <Dropzone files={files} setFiles={setFiles} />
//     </>
//   );

//   // Paso 3: Revisión final y envío
//   const getFinalReviewView = () => (
//     <>
//      <Form fields={formFieldsLastStep} showButton={false} />
//       {/* <button onClick={handleFinalSubmit} >
//         {mutation.isLoading ? "Enviando..." : "Enviar"}
//       </button> */}
//       {/* <Button onClick={handleFinalSubmit}>Finalizar</Button> */}
//       <Button onClick={handleFinalSubmit}>
//       {mutation.isLoading ? "Enviando..." : "Finalizar"}
//     </Button>
//     </>
//   );

//   const steps = ["Ingresos", "Administración", "Meta"];
//   const stepContents = [getBusinessInfoView(), getUploadFilesView(), getFinalReviewView()];

//   return (
//     <Container maxWidth="sm" sx={{ mt: 5 }}>
//      <HorizontalLinearStepper 
//         stepContents={stepContents} 
//         steps={steps} 
//         handleStepSubmit={handleStepSubmit}  // ← Asegurar datos en cada paso
//         disabled={mutation.isLoading}
//       />

//       {/* <HorizontalLinearStepper stepContents={stepContents} steps={steps} handleOnCLick={handleFinalSubmit} disabled={mutation.isLoading}/> */}
//     </Container>
//   );
// };

export default BusinessForm;
