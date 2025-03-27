import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#161622", // Blue
    },
    secondary: {
      main: "#03A673", // Pink
    },
    text: {
      primary: "#f1f1f1", // Dark gray for main text
      secondary: "#fff", // Lighter gray for secondary text
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    button: {
      textTransform: "none",
    },
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
