import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import '../css/Mobile.css';
import useTouchSwipe from '../customHook/useTouchSwipe';
import LockScreen from '../mobile/LockScreen';
import HomeScreen from '../mobile/HomeScreen';
import About from '../mobile/About';


// 플러그인 등록
gsap.registerPlugin(ScrollToPlugin);

function Mobile() {
  const mobileDivRef = useRef();
  const location = useLocation();
  // 잠금화면 보이기 여부
  const [isLockScreenVisible, setIsLockScreenVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (location.pathname.startsWith("/about")) {
      setIsLockScreenVisible(false);
    }
  }, [location.pathname]);

  const scrollPage = (direction) => {
    if (location.pathname !== "/" || isScrolling) return;

    const mobileDiv = mobileDivRef.current;
    const pageHeight = window.innerHeight;
    let targetScroll = direction === "down" ? pageHeight : 0;

    setIsScrolling(true);

    // 스크롤 애니메이션
    gsap.to(mobileDiv, {
      scrollTo: targetScroll,
      duration: 0.6,
      ease: "power2.out", // 부드러운 감속 효과
      onComplete: () => {
        setIsScrolling(false); // 스크롤 종료 후 다시 가능하도록 설정
        setIsLockScreenVisible(direction !== "down");
      },
    });

    // 잠금화면 페이드 효과
    gsap.to(".lock_screen", {
      opacity: isLockScreenVisible ? 1 : 0,
      duration: 0.3,
    });
  };

  useEffect(() => {
    const wheelHandler = (e) => {
      if (location.pathname !== "/" || isScrolling) return;
      e.preventDefault();
      scrollPage(e.deltaY > 0 ? "down" : "up");
    };

    const mobileDiv = mobileDivRef.current;
    if (mobileDiv) {
      mobileDiv.addEventListener("wheel", wheelHandler);
    }

    return () => {
      if (mobileDiv) {
        mobileDiv.removeEventListener("wheel", wheelHandler);
      }
    };
  }, [isScrolling, location.pathname]);

  // 터치 스와이프 적용
  useTouchSwipe(
    () => !isScrolling && location.pathname === "/" && scrollPage("down"),
    () => !isScrolling && location.pathname === "/" && scrollPage("up")
  );

  return (
    <div className="mobile" ref={mobileDivRef}>
      <div className="inner">
        {isLockScreenVisible && <LockScreen isLockScreenVisible={isLockScreenVisible} />}
        <Routes>
          <Route path="/" element={<HomeScreen isLockScreenVisible={isLockScreenVisible} />} />
          <Route path="/about/*" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default Mobile;
