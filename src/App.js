import React, { useEffect } from 'react';
import './App.css';
import './css/base.css'
import Main from './page/Main';


function setFullScreenHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

function adjustFullScreen() {
  const fullscreenElement = document.querySelector(".fullscreen");
  if (!fullscreenElement) return; // 요소가 없으면 실행하지 않음

  // 모바일에서 가로 모드일 때 최소 높이 설정 + 스크롤 가능하게 변경
  if (window.innerWidth > window.innerHeight && window.innerHeight < 480) {
    fullscreenElement.style.minHeight = "480px";
    fullscreenElement.style.overflowY = "auto";
  } else {
    fullscreenElement.style.minHeight = "";
    fullscreenElement.style.overflowY = "hidden";
  }
}

function App() {

  useEffect(() => {
    setFullScreenHeight();
    adjustFullScreen();


    window.addEventListener("resize", () => {
      setFullScreenHeight();
      adjustFullScreen();
    });

    return () => {
      window.removeEventListener("resize", () => {
        setFullScreenHeight();
        adjustFullScreen();
      });
    };
  }, []);

  return (
    <div className="App fullscreen">
      <Main />
    </div>
  );
}

export default App;

/*
useEffect 사용: window.addEventListener로 렌더 시 risize 이벤트 적용 (클린업 처리)
overflowY 조절: 모바일에서 가로 모드일 경우 스크롤 가능, 세로 모드일 경우 스크롤 숨김
setProperty("--vh") 적용: CSS에서 동적으로 100vh가 적용되도록 설정
*/ 