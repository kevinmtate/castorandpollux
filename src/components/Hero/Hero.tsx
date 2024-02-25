import React from 'react';
import './Hero.scss';
import heroImg from '../../assets/images/hero-images/New_transparent_Take_2.png'
import heroVid from '../../assets/video/castor-and-pollux-hero-video.mp4';

const Hero = () => {
	return (
		<video className='hero__video' loop muted autoPlay playsInline>
			<source src={heroVid} type="video/mp4" />
		</video>
	)
}

export default Hero;