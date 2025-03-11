import React from 'react';

function Today({ today, time }) {
  console.log('today:', today, 'time:', time);

  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const day = week[today[1]];
  const month = today[0];

  return (
    <div>
      <p className="day">{day}day</p>
      <p className="month">{month}</p>
    </div>
  );
}

export default Today;
