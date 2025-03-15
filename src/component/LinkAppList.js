import React from 'react';
import WorkContent from './WorkContent';

function LinkAppList() {
  return (
    <div className="link_app_list">
      <WorkContent title={"Notion"} icon={"notion"}/>
      <WorkContent title={"Naver"} icon={"naver"} />
      <WorkContent title={"Daum"} icon={"daum"}/>
      <WorkContent title={"TodoList"} icon={"TodoList"}/>
    </div>
  );
}

export default LinkAppList;
