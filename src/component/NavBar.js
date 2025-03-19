import React from 'react';
import { useNavigate } from 'react-router-dom';
import useWindowDimensions from '../customHook/useWindowDimensions';
import StatusBar from './StatusBar';

function NavBar({ title }) {
  const { width } = useWindowDimensions();
  const mobile = width <= 768;
  const navigate = useNavigate();

  return (
    <div className="nav_bar">
      {mobile? null : <StatusBar />}
      <div className="back_box" onClick={() => navigate("/home")}>
        <figure>
          <img src={`${process.env.PUBLIC_URL}/image/back_icon.webp`} alt="back_icon" />
        </figure>
        <p>Back</p>
      </div>
      <div className="title_box">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default NavBar;
