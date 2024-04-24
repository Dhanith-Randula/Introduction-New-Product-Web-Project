import React, { useState } from "react";
import "./MenuBar1";
import "./menu-bar1.css";
import { Link } from "react-router-dom";

function MenuBar1() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        new product
      </a>
      <ul className={active}>
        <li className="nav__item">
          <Link href="#" className="nav__link" to ="/">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link href="#" className="nav__link" to ="/aboutus" >
            About
          </Link>
        </li>
        <li className="nav-item dropdown">
                <a
                    className="nav-link-dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Catagories
                </a>
                <ul className="dropdown-menu">
                    <li>
                    <Link className="dropdown-item" href="#" to ="">
                        Environmental & Nature
                    </Link>
                    </li>
                    <li>
                    <Link className="dropdown-item" href="#" to ="">
                        Technology
                    </Link>
                    </li>
                    <li>
                    <Link className="dropdown-item" href="#" to ="">
                        Lifestyle & Fashion
                    </Link>
                    </li>
                    <li>
                    <Link className="dropdown-item" href="#" to ="">
                        Photography
                    </Link>
                    </li>
                    <li>
                    <Link className="dropdown-item" href="#" to ="">
                        Food & Drink
                    </Link>
                    </li>
                </ul>
        </li>
        <li className="nav__item">
          <Link href="#" className="nav__link" to ="/link">
            All Product
          </Link>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
        <li className="nav__item">
          <Link href="#" className="nav__link" to ="/login">
            Login
          </Link>
        </li>
        <li className="nav__item">
          <Link href="#" className="nav__link" to ="/signup">
            Sign Up
          </Link>
        </li>



        {/* search button */}
        
        <div class="group">
  <svg viewBox="0 0 24 24" aria-hidden="true" class="search-icon">
    <g>
      <path
        d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
      ></path>
    </g>
  </svg>

  <input
    id="query"
    class="input"
    type="search"
    placeholder="Search..."
    name="searchbar"
  />
</div>

      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default MenuBar1;