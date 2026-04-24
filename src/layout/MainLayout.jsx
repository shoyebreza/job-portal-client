
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './shared/Navbar';
const MainLayout = ({ children }) => {
  return (
    <div className="main-layout min-h-screen">
        <Navbar></Navbar>
      <Outlet>{children}</Outlet>
    </div>
  );
}
export default MainLayout;