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
  },
});

export default theme;
