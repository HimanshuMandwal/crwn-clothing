import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import './App.css';
import { Route } from 'react-router-dom';

function hats() {
  return (
    <div>
      <h1>hats Page </h1>
    </div>
  )
}


function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop/hats' component= {hats}/>
    </div>
  );
}

export default App;
