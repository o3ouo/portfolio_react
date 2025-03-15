import React from 'react';

const Skill = ({ title ,name }) => {
  return (
    <li>
      <figure className="img">
        <img src={`${process.env.PUBLIC_URL}/image/${name}_icon.png`} alt={`${name}_icon`} />
      </figure>
      <p className="skill_name">{title}</p>
    </li>
  )
}

function Skills() {
  return (
    <div className="skills">
      <ul className="list">
        <Skill title={"HTML"} name={"html"}/>
        <Skill title={"CSS"} name={"css"}/>
        <Skill title={"JavaScript"} name={"js"}/>
        <Skill title={"jQuery"} name={"jquery"}/>
        <Skill title={"React"} name={"react"}/>
        <Skill title={"Visual Studio Code"} name={"vscode"}/>
        <Skill title={"Figma"} name={"figma"}/>
        <Skill title={"Adobe Photoshop"} name={"ps"}/>
        <Skill title={"Adobe Illustrator"} name={"ai"}/>
        <Skill title={"Adobe After Effects"} name={"ae"}/>
        <Skill title={"Adobe Premiere Pro"} name={"pr"}/>
        <Skill title={"Blender"} name={"blender"}/>
      </ul>
    </div>
  );
}

export default Skills;
