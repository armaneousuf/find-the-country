import { use } from "react";

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    console.log(countriesData)
    return (
        <div>
            <h2>Data: { countriesData.countries.length }</h2>
        </div>
    );
};

export default Countries;