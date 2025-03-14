import React from 'react';
import { useNavigate } from "react-router-dom";
import AboutInfo from '../component/AboutInfo';

function About() {
  const navigate = useNavigate();

  return (
    <div className="about_page">
        <div className="inner">
          <nav className="nav_bar">
            <div className="back_box" onClick={() => navigate("/")}>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/image/back_icon.png`} alt="back_icon" />
              </figure>
              <p>Back</p>
            </div>
          </nav>
        </div>
    </div>
  );
}

export default About;
