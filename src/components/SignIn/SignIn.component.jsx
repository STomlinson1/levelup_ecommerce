import React, { useState } from 'react';

import FormInput from '../Form-Input/Form-Input.component';
import CustomButton from '../CustomButton/CustomButton.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './SignIn.styles.scss';

const SignIn = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		setPassword('');
		setEmail('');
	};

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	return (
		<div className="sign-in">
			<h2 className="title">I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={onSubmit}>
				<FormInput
					type="email"
					name="email"
					value={email}
					handleChange={handleEmail}
					label="email"
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					handleChange={handlePassword}
					label="password"
					required
				/>
				<CustomButton type="submit">Sign In</CustomButton>
				<CustomButton onClick={signInWithGoogle}>Sign in with Google</CustomButton>
			</form>
		</div>
	);
};

export default SignIn;
