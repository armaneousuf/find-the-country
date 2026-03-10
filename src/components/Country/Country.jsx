import React from "react";

const Country = ({ country }) => {
  return (
    <div>
      <div className="nav">
        <p>Country: {country.name.common}</p>
        <p>Capital: {country.capital.capital[0]}</p>
        <p>Population: {country.population.population}</p>
        <p>Region: {country.region.region}</p>
        <p>Area: {country.area.area}</p>
      </div>
      <div className="img-center">
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      </div>
    </div>
  );
};

export default Country;
