import { BsMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = ({ switchTheme }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className="nav-title">
            Where in the world?
          </Link>
        </li>
        <li className="nav-btn" onClick={() => switchTheme()}>
          <BsMoonFill />
          <span type="submit">Dark Mode</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
