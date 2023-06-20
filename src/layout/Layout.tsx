import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-full">
      <Header />
      <main className="h-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
