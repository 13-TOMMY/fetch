
import "./Header.css";

function Header() {
  

  return (
    <div className="container">
      <div className="nav-header">
        <div className="links-left">
          <a href="#">Documentation</a>
          <a href="#">Github</a>
        </div>
        <div className="links-right">
          <a href="#">Fetch API</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
