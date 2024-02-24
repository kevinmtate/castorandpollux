import React from 'react';
import './Hero.scss';
import heroImg from '../../assets/images/hero-images/New_transparent_Take_2.png'
import heroVid from '../../assets/video/castor-and-pollux-hero-video.mp4';

const Hero = () => {
	const videoRef = React.useRef<HTMLVideoElement>(null);

	React.useEffect(() => {
		videoRef.current?.play();
	}, []);

	return (
		// <section className='hero'>
		<video className='hero__video' ref={videoRef} loop muted autoPlay>
			<source src={heroVid} type="video/mp4" />
		</video>
		// </section>
	)
}

export default Hero;