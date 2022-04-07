/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
// css
import './App.css';
import { MenuOutlined } from '@ant-design/icons';
// components
import Contact from './components/Contact';
import Skill from './components/Skill';
import Project from './components/Project';
import About from './components/About';
import Education from './components/Education';

const App = () => {
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillRef = useRef();
  const projectRef = useRef();
  const educationRef = useRef();
  const contactRef = useRef();

  const [toggle, setToggle] = useState(false);

  const onClickToggle = () => {
    setToggle((prevState) => !prevState);
  };

  useEffect(() => {
    gsap.to(homeRef.current, {
      rotation: '+=360',
    });
    gsap.to(aboutRef.current, {
      rotation: '+=360',
    });
    gsap.to(skillRef.current, {
      rotation: '+=360',
    });
    gsap.to(projectRef.current, {
      rotation: '+=360',
    });
    gsap.to(educationRef.current, {
      rotation: '+=360',
    });
    gsap.to(contactRef.current, {
      rotation: '+=360',
    });
  });

  return (
    <div className="App">
      <header className="header">
        {/* 웹 화면 */}
        <nav className="topMenu">
          <ul>
            <li>
              <a className="menuLink" ref={homeRef} href="#">
                Home
              </a>
            </li>
            <li>
              <a className="menuLink" ref={aboutRef} href="#About">
                About
              </a>
            </li>
            <li>
              <a className="menuLink" ref={skillRef} href="#Skill">
                Skill
              </a>
            </li>
            <li>
              <a className="menuLink" ref={projectRef} href="#Project">
                Project
              </a>
            </li>
            <li>
              <a className="menuLink" ref={educationRef} href="#Education">
                Education
              </a>
            </li>
            <li>
              <a className="menuLink" ref={contactRef} href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {/* 모바일 화면 */}
        <nav className="mobile-topMenu">
          <div className="bugger">
            <MenuOutlined onClick={onClickToggle} />
          </div>
          {toggle ? (
            <div className="menulist">
              <ul>
                <li>
                  <a className="menuLink" ref={homeRef} href="#" onClick={onClickToggle}>
                    Home
                  </a>
                </li>
                <li>
                  <a className="menuLink" ref={aboutRef} href="#About" onClick={onClickToggle}>
                    About
                  </a>
                </li>
                <li>
                  <a className="menuLink" ref={skillRef} href="#Skill" onClick={onClickToggle}>
                    Skill
                  </a>
                </li>
                <li>
                  <a className="menuLink" ref={projectRef} href="#Project" onClick={onClickToggle}>
                    Project
                  </a>
                </li>
                <li>
                  <a className="menuLink" ref={educationRef} href="#Education" onClick={onClickToggle}>
                    Education
                  </a>
                </li>
                <li>
                  <a className="menuLink" ref={contactRef} href="#Contact" onClick={onClickToggle}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          ) : null}
        </nav>

        <div className="title">
          <div>
            <a>인정하는 프론트엔드 개발자 고윤혁입니다.</a>
          </div>
        </div>
      </header>

      <div className="wrapper">
        <main className="main">
          <div id="About">
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
