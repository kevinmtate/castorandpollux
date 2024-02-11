import './SignUpForm.scss';
import { useState, useEffect } from 'react';

type FormData = {
	firstName: string,
	lastName: string
	email: string,
	zipcode: string
}

const SignUpForm = () => {
	const [formData, setFormData] = useState({} as FormData);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const form = e.target;

		const userFormData: FormData = {
			firstName: form.firstName.value,
			lastName: form.lastName.value,
			email: form.email.value,
			zipcode: form.zipcode.value
		};

		if (userFormData.firstName === '' || userFormData.lastName === '' || userFormData.email === '' || userFormData.zipcode === '') {
			alert('Please fill out all required fields');
			return;
		}

		// const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		// if (!emailRegex.test(userFormData.email)) {
		// 	alert('Please enter a valid email');
		// 	return;
		// }

		setFormData(userFormData);
		alert('Thank you for signing up!');
	}

	useEffect(() => {

	}, [formData]);


	return (
		<section className='signup'>
			<iframe className="iframe" src="https://bandsintown.com/artist/84892/email_signup_form?headerTextColor=rgba(255,255,255,1)&backgroundColor=rgba(0,0,0,0)&ctaBackgroundColor=rgba(0,180,179,1)&title=Join the Constellation Crew Newsletter&headerTextStyle=normal&headerText=Sign up to get the latest updates&font=Montserrat&ctaIcon=show&ctaBorderRadius=4px&ctaBorderWidth=2px&ctaBorderColor=rgba(0,180,179,1)&ctaFontColor=rgba(255,255,255,1)&alignment=center&emailInputField=show&ctaLabel=Subscribe&layout=wide&locale=en" width="100%" height="220px" title="newsletter-widget"></iframe>
		</section>
	)
}

export default SignUpForm
