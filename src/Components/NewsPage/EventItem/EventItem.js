import './EventItem.css';

function EventItem(props) {
    return (
        <div className="event">
            <a href={ props.link }>
                <div className="image-wrapper">
                    { props.img && <img src={ props.img } className="event-image" alt=''></img> }
                </div>
                <div className="event-content">
                    <div className="event-date">
                        <span className="event-day">{ props.day }</span>
                        <span className="event-month">{ props.month }</span>
                    </div>
                    <div className="event-info">
                        <span className="event location">{ props.location }</span>
                        <h3 className="event-title">{ props.title }</h3>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default EventItem;