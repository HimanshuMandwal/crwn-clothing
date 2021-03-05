import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function hats() {
  return (
    <div>
      <h1>hats Page </h1>
    </div>
  )
}

//props drelling is handled via using redux in our web app

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser : null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => { //this onAuthStateChanged function returns a f/n which on calling deletes the current sign user subscription
      if(user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapshot)=>{
          this.setState({
            currentUser:{id: snapshot.id,
            ...snapshot.data(),
            }
          },()=>{console.log(this.state)})
        })
      } else {
        this.setState({currentUser:user});
      }

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser ={this.state.currentUser}/>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
        <Route  path='/shop/hats' component= {hats}/>
        <Route path='/sign-in' component = {SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }

}

export default App;
