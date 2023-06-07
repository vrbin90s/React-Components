import PODCAST_DATA from "../../../Data/PodcastData";
import PodcastItem from "../PodcastItem/PodcastItem";
import './PodcastsList.css';

function PodcastsList() {
    return (
        <div className="podcasts-wrapper">
            {PODCAST_DATA.map((podcast, index) => {
                return(
                    <PodcastItem
                    key = { index }
                    img = { podcast.img }
                    length = { podcast.length }
                    buttonText = { podcast.buttonText }
                    title = { podcast.title }
                    date = { podcast.date }
                     />
                )
            })}
        </div>
    )
}

export default PodcastsList;