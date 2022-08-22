import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';

const AuthRoutes = () => {
  return (
    <Routes>
      {/* Default Routes */}
      <Route path={'*'} element={<Navigate to={'/dashboard'} />} />
      <Route path={'/'} element={<Navigate to={'/dashboard'} />} />
      {/* Others */}
      <Route path={'/dashboard'} element={<Dashboard />} />
      <Route path={'/profile'} element={<Profile />} />
      <Route path={'/home'} element={<Home />} />
    </Routes>
  );
};

export default React.memo(AuthRoutes);
