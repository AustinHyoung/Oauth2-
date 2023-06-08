import Count from '../components/Count';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  const [count, setCount] = useState(0);

  const handleOnClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>count: {count}</p>
      <Count onClick={handleOnClick} />
      <Link to="/about">
        <div>VITE 번들러 테스트</div>
      </Link>
    </div>
  );
};

export default Main;
