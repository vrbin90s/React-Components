import './PodcastItem.css';

function PodcastItem(props) {
    return (
        <div className="podcast">
            <div className="podcast-controls">
                <img src={ props.img } className="podcast-image" alt=''></img>
                <span className="podcast-length">{ props.length }</span>
                <button className="podcast-play">{ props.buttonText }</button>
            </div>
            <div className="podcast-content">
                <h3 className="podcast-title">{ props.title }</h3>
                <span className="podcast-date">{ props.date }</span>
            </div>
        </div>
    )
}

export default PodcastItem;