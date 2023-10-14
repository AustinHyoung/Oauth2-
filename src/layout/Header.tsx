import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';

const Header = () => {
  return (
    <header>
      <BrowserView>
        <div className="flex justify-end h-20" style={{ border: '1px solid red' }}>
          <ul className="flex justify-end items-center text-sm mx-3">
            <li className="mx-3 py-4 cursor-pointer">로그인</li>
          </ul>
        </div>
      </BrowserView>
    </header>
  );
};

export default Header;
