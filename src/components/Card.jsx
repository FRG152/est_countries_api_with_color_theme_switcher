const Card = ({ country, themeText, themeBackgroundElement }) => {
  return (
    <div
      className={`${themeBackgroundElement} drop-shadow-xl cursor-pointer w-[350px] m-12`}
    >
      <img src={country.flags.svg} alt="img" />
      <div className="py-12 px-6">
        <h1 className={`${themeText} text-[1.8rem] font-bold mb-6`}>
          {country.name}
        </h1>
        <ul>
          <li className="flex gap-2">
            <span className={`${themeText} font-semibold`}>Population: </span>
            <p className={`${themeText} font-extralight`}>
              {country.population}
            </p>
          </li>
          <li className="flex gap-2">
            <span className={`${themeText} font-semibold`}>Region: </span>
            <p className={`${themeText} font-extralight`}>{country.region}</p>
          </li>
          <li className="flex gap-2">
            <span className={`${themeText} font-semibold`}>Country: </span>
            <p className={`${themeText} font-extralight`}>{country.capital}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
