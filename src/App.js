import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ColorSchemesExample from './components/navbar'; // Pastikan ini adalah komponen navbar
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Product'; // Pastikan ini adalah komponen yang benar

const App = () => {
  return (
      <Router>
          <div>
            <ColorSchemesExample />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Product" element={<Products />} />
            </Routes>
          </div>
      </Router>
  );
};

export default App;