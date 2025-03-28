import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#161622", // Blue
    },
    secondary: {
      main: "#03A673", // Pink
    },
    background: {
      lightBlue: '#1e1e2d'
    },
    text: {
      primary: "#f1f1f1", // Dark gray for main text
      secondary: "#a2a2a7", // Lighter gray for secondary text
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    button: {
      textTransform: "none",
    },
    marginBottom: '24px'
  },
  components: {
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": { borderBottomColor: "#f1f1f1" }, // Línea normal
          "&:after": { borderBottomColor: "#fff" }, // Línea cuando está en foco
          "&:hover:not(.Mui-disabled):before": { borderBottomColor: "#fff" }, // Hover
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#03A673', // Color de fondo
          color: '#ffffff', // Color de texto
          borderRadius: '50px', // Bordes redondeados
          textTransform: 'none', // Evita que el texto esté en mayúsculas
          padding: '16px',
          height: '54px',
          '&:hover': {
            backgroundColor: '#3700b3', // Color al pasar el mouse
          },
        },
      },
    },
    // MuiStepLabel: {
    //   styleOverrides: {
    //     label: {
    //       color: 'gray', // Default label color
    //       '&.Mui-active': {
    //         color: 'blue', // Active step
    //       },
    //       '&.Mui-completed': {
    //         color: 'green', // Completed step
    //       },
    //     },
    //   },
    // },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: 'gray', // Default icon color
          '&.Mui-active': {
            color: 'blue', // Active icon
          },
          '&.Mui-completed': {
            color: '#03A673', // Completed icon
          },
        },
      },
    },
  },
});

export default theme;
