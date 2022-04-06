import React from 'react';
// css
import './Project.css';
import { Card } from 'antd';
import { LinkOutlined, BoldOutlined, GithubOutlined } from '@ant-design/icons';
// const { Meta } = Card;

const Project = () => {
  return (
    <div className="projectWrapper">
      <div>
        <h1 className="project-title">Project</h1>
        <div className="project-card-wrapper">
          <div className="card">
            <img
              className="card-img"
              alt="SNS-project"
              src="https://user-images.githubusercontent.com/61128538/160061163-2475fd02-b6c5-4819-aa12-1416ff26768a.gif"
            />
          </div>
          <div className="card">
            <img
              className="card-img"
              alt="community-project"
              src="https://user-images.githubusercontent.com/61128538/161949665-b180a189-c758-42d7-91d6-bffd8daa70cc.png"
            />
          </div>
          <div className="card">
            <img
              className="card-img"
              alt="profile-project"
              src="https://user-images.githubusercontent.com/61128538/161945918-3ec1b6db-6b75-4414-a86d-1e9f0a928624.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

/*
<a href="https://github.com/ko7452/profile" target="blank">
  <GithubOutlined key="github" />
</a>,
<a href="https://ko7452.github.io/profile/" target="blank">
  <LinkOutlined key="link" />
</a>,
<a href="https://github.com/ko7452/profile" target="blank">
  <BoldOutlined key="blog" />
</a>
*/
