import React from 'react';
import logo from './logo.svg';
import './App.css';
import {getUserApi} from './api-get/api-get'
import Header from './components/header/header'
 
function App() {
  console.log(getUserApi())
  return (
    <Header />
  );
}

export default App;
