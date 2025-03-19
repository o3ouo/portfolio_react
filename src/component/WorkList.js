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
      <a href="https://o3ouo.github.io/phils/" target="_blank" rel="noopener noreferrer">
        <WorkContent title={"Clone Codding"} icon={"phils"} />
      </a>
      <a href="https://o3ouo.github.io/news_weather/" target="_blank" rel="noopener noreferrer">
        <WorkContent title={"Play Press"} icon={"play_press"} />
      </a>
      <a href="https://o3ouo.github.io/portfolio_vjs/" target='blank' rel="noopener noreferrer">
        <WorkContent title={"Portfolio 2024"} icon={"portfolio"} />
      </a>
    </div>
  );
}

export default WorkList;
