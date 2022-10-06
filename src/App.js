import './css/App.css';
import './css/App1.css';
import './css/App2.css';
import './css/Appfont.css';

function App() {
  return (
    <div>
      <body>
        <nav>
          <div class="nav_logo">
            <p>mylogo</p>
          </div>
          <ul class="nav_menu">
            <li><a href="">HTML</a></li>
            <li><a href="">CSS</a></li>
            <li><a href="">JavaScript</a></li>
            <li><a href="">React</a></li>
          </ul>
          <ul class="nav_icon">

            <li><i class="fa-brands fa-square-facebook"></i></li>

            <li><i class="fa-brands fa-square-instagram"></i></li>
          </ul>
        </nav>
      </body>
    </div>
  );
}

export default App;
