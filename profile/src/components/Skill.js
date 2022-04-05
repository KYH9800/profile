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

  const htmlLogo = () => {
    notification.open({
      message: 'HTML5',
      description: <p>웹 표준 기반 태그</p>,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  const cssLogo = () => {
    notification.open({
      message: 'CSS3',
      description: (
        <p>
          1. CSS 기초
          <br />
          2. styled-components 사용
          <br />
          3. antd 사용
          <br />
          4. gsap를 활용한 애니메이션
        </p>
      ),
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  const awsLogo = () => {
    notification.open({
      message: 'AWS',
      description: (
        <p>
          1.아마존 웹 서비스 활용 배포 경험
          <br />
          2. EC2 생성
          <br />
          3. S3를 통한 이미지 업로드 경험
          <br />
          4. lambda 함수를 통한 이미지 리사이징 경험
          <br />
          5. 무중단 서비스를 위한 PM2 사용 경험
        </p>
      ),
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  const gitLogo = () => {
    notification.open({
      message: 'git',
      description: <p>git을 활용한 프로젝트 관리</p>,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  const notionLogo = () => {
    notification.open({
      message: 'Notion',
      description: <p>협업을 위한 Notion 사용 경험</p>,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  const slackLogo = () => {
    notification.open({
      message: 'Slack',
      description: <p>협업을 위한 Slack 사용 경험</p>,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  return (
    <div className="skill">
      <h1 className="skillTitle">SKILLS</h1>
      <div className="skill-wrapper">
        <div className="first-line">
          <div className="first-title">Front</div>
          <img
            id="htmlLogo"
            onClick={htmlLogo}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HTML5_oval_logo.png/220px-HTML5_oval_logo.png"
          />
          <img
            id="cssLogo"
            onClick={cssLogo}
            src="https://media.vlpt.us/images/0jiiino/post/8c947a9e-3efd-47ed-be88-6a08107b6ea2/919826.png"
          />
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
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3uoxh_i09Kql4OVB5AjetPvijl-mxrxkTYpojSZnE1ktqBQPKiG67syvAYntqQO-_QhM&usqp=CAU`}
          />
          <img
            id="mySQLLogo"
            onClick={mySQLLogo}
            src="https://blog.kakaocdn.net/dn/bHEM84/btqELSQbMoy/IwvprjZSmoXMpJ1OiBxhW0/img.png"
          />
          <img
            id="awsLogo"
            onClick={awsLogo}
            src="https://pbs.twimg.com/profile_images/1351702967561252865/aXfcETIt_400x400.jpg"
          />
        </div>
        {/* {toggle ? ( */}
        <div className="third-line">
          <>
            <div className="third-title">Others</div>
            <img
              id="gitLogo"
              onClick={gitLogo}
              src="https://media.vlpt.us/images/printver_2world/post/be851a16-66bb-425d-919a-e2ffaa07bfe8/git_original_wordmark_logo_icon_146510.png"
            />
            <img
              id="notionLogo"
              onClick={notionLogo}
              src="https://blog.kakaocdn.net/dn/2CufY/btq8RTsnYaT/3EQm1A8iL54UcCzFkemVJ1/img.png"
            />
            <img
              id="slackLogo"
              onClick={slackLogo}
              src="https://cdn.icon-icons.com/icons2/3041/PNG/512/slack_logo_icon_189220.png"
            />
          </>
        </div>
        {/* ) : null} */}
      </div>
      {/* <button className="custom-btn moreBtn" onClick={onToggleClick} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        스킬 더보기
      </button> */}
    </div>
  );
};

export default Skill;
