import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logos/c&p-logo-full.png';
import SocialMediaLink from '../SocialMediaLink/SocialMediaLink';

const Header = () => {
	return (
		<header className="header">
			<nav className="header-nav">

				<ul className="header-nav__main-nav">
					<li className="header-nav__main-nav--link">
						<Link to="/" className='' >Home</Link>
					</li>
					<li className="header-nav__main-nav--link">
						<Link to="/about" className='' >About</Link>
					</li>
					<li className="header-nav__main-nav--link">
						<Link to="/releases" className='' >Releases</Link>
					</li>
					<li className="header-nav__main-nav--link">
						<Link to="/shows" className='' >Shows</Link>
					</li>
					<li className="header-nav__main-nav--link">
						<Link to="/contact" className='' >Contact Us</Link>
					</li>
				</ul>

				<Link to='/' className="header-nav__logo">
					<img className='header-nav__logo--img' src={Logo} alt='Castor & Pollux Logo' />
				</Link>

				<ul className="header-nav__social-nav">
					<SocialMediaLink
						site='Spotify'
						siteLink='https://open.spotify.com/artist/6fHUILCpBvfSHB48AEciPG?si=SQQEFDC-RrKzxtKizT5HHg&nd=1&dlsi=a21d5c44637f4ab0'
					/>

					<SocialMediaLink
						site='Soundcloud'
						siteLink='https://soundcloud.com/castorandpollux_music'
					/>

					<SocialMediaLink
						site='Facebook'
						siteLink='https://www.facebook.com/candpmusic/'
					/>

					<SocialMediaLink
						site='Instagram'
						siteLink='https://www.instagram.com/castorandpolluxmusic/'
					/>

					<SocialMediaLink
						site='Twitter'
						siteLink='https://twitter.com/candpmusic'
					/>

					<SocialMediaLink
						site='Youtube'
						siteLink='https://www.youtube.com/channel/UCp2BJQiRN36uNGac76eAS6A?view_as=subscriber'
					/>

					<SocialMediaLink
						site='Twitch'
						siteLink='https://www.twitch.tv/castorandpolluxmusic'
					/>
				</ul>

			</nav>


		</header>
	)
}

export default Header