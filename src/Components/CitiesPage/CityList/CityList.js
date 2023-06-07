import CITIES_DATA from "../../../Data/CitiesData";
import CityItem from "../CityItem/CityItem";
import './CityList.css';

function CitiesList() {
    return (
        <ul className="cities-list">
            {CITIES_DATA.map((city, index) => {
                
                return (
                    <CityItem
                        key={index}
                        name={city.name}
                        population={city.population}
                        continent={city.location.continent}
                        country={city.location.country}
                        touristAttractions={city.touristAttractions}
                        isCapital={city.isCapital}
                        cityIndex = {index}
                        citiesDataLength={CITIES_DATA.length}
                    />
                );
            })}
        </ul>
    );
}
export default CitiesList;
