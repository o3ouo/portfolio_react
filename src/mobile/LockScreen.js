import React, { useState, useEffect } from 'react';
import '../css/LockScreen.css';
import NowDate from '../component/NowDate';
import Weather from '../weather/Weather';
import Notifications from '../component/Notifications';

function LockScreen({ isLockScreenVisible }) {

  return (
    <div className='lock_screen'>
      <div className="today_weather">
        <NowDate />
        <Weather isLockScreenVisible={isLockScreenVisible}/>
      </div>
      <div className="con_bottom">
      <Notifications />
      <div className="bottom">
        <div className="flash_camera_box">
          <figure className="flash">
            <img src={`${process.env.PUBLIC_URL}/image/flashlight_icon.png`} alt="flashlight_icon" />
          </figure>
          <figure className="camera">
            <img src={`${process.env.PUBLIC_URL}/image/camera_icon.png`} alt="flashlight_icon" />
          </figure>
        </div>
        <div className="swipe_box">
          <div className="swipe_up">
            <p>Swipe up to</p>
          </div>
          <div className="indicator">
            <div className="bar"></div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default LockScreen;
