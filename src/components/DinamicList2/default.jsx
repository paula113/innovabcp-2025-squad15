/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Box, TextField, IconButton, Typography, Button, FormLabel, FormControl, Select, MenuItem, FormHelperText } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const DynamicList = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [btnText, setBtnText] = useState('Conectar')
  const { fields, register, append, remove, title, name, options = [ 'Mercado Libre'], errors } = props
// const  validation = { pattern: { value: /https?:\/\/.+/, message: "URL inválida" } };
 
  const handleFormSubmit = () => {
    setIsLoading(true);
    setBtnText('Conectando')
    // Simulate Auth
    setTimeout(() => {
      setIsLoading(false);
      setBtnText('Conectado')
    }, 3000);
  };


  return (
    <Box>
       <Box display="flex" flexDirection="row"  sx={{ justifyContent: 'space-between', alignContent: 'center', width: '100%' }}>
        <FormLabel color="text" align="left" sx={{ textAlign: 'left', alignContent: 'center' }}>
          {title}
        </FormLabel>
        <Button
          startIcon={<Add />}
          onClick={() => append({ type: "", source: "" })}
          sx={{
            background: "none",
            borderRadius: "4px",
            maxWidth: "20px",
            padding: "0px",
            height: "20px",
            "&:hover": {
              background: "none", // Evita cambios de color en hover
              boxShadow: "none", // Evita sombras en hover
            },
          }}
        ></Button>

      </Box>

      {fields.map((item, index) => (
        <Box key={item.id} display="flex" flexDirection="row" justifyContent="space-between" gap={2}  sx={{ alignContent: 'center', alignItems: 'flex-end', height: '48px' }}>
          {/* Select con validación */}
          <FormControl sx={{ width: '60%'}} error={!!errors?.[name]?.[index]?.type}>
            <Select
              {...register(`${name}.${index}.type`, { required: "Este campo es obligatorio" })}
              variant="standard"
              defaultValue=""
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "background.lightBlue",
                    boxShadow: "none",
                    borderRadius: 2,
                    mt: 0,
                  },
                },
              }}
            >
              <MenuItem value="" disabled>Selecciona una opción</MenuItem>
              {options.map((option, idx) => (
                <MenuItem key={idx} value={option}>{option}</MenuItem>
              ))}
            </Select>
            {errors?.[name]?.[index]?.type && (
              <FormHelperText>{errors[name][index].type.message}</FormHelperText>
            )}
          </FormControl>

          {/* Input con validación */}
          {/* <TextField
            {...register(`${name}.${index}.source`, validation)}
            label="Enlace"
            fullWidth
            margin="normal"
            variant="standard"
            error={!!errors?.[name]?.[index]?.source}
            helperText={errors?.[name]?.[index]?.source?.message}
            sx={{ margin: '0px' }}
          /> */}
          <div>
          <Button loading={isLoading} disabled={btnText === 'Conectado'} onClick={handleFormSubmit} variant="outlined" loadingPosition="end" sx={{height: '20px'}}>
             {btnText}
             {!isLoading && <OpenInNewIcon fontSize="small"/>}
          </Button>          
          <IconButton onClick={() => remove(index)}>
            <Delete color="error" />
          </IconButton>
          </div>
        </Box>
      ))}

   
    </Box>
  );
};

export default DynamicList;
