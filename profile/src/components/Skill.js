/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// css
import './Skill.css';
import 'antd/dist/antd.css';
import { notification } from 'antd';

const Skill = () => {
  const [toggle, setToggle] = useState(false);

  // btn gsap
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: '#cafdfc', scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: '#ffffff', scale: 1 });
  };

  // toggle
  const onToggleClick = () => {
    setToggle((prevState) => !prevState);
  };

  // logo
  const jsLogo = () => {
    notification.open({
      message: 'JavaScript',
      description: (
        <p>
          1. JavaScript 기초
          <br />
          2. JavaScript를 활용한 웹 게임 구현
        </p>
      ),
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  const reactLogo = () => {
    notification.open({
      message: 'React',
      description: (
        <p>
          1. React Hooks 사용
          <br />
          2. Next.js를 통한 SSR 경험
        </p>
      ),
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  const reduxLogo = () => {
    notification.open({
      message: 'Redux',
      description: (
        <p>
          1. Redux를 활용한 상태관리
          <br />
          2. Redux-saga 비동기 통신
        </p>
      ),
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  const nodeJSLogo = () => {
    notification.open({
      message: 'Node.js',
      description: (
        <p>
          1. Express 활용
          <br />
          2. Restful API 작성
          <br />
          3. Sequelize 활용 데이터 조작
        </p>
      ),
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  const mySQLLogo = () => {
    notification.open({
      message: 'MySQL',
      description: <p>관계형 데이터 베이스 관리 시스템 사용</p>,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  return (
    <div className="skill">
      <h1 className="skillTitle">SKILLS</h1>
      <div className="first-line">
        <div className="front-title">Front</div>
        <img
          id="jsLogo"
          onClick={jsLogo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/140px-Unofficial_JavaScript_logo_2.svg.png"
        />
        <img
          id="reactLogo"
          onClick={reactLogo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
        />
        <img id="reduxLogo" onClick={reduxLogo} src="https://img.icons8.com/color/480/redux.png" />
      </div>
      <div className="second-line">
        <div className="second-title">Back</div>
        <img
          id="nodeJSLogo"
          onClick={nodeJSLogo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png"
        />
        <img
          id="mySQLLogo"
          onClick={mySQLLogo}
          src="https://w7.pngwing.com/pngs/747/798/png-transparent-mysql-logo-mysql-database-web-development-computer-software-dolphin-marine-mammal-animals-text.png"
        />
      </div>
      {toggle ? (
        <div className="third-line">
          <>
            <div className="front-title">Others</div>
            <img
              id="jsLogo"
              onClick={jsLogo}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/140px-Unofficial_JavaScript_logo_2.svg.png"
            />
            <img
              id="reactLogo"
              onClick={reactLogo}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
            />
            <img id="reduxLogo" onClick={reduxLogo} src="https://img.icons8.com/color/480/redux.png" />
            <img
              id="jsLogo"
              onClick={jsLogo}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/140px-Unofficial_JavaScript_logo_2.svg.png"
            />
            <img
              id="reactLogo"
              onClick={reactLogo}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
            />
            <img id="reduxLogo" onClick={reduxLogo} src="https://img.icons8.com/color/480/redux.png" />
          </>
        </div>
      ) : null}
      <button className="custom-btn moreBtn" onClick={onToggleClick} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        스킬 더보기
      </button>
    </div>
  );
};

export default Skill;

/*
Node.js


Sequelize
Sequelize를 통한 MySQL 데이터 조작

MySQL
HTML5
CSS3
AWS
EC2 생성

S3를 통한 이미지 업로드 경험

lambda 함수를 통한 이미지 리사이징 경험

무중단 서비스를 위한 PM2 사용 경험

Others
Git
Notion
Slack
*/
