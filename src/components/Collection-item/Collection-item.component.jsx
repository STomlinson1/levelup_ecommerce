import React from 'react';

import './Collection-item.styles.scss';

const CollectionItem = ({ id, name, imageurl, price }) => (
	<div className="collection-item">
		<div
			className="image"
			style={{
				backgroundImage : `url(${imageurl})`
			}}
		/>
		<div className="collection-footer">
			<span className="name">{name}</span>
			<span className="price">${price}</span>
		</div>
	</div>
);

export default CollectionItem;
