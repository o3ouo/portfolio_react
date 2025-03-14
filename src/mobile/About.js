import React, { useEffect } from 'react';
import { useNavigate, Link, Routes, Route, useLocation } from "react-router-dom";
import Info from '../component/Info';
import CertiAndEduc from '../component/CertiAndEduc';
import Skills from '../component/Skills';
import { activeImages, inactiveImages } from '../arrayData/TabMenuImg';

function About() {
  const navigate = useNavigate();
  const location = useLocation();

  // 현재 경로의 마지막 부분만 추출
  const currentPath = location.pathname.split("/").pop() || 'info';
  // 탭 클래스네임 조건부 렌더링
  const getTabClassName = (tab) => {
    return currentPath === tab ? 'active' : '';
  };
  // 탭 상태에 맞는 이미지 배열 인덱스 설정
  const getTabImage = (tab) => {
    const tabIndex = getTabIndex(tab); // 탭 이름에 해당하는 인덱스를 찾음
    return currentPath === tab ? activeImages[tabIndex] : inactiveImages[tabIndex];
  };
  // 탭 이름에 해당하는 인덱스 반환
  const getTabIndex = (tab) => {
    switch(tab) {
      case 'info': return 0;
      case 'certi_educ': return 1;
      case 'skills': return 2;
      default: return 0;
    }
  };

  // 기본 경로 처리: /about으로 들어가면 자동으로 /about/info로 리디렉션
  useEffect(() => {
    if (location.pathname === "/about") {
      navigate("/about/info");
    }
  }, [location.pathname, navigate]);

  return (
    <div className="about_page">
      <div className="inner">
        <div className="nav_bar">
          <div className="back_box" onClick={() => navigate("/")}>
            <figure>
              <img src={`${process.env.PUBLIC_URL}/image/back_icon.png`} alt="back_icon" />
            </figure>
            <p>Back</p>
          </div>
          <div className="title_box">
            <p>About Me</p>
          </div>
        </div>

        <div className="contents">
          <Routes>
            <Route path="info" element={<Info />} />
            <Route path="certi_educ" element={<CertiAndEduc />} />
            <Route path="skills" element={<Skills />} />
          </Routes>
        </div>

        <nav className="tab_menu">
          <ul>
            <li>
              <Link to="/about/info" className={getTabClassName('info')}>
                <img src={getTabImage('info')} alt="info" />
              </Link>
            </li>
            <li>
              <Link to="/about/certi_educ" className={getTabClassName('certi_educ')}>
                <img src={getTabImage('certi_educ')} alt="certi_educ" />
              </Link>
            </li>
            <li>
              <Link to="/about/skills" className={getTabClassName('skills')}>
                <img src={getTabImage('skills')} alt="skills" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default About;
