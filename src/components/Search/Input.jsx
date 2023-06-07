import { AiOutlineSearch } from "react-icons/ai";
import { useSubmit } from "react-router-dom";

export const Input = () => {
  const submit = useSubmit();
  return (
    <div className="container-input">
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
    </div>
  );
};
