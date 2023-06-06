import { useEffect, useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { Form, redirect, useLoaderData, useParams } from "react-router-dom";

export async function action() {
  return redirect("/");
}

const Country = () => {
  const { idCountry } = useParams();
  const { country } = useLoaderData();
  const [city, setCity] = useState(null);
  useEffect(() => {
    const newArr = country.filter((value) => {
      return value.name.toLowerCase().includes(idCountry.toLowerCase());
    });
    setCity(newArr);
  }, []);
  return (
    <section>
      {city?.map((value, index) => {
        return (
          <article key={index} className="container-country">
            <Form method="post" className="grid-1">
              <button type="submit" className="btn-back">
                <HiArrowLeft size="20" />
                <span>Back</span>
              </button>
              <img alt="flag" src={value.flag} className="flag" />
            </Form>
            <div className="grid-2">
              <h1 className="country-name">{value.name}</h1>
              <div className="country-content">
                <ul className="list-info info-01">
                  <li>
                    <span>Native Name: </span>
                    <p>{value.nativeName}</p>
                  </li>
                  <li>
                    <span>Population: </span>
                    <p>{value.population}</p>
                  </li>
                  <li>
                    <span>Region: </span>
                    <p>{value.region}</p>
                  </li>
                  <li>
                    <span>Sub Region: </span>
                    <p>{value.subregion}</p>
                  </li>
                  <li>
                    <span>Capital: </span>
                    <p>{value.capital}</p>
                  </li>
                </ul>
                <ul className="list-info info-02">
                  <li>
                    <span>Top Level Domain: </span>
                    <p>{value.topLevelDomain}</p>
                  </li>
                  <li>
                    <span>Currencies: </span>
                    <p>{console.log(value?.currencies[0]?.name)}</p>
                  </li>
                  <li>
                    <span>Languages: </span>
                    {value.languages.map((value, index) => (
                      <p key={index}>{value.name}</p>
                    ))}
                  </li>
                </ul>
              </div>
              <div className="list-info info-03">
                <span>Border Countries:</span>
                <ul>
                  {value.languages.map((item, index) => {
                    return <li key={index}>{item.nativeName}</li>;
                  })}
                </ul>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Country;
