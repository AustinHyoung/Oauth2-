import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';

const Header = () => {
  return (
    <header>
      <BrowserView>
        <div className="flex justify-end h-20" style={{ border: '1px solid red' }}>
          <ul className="flex justify-center items-center mx-3">
            <li className="mx-3 py-4 cursor-pointer">
              <Link to="/reservation">RESERVATION</Link>
            </li>
            <li className="mx-3 py-4 cursor-pointer">
              <Link to="/reservation">ABOUT HOTEL</Link>
            </li>
            <li className="mx-3 py-4 cursor-pointer">
              <Link to="/reservation">ACCOMMODATION</Link>
            </li>
            <li className="mx-3 py-4 cursor-pointer">
              <Link to="/reservation">FACILITIES</Link>
            </li>
            <li className="mx-3 py-4 cursor-pointer">
              <Link to="/reservation">SPECIAL OFFER</Link>
            </li>
          </ul>

          <ul className="flex justify-end items-center text-sm mx-3">
            <li className="mx-3 py-4 cursor-pointer">로그인</li>
            <li className="mx-3 py-4 cursor-pointer">예약확인</li>
            <li className="mx-3 py-4 cursor-pointer">오시는길</li>
          </ul>
        </div>
      </BrowserView>
      <MobileView>123123123123</MobileView>
    </header>
  );
};

export default Header;
