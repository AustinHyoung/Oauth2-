import SidebarComponent from '../components/SidebarComponent';
import React, { useState } from 'react';

const Book = () => {
  const [close, setClose] = useState(false);
  const handleOpenSide = () => {
    setClose(true);
  };

  const handleCloseSide = (data: boolean) => {
    setClose(data);
  };

  return (
    <div style={{ position: 'relative', height: '100%', backgroundColor: '#ecf0f1' }}>
      {close && <SidebarComponent onCloseHandled={handleCloseSide} />}
      <div onClick={handleOpenSide}>122222222222222222222222222222222222222222222222dd</div>
    </div>
  );
};

export default Book;
