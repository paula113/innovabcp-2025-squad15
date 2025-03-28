import { Box, Container } from '@mui/material';
import React, { FC } from 'react';
import Header from '../components/Header/header';
import './main-layout.scss';

type Props = {
  children: React.ReactNode;
};

const MainLayout: FC<Props> = ({ children }: Props) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      minHeight='100vh'
      sx={{ backgroundColor: 'primary.main' }}
      className='main-layout'>
      <Header />
      <Container component='main' sx={{ flexGrow: 1, mt: 3, padding: 0 }}>
        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;
