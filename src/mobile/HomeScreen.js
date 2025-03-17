import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTansition from '../component/PageTansition';
import WorkList from '../component/WorkList';
import LinkAppList from '../component/LinkAppList';
import DockBar from '../component/DockBar';
import HomeWidgets from '../component/HomeWidgets';

function HomeContainer() {
  const navigate = useNavigate();

  return (
    <PageTansition>
      <div className="home_screen">
        <div className="top_inner">
          <div className="top_contents">
            <div className="about" onClick={() => navigate("/about")}>
              <figure className="about_icon">
                <img src={`${process.env.PUBLIC_URL}/image/about_icon.webp`} alt="about_icon" />
              </figure>
              <p className="title">About Me</p>
            </div>
            <WorkList />
          </div>
          <HomeWidgets />
          <LinkAppList />
        </div>
        <div className="bottom_inner">
          <div className="swipe_text">
            <p className="txt">Swipe down to display the lock screen</p>
          </div>
          <DockBar />
        </div>
      </div>
    </PageTansition>
  );
}

export default HomeContainer;
