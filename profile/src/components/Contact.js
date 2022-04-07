import React from 'react';
// css
import './Contact.css';
import { PhoneOutlined, MailOutlined, InstagramOutlined, BoldOutlined, GithubOutlined } from '@ant-design/icons';

const Contact = () => {
  return (
    <div className="contactWrapper">
      <main>
        <h1>Contact</h1>
        <h2>
          Yun Hyeok Ko <span className="years">@2022</span>
        </h2>
        <div className="intro-wrapper">
          <p>
            <PhoneOutlined />
            <a href="tel:010-9800-5226">010-9800-5226</a>
          </p>
          <p>
            <MailOutlined />
            <a href="mailto:sksgur3217@gmail.com" target="blank">
              sksgur3217@gmail.com
            </a>
          </p>
          <p>
            <GithubOutlined />
            <a href="https://github.com/ko7452" target="blank">
              github
            </a>
          </p>
          <p>
            <BoldOutlined />
            <a href="https://hyeoky.tistory.com/" target="blank">
              Blog
            </a>
          </p>
          <p>
            <InstagramOutlined />
            <a href="https://www.instagram.com/kyh0506/?hl=ko" target="blank">
              Instagram
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Contact;
