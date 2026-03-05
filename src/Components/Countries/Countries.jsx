import { useEffect, useState } from "react";
import CountriesItem from "./CountriesItem";

export default function Countries({ val }) {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    if (val.length) {
      fetch(
        `https://restcountries.com/v3.1/name/${val}/?fields=name,capital,region,population,flags`,
      )
        .then((res) => res.json())
        .then((data) => setCountry(data))
        .catch((err) => console.log(err));
    } else {
      fetch(
        "https://restcountries.com/v3.1/all/?fields=name,capital,region,population,flags",
      )
        .then((res) => res.json())
        .then((data) => setCountry(data))
        .catch((err) => console.log(err));
    }
  }, [val]);

  return (
    <section>
      <div className="container">
        <ul className="country_wrapper">
          {country.map((item) => (
            <CountriesItem key={item.name.common} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
