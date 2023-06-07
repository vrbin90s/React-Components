import './VideoWrapper.css';

function VideoWrapper() {
    const iframeStyle = {
        border: '0',
    };

    return (
    <div className="video-wrapper">
        <iframe
            src="https://www.youtube.com/embed/b8dGCsP75HA"
            width="560"
            height="315"
            style={iframeStyle}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="YouTube video player"
        ></iframe>
    </div>
    )
}
export default VideoWrapper;