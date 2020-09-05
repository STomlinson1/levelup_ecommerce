import React from 'react';

import MenuItem from '../Menu-Item/Menu-item.component';

import sectionData from './sectionData';

import './Directory.styles.scss';

class Directory extends React.Component {
	constructor() {
		super();

		this.state = { sections: [ ...sectionData ] };
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
