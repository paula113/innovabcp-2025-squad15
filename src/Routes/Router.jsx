import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";
import AboutUser from "../pages/AboutUser";
import Achievements from "../pages/Achievements";
import Diagnosis from "../pages/Diagnosis";
import Home from "../pages/Home";
import HomeResults from "../pages/HomeResults";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";

const RouterApp = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/home" element={<HomeResults />} />
        <Route path="/diagnosis" element={<Diagnosis />} />

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
