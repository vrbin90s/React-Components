import './BigButton.css';
function BigButton(props) {

    return <a href={props.url} className="button-large">{ props.name }</a>
    
}

export default BigButton;