import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useWindowDimensions from '../customHook/useWindowDimensions';
import WorkContent from './WorkContent';

// 노션 아이콘 이미지
const icons = ["quick_icon_01", "quick_icon_02", "quick_icon_03", "quick_icon_04"];

// 노션 링크 메뉴
const NotionLinkMenu = ({ url, title }) => {
  return (
    <a
      href={url}
      target="_blank"
      className="link_row row"
      rel="noopener noreferrer"
    >
      <span>{title}</span>
      <img src={`${process.env.PUBLIC_URL}/image/arrow_icon.webp`} alt="arrow_icon" className="arrow_icon" />
    </a>
  );
};

// 노션 메뉴
const NotionMenu = ({ notionClick, onClose }) => {
  const { width } = useWindowDimensions();
  
  // 화면 크기에 따라 애니메이션 값 동적 설정
  const startPosition = {
    x: width < 768 ? 0 : width < 1210 ? 100 : 200,
    y: width < 768 ? 110 : width < 1210 ? 300 : 100,
  };

  const endPosition = {
    x: width < 768 ? 0 : width < 1210 ? 100 : 200,
    y: width < 768 ? 0 : width < 1210 ?150 : -30,
  };

  if (!notionClick) return null;

  return (
    <div className="home_overlay">
      <motion.div
        className="notion_content"
        initial={{ x: startPosition.x, y: startPosition.y, opacity: 0 }}
        animate={{ x: endPosition.x, y: endPosition.y, opacity: 1 }}
        exit={{ x: startPosition.x, y: startPosition.y, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="notion_inner">
          <div className="quickActions">
            <div className="notion_row row">
              <span>Notion</span>
            </div>
            <NotionLinkMenu url={"https://fishy-allosaurus-c8b.notion.site/185d592f15a18042b670f2ab5abf2a04?pvs=4"} title={"Study"} />
            <NotionLinkMenu url={"https://fishy-allosaurus-c8b.notion.site/REACT-19ad592f15a18008b716d8e43a821100?pvs=4"} title={"React"} />
            <NotionLinkMenu url={"https://fishy-allosaurus-c8b.notion.site/News-Weather-App-100-Project-22eb38b3efad4b0ea7c4ca24983591fa?pvs=4"} title={"Play Press"} />
            <NotionLinkMenu url={"https://fishy-allosaurus-c8b.notion.site/React-1a8d592f15a180bf8974c4254114a649?pvs=4"} title={"Portfolio 2025"} />
          </div>
          <div className="icons_row row">
              {icons.map((con, index) => (
                <figure key={index}>
                  <img src={`${process.env.PUBLIC_URL}/image/${con}.webp`} alt="icon_img" />
                </figure>
              ))}
            </div>
          <div className="close_row row" onClick={onClose}>
              <span>Close</span>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/image/close_icon.webp`} alt="close_icon" />
              </figure>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

function LinkAppList() {
  const [notionClick, setNotionClick] = useState(false);

  const handleClick = () => {
    document.querySelector(".notion_click").style.zIndex = "10";
    document.querySelector(".swipe_text").style.opacity = "0";
    setNotionClick(true);
  };

  const handleClose = () => {
    document.querySelector(".notion_click").style.zIndex = "auto";
    document.querySelector(".swipe_text").style.opacity = "1";
    setNotionClick(false);
  };

  return (
    <div className="link_app_list">
      <div className="inner">
        <WorkContent className={"notion_click"} title={"Notion"} icon={"notion"} onClick={() => handleClick()} />

        <Link to="https://www.naver.com/" target="_blank">
          <WorkContent title={"Naver"} icon={"naver"} />
        </Link>

        <Link to="https://www.daum.net/" target="_blank">
          <WorkContent title={"Daum"} icon={"daum"} />
        </Link>

        <Link to="https://github.com/o3ouo?tab=repositories" target="_blank">
          <WorkContent title={"GitHub"} icon={"github"} />
        </Link>
      </div>

      <NotionMenu notionClick={notionClick} onClose={() => handleClose()} />
    </div>
  );
}

export default LinkAppList;
