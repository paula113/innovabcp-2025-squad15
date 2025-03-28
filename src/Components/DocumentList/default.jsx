/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { List, ListItem, ListItemText, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DescriptionIcon from "@mui/icons-material/Description";

const DocumentList = ({ files, onSelectOption }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleClick = (event, file) => {
    setAnchorEl(event.currentTarget);
    setSelectedFile(file);
  };

  const handleClose = (option) => {
    if (option && selectedFile) {
      onSelectOption(selectedFile.id, option);
    }
    setAnchorEl(null);
    setSelectedFile(null);
  };

  return (
    <List>
      {files.map((file) => (
        <ListItem key={file.id} secondaryAction={
          <>
            <IconButton edge="end" onClick={(e) => handleClick(e, file)}>
              <MoreVertIcon color="secondary"/>
            </IconButton>
          </>
        }>
          <DescriptionIcon sx={{ mr: 2 }}  />
          <ListItemText
            primary={file.name}
            secondary={file.option ? `Opción: ${file.option}` : "Selecciona una opción"}
          />
        </ListItem>
      ))}

      {/* Menú de opciones */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleClose(null)}
        sx={{
          "& .MuiPaper-root": {
            bgcolor: "#161622", 
            color: "#fff", 
          },
        }}
        >
        <MenuItem
           sx={{
            backgroundColor: "none", 
            "&:hover": {
              backgroundColor: "#03A673", 
              color: "white", 
            },
          }}
          onClick={() => handleClose("Boletas")}>Boletas</MenuItem>
        <MenuItem  
          sx={{
            backgroundColor: "none", 
            "&:hover": {
              backgroundColor: "#03A673", 
              color: "white", 
            },
          }}
         onClick={() => handleClose("Estado de Cuenta")}>Estado de Cuenta</MenuItem>
      </Menu>
    </List>
  );
};

export default DocumentList;
