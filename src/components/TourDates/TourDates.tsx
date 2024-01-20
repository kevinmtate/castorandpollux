import EventEntry from '../EventEntry/EventEntry';
import './TourDates.scss';

import eventData from '../../data/events.json';

const TourDates = () => {
   return (
      <section className='tourdate-wrapper'>
         <h2 className="tourdate__header">Tour Dates</h2>
         <h3 className="tourdate__subheader">Get updates on new shows, new music, and more.</h3>
         <a href="" className="tourdate__follow-botton">Follow</a>

         <EventEntry eventData={eventData} />

      </section>
   )
}

export default TourDates
