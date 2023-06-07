import './Card.css';

function Card({children, classes}){
    return (
        <div className={`${classes ? classes : ''}`}>
            {children}
        </div>
    )
}

export default Card;