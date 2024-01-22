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

		setFormData(userFormData);
		alert('Thank you for signing up!');
	}

	useEffect(() => {

	}, [formData]);


	return (
		<section className='signup'>
			<h2 className="signup__header">Sign up for C&P's Newsletter</h2>

			<form id="form" action="submit" className="signup-form" onSubmit={handleSubmit}>
				<fieldset className="signup-form__fieldset">
					<legend className="signup-form__label--legend ">
						Name
						<span className="label__required">
							(required)
						</span>
					</legend>

					<div className="signup-form__top-container">
						<label
							htmlFor="firstName"
							className="signup-form__top-container--sub-label"
						>
							<div className="label__padding">First Name</div>
							<input
								type="text"
								id="firstName"
								name="firstName"
								className="signup-form__top-container--input"
								required
							/>
						</label>

						<label
							htmlFor="lastName"
							className="signup-form__top-container--sub-label"
						>
							<div className="label__padding">Last Name</div>
							<input
								type="text"
								id="lastName"
								name="lastName"
								className="signup-form__top-container--input"
								required
							/>
						</label>
					</div>

					<label
						htmlFor="email"
						className="signup-form__label"
					>
						<div className="label__padding">
							Email
							<span className="label__required">
								(required)
							</span>
						</div>
						<input
							type="email"
							id="email"
							name="email"
							className="signup-form__input"
							required
						/>
					</label>

					<label
						htmlFor="zipcode"
						className="signup-form__label"
					>
						<div className="label__padding">
							Zipcode
							<span className="label__required">
								(required)
							</span>
						</div>
						<input
							type="text"
							id="zipcode"
							name="zipcode"
							className="signup-form__input"
							required
						/>
					</label>
				</fieldset>

				<button className="signup-form--submit-btn" type='submit'>Submit</button>
			</form>

		</section>
	)
}

export default SignUpForm
