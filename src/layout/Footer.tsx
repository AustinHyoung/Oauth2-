import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-around items-center h-1/5 py-6">
      <div className="text-center">
        <span>개인정보처리방침</span>
      </div>
      <div className="text-center">
        <p>
          주소: 경기도 부천시 평천로 680 | 전화번호: 010-2297-7656
          <br />
          대표자: 정학영 | 이메일: jhy2297@naver.com | 깃허브: https://github.com/AustinHyoung
          <br />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
