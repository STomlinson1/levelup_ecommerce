import React from 'react';

import CollectionItem from '../Collection-item/Collection-item.component';

import './Collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<h1 className="title">{title}</h1>
		<div className="preview">
			{items
				.filter((item, indx) => indx < 4)
				.map(({ id, name, imageUrl, price }) => (
					<CollectionItem key={id} imageurl={imageUrl} price={price} name={name} />
				))}
		</div>
	</div>
);

export default CollectionPreview;
