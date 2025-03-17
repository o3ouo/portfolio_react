import React from 'react';
import '../css/StatusBar.css';

function StatusBar({ time }) {
  return (
    <div className='status_bar'>
      <div className="inner">
        <p className="time">{time}</p>
        <div className="levels">
          <figure className='data_icon'>
            <img src={`${process.env.PUBLIC_URL}/image/data-icon.webp`} alt="data_icon" />
          </figure>
          <figure className='wifi-icon'>
            <img src={`${process.env.PUBLIC_URL}/image/wifi_icon.webp`} alt="wifi_icon" />
          </figure>
          <figure className='battery-icon'>
            <img src={`${process.env.PUBLIC_URL}/image/battery_icon.webp`} alt="battery_icon" />
          </figure>
        </div>
      </div>
      </div>
  );
}

export default StatusBar;