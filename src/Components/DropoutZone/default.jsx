/* eslint-disable react/prop-types */
import React from "react";
import { useDropzone } from "react-dropzone";
import { Box, Paper, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DocumentList from "../DocumentList/default";
// import DocumentList from "./DocumentList"; // Importa el componente DocumentList

const Dropzone = ({ files = [], setFiles = () => {} }) => {
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
      const newFiles = acceptedFiles.map((file) => ({
        id: crypto.randomUUID(), // Genera un ID único para cada archivo
        name: file.name,
        type: file.type,
        option: null, // Se actualizará cuando el usuario elija una opción
      }));
      setFiles([...files, ...newFiles]);
    },
  });

  // Actualizar la opción seleccionada en la lista de archivos
  const handleUpdateOption = (fileId, selectedOption) => {
    setFiles((prevFiles) =>
      prevFiles.map((file) =>
        file.id === fileId ? { ...file, option: selectedOption } : file
      )
    );
  };

  return (
    <>
      <Typography variant="h6" align="left" sx={{ mt: 3 }}>
        Subir archivos
      </Typography>

      {/* Área de arrastrar y soltar */}
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
          {isDragActive
            ? "Suelta los archivos aquí..."
            : "Arrastra y suelta archivos aquí o haz clic para seleccionar"}
        </Typography>
      </Paper>

      {/* Lista de archivos con opciones */}
      {files.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1">Archivos seleccionados:</Typography>
          <DocumentList files={files} onSelectOption={handleUpdateOption} />
        </Box>
      )}
    </>
  );
};

export default Dropzone;
