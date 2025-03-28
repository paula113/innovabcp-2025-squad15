/* eslint-disable react/prop-types */
import React from 'react'
import { Box, TextField, IconButton, Typography, Button, FormLabel, FormControl, Select, MenuItem, FormHelperText } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

const DynamicList = (props) => {
  const { fields, register, append, remove, title, name, options = ['Página web', 'Mercado Libre'], errors } = props
const  validation = { pattern: { value: /https?:\/\/.+/, message: "URL inválida" } };
  return (
    <Box>
       <Box display="flex" flexDirection="row"  sx={{ justifyContent: 'space-between', alignContent: 'center', width: '100%' }}>
        <FormLabel color="text" align="left" sx={{ textAlign: 'left', alignContent: 'center' }}>
          {title}
        </FormLabel>
        <Button startIcon={<Add />} onClick={() => append({ type: "", source: "" })} sx={{ background: 'none', borderRadius: '4px', maxWidth: '20px', padding: '0px', height: '20px' }}></Button>
      </Box>

      {fields.map((item, index) => (
        <Box key={item.id} display="flex" flexDirection="row" gap={2}  sx={{ alignContent: 'center', alignItems: 'flex-end', height: '48px' }}>
          {/* Select con validación */}
          <FormControl sx={{ width: '33%'}} error={!!errors?.[name]?.[index]?.type}>
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
          <TextField
            {...register(`${name}.${index}.source`, validation)}
            label="Enlace"
            fullWidth
            margin="normal"
            variant="standard"
            error={!!errors?.[name]?.[index]?.source}
            helperText={errors?.[name]?.[index]?.source?.message}
            sx={{ margin: '0px' }}
          />
          
          <IconButton onClick={() => remove(index)}>
            <Delete color="error" />
          </IconButton>
        </Box>
      ))}

   
    </Box>
  );
};

export default DynamicList;
