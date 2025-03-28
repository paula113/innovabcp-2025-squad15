/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Stack,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import Dropzone from '../DropoutZone/default';
import DynamicList from '../DynamicList/default';
import StoreIcon from '@mui/icons-material/Store';
import WorkIcon from '@mui/icons-material/Work';

const iconEl = {
  independent: <StoreIcon sx={{ color: "secondary.main" }} />,
  dependent: <WorkIcon sx={{ color: "secondary.main" }} /> 
}

const Form = ({ fields, onSubmit, buttonText = 'Enviar', children = null, showButton = true }) => {
  const [files, setFiles] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  // Manejo de listas dinámicas dentro del formulario
  const {
    fields: list,
    append,
    remove,
  } = useFieldArray({
    control,
    name: 'test',
  });

  const handleFormSubmit = (data) => {
    const formData = { ...data, files }; // Agregar los archivos a la data
    onSubmit(formData);
  };

  return (
    <Box display='flex' flexDirection='column'>
      <Box
        component='form'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '100%',
          mb: 4,
        }}>
        {fields.map(({ name, label, type, options, validation, min, max, textLimit, icon }) => {
          switch (type) {
            case 'radioButton':
              return (
                <FormControl key={name} error={!!errors[name]}>
                  <FormLabel color="text" align="left" sx={{marginBottom: '24px'}}>{label}</FormLabel>
                  <RadioGroup row {...register(name, validation)} 
                     value={selectedValue}
                     fullWidth
                     onChange={(e) => setSelectedValue(e.target.value)}
                    sx={{
                      justifyContent: "space-between",
                      gap: '17px'
                    }}
                  >
                    {options.map(({ label, value }) => (
                      <FormControlLabel key={value} value={value} 
                      fullWidth
                      control={<Radio sx={{ display: "none" }} />} // Oculta el radio button
                      label={
                        <Stack direction="row" alignItems="center" gap={1} fullWidth spacing={1}>
                          {React.cloneElement(iconEl[value], {
                            sx: { 
                              color: selectedValue === value ? "secondary.main" : "grey.500",
                              "&:hover": { borderColor: "secondary.main"},
                            }, // Cambia color dinámicamente
                          })}
                          {label}
                        </Stack>
                      }
                      sx={{
                        border: "2px solid",
                        borderColor: selectedValue === value ? "secondary.main" : "grey.500", // Cambia borde dinámicamente
                        borderRadius: "8px",
                        padding: "8px",
                        backgroundColor: '#1e1e2d',
                        width: '48%',
                        margin: '0px',
                        "&:hover": { borderColor: "secondary.main"},
                      }}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              );

            case 'select':
              return (
                <FormControl key={name} fullWidth mb={2}>
                  <FormLabel color='text' align='left' sx={{ marginBottom: 0 }}>
                    {label}
                  </FormLabel>
                  <Select
                    {...register(name, validation)}
                    variant='standard'
                    defaultValue=''
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          backgroundColor: 'background.lightBlue', // Change background color
                          boxShadow: 'none', // Remove shadow
                          borderRadius: 2, // Optional: rounded corners
                          mt: 0,
                        },
                      },
                    }}>
                    {options.map(({ label, value }) => (
                      <MenuItem
                        key={value}
                        value={value}
                        variant='standard'
                        sx={{
                          backgroundColor: 'none', // Color de fondo de cada opción
                          '&:hover': {
                            backgroundColor: '#03A673', // Color cuando pasas el mouse
                            color: 'white', // Texto en blanco para contraste
                          },
                        }}>
                        {label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              );

            case 'number':
              return (
                <FormControl fullWidth align='left' variant='standard' mb={2}>
                  <FormLabel>{label}</FormLabel>
                  <TextField
                    key={name}
                    {...register(name, validation)}
                    //  label={label}
                    type='number'
                    error={!!errors[name]}
                    helperText={errors[name]?.message}
                    fullWidth
                    variant='standard'
                    InputLabelProps={{ shrink: true }} // Hace que el label no flote dentro del input
                  />
                </FormControl>
              );

            case 'webProfiles':
              return (
                <DynamicList
                  fields={list}
                  register={register}
                  append={append}
                  remove={remove}
                  title='Presencia Digital'
                  name='digitalWebs'
                  options={['Mercado en libre', 'instagram', 'tiktok', 'Amazon']}                 />
              );

            case 'range':
              return (
                <Box key={name}>
                  <FormLabel color='text' align='left' mb={2}>
                    {label}
                  </FormLabel>
                  <Slider
                    {...register(name, validation)}
                    min={min}
                    max={max}
                    step={1000}
                    defaultValue={min}
                    marks
                    variant='standard'
                    valueLabelDisplay='on' // Muestra los valores siempre
                    valueLabelFormat={(value) => `S/ ${value.toLocaleString('es-PE')}`} // Formato moneda peruana
                    sx={{
                      color: 'secondary.main', // Usa el color "secondary" del tema
                      '& .MuiSlider-thumb': {
                        color: 'secondary.main', // Color del "punto" del slider
                      },
                      '& .MuiSlider-track': {
                        color: 'secondary.main', // Color de la línea del slider
                      },
                      '& .MuiSlider-rail': {
                        color: 'grey.300', // Color de la línea de fondo (opcional)
                      },
                    }}
                  />
                </Box>
              );

            case 'url':
              return (
                <FormControl fullWidth align='left' variant='standard' mb={2}>
                  <FormLabel>{label}</FormLabel>
                  <TextField
                    key={name}
                    {...register(name, validation)}
                    type='url'
                    error={!!errors[name]}
                    helperText={errors[name]?.message}
                    fullWidth
                    variant='standard'
                    InputLabelProps={{ shrink: true }} // Hace que el label no flote dentro del input
                  />
                </FormControl>
              );

            case 'dropZone':
              return (
                <Dropzone
                  files={files}
                  setFiles={setFiles}
                  register={register}
                  append={append}
                  remove={remove}
                />
              );

            case 'text':
            default:
              return (
                <>
                  <FormControl fullWidth align='left' variant='standard' mb={2}>
                    <FormLabel>{label}</FormLabel>
                    <TextField
                      key={name}
                      {...register(name, validation)}
                      type='text'
                      error={!!errors[name]}
                      helperText={errors[name]?.message}
                      fullWidth
                      variant='standard'
                      inputProps={textLimit ? { maxLength: textLimit } : {}}
                      slotProps={{
                        input: {
                          shrink: true,
                          ...(icon && {
                            startAdornment: (
                              <InputAdornment
                                position='start'
                                sx={{
                                  color: '#a2a2a7',
                                  width: '0.9em',
                                  marginRight: '20px',
                                }}>
                                {icon}
                              </InputAdornment>
                            ),
                          }),
                        },
                      }}
                    />
                  </FormControl>
                </>
              );
          }
        })}

        {children}
      </Box>

      {showButton && (
        <Button
          onClick={handleSubmit(handleFormSubmit)}
          type='submit'
          variant='contained'
          sx={{ color: 'black', fontWeight: 500, letterSpacing: '0.4px' }}>
          {buttonText}
        </Button>
      )}
    </Box>
  );
};

export default Form;
