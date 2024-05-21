import { useEffect, useState } from 'react';
import './RecentReleases.scss';

const RecentReleases = () => {
	const [showSoundcloud, setShowSoundcloud] = useState<boolean | null>(null);

	const handleClick = () => {
		setShowSoundcloud(true);
	}

	const handleClose = () => {
		setShowSoundcloud(false);
	}

	return (
		<section className='recent'>

			<h2 className="recent__header">
				Recent Releases
			</h2>
			<div className="recent__releases">
				<div className='recent__releases-container'>
					<iframe
						className='recent__releases--card'
						style={{ borderRadius: "12px" }}
						src="https://open.spotify.com/embed/track/166gOOD0FWGWfAtgtBSdzO?utm_source=generator"
						width="100%"
						height="352"
						frameBorder="0"
						allowFullScreen={true}
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
					>
					</iframe>
					<div className='recent__releases--click-area' onClick={handleClick} />
				</div>
				<div className='recent__releases-container'>
					<iframe
						className='recent__releases--card'
						style={{ borderRadius: "12px" }}
						src="https://open.spotify.com/embed/track/63unE8VKOuVnSUl1gM7AmB?utm_source=generator"
						width="100%"
						height="352"
						frameBorder="0"
						allowFullScreen={true}
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
					>
					</iframe>
					<div className='recent__releases--click-area' onClick={handleClick} />
				</div>
				<div className='recent__releases-container'>
					<iframe
						className='recent__releases--card'
						style={{ borderRadius: "12px" }}
						src="https://open.spotify.com/embed/track/2nibAHzEdndxBW3cptLffC?utm_source=generator"
						width="100%"
						height="352"
						frameBorder="0"
						allowFullScreen={true}
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
					>
					</iframe>
					<div className='recent__releases--click-area' onClick={handleClick} />
				</div>
				<div className='recent__releases-container'>
					<iframe
						className='recent__releases--card'
						style={{ borderRadius: "12px" }}
						src="https://open.spotify.com/embed/track/3guu1NVq5cglm8yzIbUqAp?utm_source=generator"
						width="100%"
						height="352"
						frameBorder="0"
						allowFullScreen={true}
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
					>
					</iframe>
					<div className='recent__releases--click-area' onClick={handleClick} />
				</div>

			</div>


			<a className={`soundcloud__button--open ${showSoundcloud ? "button-hide" : "button-show"}`} onClick={handleClick}>+</a>

			<aside className={`soundcloud ${showSoundcloud ? "ani-expand" : "ani-contract"}`}>
				<iframe
					className='soundcloud__iframe'
					width="100%"
					height="450"
					scrolling="no"
					frameBorder="no"
					allow="autoplay"
					src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/955313764&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
				</iframe>
				<div style={{
					fontSize: "10px",
					color: "#cccccc",
					lineBreak: "anywhere",
					wordBreak: "normal",
					overflow: "hidden",
					whiteSpace: "nowrap",
					textOverflow: "ellipsis",
					fontFamily: "Montserrat,Helvetica Neue,Arial,sans-serif",
					fontWeight: 100
				}}>
				</div>
				<a className={`soundcloud__button ${showSoundcloud ? "button-show" : "button-hide"}`} onClick={handleClose}>click to close</a>
			</aside>

		</section >
	)
}

export default RecentReleases

