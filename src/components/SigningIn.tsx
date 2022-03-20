import React from 'react';
import './styles/signingIn.css';

export default function SigningIn (){
	const [email, setEmail] = React.useState<string>('...');
	const [password, setPassword] = React.useState<string>('...');

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

	function clickInput (this: HTMLInputElement, ev: Event): void {
		const target = ev.target as HTMLInputElement;
		if(target.name === 'email') {
			emailInput.removeEventListener('click', clickInput);
			setEmail('');
		} else if (target.name === 'password') {
			passwordInput.removeEventListener('click', clickInput);
			setPassword('');
		}
	}

	const emailInput = document.getElementById('emailInputSI') as HTMLInputElement;
	emailInput.addEventListener('click', clickInput);

	const passwordInput = document.getElementById('passwordInputSI') as HTMLInputElement;
	passwordInput.addEventListener('click', clickInput);

	return(
		<div className='signInBlock'>
			<h2 className='signInBlock_header'>Please, sign in</h2>
			<div className='inputBlock'>
				<label className='inputBlock_label'>
                    Email
					<input className={email !== '' ? 'inputBlock_input inputBlock_input__email' : 'inputBlock_input__Warning'} type='text' name= 'email' id='emailInputSI' value={email} onChange={handleChange}></input>
				</label>
			</div>
			<div className='inputBlock'>
				<label className='inputBlock_label'>
                    Password
					<input className={password !== '' ? 'inputBlock_input inputBlock_input__password' : 'inputBlock_input__Warning'} type='text' name='password' id='passwordInputSI' value={password} onChange={handleChange}></input>
				</label>
			</div>
			<button className='signInBlock_button'>Submit</button>
		</div>
	);
	
}


