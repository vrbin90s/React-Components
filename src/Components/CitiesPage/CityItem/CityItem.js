import "./CityItem.css";

function CityItem(props) {
    const { name, population, location, touristAttractions, isCapital } = props.data;
    const { continent, country } = location;

    const capitalText = isCapital ? `${name} is the capital of ${country}` : "";

    
    const cityAttractionClass = (index) => {
        let colorClass = "";

        if (index === 0) {
            colorClass = "green";
        } else if (index === 1) {
            colorClass = "orange";
        } else {
            colorClass = "red";
        }

        return colorClass;
    };

    let touristAttractionsElement = "";

    if (touristAttractions && touristAttractions.length > 0) {
        let touristAttractionTitle = `Main Tourist attraction of ${name} are:`;
        
        if(touristAttractions.length === 1) {
            touristAttractionTitle = `Main Tourist attraction of ${name} is:`;
        }

        touristAttractionsElement = (
            <div className="tourist-attraction-wrapper">
                <h2>{touristAttractionTitle}</h2>
            <ul>
                {touristAttractions.map((attraction, index) => {
                    return (
                        <li className={cityAttractionClass(index)}  key={index}>
                            {attraction}
                        </li>
                    );
                })}
            </ul>
        </div>
        )
    }


    return (
        <div className={`city-item`}>
            <h2>{name}{isCapital ? " (Capital)" : ""}</h2>
            <p>
                {`${name} city is located in ${continent}, ${country} and has population of ${population}`}
                <strong>{capitalText}</strong>
            </p>
            {touristAttractionsElement}
        </div>
    );
}
export default CityItem;
