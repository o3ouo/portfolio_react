import React, { useState, useEffect } from 'react';
import '../css/LockScreen.css';
import StatusBar from './StatusBar';
import Today from '../component/Today';


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
      console.log(now)
      console.log(day, usMonth, date, options);
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
      <Today today={today} time={time}/>
    </div>
  );
}

export default LockScreen;
