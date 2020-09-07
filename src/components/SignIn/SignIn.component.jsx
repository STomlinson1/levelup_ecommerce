import React, { useState } from 'react';

import FormInput from '../Form-Input/Form-Input.component';

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
			<h2>I already have an account</h2>
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
				<input type="submit" value="Submit Form" />
			</form>
		</div>
	);
};

export default SignIn;
