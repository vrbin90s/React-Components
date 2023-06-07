import MainNews from "../MainNews/MainNews";
import SecondaryNews from "../SecondaryNews/SecondaryNews";
import BigButton from "../BigButton/BigButton";
import './NewsWrapper.css';

function NewsWrapper(props) {
  const { title } = props;
  return (
    <div className="news-wrapper">
      { title && <h2 className="section-title">{ title }</h2> }
      <MainNews />
      <SecondaryNews />
      <BigButton url= '#' text = 'Visos naujienos' />
    </div>
  );
}

export default NewsWrapper;
