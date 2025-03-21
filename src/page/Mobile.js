import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import useWindowDimensions from "../customHook/useWindowDimensions";
// import "../css/Mobile.css";
// import '../css/Tablet.css';
import useSwipeScroll from "../customHook/useSwipeScroll";
import LockScreen from "../mobile/LockScreen";
import HomeScreen from "../mobile/HomeScreen";
import About from "../mobile/About";
import AboutTablet from "../tablet/AboutTablet";
import WebRedesign from "../mobile/WebRedesign";
import WebRedesignTablet from "../tablet/WebRedesignTablet";
import Mail from "../component/Mail";

gsap.registerPlugin(ScrollToPlugin);

function Mobile() {
  const { width } = useWindowDimensions();
  const mobile = width <= 767; 
  const Tablet = width >= 1079;

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
          <Route path="/about/*" element={!Tablet ? <About /> : <AboutTablet /> } />
          <Route path="/web_redesign" element={mobile ?<WebRedesign /> : <WebRedesignTablet />} />
          <Route path="/mail" element={<Mail />} />
        </Routes>
      </div>
    </div>
  );
}

export default Mobile; 