import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar({ title }) {
  const navigate = useNavigate();

  return (
    <div className="nav_bar">
      <div className="back_box" onClick={() => navigate("/home")}>
        <figure>
          <img src={`${process.env.PUBLIC_URL}/image/back_icon.png`} alt="back_icon" />
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
