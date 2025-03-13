import React from 'react';
import '../css/WorkList.css';
import WorkContent from './WorkContent';

function workList() {
  return (
    <div className="work_list">
      <WorkContent title={"Web Redesign"} icon={"web_redesign_icon"} />
      <WorkContent title={"Clone Codding"} icon={"phils_icon"} />
      <WorkContent title={"Play Press"} icon={"play_press_icon"} />
      <WorkContent title={"Portfolio 2024"} icon={"portfolio_icon"} />
    </div>
  );
}

export default workList;
