import './styles/App.css';
import './styles/App1.css';
import './styles/App2.css';
import './styles/index.css'

import MySection from './MySection';

function MyMain() {
  return (
    <main>
      <MySection h1="HTML" p="testHTML"/>
      <MySection h1="CSS" p="testCSS"/>
      <MySection h1="JavaScript" p="testJS"/>
      <MySection h1="React" p="testReact"/>
    </main>
  );
}

export default MyMain;
