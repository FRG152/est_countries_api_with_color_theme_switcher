import { region } from "../utils/region";
import { IoIosArrowDown } from "react-icons/io";

const Filter = ({
  themeText,
  themeBackgroundElement,
  showFilter,
  filter,
  filterTest,
}) => {
  return (
    <div className="relative w-[50%] mt-6 lg:w-[250px] lg:mt-0">
      <div
        onClick={() => showFilter()}
        className={`${themeBackgroundElement} flex items-center justify-between drop-shadow-md cursor-pointer p-5`}
      >
        <span className={`${themeText} font-bold`}>Filter by Region</span>
        <IoIosArrowDown color="#fff" />
      </div>
      <ul
        className={`${
          filter ? "hidden" : "block"
        } ${themeBackgroundElement} drop-shadow-xl w-[100%] absolute z-10 mt-2`}
      >
        {region.map((value, index) => {
          return (
            <li
              onClick={(e) => filterTest(e)}
              className={`${themeText} cursor-pointer py-2 px-5 hover:bg-DarkGrayLightModeInput`}
              key={index}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
