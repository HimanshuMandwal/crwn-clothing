import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import './App.css';
import { Route, Switch ,Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action'; // as this action is triggered using mapDispatchToProps
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import Checkout from './pages/checkout/checkout.component';

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
    //this onAuthStateChanged is tregred whenever there is change in the data of the firebase App that we he created this is a connection which s always open between App and firebase
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
    this.unsubscribeFromAuth(); //this will (close subcription) stop listening the data from firebase that we have started in onAuthStateChanged
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/shop/hats' component={hats} />
          <Route exact path='/sign-in' render={
              () => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)
            } />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  /*
  the functionality of dispatcher function says that whatever object you are passing me is going to be
  the action object that i(redux) am passing this action to all the reducers and this is like a functional property sent
  to the props to the component
  */
})

export default connect(mapStateToProps, mapDispatchToProps)(App); //as null as there is no any props need here in the App component so we pass null here



//react router works because the browser provide the history api which will mimc this navigation bar