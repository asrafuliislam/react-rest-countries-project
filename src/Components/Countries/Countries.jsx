import React from "react";
import { use } from "react";
import Country from "./Country";
import './countries.css';
import { useState } from "react";

const Countries = ({countriesPromise}) =>{
    const [visitedCountries,setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) =>{
        console.log('handle visited country click', country)
        const newVisitedCountris = [...visitedCountries,country]
        setVisitedCountries(newVisitedCountris);

    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
  
    return (
        <div>
            <h1> In the countries : {countries.length}</h1>
            <p>Total Country Visited: {visitedCountries.length } </p>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>  {country.name.common}</li>)
                }
            </ol>
            <div className="countries">
                {
                countries.map(country => <Country 
                    key= {country.cca3.cca3}
                    country={country}
                    handleVisitedCountries= {handleVisitedCountries}

                    ></Country> )
            }
            </div>
        </div>
    )
}

export default Countries;