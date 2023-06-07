import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Form } from "react-router-dom";
import { Input } from "./Input";
import { Select } from "./Select";

const Search = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showSelected, setShowSelectd] = useState("Filter by Region");

  const showList = () => setShowFilter(!showFilter);

  const showSelect = (e) => {
    setShowFilter(!showFilter);
    setShowSelectd(e.currentTarget.innerText);
  };

  return (
    <Form className="container-search">
      <Input />
      <Select
        showList={showList}
        showSelect={showSelect}
        showFilter={showFilter}
        showSelected={showSelected}
      />
    </Form>
  );
};

export default Search;
