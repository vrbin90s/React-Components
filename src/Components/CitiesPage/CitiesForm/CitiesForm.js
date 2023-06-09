import { useState } from "react";
import './CitiesForm.css';

function CitiesForm(props){
  
  const {cities, setCities} = props;

  const [name, setName] = useState('');
  const [population, setPopulation] = useState('');
  const [continent, setContinent] = useState('');
  const [country, setCountry] = useState('');
  const [attractions, setAttractions] = useState('');
  const [isCapital, setIsCapital] = useState(false);
  
  const handleCityName = (event) => {
    setName(event.target.value);
  } 
  const handleCityPopulation = (event) => {
    setPopulation(event.target.value)
  };
  const handleCityContinent = (event) => {
    setContinent(event.target.value)
  };
  const handleCityCountry = (event) => {
    setCountry(event.target.value)
  };
  const handleCityAttractions = (event) => {
    setAttractions(event.target.value)
  };
  const handleCityCapital = (event) => {
    setIsCapital(event.target.checked)
  };
      
      

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const form = event.target;
    const attractionList = attractions.split(",").map(attraction => attraction.trim());
    
    const newCity = {
        name: name,
        population: Number(population),
        location: {
            continent: continent,
            country: country
        },
        touristAttractions: attractionList,
        isCapital: isCapital
    };

    const updatedCities = [...cities, newCity];
    setCities(updatedCities);

    
    
    form.reset();

  };

  return(
      <form className="city-add-form" onSubmit={handleSubmit}>
          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder="Enter city name..." value={name} onChange = { handleCityName } ></input>
          </div>
          <div className="form-group">
              <label htmlFor="population">Population</label>
              <input type="number" name="population" id="population" placeholder="Enter city population..." value={population} onChange={handleCityPopulation}></input>
          </div>
          <div className="form-group">
              <label htmlFor="continent">Continent</label>
              <input type="text" name="continent" id="continent" placeholder="Enter city continent..." value={continent} onChange={handleCityContinent}></input>
          </div>
          <div className="form-group">
              <label htmlFor="country">Country</label>
              <input type="text" name="country" id="country" placeholder="Enter city country..." value={country} onChange={handleCityCountry}></input>
          </div>
          <div className="form-group">
          <label htmlFor="attractions">Attraction</label>
          <textarea type="text" value={attractions} name='attractions' id="attractions" placeholder="Enter city attractions..." onChange={handleCityAttractions} />
          </div>
          <div className="form-group">
              <label htmlFor="isCapital">Is Capital</label>
              <input type="checkbox" name="isCapital" id="isCapital" checked={isCapital} onChange={handleCityCapital}></input>
          </div>
          <input type="submit" value="add City"></input>
      </form>
  )
}
export default CitiesForm;