import React from 'react';

export default function SigningIn (){
	const [email, setEmail] = React.useState<string>('');
	const [password, setPassword] = React.useState<string>('');

	const handleChange = (e: React.SyntheticEvent): void => {
		const target = e.target as HTMLInputElement;
		if (target !== null) {
			if(target.name === 'email'){
				setEmail(target.value);
			} else if(target.name === 'password'){
				setPassword(target.value);
			}
		}
		
	};
	return(
		<div className='signInBlock'>
			<h2>Please, sign in</h2>
			<div className='signInBlock_emailBlock'>
				<label>
                    Email
					<input className={email === '' ? 'signInBlock_input' : 'signInBlock_input__Warning'} type='text' name= 'email' id='emailInputSI' value={email} onChange={handleChange}></input>
				</label>
			</div>
			<div className='signInBlock_passwordBlock'>
				<label>
                    Password
					<input className={password === '' ? 'signInBlock_input' : 'signInBlock_input__Warning'} type='text' name='password' id='passwordInputSI' value={password} onChange={handleChange}></input>
				</label>
			</div>
		</div>
	);
	
}


