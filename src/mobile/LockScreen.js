import React, { useState, useEffect } from 'react';
import '../css/LockScreen.css';
import StatusBar from './StatusBar';
import NowDate from '../component/NowDate';
import Widgets from '../component/Widgets';
import Notifications from '../component/Notifications';

function LockScreen() {
  const [time, setTime] = useState('');
  const [today, setToday] = useState([]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const month = now.getMonth();
      const options = { month: "long"};
      const usMonth = new Intl.DateTimeFormat("en-US", options).format(now);
      const day = now.getDay();
      const date = now.getDate();
      const hours = String(now.getHours());
      const minutes = String(now.getMinutes()).padStart(2, "0");

      setTime(`${hours}:${minutes}`);
      setToday([day, usMonth, date]);
    };  
    // 1분마다 updateTime 실행
    const timerId = setInterval(updateTime, 60000);
    // 컴포넌트가 마운트될 때 즉시 한 번 실행
    updateTime();

    // 언마운트 시 타이머 정리
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className='lock-screen'>
      <StatusBar time={time}/>
      <NowDate today={today} time={time}/>
      <Widgets />
      <Notifications />
      <div className="flash-camera-box">
        <figure className="flash">
          <img src={`${process.env.PUBLIC_URL}/image/flashlight-icon.png`} alt="flashlight-icon" />
        </figure>
        <figure className="camera">
          <img src={`${process.env.PUBLIC_URL}/image/camera-icon.png`} alt="flashlight-icon" />
        </figure>
      </div>
      <div className="swipe-up">
        <p>Swipe up to</p>
      </div>
      <div className="indicator">
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default LockScreen;
