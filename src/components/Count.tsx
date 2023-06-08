import React from 'react';

type CountProps = {
  onClick: () => void;
};

const Count = ({ onClick }: CountProps) => {
  return (
    <div>
      <button onClick={onClick}>1 증가</button>
    </div>
  );
};

export default Count;
