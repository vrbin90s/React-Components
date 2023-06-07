import Container from "../../Components/Core/Container/Container";
import NewsWrapper from "../../Components/NewsPage/NewsWrapper/NewsWrapper";
import Sidebar from "../../Components/NewsPage/Sidebar/Sidebar";
import VideoSectionWrapper from "../../Components/NewsPage/VideoSectionWrapper/VideoSectionWrapper";
import "./NewsPage.css";

function NewsPage() {
    return (
        <Container>
            <section className="news-section">
                <div className="main-content">
                    <NewsWrapper title = 'Naujienos'/>
                    <VideoSectionWrapper
                        title="Vaizdo įrašai"
                        extraText="Jei galiu aš – gali ir tu!"
                    />
                </div>
                <Sidebar />
            </section>
        </Container>
    );
}
export default NewsPage;
