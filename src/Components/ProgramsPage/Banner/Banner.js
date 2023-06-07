import './Banner.css';
function Banner(props) {
    const {title1, title2, url} = props;

    return (
        
        <div className="banner">
            <a href={url}>
                <div className="banner-title">           
                    <span className="color-pink">{ title1 }</span>
                    <span className="color-black">{ title2 }</span>
                </div>
                <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="33">
                    <path fill="#1200FF" d="M3.264 32.528L.76 30.026l13.761-13.761L.762 2.504 3.263 0l16.263 16.264z" fillRule="evenodd"/>
                </svg>
            </a>
        </div>
    )
}
export default Banner;