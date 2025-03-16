import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useAutoRedirect = (basePath, defaultPath) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === basePath) {
      navigate(`${basePath}/${defaultPath}`);
    }
  }, [location.pathname, navigate, basePath, defaultPath]);
};

export default useAutoRedirect;