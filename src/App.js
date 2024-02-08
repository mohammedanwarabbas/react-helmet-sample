import {HashRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
