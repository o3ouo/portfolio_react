import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "../css/Mobile.css";
import useTouchSwipe from "../customHook/useTouchSwipe";
import LockScreen from "../mobile/LockScreen";
import HomeScreen from "../mobile/HomeScreen";
import About from "../mobile/About";

gsap.registerPlugin(ScrollToPlugin);

function Mobile() {
  const mobileDivRef = useRef();
  const lockScreenRef = useRef();
  const navigate = useNavigate();
  const [isScrolling, setIsScrolling] = useState(false);
  const [isLockScreenVisible, setIsLockScreenVisible] = useState(true);

  // LockScreen 상태 변경을 Effect에서 처리
  useEffect(() => {
    if (lockScreenRef.current) {
      if (isLockScreenVisible) {
        lockScreenRef.current.style.zIndex = "10"; // 락스크린을 최상위로 설정
        gsap.set(lockScreenRef.current, { opacity: 1, y: 0 }); // 초기 상태 설정
      } else {
        gsap.to(lockScreenRef.current, {
          opacity: 0,
          y: -window.innerHeight,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            lockScreenRef.current.style.zIndex = "-1"; // 락스크린을 보이지 않게 함
          },
        });
      }
    }
  }, [isLockScreenVisible]);

  const handleScrollOrSwipe = (direction) => {
    if (isScrolling) return;
    setIsScrolling(true);

    if (lockScreenRef.current) {
      if (direction === "down") {
        gsap.to(lockScreenRef.current, {
          y: -window.innerHeight,
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            setIsLockScreenVisible(false); // 잠금화면 숨기기
            navigate("/home"); // 홈 화면으로 이동
            setTimeout(() => setIsScrolling(false), 400);
          },
        });
      } else {
        lockScreenRef.current.style.zIndex = "10"; // 락스크린을 보이게 설정
        lockScreenRef.current.style.opacity = "0"; // 초기 opacity 설정
        gsap.to(lockScreenRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            setIsLockScreenVisible(true); // 잠금화면 보이게
            navigate("/"); // 잠금화면으로 돌아가기
            setTimeout(() => setIsScrolling(false), 400);
          },
        });
      }
    }
  };

  useEffect(() => {
    const wheelHandler = (e) => {
      if (isScrolling) return;
      e.preventDefault();
      handleScrollOrSwipe(e.deltaY > 0 ? "down" : "up");
    };

    window.addEventListener("wheel", wheelHandler, { passive: false });
    return () => window.removeEventListener("wheel", wheelHandler);
  }, [isScrolling]);

  useTouchSwipe(
    () => handleScrollOrSwipe("down"),
    () => handleScrollOrSwipe("up")
  );

  return (
    <div className="mobile" ref={mobileDivRef}>
      <div className="inner">
        <div ref={lockScreenRef} className="lock_screen">
          <LockScreen />
        </div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/about/*" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default Mobile;
