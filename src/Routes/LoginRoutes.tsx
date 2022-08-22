import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const LoginRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default React.memo(LoginRoutes);
