/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Box, TextField, IconButton, Typography, Button, FormLabel, FormControl, Select, MenuItem, FormHelperText } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const DynamicList = (props) => {
  const { fields, register, append, remove, title, name, options = ['Mercado Libre'], errors } = props;
  const [buttonStates, setButtonStates] = useState({});

  const handleFormSubmit = (index) => {
    setButtonStates((prev) => ({
      ...prev,
      [index]: { isLoading: true, btnText: 'Conectando' },
    }));

    setTimeout(() => {
      setButtonStates((prev) => ({
        ...prev,
        [index]: { isLoading: false, btnText: 'Conectado' },
      }));
    }, 3000);
  };

  return (
    <Box>
      <Box display="flex" flexDirection="row" sx={{ justifyContent: 'space-between', alignContent: 'center', width: '100%' }}>
        <FormLabel color="text" align="left" sx={{ textAlign: 'left', alignContent: 'center' }}>
          {title}
        </FormLabel>
        <Button
          startIcon={<Add />}
          onClick={() => append({ type: '', source: '' })}
          sx={{
            background: 'none',
            borderRadius: '4px',
            maxWidth: '20px',
            padding: '0px',
            height: '20px',
            '&:hover': {
              background: 'none',
              boxShadow: 'none',
            },
          }}
        />
      </Box>

      {fields.map((item, index) => {
        const { isLoading = false, btnText = 'Conectar' } = buttonStates[index] || {};

        return (
          <Box key={item.id} display="flex" flexDirection="row" justifyContent="space-between" gap={2} sx={{ alignContent: 'center', alignItems: 'flex-end', height: '48px' }}>
            <FormControl sx={{ width: '60%' }} error={!!errors?.[name]?.[index]?.type}>
              <Select
                {...register(`${name}.${index}.type`, { required: 'Este campo es obligatorio' })}
                variant="standard"
                defaultValue=""
                MenuProps={{
                  PaperProps: {
                    sx: {
                      backgroundColor: 'background.lightBlue',
                      boxShadow: 'none',
                      borderRadius: 2,
                      mt: 0,
                    },
                  },
                }}
              >
                <MenuItem value="" disabled>
                  Selecciona una opción
                </MenuItem>
                {options.map((option, idx) => (
                  <MenuItem key={idx} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
              {errors?.[name]?.[index]?.type && <FormHelperText>{errors[name][index].type.message}</FormHelperText>}
            </FormControl>

            <div>
              <Button
                loading={isLoading}
                disabled={btnText === 'Conectado'}
                onClick={() => handleFormSubmit(index)}
                variant="outlined"
                loadingPosition="end"
                sx={{
                  border: '2px solid',
                  borderColor: 'secondary.main',
                  padding: '8px',
                  backgroundColor: '#1e1e2d',
                  height: '48px',
                  margin: '0px',
                  color: 'white'
                }}
              >
                {btnText}
                {!isLoading && <OpenInNewIcon fontSize="small" />}
              </Button>
              <IconButton onClick={() => remove(index)}>
                <Delete color="error" />
              </IconButton>
            </div>
          </Box>
        );
      })}
    </Box>
  );
};


export default DynamicList;
