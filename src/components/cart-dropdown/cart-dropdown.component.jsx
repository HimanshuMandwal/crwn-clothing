import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './cart-dropdown.styles.scss';


const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
             cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem}/>)
        }
        </div>
        <CustomButton> Go To Checkout </CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({ //this selector always needs the root reducers
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)  ;
