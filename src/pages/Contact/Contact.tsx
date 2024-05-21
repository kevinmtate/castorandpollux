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
					<aside className="contact__container-column">
						<h3 className="contact__container-column--header">Castor & Pollux</h3>
						<p className="contact__container-column--text">Promos/Demos</p>
						<a
							href="castorandpollux@castorandpolluxofficial.com"
							className="contact__container-column--link"
						>
							castorandpollux@castorandpolluxofficial.com
						</a>
					</aside>
					<img src={shortLogo} alt="" className="contact__container--logo" />
					<aside className="contact__container-column">
						<h3 className="contact__container-column--header">MGMT</h3>
						<p className="contact__container-column--text">Bookings/General Inquiries</p>
						<a
							href="mgmt@castorandpolluxofficial.com"
							className="contact__container-column--link"
						>
							madeleine@88musicmgmt.com
						</a>
					</aside>
				</div>

			</section>

		</div>
	)
}

export default Contact
