import React from 'react'
import  {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';


const CartIcon  = ({ toggleCartHidden , itemCount }) => (
    <div className="cart-icon" onClick= {toggleCartHidden}>
        <ShoppingIcon className="shopping-icon "/>
        <span className="item-count">{itemCount}</span>

    </div>
)
const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({ //this is type of selector
    itemCount: selectCartItemCount(state)//0 as accumulator
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
