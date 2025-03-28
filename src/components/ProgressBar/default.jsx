import React from "react";
import { LinearProgress, Typography, Box } from "@mui/material";

// eslint-disable-next-line react/prop-types
const CustomProgressBar = ({ value, maxValue }) => {
  const percentage = (value / maxValue) * 100;

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      {/* Texto del porcentaje */}
      <Typography
        variant="h6"
        sx={{
          position: "absolute",
          top: -20,
          left: `${percentage}%`,
          transform: "translateX(-50%)",
          color: "#FFF",
          fontWeight: "bold",
          zIndex: 1
        }}
      >
        {Math.round(percentage)}%
      </Typography>

      {/* Barra de progreso */}
      <LinearProgress
        variant="determinate"
        value={percentage}
        sx={{
          height: 15,
          borderRadius: 8,
          backgroundColor: "#262626",
          "& .MuiLinearProgress-bar": {
            background: "linear-gradient(to right, #43E9A9, #1E1E2D)",
            borderRadius: 8,
          },
        }}
      />

      {/* Valor total */}
      <Typography
        sx={{
          position: "absolute",
          bottom: -20,
          right: 0,
          color: "#A0A0A0",
          fontSize: "0.8rem",
        }}
      >
        S/ {maxValue.toLocaleString()}
      </Typography>
    </Box>
  );
};

export default CustomProgressBar;


