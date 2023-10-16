import React, { useState } from 'react';

// type 정리 고려
type c = {
  onCloseHandled: (val: boolean) => void;
};

const SidebarComponent = (props: c) => {
  const [closeState, setCloseState] = useState(false);

  const handleEvent = () => {
    setCloseState(false);
    props.onCloseHandled(closeState);
  };

  return (
    <div
      style={{
        position: 'absolute',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid red',
        width: '20%',
        backgroundColor: 'gray',
      }}
    >
      <div style={{ padding: 10, textAlign: 'end' }}>
        <span style={{ textAlign: 'end', cursor: 'pointer' }} onClick={handleEvent}>
          X
        </span>
      </div>
      <div style={{ fontSize: '2rem', padding: 10, textAlign: 'center' }}>Menu-Title</div>
      <div style={{ fontSize: '1.5rem', padding: 10, textAlign: 'center' }}>Menu1</div>
      <div style={{ fontSize: '1.5rem', padding: 10, textAlign: 'center' }}>Menu2</div>
      <div style={{ fontSize: '1.5rem', padding: 10, textAlign: 'center' }}>Menu3</div>
      <div style={{ fontSize: '1.5rem', padding: 10, textAlign: 'center' }}>Menu4</div>
      <div style={{ fontSize: '1.5rem', padding: 10, textAlign: 'center' }}>Menu5</div>
      <div style={{ fontSize: '1.5rem', padding: 10, textAlign: 'center' }}>Menu6</div>
    </div>
  );
};

export default SidebarComponent;
