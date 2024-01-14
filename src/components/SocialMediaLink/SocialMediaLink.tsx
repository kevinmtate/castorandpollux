import './SocialMediaLink.scss';

import facebookLogo from '../../assets/logos/social-icons/facebook.svg';
import spotifyLogo from '../../assets/logos/social-icons/spotify.svg';
import instagramLogo from '../../assets/logos/social-icons/instagram.svg';
import soundcloudLogo from '../../assets/logos/social-icons/soundcloud.svg';
import twitterLogo from '../../assets/logos/social-icons/twitter.svg';
import youtubeLogo from '../../assets/logos/social-icons/youtube.svg';
import twitchLogo from '../../assets/logos/social-icons/twitch.svg';

interface SocialMediaLinkProps {
	site: string;
	siteLink: string;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ site, siteLink }) => {
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
		<li className="header-nav__social-nav--link">
			<a href={siteLink} className='' >
				<img src={siteLogo} alt={`Castor & Pollux - ${site}`} className="header-nav__social-nav--link-img" />
			</a>
		</li>
	)
};

export default SocialMediaLink;
