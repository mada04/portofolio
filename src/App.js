
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import About from './component/About';
import Header from './component/Header';
import Projects from './component/Project';
import Resume from './component/Resume';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <Router>

    <div >
     <Header/>
     <Routes>
      <Route path="/" element={<About/>}/>
      <Route path="/projects" element={<Projects />} /> 
      <Route path="/resume" element={<Resume />} /> 
      <Route path="/contact" element={<Contact />} /> 
     </Routes>
    </div>
<Footer/>
    </Router>
  );
}

export default App;
