/* eslint-disable react/prop-types */
import React from 'react'
import { Box, Paper, Typography } from '@mui/material';
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function Dropzone({ files = [], setFiles = () => {} }) {
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
}

Dropzone.propTypes = {}

export default Dropzone
