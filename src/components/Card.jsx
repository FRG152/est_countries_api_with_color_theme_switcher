import { useRef } from "react";
import { motion } from "framer-motion";
import { Link, useLoaderData } from "react-router-dom";
import { container, item } from "../utils/animation";

const Card = () => {
  const { country } = useLoaderData();
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      className="container-card"
    >
      {country?.map((value, index) => {
        return (
          <motion.article className="card" key={index} variants={item}>
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
          </motion.article>
        );
      })}
    </motion.section>
  );
};

export default Card;
