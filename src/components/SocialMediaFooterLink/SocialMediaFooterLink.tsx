import './SocialMediaFooterLink.scss';

import facebookLogo from '../../assets/logos/social-icons/facebook.svg';
import spotifyLogo from '../../assets/logos/social-icons/spotify.svg';
import instagramLogo from '../../assets/logos/social-icons/instagram.svg';
import soundcloudLogo from '../../assets/logos/social-icons/soundcloud.svg';
import twitterLogo from '../../assets/logos/social-icons/twitter.svg';
import youtubeLogo from '../../assets/logos/social-icons/youtube.svg';
import twitchLogo from '../../assets/logos/social-icons/twitch.svg';

interface SocialMediaFooterLinkProps {
	site: string;
	siteLink: string;
}

const SocialMediaFooterLink: React.FC<SocialMediaFooterLinkProps> = ({ site, siteLink }) => {
	const logos: { [key: string]: string } = {
		facebook: facebookLogo,
		spotify: spotifyLogo,
		instagram: instagramLogo,
		soundcloud: soundcloudLogo,
		twitter: twitterLogo,
		youtube: youtubeLogo,
		twitch: twitchLogo
	}
	const siteLogo = logos[site.toLowerCase()];

	return (
		<li className="social-nav">
			<a href={siteLink} className='' >
				<img src={siteLogo} alt={`Castor & Pollux - ${site}`} className="social-nav--link-img" />
			</a>
		</li>
	)
};

export default SocialMediaFooterLink;
