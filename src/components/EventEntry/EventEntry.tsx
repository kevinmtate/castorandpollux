import './EventEntry.scss';

const EventEntry = ({ eventData }: { eventData: any }) => {
   return (
      <article className="event">
         <div className="event__top-container">
            <a href="" className="event__top-container--date">Jan. 19, 2024</a>
            <a href="" className="event__top-container--location">Dallas, TX</a>
         </div>
         <div className="event__center-container">
            <a href="" className="event__center-container--venue">Castor & Pollux @ Komodo Lounge</a>
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
      </article>
   )
}

export default EventEntry
