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

	const handleSubmit = (e) => {
		e.preventDefault();
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
			<h2 className="title">Sign Up</h2>
			<span>Enter your information</span>
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
