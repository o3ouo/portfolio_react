import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTansition from '../component/PageTansition';
import useWindowDimensions from '../customHook/useWindowDimensions'
import StatusBar from '../component/StatusBar';
import WorkList from '../component/WorkList';
import LinkAppList from '../component/LinkAppList';
import DockBar from '../component/DockBar';
import HomeWidgets from '../component/HomeWidgets';


function HomeContainer() {
  // useWindowDimensions 훅을 사용하여 윈도우 크기 가져오기
  const { width } = useWindowDimensions();
  const mobile = width <= 767;
  const navigate = useNavigate();

  return (
    <PageTansition>
      <div className="home_screen">
        <div className="top_inner">
          {mobile ? null : <StatusBar />}
          {/* <div className="top_contents"> */}
            <div className="about" onClick={() => navigate("/about")}>
              <div className="about_icon"></div>
              <p className="title">About Me</p>
            </div>
            <WorkList />
          {/* </div> */}
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
