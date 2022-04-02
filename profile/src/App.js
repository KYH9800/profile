/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// css
import './App.css';
// components
import Contact from './components/Contact';
import Skill from './components/Skill';
import Project from './components/Project';
import About from './components/About';
import Education from './components/Education';

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <nav className="topMenu">
          <ul>
            <li>
              <a className="menuLink" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="menuLink" href="#Introduce">
                About
              </a>
            </li>
            <li>
              <a className="menuLink" href="#Skill">
                Skill
              </a>
            </li>
            <li>
              <a className="menuLink" href="#Project">
                Project
              </a>
            </li>
            <li>
              <a className="menuLink" href="#Education">
                Education
              </a>
            </li>
            <li>
              <a className="menuLink" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="title">
          <a>인정합니다. 프론트엔드 개발자 고윤혁</a>
        </div>
      </header>

      <div className="wrapper">
        <main className="main">
          <div id="Introduce">
            <About />
          </div>
          <div id="Skill">
            <Skill />
          </div>
          <div id="Project">
            <Project />
          </div>
          <div id="Education">
            <Education />
          </div>
          <div id="Contact">
            <Contact />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;

/*
flip, fade-in 등의 애니메이션 : AOS
복잡한 애니메이션 구현 : GSAP
별 내리는 애니메이션 샘플 코드 : Star animation
색상 조합 사이트 : Color hunt
무료 아이콘 사이트 : Iconmonstr
*/
