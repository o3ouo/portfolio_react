import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TabMenu = ({ tabs, basePath }) => {
  const location = useLocation();
  // 현재 경로의 마지막 부분만 추출
  const currentPath = location.pathname.split("/").pop() || tabs[0].path;
  // 현재 선택된 탭인지 확인하는 함수
  const getTabClassName = (tab) => (currentPath === tab ? "active" : "");
  const getTabImage = (tab) => (currentPath === tab ? "active" : "inactive");

  return (
    <div className="tab_menu">
      <ul>
        {tabs.map(({ path, label }) => (
          <li key={path}>
            <Link to={`${basePath}/${path}`}  className={`${getTabClassName(path)} box`}>
              <img src={`${process.env.PUBLIC_URL}/image/${getTabImage(path)}_icon.webp`} alt={`${label}_icon`}></img>
              <p className="txt">{label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TabMenu;
