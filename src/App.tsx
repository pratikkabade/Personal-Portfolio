import { Projects } from './pages/Projects';
import { Home } from './pages/Home';
import './style/App.css';
import './style/index.css';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Experience } from './pages/Experience';
import { Education } from './pages/Education';

function App() {
  return (
    <div className='fullpage h-screen select-none'>
      <Home />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
