import React from 'react';
// css
import './Project.css';
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
            <div className="card-ex">
              <h2>SNS-project</h2>
              <h3>Stack</h3>
              <p>
                1. Next.js를 통한 SSR 구현과 SEO
                <br />
                2. express 통한 서버 구성
                <br />
                3. sequelize 활용 데이터 베이스 조작
              </p>
              <h3>구현 기능</h3>
              <p>
                1. 로그인 & 회원가입
                <br />
                2. CRUD
                <br />
                3. 해시태그 기능
                <br />
                4. 팔로우 & 팔로잉
                <br />
                5. 이미지 업로드
                <br />
                6. 무한 스크롤
              </p>
            </div>
            <div className="project-link">
              <a href="https://github.com/ko7452/profile" target="blank">
                <GithubOutlined key="github" />
              </a>
              <a href="https://ko7452.github.io/profile/" target="blank">
                <LinkOutlined key="link" />
              </a>
              <a href="https://github.com/ko7452/profile" target="blank">
                <BoldOutlined key="blog" />
              </a>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img"
              alt="community-project"
              src="https://user-images.githubusercontent.com/61128538/161949665-b180a189-c758-42d7-91d6-bffd8daa70cc.png"
            />
            <div className="card-ex">
              <h2>Community</h2>
              <h3>Stack</h3>
              <p>
                1. Next.js
                <br />
                2. express
                <br />
                3. sequelize
              </p>
              <h3>구현 기능</h3>
              <p>
                1. 로그인
                <br />
                2. 회원가입
                <br />
                3. CRUD
                <br />
                4. 카테고리별 목록 모아보기
                <br />
                5. 이미지 업로드
                <br />
                6. 무한 스크롤
              </p>
            </div>
            <div className="project-link">
              <a href="https://github.com/ko7452/profile" target="blank">
                <GithubOutlined key="github" />
              </a>
              <a href="https://ko7452.github.io/profile/" target="blank">
                <LinkOutlined key="link" />
              </a>
              <a href="https://github.com/ko7452/profile" target="blank">
                <BoldOutlined key="blog" />
              </a>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img"
              alt="profile-project"
              src="https://user-images.githubusercontent.com/61128538/161945918-3ec1b6db-6b75-4414-a86d-1e9f0a928624.png"
            />
            <div className="card-ex">
              <h2>Portfolio</h2>
              <h3>Stack</h3>
              <p>
                1. React
                <br />
                2. css(with animation)
                <br />
                3. antd, gsap
              </p>
              <h3>설명</h3>
              <p>
                1. Portfolio 페이지
                <br />
                2. git을 통해 호스팅
                <br />
                3. 애니메이션 적용
                <br />
                4. 메뉴바 클릭을 통한 스크롤 이동
              </p>
            </div>
            <div className="project-link">
              <a href="https://github.com/ko7452/profile" target="blank">
                <GithubOutlined key="github" />
              </a>
              <a href="https://ko7452.github.io/profile/" target="blank">
                <LinkOutlined key="link" />
              </a>
              <a href="https://github.com/ko7452/profile" target="blank">
                <BoldOutlined key="blog" />
              </a>
            </div>
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
