import { useEffect, useRef } from 'react';


const useTouchSwipe = (onSwipeUp, onSwipeDown) => {
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      touchEndY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      const deltaY = touchStartY.current - touchEndY.current;
      
      if (deltaY > 50) {
        onSwipeUp();
      } else if (deltaY < -50) {
        onSwipeDown();
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