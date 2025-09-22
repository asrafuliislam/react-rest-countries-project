import React, { useState } from "react";
import './country.css';
const Country = ({country,handleVisitedCountries}) =>{
    // console.log(country.population.population)

    // console.log(handleVisitedCountries)

    const [Visited , setVisited] = useState(false);

    const handleVisited = () =>{
        // 111111111111111
        // if(Visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        // 2222222222222222
        // setVisited(Visited) ? false : true;
        // 3333333333333333
        setVisited(!Visited);
        handleVisitedCountries(country);
    }
    return(
        <div className={`country ${Visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>Name: {country.name.common}</p>
            <h4>population : {country.population.population} </h4>
            <p>Area: {country.area.area}  
                {country.area.area > 30000 ?  " Big country" : " Small country"}
            </p>

            <button onClick={handleVisited}> 
                {Visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    )
}
export default Country;