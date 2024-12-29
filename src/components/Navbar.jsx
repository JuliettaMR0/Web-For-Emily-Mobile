import React, { useState } from "react";

const Navbar = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategoryClick = (category) => {
    onNavigate(category); // Cambia la sección activa.
    setIsMenuOpen(false); // Cierra el menú.
  };

  return (
    <nav className="navbar">
      <h1 className="logo" onClick={() => onNavigate("Inicio")}>
        Emiflix
      </h1>
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li className="nav-item" onClick={() => onNavigate("Inicio")}>
          Inicio
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          Categorías
          {isDropdownOpen && (
            <ul className="dropdown">
              {["Paisajes", "Medicina", "Ocio", "Varios"].map((category) => (
                <li
                  key={category}
                  className="dropdown-item"
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
