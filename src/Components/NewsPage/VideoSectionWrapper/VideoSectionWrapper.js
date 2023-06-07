import BigButton from "../BigButton/BigButton";
import VideoWrapper from "../VideoWrapper/VideoWrapper";
import './VideoSectionWrapper.css';

function VideoSectionWrapper(props) {
  return (
    <div className="video-section-wrapper">
      <h2 className="section-title">{props.title}</h2>
      <VideoWrapper />
      <span className="video-extra-text">{props.extraText}</span>
      <BigButton url="#" text="Visi vaizdo įrašai" />
    </div>
  );
}

export default VideoSectionWrapper;
