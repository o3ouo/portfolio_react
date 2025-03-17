import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import WorkContent from './WorkContent';

// 노션 메뉴
const NotionMenu = ({ quichMenu, onClose }) => {
  if (!quichMenu) return null;

  return (
    <div className="notion_overlay" onClick={onClose}>
      <motion.div
        className="notion_content"
        initial={{ y: "100%", opacity: 1 }}
        anumate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="notion_inner">

        </div>
      </motion.div>
    </div>
  )
}

function LinkAppList() {
  const [notionClick, setNotionClick] = useState(false);


  return (
    <div className="link_app_list">
      <WorkContent title={"Notion"} icon={"notion"} onClick={() => setNotionClick()}  />

      <Link to="https://www.naver.com/" target="_blank">
        <WorkContent title={"Naver"} icon={"naver"}/>
      </Link>
      
      <Link to="https://www.daum.net/" target="_blank">
        <WorkContent title={"Daum"} icon={"daum"}/>
      </Link>

      <Link to="https://github.com/o3ouo?tab=repositories" target="_blank">
        <WorkContent title={"GitHub"} icon={"github"}/>
      </Link>
    </div>
  );
}

export default LinkAppList;
