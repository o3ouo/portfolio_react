import React from 'react';
import WorkContent from './WorkContent';

function LinkAppList() {
  return (
    <div className="link_app_list">
      <WorkContent title={"Naver"} icon={"naver"}/>
      <WorkContent title={"Daum"} icon={"daum"} />
      <WorkContent title={"Safari"} icon={"safari"}/>
      <WorkContent title={"Settings"} icon={"setting"}/>
    </div>
  );
}

export default LinkAppList;
