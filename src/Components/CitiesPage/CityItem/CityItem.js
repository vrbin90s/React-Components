import './CityItem.css';

function CityItem(props) {
    const {name, population, continent, country, touristAttractions, isCapital, cityIndex, citiesDataLength} = props;
    
    const capitalText = isCapital ? `${name} is the capital of ${country}` : "";
    
    const getColorDisplayClass = (index) => {
        let displayClassName = '';

        if(index  === 0) {
            displayClassName = 'green';
        } else if(index === 1) {
            displayClassName = 'orange';
        } else {
            displayClassName = 'red';
        }

        return displayClassName;
    }

    const getCitiesDisplayClasses = (index) => {
        let displayClasses = '';

        if (index % 2 !== 0) {
            displayClasses += 'even ';
        } 
    
        if (index === citiesDataLength - 1 && citiesDataLength % 2 !== 0) {
            displayClasses += 'full-width';
        } else {
            displayClasses += 'half-width';
        }

        return displayClasses;
    }


    return(
        <div className={`city-item ${getCitiesDisplayClasses(cityIndex)}`}>
            <h2>{name}{isCapital ? ' (Capital)' : ''}</h2>
            <p>{`${name} city is located in ${continent}, ${country} and has population of ${population}`}<strong>{capitalText}</strong></p>
            {touristAttractions && touristAttractions.length > 1 ? <h2>{`Main Tourist attraction of ${name} are:`}</h2> : <h2>{`Main Tourist attraction of ${name} is:`}</h2>}
            
            <ul>
                {touristAttractions.map((attraction, index)=> {
                    return (
                        <li className={getColorDisplayClass(index)} key={index}>{attraction}</li>
                        
                    )
                })}
            </ul>
        </div>
        
    )
}
export default CityItem;