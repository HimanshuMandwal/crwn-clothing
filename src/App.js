import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import './App.css';
import { Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

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
      <Header/>
      <switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path='/shop/hats' component= {hats}/>
      </switch>
    </div>
  );
}

export default App;
