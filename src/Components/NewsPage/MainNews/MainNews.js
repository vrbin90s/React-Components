
import MAIN_NEWS from "../../../Data/MainNewsData";
import NewsItem from "../NewsItem/NewsItem";
import './MainNews.css';

function MainNews() {
  return (
    <div className="main-news">
      {MAIN_NEWS.map((news, index) => {
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

export default MainNews;
