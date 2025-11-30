import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "/assets/logo.png";
import { IoChatbubblesSharp, IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="nav-bar-wrapper">
      <div className="nav-inner">

        <nav className={`nav-bar ${open ? "menu-open" : ""}`}>

          <div className="nav-left">
            <button className="menu-toggle" onClick={() => setOpen(!open)}>
              <GiHamburgerMenu />
            </button>

            <Link to="/" className="brand-logo">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          <ul className={`main-menu ${open ? "show" : ""}`}>

            <li className={`menu-item color-blue ${isActive("/") ? "active" : ""}`}>
              <Link to="/">Home</Link>
            </li>

            <li className={`menu-item color-orange ${isActive("/categories") ? "active" : ""}`}>
              <Link to="/categories">Categories</Link>
            </li>

            <li className={`menu-item color-yellow ${isActive("/market") ? "active" : ""}`}>
              <Link to="/market">Market Place</Link>
            </li>

            <li className={`menu-item color-green ${isActive("/post-job") ? "active" : ""}`}>
              <Link to="/post-job">Post Job</Link>
            </li>

            <li className={`menu-item color-cyan ${isActive("/find-job") ? "active" : ""}`}>
              <Link to="/find-job">Find Job</Link>
            </li>

            <li className={`menu-item color-magenta ${isActive("/contest") ? "active" : ""}`}>
              <Link to="/contest">Contest</Link>
            </li>

          </ul>

          <div className="nav-right">
            <div className="icon-wrapper">
              <IoChatbubblesSharp />
              <span className="icon-badge">6</span>
            </div>

            <IoSearchSharp className="search-icon" />

            <div className="lang-dropdown">
              <button className="lang-btn">EN ▼</button>
              <ul className="lang-menu">
                <li>EN</li>
                <li>FR</li>
                <li>TR</li>
                <li>ES</li>
              </ul>
            </div>
          </div>

        </nav>

      </div>
    </div>
  );
}
