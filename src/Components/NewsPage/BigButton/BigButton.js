import './BigButton.css';
function BigButton(props) {
    const {text, url } = props;
    if(!text || !url){
        return '';
    }
    return <a href={url} className="button-large">{ text }</a>
    
}

export default BigButton;