import { data } from "./utils/data";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export async function loader({ request }) {
  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  const filter = url.searchParams.get("region");
  if (search !== null && search !== "") {
    const newArr = data.filter((item) =>
      item.name.toLowerCase().includes(search.toString().toLowerCase())
    );
    return { country: [...newArr] };
  }
  if (filter !== null && filter !== "") {
    const newArr = data.filter((item) =>
      item.region.toLowerCase().includes(filter.toString().toLowerCase())
    );
    return { country: [...newArr] };
  }
  return { country: [...data] };
}

const App = () => {
  const [theme, setTheme] = useState("theme" ? "light" : "dark");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <main data-theme={theme}>
      <Navbar switchTheme={switchTheme} />
      <Outlet />
    </main>
  );
};

export default App;
