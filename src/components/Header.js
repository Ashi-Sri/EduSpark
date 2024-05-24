import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import '../App.css';

// const Header = ({ isLoggedIn, handleLogout }) => {
const Header = () => {
  const navigate = useNavigate();
  const [hideMenu, setHideMenu] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setHideMenu(true);
      } else {
        setHideMenu(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setHideMenu(!hideMenu);
  };
  const [isLoggedIn, setIsLoggedIn]=useState(false);

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    setIsLoggedIn(false);
    navigate("/login");
  }

  return (
    <div className="nav">
      <div className="container nav_container">
        <Link to="/" className="text-white text-decoration-none">
          <h4>EduSpark</h4>
        </Link>

        <button id="menu-btn" onClick={toggleMenu}>
          {hideMenu ? <i className="uil uil-bars"></i> : <i className="uil uil-multiply"></i>}
        </button>
        <div className="nav__search">
  <input
    type="text"
    placeholder="Search courses..."
    value={searchQuery}
    onChange={handleSearchChange}
    className="nav__search-input"
  />
  <button>
    <i className="uil uil-search"></i>
  </button>
</div>

        <ul className={`nav_menu ${hideMenu ? "hide" : ""}`}>
          <li>
            <Link to="/" className="text-decoration-none">
              <h4>Home</h4>
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-decoration-none">
              <h4>About</h4>
            </Link>
          </li>
          <li>
            <Link to="/courses" className="text-decoration-none">
              <h4>Courses</h4>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-decoration-none">
              <h4>Contact</h4>
            </Link>
          </li>
          <li>
  <Link to="/cart" className="text-decoration-none">
    <h4>Cart</h4>
  </Link>
</li>
          <li>
          {isLoggedIn ? (
              <button onClick={handleLogout} className="text-decoration-none">
                <h4>Logout</h4>
              </button>
            ) : (
              <Link to="/login" className="text-decoration-none">
                <h4>Login</h4>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

