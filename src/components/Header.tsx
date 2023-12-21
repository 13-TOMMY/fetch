import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { FC } from "react";

const Header: FC = () => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  const isApiTester = location.pathname === "/apitester";
  return (
    <div className="container">
      <div className="nav-header">
        <div className="links-left">
          <Link to={"/"}>Homepage</Link>
          <Link to="#">Documentation</Link>
          <a href="#">Github</a>
        </div>
        <div className="links-right">
          <Link to="/apitester">Fetch API</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
