// import { Box, Container, Typography } from "@mui/material";
// import Form from "../../components/Form/default";
// import { Link } from "react-router-dom";
// import PersonIcon from '@mui/icons-material/Person';
// import React, { useState } from "react";
// import HorizontalLinearStepper from "../../components/VerticalStepper/default";
// import { formFields, formFieldsLastStep, formFieldsSecondStep } from "../BusinessForm/formFields";

// const UserProfile = () => {

//   const [showGoBack, setShowGoBack] = useState(true)
//     // Definición de vistas para cada paso del formulario
//     const getBusinessInfoView = () => (
//       <Form  fields={formFields} />
//     );
  
//     const getUploadFilesView = () => (
//       <>
//         <Form fields={formFieldsSecondStep}  />
//       </>
//     );

//     const handleFinalSubmit = (data) => {
//       setShowGoBack(false)
//       console.log("🚀 ~ handleFinalSubmit ~ data:", data)
//       // setFormData((prev) => {
//       //   const updatedData = { ...prev, ...getValues(), files: files.map((file) => file.name) };
//       //   console.log("Datos enviados después de actualizar:", updatedData);
//       //   mutation.mutate(updatedData);
//       //   return updatedData;
//       // });
//     };
  
//     const getFinalReviewView = () => (
//       <>
//         <Form onSubmit={handleFinalSubmit}  fields={formFieldsLastStep}  />
//       </>
//     );
 

//   // Definición de pasos del formulario
//   const steps = ["Ingresos", "Administración", "Meta"];
//   const stepContents = [getBusinessInfoView(), getUploadFilesView(), getFinalReviewView()];

//    return (
//      <Container maxWidth="sm" sx={{ mt: 5 }}>
//        <HorizontalLinearStepper
//          stepContents={stepContents} 
//          steps={steps}
//          showGoBack={showGoBack}
//        />
//      </Container>
//    );
// };

// export default UserProfile;


export default {}