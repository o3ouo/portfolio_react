import React, { useState } from 'react';
import NowDate from '../component/NowDate';
import Notifications from '../component/Notifications';
import LockWidgets from '../component/LockWidgets';

function LockScreen() {

  return (
    <div className='lock_screen'>
      <div className="today_weather">
        <NowDate />
        <LockWidgets/>
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
