import React from 'react';
// css
import './Project.css';
import { Card } from 'antd';
import { LinkOutlined, BoldOutlined, GithubOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Project = () => {
  return (
    <div className="projectWrapper">
      <div>
        <h1 className="project-title">Project</h1>
        <div className="project-card-wrapper">
          <Card
            className="project-card"
            style={{ width: 300 }}
            cover={
              <img
                className="card-img"
                style={{ width: '285px', height: '135.13px', border: '1px solid gray' }}
                alt="SNS-project"
                src="https://user-images.githubusercontent.com/61128538/160061163-2475fd02-b6c5-4819-aa12-1416ff26768a.gif"
              />
            }
            actions={[<GithubOutlined key="github" />, <LinkOutlined key="link" />, <BoldOutlined key="blog" />]}>
            <Meta
              title="SNS-project"
              description={
                <p>
                  1. 프로젝트의 대한 설명
                  <br />
                  2. 프로젝트의 대한 설명
                </p>
              }
            />
          </Card>
          <Card
            className="project-card"
            style={{ width: 300 }}
            cover={
              <img
                className="card-img"
                style={{ width: '285px', height: '135.13px' }}
                alt="community-project"
                src="https://user-images.githubusercontent.com/61128538/153403861-c78e0889-ba9f-4761-96ce-e695180f1e72.png"
              />
            }
            actions={[<GithubOutlined key="github" />, <LinkOutlined key="link" />, <BoldOutlined key="blog" />]}>
            <Meta
              title="커뮤니티 게시판"
              description={
                <p>
                  1. 프로젝트의 대한 설명
                  <br />
                  2. 프로젝트의 대한 설명
                </p>
              }
            />
          </Card>
          <Card
            className="project-card"
            style={{ width: 300 }}
            cover={
              <img
                className="card-img"
                style={{ width: '285px', height: '135.13px' }}
                alt="profile-project"
                src="https://user-images.githubusercontent.com/61128538/161945918-3ec1b6db-6b75-4414-a86d-1e9f0a928624.png"
              />
            }
            actions={[<GithubOutlined key="github" />, <LinkOutlined key="link" />, <BoldOutlined key="blog" />]}>
            <Meta
              title="포트폴리오"
              description={
                <p>
                  1. 프로젝트의 대한 설명
                  <br />
                  2. 프로젝트의 대한 설명
                </p>
              }
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Project;
