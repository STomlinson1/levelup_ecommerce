import React, { useState } from 'react';

import FormInput from '../Form-Input/Form-Input.component';
import CustomButton from '../CustomButton/CustomButton.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import './SignIn.styles.scss';

const SignIn = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			await auth.signInWithEmailAndPassword(email, password);
			setPassword('');
			setEmail('');
		} catch (error) {
			console.log(error);
		}
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
					label="Email"
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					handleChange={handlePassword}
					label="Password"
					required
				/>
				<div className="buttons">
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
