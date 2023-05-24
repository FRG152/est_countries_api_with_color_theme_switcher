import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ search, themeText, themeBackgroundElement }) => {
  return (
    <div
      className={`${themeBackgroundElement} drop-shadow-md relative h-[60px] lg:w-[500px]`}
    >
      <div className="flex items-center justify-center h-[100%]">
        <AiOutlineSearch size="25" className="w-[80px]" />
        <input
          id="search"
          type="text"
          name="search"
          onChange={(e) => search(e)}
          className={`${themeBackgroundElement} ${themeText} h-[100%] w-[100%] p-2`}
          placeholder="Search for a country..."
        />
      </div>
    </div>
  );
};

export default Search;
