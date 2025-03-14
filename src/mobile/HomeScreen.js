import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/HomeScreen.css"
import WorkList from '../component/WorkList';
import Weather from '../weather/Weather';
import NotionTodo from '../component/NotionTodo';
import LinkAppList from '../component/LinkAppList';
import DockBar from '../component/DockBar';

function HomeContainer({ isLockScreenVisible }) {
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
        <Weather isLockScreenVisible={isLockScreenVisible}/>
        <NotionTodo />
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
