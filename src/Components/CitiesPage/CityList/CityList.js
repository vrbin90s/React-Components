import { useState } from "react";
import CITIES_DATA from "../../../Data/CitiesData";
import CitiesForm from "../CitiesForm/CitiesForm";
import CityItem from "../CityItem/CityItem";
import './CityList.css';

function CitiesList() {
    const [cities, setCities] = useState(CITIES_DATA);
    

    const oddCitiesClass = cities.length & 2 !== 0 ? 'odd-cities' : '';
    return (
        <>
        <CitiesForm 
        cities = {cities}
        setCities={(updatedCities) => setCities(updatedCities)}/>
        <ul className={`cities-list ${oddCitiesClass}`}>
            
            {cities.map((city, index) => {
                
                return (
                    <CityItem key={index} data={city}/>
                );
            })}
        </ul>
        </>

    );
}
export default CitiesList;
