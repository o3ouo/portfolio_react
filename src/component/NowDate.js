import React from 'react';

function NowDate({ today, time }) {
  console.log('today:', today, 'time:', time);

  const week = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fir", "Satur"];
  const day = today[0];

  return (
    <div className="now-date">
      <div className="today">
        <p className="day">{week[day]}day,&nbsp;</p>
        <p className="month">{today[1]}&nbsp;</p>
        <p className="date">{today[2]}</p>
      </div>
      <div className="big-time"><span>{time}</span></div>
    </div>
  );
}

export default NowDate;
