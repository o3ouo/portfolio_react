import React, { useState } from 'react';
import useWindowDimensions from '../customHook/useWindowDimensions'
import NowDate from '../component/NowDate';
import Notifications from '../component/Notifications';
import LockWidgets from '../component/LockWidgets';

function LockScreen() {
  // useWindowDimensions 훅을 사용하여 윈도우 크기 가져오기
  const { width } = useWindowDimensions();

  // 반응형 배경 이미지
  const bgImage = width >= 768
    ? `${process.env.PUBLIC_URL}/image/ipad_bg.webp`
    : `${process.env.PUBLIC_URL}/image/iphone_bg.webp`;

  return (
    <div className='lock_screen'  style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover'}}>
      <div className="today_weather">
        <NowDate />
        <LockWidgets />
      </div>
      <div className="con_bottom">
        <Notifications />
        <div className="bottom">
          <div className="flash_camera_box">
            <figure className="flash">
              <img src={`${process.env.PUBLIC_URL}/image/flashlight_icon.webp`} alt="flashlight_icon" />
            </figure>
            <figure className="camera">
              <img src={`${process.env.PUBLIC_URL}/image/camera_icon.webp`} alt="camera_icon" />
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
