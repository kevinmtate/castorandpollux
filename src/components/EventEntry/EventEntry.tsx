import './EventEntry.scss';

const EventEntry = ({ eventData }: { eventData: any }) => {
	console.log(eventData[0].date)
	return (
		<>
			{eventData.map((event: any, index: any) => (
				< article className="event" key={index} >
					<div className="event__top-container">
						<a href="" className="event__top-container--date">{event.date}</a>
						<a href="" className="event__top-container--location">{event.location}</a>
					</div>
					<div className="event__center-container">
						<a href="" className="event__center-container--venue">{`${event.artist} @ ${event.venue}`}</a>
					</div>
					<div className="event__social-wrapper">
						<img src="" alt="" className="event__social-wrapper--rsvp" />
						<a href="" className="event__social-wrapper--fb">F</a>
						<a href="" className="event__social-wrapper--twitter">T</a>
						<a href="" className="event__social-wrapper--email">@</a>
						<a href="" className="event__social-wrapper--website">W</a>
					</div>
					<div className="event__bottom-container">
						<a href="" className="event__bottom-container--button">Remind Me</a>
						<a href="" className="event__bottom-container--button">Tickets</a>
					</div>
				</article >
			))}
		</>
	)
}

export default EventEntry
