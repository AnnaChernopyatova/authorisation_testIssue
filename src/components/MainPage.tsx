import React from 'react';
import Header from './Header';
import SigningIn from './SigningIn';

export default function MainPage () {
	return(
		<div className='wholePage'>
			<Header></Header>
			<SigningIn></SigningIn>
		</div>
	);
}