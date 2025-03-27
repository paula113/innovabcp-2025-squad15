/* eslint-disable react/prop-types */
import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, InputAdornment } from "@mui/material";

const Form = ({ fields, onSubmit, buttonText = "Enviar", children = null, icon = null }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        mb: 4,
      }}
    >
      {fields.map(({ name, label, type, validation }) => (
        <TextField
          key={name}
          {...register(name, validation)}
          label={label}
          type={type}
          error={!!errors[name]}
          helperText={errors[name]?.message}
          fullWidth
          variant="standard"
          slotProps={ icon && {
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  {icon}
                </InputAdornment>
              ),
            },
          }}
        />
      ))}
      {children}
      <Button type="submit" variant="contained" color="secondary">
        {buttonText}
      </Button>
    </Box>
  );
};

export default Form;
