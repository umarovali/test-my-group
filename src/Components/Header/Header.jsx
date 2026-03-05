import { FiMoon } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
export default function Header() {
  return (
    <div>
      Header <FiMoon className="icon" />
      <ul>
        <li>
          <NavLink to="/">About</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}
