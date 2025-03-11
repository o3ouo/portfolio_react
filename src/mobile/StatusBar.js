import React from 'react';
import '../css/StatusBar.css';

function StatusBar({ time }) {
  return (
    <div className='status-bar'>
      <div className="inner">
        <p className="time">{time}</p>
        <div className="levels">
          <figure className='data-icon'>
            <img src={`${process.env.PUBLIC_URL}/image/data-icon.png`} alt="data-icon" />
          </figure>
          <figure className='wifi-icon'>
            <img src={`${process.env.PUBLIC_URL}/image/wifi-icon.png`} alt="wifi-icon" />
          </figure>
          <figure className='battery-icon'>
            <img src={`${process.env.PUBLIC_URL}/image/battery-icon.png`} alt="battery-icon" />
          </figure>
        </div>
      </div>
      </div>
  );
}

export default StatusBar;