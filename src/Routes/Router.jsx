import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import AboutUser from "../pages/AboutUser";
import Achievements from "../pages/Achievements";
import Diagnosis from "../pages/Diagnosis";
import HomeResults from "../pages/HomeResults";
import NextSteps from "../pages/NextSteps";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";

const RouterApp = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/signup-for-credit" element={<Register />} />
        <Route path="/next-steps" element={<NextSteps />} />
        <Route
          path="/build-your-credit"
          element={
            <ProtectedRoute>
              <AboutUser />
            </ProtectedRoute>
          }
        />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/home" element={<HomeResults />} />
        <Route path="/diagnosis" element={<Diagnosis />} />

        <Route
          path="/"
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
