import NewsWrapper from "../Components/NewsWrapper/NewsWrapper";
import Sidebar from "../Components/Sidebar/Sidebar";
import VideoSectionWrapper from "../Components/VideoSectionWrapper/VideoSectionWrapper";
import "./NewsPage.css";

function NewsPage() {
  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="main-content">
          <NewsWrapper title="Naujienos" />
          <VideoSectionWrapper
            title="Vaizdo įrašai"
            extraText="Jei galiu aš – gali ir tu!"
          />        
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
export default NewsPage;
