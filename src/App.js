import './styles/App.css';
import './styles/App1.css';
import './styles/App2.css';
import './styles/Appfont.css';

function App() {
  return (
    <nav>
      <div className="nav_logo">
        <p>mylogo</p>
      </div>
      <ul className="nav_menu">
        <li><a href="">HTML</a></li>
        <li><a href="">CSS</a></li>
        <li><a href="">JavaScript</a></li>
        <li><a href="">React</a></li>
      </ul>
      <ul class="nav_icon">
        <li>페이스북</li>
        <li>인스타그램</li>
      </ul>
    </nav>
  );
}

export default App;
