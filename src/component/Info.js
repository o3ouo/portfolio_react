import React from 'react';

function Info() {
  return (
    <div className="info">
      <figure className='img'>
        <img src={`${process.env.PUBLIC_URL}/image/about_img.png`} alt="about_me" />
      </figure>
      <div className="list">
        <div className="name">
          <p className="title">Name</p>
          <p className="detail">유아정</p>
        </div>
        <div className="birth">
          <p className="title">Birth</p>
          <p className="detail">1997. 11. 10</p>
        </div>
        <div className="name">
          <p className="title">MBTI</p>
          <p className="detail">ENFP</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
