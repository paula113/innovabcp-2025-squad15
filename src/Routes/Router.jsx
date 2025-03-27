import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { AuthProvider } from "../Context/AuthContext";
import AboutUser from "../pages/AboutUser";

const RouterApp = () => (
      <AuthProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
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

