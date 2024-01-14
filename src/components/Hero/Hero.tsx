import './Hero.scss';
import heroImg from '../../assets/images/hero-images/New_transparent_Take_2.png'

const Hero = () => {
	return (
		<section className='hero'>
			<img src={heroImg} alt="" className="hero__img" />

		</section>
	)
}

export default Hero
