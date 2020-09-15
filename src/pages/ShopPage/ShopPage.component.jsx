import React from 'react';

import CollectionsOverview from '../../components/Collections-Overview/Collections-Overview.component';

import './ShopPage.styles.scss';

const ShopPage = ({ collections }) => {
	return (
		<div className="shop-page">
			<CollectionsOverview />
		</div>
	);
};

export default ShopPage;
