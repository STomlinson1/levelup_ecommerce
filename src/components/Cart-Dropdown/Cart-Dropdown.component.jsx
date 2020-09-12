import React from 'react';
import { connect } from 'react-redux';

import CustomButtom from '../CustomButton/CustomButton.component';
import CartItem from '../Cart-Item/Cart-Item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './Cart-Dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.map((item) => <CartItem key={item.id} item={item} />)}
		</div>
		<CustomButtom>GO TO CHECKOUT</CustomButtom>
	</div>
);

const mapStateToProps = (state) => ({
	cartItems : selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
