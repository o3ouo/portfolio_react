import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import WorkContent from './WorkContent';

const dockBarList = [
  { name: "phone", img: "phone_number_icon", title: "Phone Number", description: "010 - 9643 -0221" },
  { name: "insta", img: "insta_dock_icon", title: "Instagram ID", description: "11.408_a" },
  { name: "kakao", img: "kakao_dock_icon", title: "Kakao Talk ID", description: "o3ouo@daum.net" },
];


const DockBarPopup = ({ dockBarClick, onClose }) => {
  if (!dockBarClick) return null;

  // dockBarClick 값과 일치하는 아이템
  const selectedItem = dockBarList.find((item) => item.name === dockBarClick);

  if (!selectedItem) return null;

  return (
    <div className="home_overlay">
      <motion.div
        className="dock_pop_content"
        initial={{ y: 100, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="popup_inner">
          <div className="popup_box">
            <figure className="icon">
              <img src={`${process.env.PUBLIC_URL}/image/${selectedItem.img}.webp`} alt="" />
            </figure>
            <div className="detail">
              <p className="title">{selectedItem.title}</p>
              <p className="txt">{selectedItem.description}</p>
            </div>
            <div className="close_btn" onClick={onClose}>
              <p>Close</p>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

function DockBar() {
  const navigate = useNavigate();
  const [dockBarClick, setDockBarClick] = useState(null);

  console.log("dockBarClick:", dockBarClick)

  return (
    <div className="dock_bar">
      <div className="inner">
        <WorkContent
          icon={"phone"}
          onClick={() => setDockBarClick("phone")}
        />
        <WorkContent
          icon={"insta"}
          onClick={() => setDockBarClick("insta")}
        />
        <WorkContent
          icon={"kakao"}
          onClick={() => setDockBarClick("kakao")}
        />
        <WorkContent
          icon={"mail"}
          onClick={() => navigate("/mail")}
        />
      </div>

      {dockBarClick && <DockBarPopup dockBarClick={dockBarClick} onClose={() => setDockBarClick(null)} />}
    </div>
  );
}

export default DockBar;
