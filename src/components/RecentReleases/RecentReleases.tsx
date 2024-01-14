import './RecentReleases.scss';

const RecentReleases = () => {
	return (
		<section className='recent'>

			<h2 className="recent__header">
				Recent Releases
			</h2>
			<div className="recent__releases">
				<iframe
					className='recent__releases--card'
					style={{ borderRadius: "12px" }}
					src="https://open.spotify.com/embed/track/3guu1NVq5cglm8yzIbUqAp?utm_source=generator"
					width="100%"
					height="352"
					frameBorder="0"
					allowFullScreen={true}
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy">
				</iframe>
				<iframe
					className='recent__releases--card'
					style={{ borderRadius: "12px" }}
					src="https://open.spotify.com/embed/track/0wCO8Ei3hn5lYbG3m6PIOU?utm_source=generator"
					width="100%"
					height="352"
					frameBorder="0"
					allowFullScreen={true}
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy">
				</iframe>
				<iframe
					className='recent__releases--card'
					style={{ borderRadius: "12px" }}
					src="https://open.spotify.com/embed/track/5cexuf9cOVmteecGvt2ljY?utm_source=generator"
					width="100%"
					height="352"
					frameBorder="0"
					allowFullScreen={true}
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy">
				</iframe>
				<iframe
					className='recent__releases--card'
					style={{ borderRadius: "12px" }}
					src="https://open.spotify.com/embed/track/4C9uiUGtAuaqwOyDBlENWf?utm_source=generator"
					width="100%"
					height="352"
					frameBorder="0"
					allowFullScreen={true}
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy">
				</iframe>
			</div>

		</section>
	)
}

export default RecentReleases
