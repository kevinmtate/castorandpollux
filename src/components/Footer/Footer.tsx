import SocialMediaFooterLink from '../SocialMediaFooterLink/SocialMediaFooterLink';
import './Footer.scss';

const Footer = () => {
	return (
		<footer className='footer'>
			<ul className="footer__social-nav">
				<SocialMediaFooterLink
					site='Spotify'
					siteLink='https://open.spotify.com/artist/6fHUILCpBvfSHB48AEciPG?si=SQQEFDC-RrKzxtKizT5HHg&nd=1&dlsi=a21d5c44637f4ab0'
				/>

				<SocialMediaFooterLink
					site='Soundcloud'
					siteLink='https://soundcloud.com/castorandpollux_music'
				/>

				<SocialMediaFooterLink
					site='Facebook'
					siteLink='https://www.facebook.com/candpmusic/'
				/>

				<SocialMediaFooterLink
					site='Instagram'
					siteLink='https://www.instagram.com/castorandpolluxmusic/'
				/>

				<SocialMediaFooterLink
					site='Twitter'
					siteLink='https://twitter.com/candpmusic'
				/>

				<SocialMediaFooterLink
					site='Youtube'
					siteLink='https://www.youtube.com/channel/UCp2BJQiRN36uNGac76eAS6A?view_as=subscriber'
				/>

				<SocialMediaFooterLink
					site='Twitch'
					siteLink='https://www.twitch.tv/castorandpolluxmusic'
				/>
			</ul>
		</footer>
	)
}

export default Footer
