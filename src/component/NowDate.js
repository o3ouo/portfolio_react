import React, {useState, useEffect } from 'react';

function NowDate() {
  const [time, setTime] = useState('');
  const [today, setToday] = useState([]);
  const week = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fir", "Satur"];
  const day = today[0];

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
    // 1쵸마다 updateTime 실행
    const timerId = setInterval(updateTime, 1000);
    // 컴포넌트가 마운트될 때 즉시 한 번 실행
    updateTime();

    // 언마운트 시 타이머 정리
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="now_date">
      <div className="today">
        <p className="day">{week[day]}day,&nbsp;</p>
        <p className="month">{today[1]}&nbsp;</p>
        <p className="date">{today[2]}</p>
      </div>
      <div className="big_time"><span>{time}</span></div>
    </div>
  );
}

export default NowDate;
