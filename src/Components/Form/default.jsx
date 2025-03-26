import { useForm } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";

const Form = ({ fields, onSubmit, buttonText = "Enviar" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%", mb: 4 }}>
      {fields.map(({ name, label, type, validation }) => (
        <TextField
          key={name}
          {...register(name, validation)}
          label={label}
          type={type}
          error={!!errors[name]}
          helperText={errors[name]?.message}
          fullWidth
        />
      ))}
      <Button type="submit" variant="contained" color="primary">
        {buttonText}
      </Button>
    </Box>
  );
};

export default Form;
