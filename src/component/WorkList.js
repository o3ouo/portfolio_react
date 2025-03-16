import React from 'react';
import { useNavigate } from 'react-router-dom';
import WorkContent from './WorkContent';

function WorkList() {
  const navigate = useNavigate();

  return (
    <div className="work_list">
      <WorkContent 
        title={"Web Redesign"} 
        icon={"web_redesign"} 
        onClick={() => navigate("/web_redesign")}
      />
      <WorkContent title={"Clone Codding"} icon={"phils"} />
      <WorkContent title={"Play Press"} icon={"play_press"} />
      <WorkContent title={"Portfolio 2024"} icon={"portfolio"} />
    </div>
  );
}

export default WorkList;
