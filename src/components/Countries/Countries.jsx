import { use } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  //   console.log(countries);
  return (
    <div>
      <h2>Data: {countries.length}</h2>
      {countries
        .filter((country) => country.capital?.capital?.[0])
        .filter((country) => country.name.common !== "Israel")
        .map((country) => (
          <Country key={country.cca3.cca3} country={country}></Country>
        ))}
    </div>
  );
};

export default Countries;
