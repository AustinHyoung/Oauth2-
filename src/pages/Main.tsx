import Count from '../components/Count';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <div className="min-h-full">
        <div className="min-h-full">
          {Array(10)
            .fill(1)
            .map((v, i) => {
              return <h1 className="text-3xl font-bold underline">Hello</h1>;
            })}
          <Link to="/about">
            <div>VITE 번들러 테스트</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Main;
