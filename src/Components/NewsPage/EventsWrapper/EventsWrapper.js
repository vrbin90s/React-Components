import EVENTS_DATA from "../../../Data/EventsData";
import BigButton from "../BigButton/BigButton";
import EventItem from "../EventItem/EventItem";
import "./EventsWrapper.css";

function EventsWrapper(props) {
  return (
    <div className="events-wrapper">
      <h2 className="section-title">{props.title}</h2>
      <div className="events-list">
        {EVENTS_DATA.map((event, index) => {
          return (
            <EventItem
              key={index}
              img={event.img}
              day={event.day}
              month={event.month}
              location={event.location}
              title={event.title}
            />
          );
        })}
        
      </div>
      <BigButton url="#" text="Daugiau" />
    </div>
  );
}

export default EventsWrapper;
