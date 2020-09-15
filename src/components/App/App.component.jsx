import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setCurrentUser } from '../../redux/user/user.actions';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selector';

import Header from '../Header/Header.component';
import Footer from '../Footer/Footer.component';
import HomePage from '../../pages/HomePage/homepage.component';
import ShopPage from '../../pages/ShopPage/ShopPage.component';
import SignInSignUpPage from '../../pages/Sign-In-Sign-Up-Page/signInSignUp.component';
import CheckoutPage from '../../pages/CheckoutPage/CheckoutPage.component';

import './App.styles.scss';

const App = ({ setCurrentUser, currentUser }) => {
	useEffect(() => {
		let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id : snapShot.id,
						...snapShot.data()
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});

		return () => {
			unsubscribeFromAuth();
		};
	}, []);

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route exact path="/checkout" component={CheckoutPage} />
				<Route
					exact
					path="/signin"
					render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUpPage />)}
				/>
			</Switch>
			<Footer />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser : selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser : (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

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

Redirect is used to redirect a user based on a condition. See line 46.
*/
