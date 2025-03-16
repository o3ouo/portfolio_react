import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const PageTransition = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { scale: 0.5, opacity: 0, y: 80 }, // 초기 애니메이션 값
      { scale: 1, opacity: 1, y: 0, duration: 0.7, ease: "power3.out" } // 부드럽게 등장
    );
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default PageTransition;
