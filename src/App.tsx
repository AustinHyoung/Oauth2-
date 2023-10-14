import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Layout from './layout/Layout';
import Book from './pages/Book';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="/book" element={<Book />} />
    </Routes>
  );
};

export default App;
