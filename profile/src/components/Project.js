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
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[<GithubOutlined key="github" />, <LinkOutlined key="link" />, <BoldOutlined key="blog" />]}>
            <Meta
              title="Twic-SNS"
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
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
