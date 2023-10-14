import React from 'react';

const SidebarComponent = () => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', border: '1px solid red', width: '20%' }}>
      <div style={{ padding: 10, textAlign: 'end' }}>
        <span style={{ padding: 10, textAlign: 'end', cursor: 'pointer' }}>X</span>
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
