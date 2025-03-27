import React from "react";
import RegisterFrom from "../Features/RegisterFrom/default";
import MainLayout from "../layouts/MainLayout";

const Register = () => {
  const showForm = true

  const getDetailsView = () => {
    if (!showForm) return null;
    return  <RegisterFrom />
  };

  return (
    <MainLayout>
      {getDetailsView()}
    </MainLayout>
  );
};

export default Register;
