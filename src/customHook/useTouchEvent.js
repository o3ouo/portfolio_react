import { useState } from 'react';


const useTouchEvent = () => {

  // swipe event
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;
  
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.tartgetTouches[0].clientY)
  }

  const onTouchMove = (e) => setTouchEnd(e.tartgetTouches[0].clientY);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd;
    const isBottomSwipe = distance > minSwipeDistance;
    const isTopSwipe = distance < -minSwipeDistance;
    if (isBottomSwipe || isTopSwipe) console.log('swipe:', isBottomSwipe ? 'Bottom' : 'Top');
  }

  return { touchStart, onTouchStart, onTouchMove, onTouchEnd }
}

export default useTouchEvent;