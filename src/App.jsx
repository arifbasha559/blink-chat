import React from 'react'
import Auth from './Components/Auth'
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes,  } from 'react-router-dom';
import { Home } from './Components/Home';
const App = () => {
  return (
    <Router>
    <div className="">
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  </Router>
    
  )
}

export default App