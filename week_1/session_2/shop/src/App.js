import './App.css';
import './style/common.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Navbar from './components/navbar';
import Menu from './pages/menu';
import i18n from './i18';

function App() {
  i18n.changeLanguage('en')
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
