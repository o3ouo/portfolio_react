import React, { useEffect } from 'react';
import useWindowDimensions from './customHook/useWindowDimensions';
import './App.css';
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
  // useWindowDimensions 훅을 사용하여 윈도우 크기 가져오기
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    // 처음 렌더링 시 화면 높이를 설정하고, 화면 크기 조정 시에도 적용
    setFullScreenHeight();
    adjustFullScreen();

    const handleResize = () => {
      setFullScreenHeight();
      adjustFullScreen();
    };

    // Resize 이벤트 처리
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 반응형 배경 이미지
  const bgImage = width >= 768
    ? `${process.env.PUBLIC_URL}/image/ipad_bg.webp`
    : `${process.env.PUBLIC_URL}/image/iphone_bg.webp`;

  // 새로고침 시 확인창 띄우기
 const preventClose = (e) => {
  e.preventDefault();
  e.returnValue = ""; // 크롬에서는 이 값이 있어야 경고창이 뜸
};

useEffect(() => {
  (() => {
    window.addEventListener("beforeunload", preventClose);
  })();

  return () => {
    window.removeEventListener("beforeunload", preventClose);
  };
}, []);

  return (
    <div className="App fullscreen" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover'}}>
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