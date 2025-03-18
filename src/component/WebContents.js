import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// 프로젝트 정보
const content = [
  {
    name: "gyojibhab",
    img: "gyojibhab_web_img",
    webLink: "https://o3ouo.github.io/gyojibhab/",
    figmaLink: "https://www.figma.com/design/w21dltoIOM6j1J6En6w8Me/%EA%B5%90%EC%A7%91%ED%95%A9?node-id=1-6800&t=HwjWt9yXBJJNTs7Q-1"
  },
  {
    name: "bmw",
    img: "bmw_web_img",
    webLink: "https://o3ouo.github.io/bmw_re/",
    figmaLink: "https://www.figma.com/design/0G3NqCRjoriM9uXJqlhUaP/BMW?node-id=0-1&t=kVYexCxLjtdJFF5w-1"
  },
  {
    name: "i_hate_monday",
    img: "ihm_web_img",
    webLink: "https://o3ouo.github.io/IHateMonday/",
    figmaLink: "https://www.figma.com/design/2EpGQ8lIavir35IXUqAIyc/I-Hate-Monday?node-id=0-1&t=p8mRW9RCjYwAipLA-1"
  },
];

// 소개 정보
const introduces = [
  {
    title: "Gyogibhab",
    description: "한복 디자인을 비롯해 다양한 시각에서 새롭게 접근한 디자인을 선보이는 브랜드입니다. 전통적인 한복의 아름다움을 현대적인 감각으로 재해석하여, 사용자들에게 친근하고 세련된 이미지를 전달하는 것을 목표로 했습니다.",
    container: "1780px",
    viewport: "반응형",
    page: "Main / About / Season / Work",

  },
  {
    title: "BMW",
    description: "프리미엄 자동차 브랜드입니다. 블랙, 화이트, 메탈릭 실버와 BMW의 시그니처 블루를 사용한 럭셔리 모던 컨셉으로 온라인에서의 브랜드 경험을 강화하고 고객에게 혁신적이고 고급스러운 이미지를 전달하는 것을 목표로 하였습니다.",
    container: "1140px",
    viewport: "반응형 (Bootstrap)",
    page: "Main",
  },
  {
    title: "I Hate Monday",
    description: "라이프스타일의 다양한 양말과 제품을 만드는 브랜드입니다. 현대적인 웹 디자인 트렌드를 반영해 큰 이미지와 타이포그래피로 시각적 임팩트를 주고, 브랜드 모토를 기반으로하여 사용자에게 밝은 에너지를 전달하는 것을 목표로 했습니다.",
    container: "1140px",
    viewport: "적응형",
    page: "Main / Collaboration / Look Book",
  },
];

// 팝업 컴포넌트
const IntroducePopup = ({ introduce, onClose }) => {
  if (!introduce) return null;

  return (
    <div className="popup_overlay">
      <motion.div
        className="popup_content"
        initial={{ y: "100%", opacity: 1 }}
        animate={{ y: "-50%", opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()} // 배경 클릭 방지
      >
        <div className="popup_inner">
          <div className="title_and_description">
            <p className="title">{introduce.title}</p>
            <p className="description">{introduce.description}</p>
          </div>
          <div className="details">
            <p className="txt device_width">Device Width: 1920px</p>
            <p className="txt container_txt">{introduce.container}</p>
            <p className="txt vieport">{introduce.viewport}</p>
            <p className="txt page">{introduce.page}</p>
            <p className="txt tool">Tool: HTML5 / CSS3 / JS / Figma</p>
            <p className="txt cuntribution">개인 작업 100%</p>
            <p className="txt close-btn" onClick={onClose}>Close</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const WebContents = () => {
  const [selectedIntroduce, setSelectedIntroduce] = useState(null);

  return (
    <div className="web_contents">
      <div className="inner">
        {
          content.map((con, index) => (
            <div key={index} className={`${con.name} box`}>
              <div className="overflow_box">
                <figure className="web_img">
                  <img src={`${process.env.PUBLIC_URL}/image/${con.img}.webp`} alt={con.img} />
                </figure>
              </div>

              <div className="link_box">
                <a to={con.webLink} target="_blank" className="link_btn" rel="noopener noreferrer" >
                  <span className="link">Web Site</span>
                  <img src={`${process.env.PUBLIC_URL}/image/arrow_icon.webp`} alt="arrow_icon" />
                </a>
                <a to={con.figmaLink} target="_blank" className="link_btn" rel="noopener noreferrer">
                  <span className="link">Figma</span>
                  <img src={`${process.env.PUBLIC_URL}/image/arrow_icon.webp`} alt="arrow_icon" />
                </a>
                <button className="link_btn" onClick={() => setSelectedIntroduce(introduces[index])}>
                  <span className="link">Introduce</span>
                  <img src={`${process.env.PUBLIC_URL}/image/arrow_icon.webp`} alt="arrow_icon" />
                </button>
              </div>
            </div>
          ))
        }
         <IntroducePopup introduce={selectedIntroduce} onClose={() => setSelectedIntroduce(null)} />
      </div>
    </div>
  );
};

export default WebContents;
