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
            <a href="" target="blank">
              010-9800-5226
            </a>
          </p>
          <p>
            <MailOutlined />
            <a href="" target="blank">
              sksgur3217@gmail.com
            </a>
          </p>
          <p>
            <GithubOutlined />
            <a href="" target="blank">
              github
            </a>
          </p>
          <p>
            <BoldOutlined />
            <a href="" target="blank">
              Blog
            </a>
          </p>
          <p>
            <InstagramOutlined />
            <a href="" target="blank">
              Instagram
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Contact;
