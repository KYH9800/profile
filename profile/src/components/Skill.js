/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// css
import './Skill.css';
import 'antd/dist/antd.css';
import { notification } from 'antd';

const Skill = () => {
  const [toggle, setToggle] = useState(false);
  const jsRef = useRef();
  const reactRef = useRef();

  useEffect(() => {
    gsap.to(jsRef.current, {
      rotation: '+=360',
    });
    gsap.to(reactRef.current, {
      rotation: '+=360',
    });
  });

  const onToggleClick = () => {
    setToggle((prevState) => !prevState);
  };

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

  return (
    <div className="skill">
      <h1 className="skillTitle">SKILLS</h1>
      <div className="first-line">
        <img
          onClick={jsLogo}
          ref={jsRef}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/140px-Unofficial_JavaScript_logo_2.svg.png"
        />
        <img
          onClick={reactLogo}
          ref={reactRef}
          style={{ width: '160px', height: '140px' }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
        />
      </div>
      {toggle ? <div className="second-line">2</div> : null}
      <button onClick={onToggleClick}>스킬 더보기</button>
    </div>
  );
};

export default Skill;

/*
Redux
Redux-saga 비동기 통신

Node.js
Express
Restful API 작성

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
