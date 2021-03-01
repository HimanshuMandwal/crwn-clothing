import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import './App.css';
import { Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

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
      <Route  path='/shop' component={ShopPage}/>
      <Route  path='/shop/hats' component= {hats}/>
      <Route path='/sign-in' component = {SignInAndSignUpPage}/>
      </switch>
    </div>
  );
}

export default App;
