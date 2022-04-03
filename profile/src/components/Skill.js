import React, { useState } from 'react';
// css
import './Skill.css';

const Skill = () => {
  const [toggle, setToggle] = useState(false);

  const onToggleClick = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <div className="skill">
      <h1 className="skillTitle">SKILLS</h1>
      <div className="first-line">
        <div className="jsWrapper">
          <div
            className="containor"
            style={{
              background:
                'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/140px-Unofficial_JavaScript_logo_2.svg.png)',
              'background-repeat': 'no-repeat',
              'background-size': 'cover',
            }}>
            <div className="js-word">JavaScript</div>
          </div>
        </div>
        <div
          className="containor"
          style={{
            background:
              'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png)',
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
          }}>
          <h2>React</h2>
          <p>Hooks 사용</p>
        </div>
        <div className="containor">
          <h2>Redux</h2>
          <p>Redux-saga 비동기 통신</p>
        </div>
        <div className="containor">
          <h2>Node.js</h2>
        </div>
        <div className="containor">
          <h2>Express</h2>
          <p>Restful API 작성</p>
        </div>
        <div className="containor">
          <h2>Sequelize</h2>
          <p>Sequelize를 통한 MySQL 데이터 조작</p>
        </div>
        <div className="containor">
          <h2>MySQL</h2>
        </div>

        {toggle ? (
          <div className="second-line">
            <div className="containor">
              <h2>HTML5</h2>
            </div>
            <div className="containor">
              <h2>CSS3</h2>
            </div>
            <div>
              <h2>AWS</h2>
              <p>EC2 생성</p>
              <p>S3를 통한 이미지 업로드 경험</p>
              <p>lambda 함수를 통한 이미지 리사이징 경험</p>
              <p>무중단 서비스를 위한 PM2 사용 경험</p>
            </div>
            <h1>Others</h1>
            <div>Git</div>
            <div>Notion</div>
            <div>Slack</div>
          </div>
        ) : null}
        <button onClick={onToggleClick}>스킬 더보기</button>
      </div>
    </div>
  );
};

export default Skill;
