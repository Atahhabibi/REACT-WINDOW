import links from "../utils/links";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

const NavLinks = ({ toggleSidebar }) => {
  const dispatch = useDispatch();

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { id, path, icon, text } = link;
        return (
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            key={id}
            onClick={toggleSidebar}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
