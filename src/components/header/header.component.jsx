import React from 'react';
import { Link}  from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/headerIcon/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux' ; //Connect is a heigher order component

const Header = ({currentUser}) => (
   <div className ='header'>
       <Link className='logo-container' to="/">
            <Logo className="logo"></Logo>
       </Link>
        <div className='options'>
            <Link  className='option' to='/shop'>
                SHOP
            </Link>
            <Link  className='option' to='/shop'>
                CONTACT
            </Link>
            {currentUser?
            <div className="option" onClick = {()=> auth.signOut()}>SIGN OUT</div>
            :<Link  className='option' to='/sign-in'>SIGNIN</Link>}
        </div>
   </div>
);

const mapStateToProps = (state) => ({ //after making this we automaticaly have currentUser in props of the function
    currentUser: state.user.currentUser, //this state here is top level reducer state and that is mapped to the prop currentUser
})

export default connect(mapStateToProps)(Header); //creating a heigher order component using connect function