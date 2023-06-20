import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="h-full">
      <Header />
      <main className="min-h-full pb-12 bg-amber-200">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
