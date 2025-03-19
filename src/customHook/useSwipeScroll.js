import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useNavigate, useLocation } from 'react-router-dom';
import useTouchSwipe from './useTouchSwipe';
import { isVisible } from '@testing-library/user-event/dist/utils';

const useSwipeScroll = (allowedSwipePages) => {
  const lockScreenRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLockScreenVisible, setIsLockScreenVisible] = useState(true);

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
        opacity: 0.3,
        ease: "power2.out",
        onComplete: () => (lockScreenRef.current.style.zIndex = "-1"),
      });
      setIsLockScreenVisible(false);
      navigate("/home");
    }
  };

  // URL을 /portfolio_react로 강제로 리디렉션
  useEffect(() => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  }, [isLockScreenVisible])

  // 스크롤 또는 스와이프 이벤트 처리
  const handleScrollOrSwipe = (direction) => {
    if (!allowedSwipePages.includes(location.pathname)) return;
    toggleLockScreen(direction === "up");
  };

  // 터치 스와이프 이벤트 감지
  useTouchSwipe(
    allowedSwipePages.includes(location.pathname) ? () => handleScrollOrSwipe("down") : null,
    allowedSwipePages.includes(location.pathname) ? () => handleScrollOrSwipe("up") : null
  );

  // 마우스 휠 이벤트 감지 (다른 페이지는 비활성화)
  useEffect(() => {
    if (!allowedSwipePages.includes(location.pathname)) return;

    const wheelHandler = (e) => {
      e.preventDefault();
      handleScrollOrSwipe(e.deltaY > 0 ? "down" : "up");
    };

    window.addEventListener("wheel", wheelHandler, { passive: false });

    return () => window.removeEventListener("wheel", wheelHandler);
  }, [location.pathname]);

  return {
    lockScreenRef,
    isLockScreenVisible,
    toggleLockScreen,
  };
};

export default useSwipeScroll;