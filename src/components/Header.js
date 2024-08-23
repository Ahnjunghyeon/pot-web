import React, { useState } from "react";
import "../css/Header.css"; // 스타일 시트 불러오기

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="header">
      <div className="menu">
        <a
          className="menu-item"
          href="https://login-test-a417d.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SNS WEB
        </a>

        {/* Git Hub 드롭다운 버튼 */}
        <div className="dropdown">
          <div className="menu-item dropdown-toggle" onClick={toggleDropdown}>
            GIT HUB
          </div>
          <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
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
        </div>
      </div>
    </div>
  );
}

export default Header;

{
  /* <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
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
          </div> */
}
