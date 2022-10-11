import './styles/App.css';
import './styles/App1.css';
import './styles/App2.css';
import './styles/Dppfont.css';
import html from './img/html.png';
import css from './img/css.png';
import js from './img/js.png';
import react from './img/react.png';

function Dpp() {
  return (
      <main>
        <section>
          <div>
            <img src={html} alt="html" />
          </div>
          <div className="Content">
            <h1>HTML</h1>
            <p>HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용</p>
          </div>
        </section>
        <section>
          <div><img src={css} alt="css" /></div>
          <div className="Content">
            <h1>CSS</h1>
            <p>Cascading Style Sheets(CSS)는 HTML이나 XML(XML의 방언인 SVG, XHTML 포함)로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어</p>
          </div>
        </section>
        <section>
          <div><img src={js} alt="js" /></div>
          <div className="Content">
            <h1>JavaScript</h1>
            <p>웹 페이지를 위한 스크립트 언어로 가벼운, 인터프리터 혹은 just-in-time 컴파일 프로그래밍 언어로, 일급 함수를 지원</p>
          </div>
        </section>
        <section>
          <div><img src={react} alt="react" /></div>
          <div className="Content">
            <h1>React</h1>
            <p>사용자 인터페이스를 만들기 위한 JavaScript 라이브러리</p>
          </div>
        </section>
      </main>
  );
}

export default Dpp;
