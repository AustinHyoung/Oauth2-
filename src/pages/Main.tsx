import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Link to="/about">
        <div>VITE 번들러 테스트</div>
      </Link>
    </div>
  );
};

export default Main;
