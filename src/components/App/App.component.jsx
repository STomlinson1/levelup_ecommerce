import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../../pages/HomePage/homepage.component';

import './App.styles.scss';

const App = () => (
	<div>
		<Switch>
			<Route exact path="/" component={HomePage} />
		</Switch>
	</div>
);

export default App;

/*
Switch - when switch sees something match a path, It will only render that component
				 prevents us from accidently rendering multiple components

!!! When using react-router, each component rendered is passed three props:
			history, location, and match

			the match prop is important because it allows us to access the params of the url
					example:  /clothing/jackets/:jacketId
				in the component we will have acces to the param jacketId
				we also have access to match.url which will give our current location
					useful for dynamic routing

			the history prop gives us access to history.push('where we want to go')
*/
