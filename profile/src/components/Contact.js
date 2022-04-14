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
          <a className="pc-link" href="tel:010-9800-5226">
            <PhoneOutlined />
            010-9800-5226
          </a>
          <a className="mobile-link" href="tel:010-9800-5226">
            <p className="mobile-ptag">
              <PhoneOutlined />
              010-9800-5226
            </p>
          </a>

          <a className="pc-link" href="mailto:sksgur3217@gmail.com">
            <MailOutlined />
            sksgur3217@gmail.com
          </a>
          <a className="mobile-link" href="mailto:sksgur3217@gmail.com">
            <p className="mobile-ptag">
              <MailOutlined />
              sksgur3217@gmail.com
            </p>
          </a>

          <a className="pc-link" href="https://github.com/KYH9800" target="blank">
            <GithubOutlined />
            github
          </a>
          <a className="mobile-link" href="https://github.com/KYH9800">
            <p className="mobile-ptag">
              <GithubOutlined />
              github
            </p>
          </a>

          <a className="pc-link" href="https://hyeoky.tistory.com/" target="blank">
            <BoldOutlined />
            Blog
          </a>
          <a className="mobile-link" href="https://hyeoky.tistory.com/">
            <p className="mobile-ptag">
              <BoldOutlined />
              Blog
            </p>
          </a>

          <a className="pc-link" href="https://www.instagram.com/kyh0506/?hl=ko" target="blank">
            <InstagramOutlined />
            Instagram
          </a>
          <a className="mobile-link" href="https://www.instagram.com/kyh0506/?hl=ko">
            <p className="mobile-ptag">
              <InstagramOutlined />
              Instagram
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Contact;
