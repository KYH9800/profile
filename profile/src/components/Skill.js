import React, { useState } from 'react';
// css
import './Skill.css';
// import 'antd/dist/antd.css';
// import { Modal } from 'antd';

const Skill = () => {
  const [toggle, setToggle] = useState(false);

  const onToggleClick = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <div className="skill">
      <h1 className="skillTitle">SKILLS</h1>
      <div className="first-line">1</div>
      {toggle ? <div className="second-line">2</div> : null}
      <button onClick={onToggleClick}>스킬 더보기</button>
    </div>
  );
};

export default Skill;

/*
자바스크립트
<img
  onClick={showModal}
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/140px-Unofficial_JavaScript_logo_2.svg.png"
/>

리액트
<img
  onClick={showModal}
  style={{ width: '160px', height: '140px' }}
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
/>
*/

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
