/* eslint-disable react/prop-types */
import * as React from "react";
import { Box, Stepper, Step, StepLabel, Button, Typography } from "@mui/material";


export default function HorizontalLinearStepper({ stepContents, steps, showGoBack }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => step === 1;
  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped);
      if (isStepSkipped(activeStep)) newSkipped.delete(activeStep);
      return newSkipped;
    });
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) throw new Error("This step cannot be skipped.");
    setActiveStep((prev) => prev + 1);
    setSkipped((prevSkipped) => new Set([...prevSkipped, activeStep]));
  };

  const handleReset = () => setActiveStep(0);

  const getStepsView = (label, index) => {
    const isActive = index === activeStep;
    const isCompleted = index < activeStep;
    
    return (
      <Step key={label} completed={!isStepSkipped(index)}>
        <StepLabel
          sx={{
            '& .MuiStepLabel-label': {
              color: isActive ? 'blue' : isCompleted ? '#03A673' : 'gray', // Label color
              fontWeight: isActive ? 'bold' : 'normal',
            },
            '& .MuiStepIcon-root': {
              color: isActive ? 'blue' : isCompleted ? '#03A673' : 'gray', // Icon color
            },
          }}
        >
          {label}
        </StepLabel>
      </Step>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map(getStepsView)}
      </Stepper>


      {activeStep === steps.length ? (
        <CompletionMessage onReset={handleReset} />
      ) : (
        <>
          <Box sx={{ mt: 2, mb: 1 }}>{stepContents[activeStep]}</Box>
          <NavigationControls
            activeStep={activeStep}
            isStepOptional={isStepOptional}
            onBack={handleBack}
            onNext={handleNext}
            onSkip={handleSkip}
            steps={steps}
            showGoBack={showGoBack}
          />
        </>
      )}
    </Box>
  );
}

// ✅ Extracted component for completion message
const CompletionMessage = ({ onReset }) => (
  <Box>
    <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - youre finished</Typography>
    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
      <Box sx={{ flex: "1 1 auto" }} />
      <Button onClick={onReset}>Volver a empezar</Button>
    </Box>
  </Box>
);

// ✅ Extracted component for navigation controls
// eslint-disable-next-line no-unused-vars
const NavigationControls = ({ activeStep, isStepOptional, onBack, onNext, onSkip, steps, showGoBack }) => (
  <Box>
    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
      {/* {showGoBack && <Button color="inherit" disabled={activeStep === 0} onClick={onBack} sx={{ mr: 1 }}>
        Atrás 
      </Button>}
      <Box sx={{ flex: "1 1 auto" }} />
      {/* {isStepOptional(activeStep) && (
        <Button color=" " onClick={onSkip} sx={{ mr: 1 }}>
          Saltar
        </Button>
      )} */}

      {activeStep !== steps.length - 1  && <Button fullWidth onClick={onNext}>{activeStep === steps.length - 1 ? "Finalizar" : "Continuar"}</Button>}
    </Box>
  </Box>
);
