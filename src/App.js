import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action'; // as this action is triggered using mapDispatchToProps

function hats() {
  return (
    <div>
      <h1>hats Page </h1>
    </div>
  )
}

//props drelling is handled via using redux in our web app

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } =  this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => { //this onAuthStateChanged function returns a f/n which on calling deletes the current sign user subscription
      if(user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapshot)=>{
          setCurrentUser({
            currentUser:{id: snapshot.id,
            ...snapshot.data(),
            }
          },()=>{console.log(this.state)})
        })
      } else {
        setCurrentUser(user);
      }

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)), //whatever object you  are passing me is going to be the action object that i(redux) am passing this action to all the reducers
})
export default connect(null, mapDispatchToProps)(App); //as null as there is no any props need here in the App component so we pass null here
