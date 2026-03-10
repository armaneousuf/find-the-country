import React from "react";

const Country = ({ country }) => {
  return (
    <div>
      <h3>Country: {country.name.common}</h3>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
    </div>
  );
};

export default Country;
