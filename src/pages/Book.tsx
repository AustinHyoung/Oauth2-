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
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <div style={{ height: '100%', width: '100%', backgroundColor: '#ecf0f1' }}>
        {/* {close && <SidebarComponent onCloseHandled={handleCloseSide} />} */}
        <div onClick={handleOpenSide}>122222222222222222222222222222222222222222222222dd</div>
      </div>
      {close && (
        <div style={{ position: 'absolute', height: '100%', width: '100%', top: 0, left: 0 }}>
          <SidebarComponent onCloseHandled={handleCloseSide} />
        </div>
      )}
    </div>
  );
};

export default Book;
