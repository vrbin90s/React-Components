import SECONDARY_NEWS from "../../../Data/SecondaryNewsData";
import NewsItem from "../NewsItem/NewsItem";
import './SecondaryNews.css';

function SecondaryNews() {
  return (
    <div className="secondary-news">
      {SECONDARY_NEWS.map((news, index) => {
        return (
          <NewsItem
            key={index}
            img = { news.img }
            category={news.category}
            title={news.title}
            date={news.date}
          />
        );
      })}
    </div>
  );
}

export default SecondaryNews;
