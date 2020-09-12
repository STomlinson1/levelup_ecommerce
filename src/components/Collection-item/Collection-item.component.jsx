import React from 'react';
import { connect } from 'react-redux';

import CustomButtom from '../CustomButton/CustomButton.component';
import { addItem } from '../../redux/cart/cart.actions';

import './Collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
	const { imageUrl, name, price } = item;
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage : `url(${imageUrl})`
				}}
			/>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">${price}</span>
			</div>
			<CustomButtom onClick={() => addItem(item)} inverted>
				Add To Cart
			</CustomButtom>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem : (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
