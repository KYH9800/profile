import React from 'react';
// css
import './App.css';
import { gsap } from 'gsap';
// components
import Skill from './components/Skill';

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <div>header</div>
      </header>
      <main className="main">
        <Skill />
      </main>
      <footer className="footer">footer</footer>
    </div>
  );
};

export default App;

/*
flip, fade-in 등의 애니메이션 : AOS
복잡한 애니메이션 구현 : GSAP
별 내리는 애니메이션 샘플 코드 : Star animation
색상 조합 사이트 : Color hunt
무료 아이콘 사이트 : Iconmonstr
*/
