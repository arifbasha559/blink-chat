import React from 'react'
import Auth from './Components/Auth'
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes,  } from 'react-router-dom';
import { Home } from './Components/Home';
const App = () => {
  return (
    <Router>
    <div className="">
      <nav className="flex gap-4 mb-4">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/about" className="text-blue-500">About</Link>
        <Link to="/contact" className="text-blue-500">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Auth />} />
      </Routes>
    </div>
  </Router>
    
  )
}

export default App