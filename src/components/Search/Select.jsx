import { IoIosArrowDown } from "react-icons/io";

export const Select = ({ showFilter, showSelected, showSelect, showList }) => {
  return (
    <div className="container-filter" onClick={() => showList()}>
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
    </div>
  );
};
