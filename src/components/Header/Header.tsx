import './Header.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logos/c&p-logo-full.png';
import SocialMediaLink from '../SocialMediaLink/SocialMediaLink';

const Header = () => {
	const [mobileMenu, setMobileMenu] = useState(false);

	const handleMobileMenuToggleClick = () => {
		if (mobileMenu === true) {
			setMobileMenu(false);
		} else {
			setMobileMenu(true);
		}
	}

	const handleMobileMenuClick = () => {
		setMobileMenu(false);
	}

	return (
		<header className="header">

			<nav className="header-nav">
				<ul className="header-nav__main-nav">
					<li className="header-nav__main-nav--link">
						<Link to="/" className='' >Home</Link>
					</li>
					{/* <li className="header-nav__main-nav--link">
						<Link to="/about" className='' >About</Link>
					</li> */}
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

				<button className="mobile__nav-button" onClick={handleMobileMenuToggleClick}>
					<div className={mobileMenu === true ? "mobile__nav-button--middle-line animate-top" : mobileMenu === false ? "mobile__nav-button--middle-line reverse-top" : "mobile__nav-button--middle-line"}></div>
					<div className={mobileMenu === true ? "mobile__nav-button--first-line animate-middle" : mobileMenu === false ? "mobile__nav-button--first-line reverse-middle" : "mobile__nav-button--first-line"}></div>
					<div className={mobileMenu === true ? "mobile__nav-button--last-line animate-bottom" : mobileMenu === false ? "mobile__nav-button--last-line reverse-bottom" : "mobile__nav-button--last-line"}></div>
				</button>


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

			<aside className={mobileMenu === true ? "mobile-menu fade-in" : mobileMenu === false ? "mobile-menu fade-out" : "mobile-menu"}>
				<ul className="header-nav__main-nav-mobile">
					<li className="header-nav__main-nav-mobile--link">
						<Link to="/" className='' onClick={handleMobileMenuClick}  >Home</Link>
					</li>
					<li className="header-nav__main-nav-mobile--link">
						<Link to="/about" className='' onClick={handleMobileMenuClick} >About</Link>
					</li>
					<li className="header-nav__main-nav-mobile--link">
						<Link to="/releases" className='' onClick={handleMobileMenuClick} >Releases</Link>
					</li>
					<li className="header-nav__main-nav-mobile--link">
						<Link to="/shows" className='' onClick={handleMobileMenuClick} >Shows</Link>
					</li>
					<li className="header-nav__main-nav-mobile--link">
						<Link to="/contact" className='' onClick={handleMobileMenuClick} >Contact Us</Link>
					</li>
				</ul>

				<ul className="header-nav__social-nav-mobile">
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
			</aside>


		</header>
	)
}

export default Header