import { useEffect, useState } from "react";
import Card from "./components/Card";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import { data } from "./utils/data";

function App() {
  const [theme, setTheme] = useState(false);
  const [filter, setFilter] = useState(true);
  const [countrys, setCountrys] = useState([...data]);

  const showFilter = () => setFilter(!filter);
  const changeTheme = () => setTheme(!theme);

  const search = (e) => {
    const value = e.target.value.toLowerCase();
    const newArr = countrys.filter(({ name }) => {
      return name.toLowerCase().includes(value);
    });
    setCountrys(newArr);
    if (value.length === 0) setCountrys([...data]);
  };

  const filterTest = (e) => {
    const value = e.target.innerText.toLowerCase();
    const newArr = countrys.filter(({ region }) => {
      return region.toLowerCase().includes(value);
    });
    setCountrys(newArr);
    setFilter(!filter);
  };

  const themeBackground = theme
    ? "bg-VeryLightGrayLightModeBackground"
    : "bg-VeryDarkBlueDarkModeBackground";
  const themeBackgroundElement = theme
    ? "bg-VeryLightGrayLightModeBackground"
    : "bg-DarkBlueDarkModeElements";
  const themeText = theme
    ? "text-DarkBlueDarkModeElements"
    : "text-WhiteDarkModeTextLightModeElements";

  return (
    <>
      <section className={`min-h-screen ${themeBackground}`}>
        <Navbar
          changeTheme={changeTheme}
          themeText={themeText}
          themeBackgroundElement={themeBackgroundElement}
        />
        <article className="px-20 lg:flex lg:items-center lg:justify-between">
          <Search
            search={search}
            themeText={themeText}
            themeBackgroundElement={themeBackgroundElement}
          />
          <Filter
            filter={filter}
            showFilter={showFilter}
            filterTest={filterTest}
            themeText={themeText}
            themeBackgroundElement={themeBackgroundElement}
          />
        </article>
        <article className="flex items-center justify-center flex-wrap">
          {countrys.map((value, index) => (
            <Card
              key={index}
              country={value}
              themeText={themeText}
              themeBackgroundElement={themeBackgroundElement}
            />
          ))}
        </article>
      </section>
    </>
  );
}

export default App;
