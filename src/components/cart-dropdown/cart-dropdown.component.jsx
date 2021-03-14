import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import './cart-dropdown.styles.scss';


const CartDropdown = ({cartItems , history , dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.length ? cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem}/>):
            <span>Your cart is Empty</span>
        }
        </div>
        <CustomButton onClick= {() =>{
            history.push('/checkout')
            dispatch(toggleCartHidden())
        }}> Go To Checkout </CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({ //this selector always needs the root reducers
    cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown)) ;
