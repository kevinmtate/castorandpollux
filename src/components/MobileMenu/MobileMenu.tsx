import SocialMediaLink from "../SocialMediaLink/SocialMediaLink"
import { Link, NavLink } from 'react-router-dom';

import { SocialLink } from '../../App';

import './MobileMenu.scss';

interface MobileMenuProps {
	mobileMenu: boolean;
	setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
	socialLinks: SocialLink[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ mobileMenu, setMobileMenu, socialLinks }) => {

	const handleMobileMenuClick = () => {
		setMobileMenu(false);
	}

	return (
		<aside className={`mobile-menu ${mobileMenu ? "fade-in" : "fade-out"}`}>
			<ul className="mobile-menu__main-nav-mobile">
				<li className="mobile-menu__main-nav-mobile--link">
					<NavLink to="/" className='' onClick={handleMobileMenuClick}  >Home</NavLink>
				</li>
				<li className="mobile-menu__main-nav-mobile--link">
					<NavLink to="/releases" className='' onClick={handleMobileMenuClick} >Releases</NavLink>
				</li>
				<li className="mobile-menu__main-nav-mobile--link">
					<NavLink to="/shows" className='' onClick={handleMobileMenuClick} >Shows</NavLink>
				</li>
				<li className="mobile-menu__main-nav-mobile--link">
					<NavLink to="/contact" className='' onClick={handleMobileMenuClick} >Contact Us</NavLink>
				</li>
			</ul>

			<ul className={`mobile-menu__social-nav-mobile ${mobileMenu ? "fade-in" : "fade-out"}`}>
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
		</aside>
	)
}

export default MobileMenu
