import { useState } from "react";
import { data } from "./utils/data";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

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
    <motion.main
      data-theme={theme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar switchTheme={switchTheme} />
      <Outlet />
    </motion.main>
  );
};

export default App;
