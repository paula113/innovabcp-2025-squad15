import React from "react";
import LoginForm from "../Features/LoginForm/default";
import MainLayout from "../layouts/MainLayout";

const Login = () => {
  const showForm = true

  const getDetailsView = () => {
    if (!showForm) return null;
    return  <LoginForm />
  };

  return (
    <MainLayout>
      {getDetailsView()}
    </MainLayout>
  );
};

export default Login;
