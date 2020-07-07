import React from 'react';
import axios from 'axios';
import './App.css';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import Home from './pages/Home'
// import Saved from './pages/Saved'
// import Login from './pages/Login'

const App = () => {
  return (
    <Home/>
  )
}

export default App