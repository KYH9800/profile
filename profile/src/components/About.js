import React from 'react';
// css
import './About.css';

const About = () => {
  return (
    <div className="aboutWrapper">
      <div className="aboutMain">
        <h2>About Me</h2>
        <div className="introTitle">
          <h3>
            "빠르게 성공하는 방법은 부족함과 실패를 <span>인정하는</span> 것이다."
          </h3>
          <div className="intro">
            <p>
              빠르게 성장하기 위해 부족함을 <span style={{ color: 'red' }}>인정</span>하고 때로는 실패를{' '}
              <span style={{ color: 'red' }}>인정</span>할줄 아는 사람.
            </p>
            <p>
              스스로가 또는 누군가 원하는 서비스를 직접 구현할 수 있다는 것에 매료되어 개발에 관심을 갖게 되었고,
              <br />
              <a
                href="https://planet-aletopelta-fbc.notion.site/ES2021-c0ab1e5ea3a7434abd95e5ecd2a11a25"
                style={{ color: 'green' }}
                target="blank">
                인프런
              </a>
              을 통해 기초부터 심화과정까지의 개발 교육과정을 마쳤습니다.
            </p>
            <p>
              완성도 높은 코드와 기능 구현 및 성능 개선을 위해 끊임 없이 고민하는 개발자가 되겠습니다.
              <br />
              새로운 도전과 환경을 언제나 즐기는 개발자 입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

/*
const [ScrollY, setScrollY] = useState(0);
  const handleFollow = () => {
    setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
  };

  useEffect(() => {
    console.log('ScrollY is ', ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
  }, [ScrollY]);

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow);
    };
  }, []);
*/
