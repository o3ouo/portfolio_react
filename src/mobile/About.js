import React from 'react';
import { Link } from "react-router-dom";
import AboutInfo from '../component/AboutInfo';


function About() {
  return (
    <div className="about_page">
        <div className="inner">
          <nav className="nav_bar">
            <div className="back_box">
              <Link to="">
              <figure>
                <img src={`${process.env.PUBLIC_URL}/image/back_icon.png`} alt="back_icon" />
              </figure>
              <p>Back</p>
              </Link>
            </div>
          </nav>
        </div>
    </div>
  );
}

export default About;
