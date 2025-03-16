import React from 'react';
import PageTransition from '../component/PageTansition';
import NavBar from '../component/NavBar';
import WebContents from '../component/WebContents';

function WebRedesign() {
  return (
    <PageTransition>
    <div className="web_redesign_box">
        <NavBar title={"Web Redesign"}/>
        <WebContents />
      </div>
    </PageTransition>

  );
}

export default WebRedesign;
