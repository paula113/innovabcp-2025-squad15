import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#161622", // Blue
    },
    secondary: {
      main: "#03A673", // Pink
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
