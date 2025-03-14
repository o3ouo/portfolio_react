import React from 'react';
import WorkContent from './WorkContent';

function DockBar() {
  return (
    <div className="dock_bar">
      <div className="inner">
        <WorkContent icon={"phone"}/>
        <WorkContent icon={"insta"}/>
        <WorkContent icon={"kakao"}/>
        <WorkContent icon={"mail"}/>
      </div>
    </div>
  );
}

export default DockBar;
