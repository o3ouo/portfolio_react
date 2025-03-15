import React, {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import WorkList from '../component/WorkList';
import LinkAppList from '../component/LinkAppList';
import DockBar from '../component/DockBar';
import HomeWidgets from '../component/HomeWidgets';

function HomeContainer() {
  const navigate = useNavigate();

  return (
    <div className="home_screen">
      <div className="top_inner">
        <div className="top_contents">
          <div className="about" onClick={() => navigate("/about")}>
            <figure className="about_icon">
              <img src={`${process.env.PUBLIC_URL}/image/about_icon.jpg`} alt="about_icon" />
            </figure>
            <p className="title">About Me</p>
          </div>
          <div className="work_contents_box">
            <WorkList />
          </div>
        </div>
        <HomeWidgets/>
        <LinkAppList />
      </div>
      <div className="bottom_inner">
        <div className="swipe_text">
          <p className="txt">Swipe up to see the lock screen</p>
        </div>
        <DockBar />
      </div>
    </div>
  );
}

export default HomeContainer;
