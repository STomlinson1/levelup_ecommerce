import React from 'react';
import { withRouter } from 'react-router-dom';

import './Menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	<div
		className={`${size} menu-item`}
		onClick={() => history.push(`${match.url}${linkUrl}`)}
	>
		<div
			className="background-image"
			style={{
				backgroundImage : `url(${imageUrl})`
			}}
		/>
		<div className="content">
			<h1 className="title">{title.toUpperCase()}</h1>
			<span className="subtitle">SHOP NOW</span>
		</div>
	</div>
);

export default withRouter(MenuItem);

/*
	withRouter gives components access to the history object.
	withRouter is a higher order function that takes a component as an arguement
	and returns a modified version with the history object

*/
