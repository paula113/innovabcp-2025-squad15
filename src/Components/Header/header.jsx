import { AppBar, Toolbar, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import mainLogo from "../../assets/bcp-logo.png";
import mainsonLogo from "../../assets/mainson-logo.png";

const Header = () => {
  const location = useLocation(); // Hook para obtener la ruta actual

  const mainLogoList = ["/login", "/register", "/"];
  const showMainLogo = mainLogoList.includes(location.pathname);
  const logo = !showMainLogo ? mainsonLogo : mainLogo;

  return (
    <AppBar position="static" color="primary" sx={{ boxShadow: "none" }}>
      <Toolbar >
      <Box component="img" src={logo} alt="BCP Logo" sx={{ height: 40 }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
