import { Link, useLoaderData } from "react-router-dom";

const Card = () => {
  const { country } = useLoaderData();
  return (
    <section className="container-card">
      {country?.map((value, index) => {
        return (
          <article className="card" key={index}>
            <Link to={`country/${value.name}`}>
              <img className="card-flag" src={value.flag} alt="img" />
              <div className="card-info">
                <h1 className="card-name">{value.name}</h1>
                <ul className="card-list">
                  <li>
                    <span>Population: </span>
                    <p>{value.population}</p>
                  </li>
                  <li>
                    <span>Region: </span>
                    <p>{value.region}</p>
                  </li>
                  <li>
                    <span>Capital:</span>
                    <p>{value.capital}</p>
                  </li>
                </ul>
              </div>
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default Card;
