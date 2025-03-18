import React, { useRef } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "../css/Mobile.css";
import '../css/Tablet.css';
import useSwipeScroll from "../customHook/useSwipeScroll";
import LockScreen from "../mobile/LockScreen";
import HomeScreen from "../mobile/HomeScreen";
import About from "../mobile/About";
import WebRedesign from "../mobile/WebRedesign";
import Mail from "../component/Mail";

gsap.registerPlugin(ScrollToPlugin);

function Mobile() {
  // LockScreen과 HomeScreen에서만 스크롤 & 스와이프 감지
  const allowedSwipePages = ["/", "/home"];
  const { lockScreenRef, toggleLockScreen } = useSwipeScroll(allowedSwipePages);

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
          <Route path="/mail" element={<Mail />} />
        </Routes>
      </div>
    </div>
  );
}

export default Mobile; 