import SocialMediaFooterLink from '../SocialMediaFooterLink/SocialMediaFooterLink';
import { SocialLink } from '../../App'; // TypesScript type definition
import './Footer.scss';

interface FooterProps {
	socialLinks: SocialLink[];
}

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
	return (
		<footer className='footer'>
			<ul className="footer__social-nav">
				{socialLinks.map((socialLink, key) => {
					return (
						<SocialMediaFooterLink
							key={key}
							site={socialLink.site}
							siteLink={socialLink.siteLink}
						/>
					)
				})}
			</ul>
		</footer>
	)
}

export default Footer
