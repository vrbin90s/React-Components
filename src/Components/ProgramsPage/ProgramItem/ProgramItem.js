import './ProgramItem.css';

function ProgramItem(props) {
    const { url, imageSrc, title, body, features, extraText } = props;

    return (
        <div className="program-item">
            <a href={url}>
                <div className="program-main-info">
                    <img src={imageSrc} className="program-image" alt=''></img>
                    <h2 className="program-title">{title}</h2>
                    <p className="program-description">{body}</p>
                </div>
                <div className="program-features-wrapper">
                    <ul className="program-features-list">
                        {features.map((feature, index )=> {
                            return(
                            <li className="program-feature-item" key={index}>{feature}</li>
                            )
                        })}
                    </ul>
                </div>
                <span className="program-extra-info">{extraText}</span>
            </a>
        </div>
    )
}

export default ProgramItem;