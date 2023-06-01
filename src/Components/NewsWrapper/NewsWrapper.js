import MainNews from "../MainNews/MainNews";
import SecondaryNews from "../SecondaryNews/SecondaryNews";
import BigButton from "../BigButton/BigButton";
import './NewsWrapper.css';

function NewsWrapper(props) {
  return (
    <div className="news-wrapper">
      <h2 className="section-title">{props.title}</h2>
      <MainNews />
      <SecondaryNews />
      <BigButton url="#" name="Visos naujienos" />
    </div>
  );
}

export default NewsWrapper;
