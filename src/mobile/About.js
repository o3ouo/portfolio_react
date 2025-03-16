import React from 'react';
import { Routes, Route } from "react-router-dom";
import useAutoRedirect from '../customHook/useAutoRedirect';
import PageTansition from '../component/PageTansition';
import NavBar from '../component/NavBar';
import Info from '../component/Info';
import CertiAndEduc from '../component/CertiAndEduc';
import Skills from '../component/Skills';
import TabMenu from '../component/TabMenu';

function About() {
  useAutoRedirect("/about", "info");
  const tabs = [
    { path: "info", label: "Info" },
    { path: "certi_educ", label: "Certificate & Education" },
    { path: "skills", label: "Skills" }
  ]

  return (
    <PageTansition>
      <div className="about_page">
        <div className="inner">
          <NavBar title={"About Me"} />

          <div className="contents">
            <Routes>
              <Route path="info" element={<Info />} />
              <Route path="certi_educ" element={<CertiAndEduc />} />
              <Route path="skills" element={<Skills />} />
            </Routes>
          </div>

          <TabMenu basePath="/about" tabs={tabs} />
        </div>
      </div>
    </PageTansition>
  );
}

export default About;
