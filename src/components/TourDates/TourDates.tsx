import './TourDates.scss';
import { useState, useEffect } from 'react';
import BandsInTownWidget from '../BandsInTownWidget/BandsInTownWidget';


export default function TourDates() {

	useEffect(() => {
		// Dynamically create a script tag for Bandsintown
		const script = document.createElement('script');
		script.charset = 'utf-8';
		script.src = 'https://widgetv3.bandsintown.com/main.min.js';

		// Append the script to the document body
		document.body.appendChild(script);

		// Clean up function (optional)
		return () => {
			// Remove the script from the document body
			document.body.removeChild(script);
		};
	}, []); // Empty dependency array to run the effect only once

	return (
		<section className='tourdates'>
			<h2 className="tourdates__header">Tour Dates</h2>
			<BandsInTownWidget />
		</section>
	)
}