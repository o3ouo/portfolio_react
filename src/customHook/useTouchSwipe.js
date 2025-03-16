import { useEffect, useRef } from 'react';

const useTouchSwipe = (onSwipeUp = () => {}, onSwipeDown = () => {}) => {
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);
  const touchStartTime = useRef(0);

  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartTime.current = Date.now(); // 터치 시작 시간 저장
    };

    const handleTouchMove = (e) => {
      touchEndY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      const deltaY = touchStartY.current - touchEndY.current;
      const touchDuration = Date.now() - touchStartTime.current; // 터치 지속 시간 계산
      
      if (touchDuration < 150) {
        // 150ms 이내면 클릭으로 간주 > 스와이프 무시
        return;
      }

      if (Math.abs(deltaY) > 100) {
        // 100px 이상 이동했을 때만 스와이프로 처리
        if (deltaY > 0) {
          onSwipeUp?.();
        } else {
          onSwipeDown?.();
        }
      }
    };


    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [onSwipeUp, onSwipeDown]);
};

export default useTouchSwipe;