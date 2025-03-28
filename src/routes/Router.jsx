import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import { AuthProvider } from '../context/AuthContext';
import Achievements from '../pages/Achievements';
import BuildYourCredit from '../pages/BuildYourCredit';
import NextSteps from '../pages/NextSteps';
import { default as Register, default as SignUp } from '../pages/SignUp';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from '../context/AuthContext';

const RouterApp = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/signup-for-credit' element={<SignUp />} />
        <Route path='/next-steps' element={<NextSteps />} />
        <Route
          path='/build-your-credit'
          element={
            <ProtectedRoute>
              <BuildYourCredit />
            </ProtectedRoute>
          }
        />
        <Route path='/achievements' element={<Achievements />} />
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <NextSteps />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  </AuthProvider>
);

export default RouterApp;
