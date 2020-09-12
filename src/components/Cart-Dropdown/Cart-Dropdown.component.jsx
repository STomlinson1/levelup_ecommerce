import React from 'react';

import CustomButtom from '../CustomButton/CustomButton.component';

import './Cart-Dropdown.styles.scss';

const CartDropdown = () => (
	<div className="cart-dropdown">
		<div className="cart-items" />
		<CustomButtom>Go TO CHECKOUT</CustomButtom>
	</div>
);

export default CartDropdown;
