import Count from '../components/Count';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <div className="snap-mandatory snap-y">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <Link to="/book">
          <div>Go to booking system</div>
        </Link>
        {/* <div className="snap-center h-screen bg-green-50">
          <div className="">Contents1</div>
        </div>
        <div className="snap-center h-screen bg-yellow-50">Contents2</div>
        <div className="snap-center h-screen bg-blue-50">Contents3</div>
        <div className="snap-center h-screen bg-red-50">Contents4</div> */}
      </div>
      {/* 스크롤 할때 포커싱 해주는 클래스 */}
      {/* <div className="overflow-y-scroll h-60 snap-mandatory snap-y">
        <div className="h-60 bg-slate-500 snap-center">Contents1</div>
        <div className="h-60 bg-slate-600 snap-center">Contents1</div>
        <div className="h-60 bg-slate-700 snap-center">Contents1</div>
        <div className="h-60 bg-slate-800 snap-center">Contents1</div>
        <div className="h-60 bg-slate-900 snap-center">Contents1</div>
      </div> */}
    </>
  );
};

export default Main;
