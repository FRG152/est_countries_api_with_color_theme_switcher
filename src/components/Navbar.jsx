import { BsFillMoonFill } from "react-icons/bs";

const Navbar = ({ themeText, themeBackgroundElement, changeTheme }) => {
  return (
    <nav
      className={`${themeBackgroundElement} drop-shadow-md mb-6 h-[70px] px-20`}
    >
      <ul className="flex items-center justify-between h-[100%]">
        <li>
          <a
            href="#"
            className={`${themeText} ${themeBackgroundElement} text-[1.5rem] font-extrabold`}
          >
            Where in the world?
          </a>
        </li>
        <li
          onClick={() => changeTheme()}
          className="flex items-center gap-x-4 cursor-pointer"
        >
          <BsFillMoonFill />
          <span className={`${themeText} font-medium`}>Dark Mode</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
