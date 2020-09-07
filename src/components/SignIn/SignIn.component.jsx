import React, { useState } from 'react';

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
				<input
					type="email"
					name="email"
					value={email}
					onChange={handleEmail}
					required
				/>
				<label>Email</label>
				<input
					type="password"
					name="password"
					value={password}
					onChange={handlePassword}
					required
				/>
				<label>Password</label>

				<input type="submit" value="Submit Form" />
			</form>
		</div>
	);
};

export default SignIn;
