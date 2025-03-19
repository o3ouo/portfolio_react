import React from 'react';
import PageTransition from '../component/PageTansition';
import StatusBar from '../component/StatusBar';
import SideBar from './SideBar';
import WebContents from '../component/WebContents'

function WebRedesignTablet() {
  const ulList = ["Gyojibhab", "BMW", "I Hate Monday"];

  return (
    <PageTransition>
      <StatusBar color={".black_theme"}/>
      <div className="web_redesign_box">
        <SideBar list={ulList} />
        <WebContents />
      </div>
    </PageTransition>
  );
};

export default WebRedesignTablet;
 