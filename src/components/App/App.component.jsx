import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header.component';
import HomePage from '../../pages/HomePage/homepage.component';
import ShopPage from '../../pages/ShopPage/ShopPage.component';
import SignInSignUpPage from '../../pages/Sign-In-Sign-Up-Page/signInSignUp.component';

import { auth } from '../../firebase/firebase.utils';

import './App.styles.scss';

const App = () => {
	const [ currentUser, setCurrentUser ] = useState(null);

	useEffect(() => {
		let unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			console.log(user);
		});

		return () => {
			unsubscribeFromAuth();
		};
	}, []);

	return (
		<div>
			<Header currentUser={currentUser} />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
				<Route exact path="/signin" component={SignInSignUpPage} />
			</Switch>
		</div>
	);
};

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
