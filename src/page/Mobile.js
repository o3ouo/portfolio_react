import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolling, setIsScrolling] = useState(false);

  const isLockScreenVisible = location.pathname === "/";

  useEffect(() => {
    if (lockScreenRef.current) {
      if (isLockScreenVisible) {
        lockScreenRef.current.style.display = "block"; // 다시 보이게 설정
        gsap.to(lockScreenRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      } else {
        gsap.to(lockScreenRef.current, {
          opacity: 0,
          y: -window.innerHeight,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            lockScreenRef.current.style.display = "none"; // 완전히 숨김
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
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            lockScreenRef.current.style.display = "none"; // 락스크린 완전히 숨김
            navigate("/home"); // 홈 화면으로 이동
            setTimeout(() => setIsScrolling(false), 500);
          },
        });
      } else {
        lockScreenRef.current.style.display = "block"; // 락스크린 다시 보이게
        gsap.set(lockScreenRef.current, { opacity: 0, y: -window.innerHeight });
        gsap.to(lockScreenRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            navigate("/");
            setTimeout(() => setIsScrolling(false), 500);
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
          <Route path="/" element={<HomeScreen />} /> {/* 🔹 기본 경로 추가 */}
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/about/*" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default Mobile;
