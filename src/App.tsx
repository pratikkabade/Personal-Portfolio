import { Projects } from './pages/Projects';
import { Home } from './pages/Home';
import './style/App.css';
import './style/index.css';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  return (
    <div className='fullpage h-screen select-none'>
      <Home />
      <About />

      <div className="parallax">
        <Projects />
      </div>

      <Contact />
    </div>
  );
}

export default App;
