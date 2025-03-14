import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import '../css/Mobile.css';
import LockScreen from '../mobile/LockScreen';
import useTouchSwipe from '../customHook/useTouchSwipe';
import HomeScreen from '../mobile/HomeScreen';
import About from './About';


// 플러그인 등록
gsap.registerPlugin(ScrollToPlugin);

function Mobile() {
  const mobileDivRef = useRef();
  // 잠금화면 보이기 여부
  const [isLockScreenVisible, setIsLockScreenVisible] = useState(true)

  const scrollPage = (direction) => {
    const mobileDiv = mobileDivRef.current;
    const scrollTop = mobileDiv.scrollTop;
    const pageHeight = window.innerHeight;
    let targetScroll;

    if (direction === "down") {
      targetScroll = scrollTop < pageHeight ? pageHeight : pageHeight;
      setIsLockScreenVisible(false); // 잠금화면 숨기기
    } else {
      targetScroll = scrollTop > pageHeight ? pageHeight : 0;
      setIsLockScreenVisible(targetScroll === 0);
    }

    // 스크롤 애니메이션
    gsap.to(mobileDiv, {
      scrollTo: targetScroll,
      duration: 0.5,
      ease: "power2.out", // 부드러운 감속 효과
    });

    // 잠금화면 페이드 효과
    gsap.to(".lock_screen", {
      opacity: isLockScreenVisible ? 1 : 0,
      duration: 0.3,
    });
  };

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      scrollPage(deltaY > 0 ? "down" : "up");
    };

    const mobileDiv = mobileDivRef.current;
    mobileDiv.addEventListener("wheel", wheelHandler);

    return () => {
      mobileDiv.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  // 터치 스와이프 적용
  useTouchSwipe(
    () => scrollPage("down"),
    () => scrollPage("up")
  );

  return (
    <BrowserRouter>
      <div className="mobile" ref={mobileDivRef}>
        <div className="inner">
          <LockScreen isLockScreenVisible={isLockScreenVisible} />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default Mobile;
