import Count from '../components/Count';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <div className="header"></div>
      <div className="wrapper">
        <div className="container">
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <Link to="/about">
            <div>VITE 번들러 테스트</div>
          </Link>
        </div>
      </div>
      <div className="footer"></div>
    </>
  );
};

export default Main;
