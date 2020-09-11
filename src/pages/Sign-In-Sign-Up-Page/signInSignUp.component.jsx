import React from 'react';

import SignIn from '../../components/SignIn/SignIn.component';
import SignUp from '../../components/SignUp/SignUp.component';

import './signInSignUp.styles.scss';

const SignInSignUpPage = () => (
	<div className="sign-in-up-page">
		<SignIn />
		<SignUp />
	</div>
);

export default SignInSignUpPage;
