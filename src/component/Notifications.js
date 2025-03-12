import React from 'react';
import '../css/Notifications.css';

function Content({ title, description, icon }) {
  return (
    <div className="content-box">
      <div className="inner">
        <figure className="con-img">
          <img src={`${process.env.PUBLIC_URL}/image/${icon}`} alt={title} />
        </figure>
        <div className="text-box">
          <p className="title">{title}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
}

function Notifications() {
  const list = [
    {title: "Hello, this is Yoo A-jeong.", description: "Wellcome to my Portfolio 2025.", icon: ""},
    {title: "About Me", description: "나에 대한 정보", icon: "about-icon.jpg"},
    {title: "Web Redesign", description: "홈페이지 리뉴얼", icon: "file-icon.jpg"},
    {title: "Phil’s Finest", description: "클론 코딩", icon: "phils-icon.png"},
    {title: "Play Press", description: "뉴스, 날씨, 미니게임 구성 (React)", icon: "play-press-icon.png"},
    {title: "Portfolio 2024", description: "Vanilla JavaScript로 제작되었습니다", icon: "portfolio-icon.png"},
  ]

  return (
    <div className="notifications">
      <div className="first-content">
        <Content title={list[0].title} description={list[0].description} icon={list[0].icon}/>
      </div>
      {
        list.map((con, index) => (
          index > 0 && index < 5 ? (
            <div className="middle">
              <Content key={index} title={con.title} description={con.description} icon={con.icon}/>
            </div>
          ) : (
            ""
          )
        ))
      }
      <div className="last-content">
        <Content title={list[5].title} description={list[5].description} icon={list[5].icon}/>
        <div className="bg"></div>
      </div>
    </div>
  );
}

export default Notifications;
