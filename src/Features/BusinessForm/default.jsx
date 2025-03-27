import { useState } from "react";

import { useDropzone } from "react-dropzone";
import { Container, Typography, IconButton, Box, Button, Paper } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useMutation } from "@tanstack/react-query";

import Form from "../../Components/Form/default";
import { formFields } from "./formFields";

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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"],
      "application/pdf": [".pdf"],
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
      "text/csv": [".csv"],
    },
    multiple: true,
    onDrop: (acceptedFiles) => {
      setFiles([...files, ...acceptedFiles]);
    },
  });
  

  const mutation = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      alert("Formulario enviado con éxito");
      setFiles([]);
    },
  });

  const handleFormSubmit = (data) => {
    const formData = {
      ...data,
      files: files.map(file => file.name),
    };
    
    mutation.mutate(formData);
  };
  
  const getUploadFilesView = () => {

    const getInputView = () => (
      <Paper
          {...getRootProps()}
          sx={{
            p: 3,
            textAlign: "center",
            border: "2px dashed #ccc",
            backgroundColor: isDragActive ? "#161622bf" : "#161622d6",
            cursor: "pointer",
            "&:hover": { borderColor: "#3f51b5" },
          }}
        >
          <input {...getInputProps()} />
          <CloudUploadIcon fontSize="large" color="text" />
          <Typography variant="body1" color="text">
            {isDragActive ? "Suelta los archivos aquí..." : "Arrastra y suelta archivos aquí o haz clic para seleccionar"}
          </Typography>
        </Paper>
    );

    const getFilesDetailsView = () => {
      if (files.length === 0) return null

      return (
        <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle1">Archivos seleccionados:</Typography>
            <ul>
              {files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </Box>
    )}

    return (
      <>
        <Typography variant="h6" align="left" sx={{ mt: 3 }}>Subir archivos</Typography>
        {getInputView()}
        {getFilesDetailsView()}
      </>
    );
  };

  const buttonText = mutation.isLoading ? "Enviando..." : "Registrar Negocio";
  

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
     <Typography variant="h4" sx={{ mb: 2}} >Queremos conocerte más</Typography>
      <Form 
        fields={formFields} 
        onSubmit={handleFormSubmit} 
        buttonText={buttonText}
       >
        {getUploadFilesView()}
      </Form>
    </Container>
  );
};

export default BusinessForm;
