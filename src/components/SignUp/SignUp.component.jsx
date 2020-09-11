import React, { useState } from 'react';

import FormInput from '../Form-Input/Form-Input.component';
import CustomButtom from '../CustomButton/CustomButton.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './Signup.styles.scss';

export default function SignUp() {
	const [ displayName, setDisplayName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);

			await createUserProfileDocument(user, { displayName });

			setDisplayName('');
			setEmail('');
			setPassword('');
			setConfirmPassword('');
		} catch (error) {
			console.log(error);
		}
	};

	const handleDisplayName = (e) => {
		setDisplayName(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handlePassword = (e) => {
		setPassword(e.target.value);
	};
	const handleConfirmPassword = (e) => {
		setConfirmPassword(e.target.value);
	};

	return (
		<div className="sign-up">
			<h2 className="title">I do not have an account</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					handleChange={handleDisplayName}
					label="Display Name"
					value={displayName}
					type="text"
					name="displayName"
					required
				/>
				<FormInput
					handleChange={handleEmail}
					label="Email"
					value={email}
					type="email"
					name="email"
					required
				/>
				<FormInput
					handleChange={handlePassword}
					label="Password"
					value={password}
					type="password"
					name="password"
					required
				/>
				<FormInput
					handleChange={handleConfirmPassword}
					label="Confirm Password"
					value={confirmPassword}
					type="password"
					name="confirmPassword"
					required
				/>
				<CustomButtom>Sign Up</CustomButtom>
			</form>
		</div>
	);
}
