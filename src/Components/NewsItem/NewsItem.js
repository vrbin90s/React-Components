import './NewsItem.css';

function NewsItem(props) {
    return(
        <div className="news-item">
            <a href='#'>
                <div className="image-wrapper">
                    <img src={ props.img }></img>
                </div>
                <div className="news-content">
                    <span className="news-category">{ props.category }</span>
                    <h3 className="news-title">{ props.title }</h3>
                    <span className="news-date">{ props.date }</span>
                </div>
            </a>
        </div>
    )
}

export default NewsItem;