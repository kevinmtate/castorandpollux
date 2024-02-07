import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.scss';
import shortLogo from '../../assets/logos/c&p-logo-small.png'

const Contact = () => {
	return (
		<div>

			<ContactForm />
			<section className='contact'>
				<h2 className="contact__header">Contact</h2>
				<div className="contact__container">
					<aside className="contact__container--column">
						<h3 className="contact__container--column__header">MGMT</h3>
						<p className="contact__container--column__text">Bookings/General Inquiries</p>
						<a href="mgmt@castorandpolluxofficial.com">Send Email</a>
					</aside>
					<img src={shortLogo} alt="" className="contact__container--	logo" />
					<aside className="contact__container--column">
						<h3 className="contact__container--column__header">MGMT</h3>
						<p className="contact__container--column__text">Bookings/General Inquiries</p>
						<a href="mgmt@castorandpolluxofficial.com">Send Email</a>
					</aside>
				</div>

			</section>

		</div>
	)
}

export default Contact
