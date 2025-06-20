import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import About from './Pages/AboutPage';
// import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}
