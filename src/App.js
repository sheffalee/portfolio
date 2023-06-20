import './App.css';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Nav/>
      <MainContent/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
