import React, { useState, useEffect } from 'react';

function StatusBar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");

      setTime(`${hours} : ${minutes}`);
    };

    // 1초마다 updateTime 실행
    const timerId = setInterval(updateTime, 1000);
    // 컴포넌트가 마운트될 때 즉시 한 번 실행
    updateTime();

    // 언마운트 시 타이머 정리
    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <h2>Status Bar</h2>
      <p>{time}</p>
    </div>
  );
}

export default StatusBar;