import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React from "react";

const Achievements = () => {
  const radioGroup = {
    departamento: "Comprar un departamento",
    costo: "Reducir costos",
    inicial: "Ahorrar para inicial",
    cuotas: "Pagar menos cuotas",
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <FormControl className="bg-white p-6 rounded-lg shadow-md">
        <FormLabel id="demo-radio-buttons-group-label">
          ¿Qué quieres lograr?
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="departamento"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="departamento"
            control={<Radio />}
            label={radioGroup.departamento}
          />
          <FormControlLabel
            value="costo"
            control={<Radio />}
            label={radioGroup.costo}
          />
          <FormControlLabel
            value="inicial"
            control={<Radio />}
            label={radioGroup.inicial}
          />
          <FormControlLabel
            value="cuotas"
            control={<Radio />}
            label={radioGroup.cuotas}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Achievements;
