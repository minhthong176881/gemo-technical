import './App.css';
import './style/common.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Menu from './pages/menu';
import i18n from './i18';
import Checkout from './pages/checkout';
import Admin from './pages/admin';
import Login from './pages/login';

function App() {
  var lang = localStorage.getItem('lang');
  if (lang) i18n.changeLanguage(lang)
  else {
    i18n.changeLanguage('en')
    localStorage.setItem('lang', 'en')
  }
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/menu' exact Component={Menu} />
        <Route path='/checkout' exact Component={Checkout} />
        <Route path='/login' exact Component={Login} />
        <Route path='/admin' exact Component={Admin} />
      </Routes>
    </Router>
  );
}

export default App;
