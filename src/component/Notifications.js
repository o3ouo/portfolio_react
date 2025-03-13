import React from 'react';
import '../css/Notifications.css';

function Content({ title, description, icon }) {
  return (
    <div className="inner">
      <figure className="con_img">
        <img src={`${process.env.PUBLIC_URL}/image/${icon}`} alt={title} />
      </figure>
      <div className="text_box">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

function Notifications() {
  const list = [
    {title: "Hello, this is Yoo A-jeong.", description: "Wellcome to my Portfolio 2025.", icon: ""},
    {title: "About Me", description: "나에 대한 정보", icon: "about_icon.jpg"},
    {title: "Web Redesign", description: "홈페이지 리뉴얼", icon: "file_icon.jpg"},
    {title: "Phil’s Finest", description: "클론 코딩", icon: "phils_icon.png"},
    {title: "Play Press", description: "뉴스, 날씨, 미니게임 구성 (React)", icon: "play_press_icon.png"},
    {title: "Portfolio 2024", description: "Vanilla JavaScript로 제작되었습니다", icon: "portfolio_icon.png"},
  ]

  return (
    <div className="notifications">
      <div className="first_content">
        <Content title={list[0].title} description={list[0].description} icon={list[0].icon}/>
      </div>
      <div className="middle_content">
        <Content title={list[1].title} description={list[1].description} icon={list[1].icon}/>
      </div>
      <div className="last_contents">
        {
          list.map((con, index) => (
            index > 1 && index < 6 ? (
              <div className="content" key={index}>
                <Content  title={con.title} description={con.description} icon={con.icon}/>
              </div>
            ) : (
              ""
            )
          ))
        }
      </div>
  
    </div>
  );
}

export default Notifications;
