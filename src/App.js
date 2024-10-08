import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import image from './image.png'; 
import SignUp from './Pages/SignUp';   
import Login from './Pages/Login';     
import About from './Pages/About';     
import Services from './Pages/Services';  
import Contact from './Pages/Contact';    

function App() {
  return (
    <Router>
      <div className="app-container" style={{ backgroundImage: `url(${image})` }}>
        <header>
          <nav className="navbar">
            <ul>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
