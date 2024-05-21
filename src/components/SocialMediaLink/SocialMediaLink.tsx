import './SocialMediaLink.scss';

import facebookLogo from '../../assets/logos/social-icons/facebook.svg';
import spotifyLogo from '../../assets/logos/social-icons/spotify.svg';
import instagramLogo from '../../assets/logos/social-icons/instagram.svg';
import soundcloudLogo from '../../assets/logos/social-icons/soundcloud.svg';
import twitterLogo from '../../assets/logos/social-icons/twitter.svg';
import youtubeLogo from '../../assets/logos/social-icons/youtube.svg';
import twitchLogo from '../../assets/logos/social-icons/twitch.svg';
import tiktokLogo from '../../assets/logos/social-icons/tiktok.svg';

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
		twitch: twitchLogo,
		tiktok: tiktokLogo
	}
	const siteLogo = logos[site.toLowerCase()];

	return (
		<li className="social-media-link">
			<a href={siteLink} className='' >
				<img src={siteLogo} alt={`Castor & Pollux - ${site}`} className="social-media-link__img" />
			</a>
		</li>
	)
};

export default SocialMediaLink;
