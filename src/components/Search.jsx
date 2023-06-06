import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { Form, useSubmit } from "react-router-dom";

const Search = () => {
  const submit = useSubmit();

  const [showFilter, setShowFilter] = useState(false);
  const [showSelected, setShowSelectd] = useState("Filter by Region");

  const showList = () => setShowFilter(!showFilter);
  const showSelect = (e) => {
    setShowFilter(!showFilter);
    submit(e.currentTarget.form);
    setShowSelectd(e.currentTarget.innerText);
  };

  return (
    <Form className="container-search">
      <section className="container-input">
        <AiOutlineSearch size="25" className="icon-search" />
        <input
          name="search"
          type="search"
          className="input"
          placeholder="Search for a country..."
          onChange={(event) => {
            submit(event.target.form);
          }}
        />
      </section>
      <section className="container-filter" onClick={() => showList()}>
        <span>{showSelected}</span>
        <div style={showFilter ? { display: "flex" } : { display: "none" }}>
          <button name="region" value="Africa" onClick={showSelect}>
            Africa
          </button>
          <button name="region" value="Americas" onClick={showSelect}>
            Americas
          </button>
          <button name="region" value="Asia" onClick={showSelect}>
            Asia
          </button>
          <button name="region" value="Europe" onClick={showSelect}>
            Europe
          </button>
          <button name="region" value="Oceania" onClick={showSelect}>
            Oceania
          </button>
        </div>
        <IoIosArrowDown className="icon-search" size="25" />
      </section>
    </Form>
  );
};

export default Search;
