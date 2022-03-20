import React, { useEffect } from 'react';
import './styles/signingIn.css';

interface authorisedProps{
	handleChangeAuthorisation: () => void
}

export default function SigningIn ({handleChangeAuthorisation}: authorisedProps){
	const [email, setEmail] = React.useState<string>('...');
	const [password, setPassword] = React.useState<string>('...');

	let emailInput :HTMLInputElement;
	let passwordInput :HTMLInputElement;

	useEffect(() => {
		const getEmailInput = document.getElementById('emailInputSI') as HTMLInputElement;
		if(getEmailInput !== null){
			emailInput = getEmailInput;
			emailInput.addEventListener('click', clickInput);
		} 

		const getPasswordInput = document.getElementById('passwordInputSI') as HTMLInputElement;
		if(getPasswordInput !== null){
			passwordInput = getPasswordInput;
			passwordInput.addEventListener('click', clickInput);
		} 
	}, []);

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

	const saveChanges = () => {
		if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) || password.length < 6) {
			if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
				document.getElementById('unvalidEmailWarning')?.classList.remove('inputBlock_warning__unactive');
				document.getElementById('unvalidEmailWarning')?.classList.add('inputBlock_warning');
			}
			if(password.length < 6) {
				document.getElementById('unvalidPasswordWarning')?.classList.remove('inputBlock_warning__unactive');
				document.getElementById('unvalidPasswordWarning')?.classList.add('inputBlock_warning');
			}
			return;
		}

		localStorage.setItem('authorisedUser', JSON.stringify(`email:${email}, password:${password}`));
		handleChangeAuthorisation();
	} ;


	return(
		<div className='signInBlock'>
			<h2 className='signInBlock_header'>Please, sign in</h2>
			<div className='inputBlock'>
				<label className='inputBlock_label'>
                    Email
					<input className={email !== '' ? 'inputBlock_input inputBlock_input__email' : 'inputBlock_input__warning inputBlock_input__email'} type='text' name= 'email' id='emailInputSI' value={email} onChange={handleChange}></input>
					<span className={email === '' ? 'inputBlock_warning' : 'inputBlock_warning__unactive'}>This field can not be empty</span>
					<span className='inputBlock_warning__unactive' id='unvalidEmailWarning'>Please, write a valid email</span>
				</label>
			</div>
			<div className='inputBlock'>
				<label className='inputBlock_label'>
                    Password
					<input className={password !== '' ? 'inputBlock_input inputBlock_input__password' : 'inputBlock_input__warning inputBlock_input__password'} type='text' name='password' id='passwordInputSI' value={password} onChange={handleChange}></input>
					<span className={password === '' ? 'inputBlock_warning' : 'inputBlock_warning__unactive'}>This field can not be empty</span>
					<span className='inputBlock_warning__unactive' id='unvalidPasswordWarning'>Password must be at least 6 symbols</span>
				</label>
			</div>
			<button className='signInBlock_button' onClick={saveChanges}>Submit</button>
		</div>
	);
	
}


