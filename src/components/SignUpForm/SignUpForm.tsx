import './SignUpForm.scss';
import { useState } from 'react';

type FormData = {
	firstName: string,
	lastName: string
	email: string,
	zipcode: number
}

const SignUpForm = () => {
	const [formData, setFormData] = useState({} as any);

	const handleClick = (e: any) => {
		e.preventDefault();
		console.log(e);

	}

	return (
		<section className='signup'>
			<h2 className="signup__header">Sign up for C&P's Newsletter</h2>

			<form action="submit" className="signup-form">
				<fieldset className="signup-form__fieldset">
					<legend className="signup-form__label">Name</legend>

					<div className="signup-form__top-container">
						<label htmlFor="firstName" className="signup-form__top-container--sub-label">
							First Name
							<input type="text" id="firstName" name="firstName" className="signup-form__top-container--input" required />
						</label>
						<label htmlFor="lastName" className="signup-form__top-container--sub-label">
							Last Name
							<input type="text" id="lastName" name="lastName" className="signup-form__top-container--input" required />
						</label>
					</div>

					<label htmlFor="email" className="signup-form__label">
						Email
						<input type="email" id="email" name="email" className="signup-form__input" required />
					</label>
					<label htmlFor="zipcode" className="signup-form__label">
						Zipcode
						<input type="text" id="zipcode" name="zipcode" className="signup-form__input" required />
					</label>
				</fieldset>

				<button className="signup-form--submit-btn" onClick={handleClick} >Submit</button>
			</form>

		</section>
	)
}

export default SignUpForm
