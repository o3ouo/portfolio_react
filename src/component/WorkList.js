import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
      <Link to="https://o3ouo.github.io/phils/" target="_blank">
        <WorkContent title={"Clone Codding"} icon={"phils"} />
      </Link>
      <Link to="https://o3ouo.github.io/news_weather/" target="_blank">
        <WorkContent title={"Play Press"} icon={"play_press"} />
      </Link>
      <Link to="https://o3ouo.github.io/portfolio_vjs/" target='blank'>
        <WorkContent title={"Portfolio 2024"} icon={"portfolio"} />
      </Link>
    </div>
  );
}

export default WorkList;
