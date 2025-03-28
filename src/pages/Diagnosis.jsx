import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Stack, Button, Grid } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import MainLayout from "../layouts/MainLayout";
import { useNavigate } from "react-router-dom";
import loader from "../assets/loader.svg";
import { apiData, criteria } from "../../public/data";
import PropTypes from "prop-types";
//import { data } from "../../public/data";

const ColorLabel = ({ color, label }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box
        sx={{
          width: 20,
          height: 20,
          backgroundColor: color,
          borderRadius: "50%",
          mr: 1.5,
        }}
      />
      <Typography>{label}</Typography>
    </Box>
  );
};

ColorLabel.propTypes = {
  color: PropTypes.string.isRequired, // Validar 'color'
  label: PropTypes.string.isRequired, // Validar 'label'
};

const CreditEvaluation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  // const [chartData, setChartData] = useState([]);
  console.log(apiData, "chartData");
  const handleSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/plan");
    }, 5000);
  };

  // useEffect(() => {
  // fetchAndTransformData()
  //   .then((data) => setChartData(data))

  // setChartData(apiData);
  // }, []);

  const chartData = Object.entries(apiData.data).map(([key, value]) => ({
    id: key,
    value: value.score,
    label: criteria[key]?.label || key,
    // Incluimos el color si tu componente lo admite:
    color: value.qualify ? criteria[key].color : null,
  }));

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <MainLayout>
      <Container sx={{ mt: 5 }} maxWidth="sm">
        {isLoading ? (
          <Box
            component="img"
            src={loader}
            alt="Cargando..."
            className="rotating-svg"
            sx={{ height: 100, display: "block", mx: "auto" }}
          />
        ) : (
          <>
            <Typography variant="h4" textAlign="center" mb={7} mt={3}>
              Diagnóstico
            </Typography>

            <Box display="flex" flexDirection="column" alignItems="center">
              <PieChart
                series={[
                  {
                    data: chartData,
                    innerRadius: 86,
                    outerRadius: 109,
                    paddingAngle: 6,
                    cornerRadius: 10,
                    startAngle: -122,
                  },
                ]}
                width={400}
                height={250}
                sx={{ "& .MuiChartsLegend-root": { display: "none" } }}
              />
            </Box>

            <Stack spacing={2} mt={6} mb={6} alignItems="center">
              <Grid container spacing={2}>
                {Object.entries(apiData.data).map(([key]) => (
                  <ColorLabel
                    key={key}
                    color={criteria[key]?.color || null}
                    label={criteria[key]?.label || key}
                  />
                ))}
              </Grid>
            </Stack>

            <Typography variant="p" textAlign="center" mb={7}>
              Tienes estos problemas pero te vamos ayudar para que mejores tu
              salud financiera.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                mt: 10,
                width: "398px",
                borderRadius: "20px",
                height: "54px",
                color: "black",
                fontSize: "20px",
              }}
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Continuar
            </Button>
          </>
        )}
      </Container>
    </MainLayout>
  );
};

export default CreditEvaluation;
