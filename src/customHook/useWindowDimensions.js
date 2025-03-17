import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  // resize 이벤트 핸들러를 debounce로 처리
  const handleResize = useCallback(
    debounce(() => setWindowDimensions(getWindowDimensions()), 200), [] // 의존성 배열이 빈 배열이면, 컴포넌트가 마운트된 이후 한 번만 실행
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]); // 이벤트 리스너 등록/해제

  return windowDimensions;
};

export default useWindowDimensions;