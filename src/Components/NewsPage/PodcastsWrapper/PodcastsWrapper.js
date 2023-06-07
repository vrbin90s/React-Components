import PodcastsList from "../PodcastsList/PodcastsList";
import './PodcastsWrapper.css';

function PodcastsWrapper(props) {
    return (
        <div className="podcasts-wrapper">
            <h2 className="section-title">{ props.title }</h2>
            <PodcastsList />
        </div>
    )
}

export default PodcastsWrapper;