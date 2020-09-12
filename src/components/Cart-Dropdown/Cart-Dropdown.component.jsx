import React from 'react';
import { connect } from 'react-redux';

import CustomButtom from '../CustomButton/CustomButton.component';
import CartItem from '../Cart-Item/Cart-Item.component';

import './Cart-Dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.map((item) => <CartItem key={item.id} item={item} />)}
		</div>
		<CustomButtom>GO TO CHECKOUT</CustomButtom>
	</div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems
});

export default connect(mapStateToProps)(CartDropdown);
