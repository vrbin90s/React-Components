import EventsWrapper from "../EventsWrapper/EventsWrapper";
import PodcastsWrapper from "../PodcastsWrapper/PodcastsWrapper";
import './Sidebar.css';

function Sidebar() {
    return (
        <aside className="sidebar-content">
            <PodcastsWrapper 
            title = 'Podcastai' />
            <EventsWrapper
            title = 'Renginiai' />
        </aside>
    )
}

export default Sidebar;