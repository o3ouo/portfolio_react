import React from 'react';
import PageTansition from '../component/PageTansition';
import StatusBar from '../component/StatusBar';
import SideBar from './SideBar';
import Info from '../component/Info';
import CertiAndEduc from '../component/CertiAndEduc';
import Skills from '../component/Skills';

function AboutTablet() {
  const ulList = ["info", "Certificate", "Education", "Skill"];
  
  return (
    <PageTansition>
      <StatusBar color={".black_theme"} />
      <div className="about_page">
        <SideBar list={ulList}/>
        <div className="contents">
          <Info />
          <CertiAndEduc />
          <Skills />
        </div>
      </div>
    </PageTansition>
  );
};

export default AboutTablet;
