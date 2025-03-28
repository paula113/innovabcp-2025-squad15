import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Logros from "../pages/Logros";
import AboutUser from "../pages/AboutUser";
import HomeResults from "../pages/HomeResults";
import Diagnosis from "../pages/Diagnosis";
import Roadmap from "../pages/Roadmap";
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from '../context/AuthContext';

const RouterApp = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/logros" element={<Logros />} />
        <Route path="/home" element={<HomeResults />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/plan" element={<Roadmap />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about-credit"
          element={
            <ProtectedRoute>
              <AboutUser />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  </AuthProvider>
);

export default RouterApp;
