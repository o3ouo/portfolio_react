import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "../css/Mobile.css";
import useTouchSwipe from "../customHook/useTouchSwipe";
import LockScreen from "../mobile/LockScreen";
import HomeScreen from "../mobile/HomeScreen";
import About from "../mobile/About";
import WebRedesign from "../mobile/WebRedesign";

gsap.registerPlugin(ScrollToPlugin);

function Mobile() {
  const lockScreenRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLockScreenVisible, setIsLockScreenVisible] = useState(true);
  // LockScreen과 HomeScreen에서만 스크롤 & 스와이프 감지
  const allowedSwipePages = ["/", "/home"];

  // 새로고침 시 기본 URL로 설정
  useEffect(() => {
    // URL을 /portfolio_react로 강제로 리디렉션
    if (location.pathname !== "/") {
      navigate("/");
    }
  }, [])

  // 특정 페이지에서만 LockScreen 상태 변경
  const toggleLockScreen = (isVisible) => {
    if (!lockScreenRef.current) return;

    if (isVisible) {
      gsap.to(lockScreenRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        onStart: () => (lockScreenRef.current.style.zIndex = "10"),
      });
      setIsLockScreenVisible(true);
      navigate("/");
    } else {
      gsap.to(lockScreenRef.current, {
        y: -window.innerHeight,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => (lockScreenRef.current.style.zIndex = "-1"),
      });
      setIsLockScreenVisible(false);
      navigate("/home");
    }
  };

  // 스크롤 또는 스와이프 이벤트 처리
  const handleScrollOrSwipe = (direction) => {
    if (!allowedSwipePages.includes(location.pathname)) return;
    toggleLockScreen(direction === "up");
  };

  // 터치 스와이프 이벤트 감지
  const isSwipeEnabled = allowedSwipePages.includes(location.pathname);
  useTouchSwipe(
    isSwipeEnabled ? () => handleScrollOrSwipe("down") : null,
    isSwipeEnabled ? () => handleScrollOrSwipe("up") : null
  );

  // 마우스 휠 이벤트 감지 (다른 페이지에서는 비활성화)
  useEffect(() => {
    if (!allowedSwipePages.includes(location.pathname)) return;

    const wheelHandler = (e) => {
      e.preventDefault();
      handleScrollOrSwipe(e.deltaY > 0 ? "down" : "up");
    };

    window.addEventListener("wheel", wheelHandler, { passive: false });

    return () => window.removeEventListener("wheel", wheelHandler);
  }, [location.pathname]);

  return (
    <div className="mobile">
      <div className="mobile_inner">
        <div ref={lockScreenRef} className="lock_screen">
          <LockScreen />
        </div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/web_redesign" element={<WebRedesign />} />
        </Routes>
      </div>
    </div>
  );
}

export default Mobile; 