import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import bcpLogo from '../../assets/bcp-logo.png';
import mainsonLogo from '../../assets/mainson-logo.png';

const Header = () => {
  const location = useLocation(); // Hook para obtener la ruta actual

  const routesToShowMainsonLogo = ['/build-your-credit', '/insights', '/plan'];
  const showMainsonLogo = routesToShowMainsonLogo.includes(location.pathname);

  return (
    <AppBar
      position='static'
      color='primary'
      sx={{ boxShadow: 'none', padding: 0 }}
      className='header'>
      <Toolbar
        sx={{
          padding: 0,
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <Box component='img' src={bcpLogo} alt='BCP Logo' sx={{ height: 25 }} />
        {showMainsonLogo && (
          <Box component='img' src={mainsonLogo} alt='BCP Logo' sx={{ height: 50 }} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
