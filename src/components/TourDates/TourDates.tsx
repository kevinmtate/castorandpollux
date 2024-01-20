import EventEntry from '../EventEntry/EventEntry';
import './TourDates.scss';
import { useState, useEffect } from 'react';

import eventData from '../../data/events.json';

const TourDates = () => {
	const [active, setActive] = useState();

	useEffect(() => {

	}, [active]);

	return (
		<section className='tourdates'>
			<h2 className="tourdates__header">Tour Dates</h2>

			<section className="tourdates__follow-container">
				<h3 className="tourdates__follow-container--subheader">Get updates on new shows, new music, and more.</h3>
				<a href="" className="tourdates__follow-container--follow-button">Follow</a>
			</section>

			<div className="tourdates__events-container">
				<ul className="tourdates__nav">
					<li className="tourdates-wrapper__nav--item"><a href="" className="tourdates-wrapper__nav--link">Upcoming</a></li>
					<li className="tourdates-wrapper__nav--item divider">|</li>
					<li className="tourdates-wrapper__nav--item"><a href="" className="tourdates-wrapper__nav--link">Near Me</a></li>
				</ul>

				<div className="tourdates__events-container--upcoming">
					<EventEntry eventData={eventData} />
				</div>

				<section className="tourdates__follow-container">
					<h3 className="tourdates__follow-container--subheader">Don't see a show near you?</h3>
					<a href="" className="tourdates__follow-container--follow-button">Request a show</a>
				</section>
			</div>

		</section>
	)
}

export default TourDates
