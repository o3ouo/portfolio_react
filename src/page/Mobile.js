import React from 'react';
import '../css/Mobile.css';
import LockScreen from '../mobile/LockScreen';
import useTouchEvent from '../customHook/useTouchEvent';
import HomeScreen from '../mobile/HomeScreen';

function Mobile() {
  const { touchStart, onTouchStart, onTouchMove, onTouchEnd } = useTouchEvent();

  return (
    <div className='mobile' onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      {
        touchStart ? (
          <HomeScreen />
        ) : (
          <LockScreen />
        ) 
      }
    </div>
  );
}

export default Mobile;
