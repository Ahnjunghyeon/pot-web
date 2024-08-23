import React, { useState } from "react";
import "../css/Header.css";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    site: false,
    menu2: false,
  });

  const toggleDropdown = (menu) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className="header">
      <div className="menu">
        <a
          className="menu-item"
          href="https://login-test-a417d.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          SNS WEB
        </a>
        <a className="menu-item" onClick={() => toggleDropdown("menu2")}>
          Git Hub
          <div
            className={`dropdown-menu ${isDropdownOpen.menu2 ? "show" : ""}`}
          >
            <a
              href="https://github.com/Ahnjunghyeon/test-login"
              target="_blank"
              rel="noopener noreferrer"
              className="dropdown-item"
            >
              SNS Git
            </a>
            <a
              href="https://github.com/Ahnjunghyeon/2023capston"
              target="_blank"
              rel="noopener noreferrer"
              className="dropdown-item"
            >
              Capston Git
            </a>
            <a
              href="https://github.com/Ahnjunghyeon/pot-web"
              target="_blank"
              rel="noopener noreferrer"
              className="dropdown-item"
            >
              Portfolio Git
            </a>
            <a
              href="https://github.com/Ahnjunghyeon?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="dropdown-item"
            >
              안중현의 깃허브
            </a>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Header;
