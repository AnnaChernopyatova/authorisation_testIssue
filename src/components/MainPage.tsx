import React, { useEffect } from 'react';
import Header from './Header';
import SigningIn from './SigningIn';
import './styles/mainPage.css';

export default function MainPage () {
	const [authorised, setAuthorised] = React.useState<boolean>();

	const handleChange = () => {
		setAuthorised(!authorised);
	};

	useEffect(()=> {
		const data = localStorage.getItem('authorisedUser');
		if(!data){
			setAuthorised(false);
		} else {
			setAuthorised(true);
		}
	}, []);

	return(
		<div className='wholePage'>
			<Header></Header>
			{
				authorised ? <></> :<SigningIn handleChangeAuthorisation={handleChange}></SigningIn>
			}
			
		</div>
	);
}