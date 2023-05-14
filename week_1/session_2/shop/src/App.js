import './App.css';
import './style/common.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Navbar from './components/navbar';
import Menu from './pages/menu';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/menu' exact Component={Menu} />
      </Routes>
    </Router>
  );
}

export default App;
