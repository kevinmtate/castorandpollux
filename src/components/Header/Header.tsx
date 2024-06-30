import './Header.scss';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logos/c&p-logo-full.png';
import SocialMediaLink from '../SocialMediaLink/SocialMediaLink';
import MobileMenu from '../MobileMenu/MobileMenu';

import { SocialLink } from '../../App';
import XButton from '../XButton/XButton';

interface HeaderProps {
	socialLinks: SocialLink[];
}

const Header: React.FC<HeaderProps> = ({ socialLinks }) => {
	const [mobileMenu, setMobileMenu] = useState(false);
	const [hideMenu, setHideMenu] = useState(true);
	const [isScrollingDisabled, setScrollingDisabled] = useState(false);

	const handleMobileMenuToggleClick = () => {
		if (mobileMenu === true) {
			setMobileMenu(false);
			setScrollingDisabled(false);
			setTimeout(() => {
				setHideMenu(true);
			}, 500);
		} else {
			setHideMenu(false);
			setMobileMenu(true);
			window.scrollTo(0, 0);
			setScrollingDisabled(true);

		}
	}

	useEffect(() => {
		document.body.style.overflow = isScrollingDisabled ? 'hidden' : 'auto';
	}, [isScrollingDisabled]);


	return (
		<header className="header">

			<nav className="header-nav">
				<ul className="header-nav__main-nav">
					<li className="header-nav__main-nav--link">
						<NavLink to="/" className='' >Home</NavLink>
					</li>
					<li className="header-nav__main-nav--link">
						<NavLink to="/releases" className='' >Releases</NavLink>
					</li>
					<li className="header-nav__main-nav--link">
						<NavLink to="/shows" className='' >Shows</NavLink>
					</li>
					<li className="header-nav__main-nav--link">
						<NavLink to="/contact" className='' >Contact</NavLink>
					</li>
				</ul>


				<Link to='/' className="header-nav__logo">
					<img className='header-nav__logo--img' src={Logo} alt='Castor & Pollux Logo' />
				</Link>

				<XButton mobileMenu={mobileMenu} handleMobileMenuToggleClick={handleMobileMenuToggleClick} />

				<ul className="header-nav__social-nav">
					{socialLinks.map((socialLink, key) => {
						return (
							<SocialMediaLink
								key={key}
								site={socialLink.site}
								siteLink={socialLink.siteLink}
							/>
						)
					})}
				</ul>
			</nav>

			{hideMenu === false && (
				<MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} socialLinks={socialLinks} />
			)}

		</header>
	)
}

export default Header