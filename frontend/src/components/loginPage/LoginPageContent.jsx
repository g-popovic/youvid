import React from 'react';

export default function LoginPage() {
	return (
		<form className='login-form'>
			<div class='mb-3'>
				<label for='exampleInputEmail1' class='form-label'>
					Username
				</label>
				<input
					type='email'
					class='form-control'
					id='exampleInputEmail1'
					aria-describedby='emailHelp'
				/>
				<div class='form-text'>Username already taken</div>
			</div>
			<div class='mb-3'>
				<label for='exampleInputEmail1' class='form-label'>
					Email address
				</label>
				<input
					type='email'
					class='form-control'
					id='exampleInputEmail1'
					aria-describedby='emailHelp'
				/>
				<div class='form-text'>Email already taken</div>
			</div>
			<div class='mb-3'>
				<label for='exampleInputPassword1' class='form-label'>
					Password
				</label>
				<input
					type='password'
					class='form-control'
					id='exampleInputPassword1'
				/>
				<div class='form-text'>Password must be at least 6 characters</div>
			</div>
			<div className='login-buttons-container'>
				<button type='submit' class='btn btn-dark'>
					Login
				</button>
				<button type='submit' class='btn btn-outline-dark'>
					Create Account
				</button>
			</div>
		</form>
	);
}
