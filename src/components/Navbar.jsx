import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ onNavigate }) => {
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // load saved theme
    const saved = localStorage.getItem("theme");
    if (
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const isDark = !dark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  // navigation handler (closes mobile menu after click)
  const handleNavigate = (page) => {
    onNavigate(page);
    setMobileOpen(false); // auto close on click
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Brand */}
        <div className="brand">
          <div className="logo">
            <i className="fas fa-heartbeat"></i>
          </div>
          <span className="brand-text">Nitte</span>
        </div>

        {/* Desktop Menu */}
        <div className="navlinks">
          <button className="nav-link" onClick={() => handleNavigate("home")}>
            Home
          </button>
          <button className="nav-link" onClick={() => handleNavigate("patients")}>
            Patient Details
          </button>
          <button className="nav-link" onClick={() => handleNavigate("about")}>
            About Us
          </button>
          <button
            aria-label="Toggle theme"
            className="theme-toggle"
            onClick={toggleTheme}
          >
            <i className={dark ? "fas fa-sun" : "fas fa-moon"}></i>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          aria-label="Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <button className="nav-link" onClick={() => handleNavigate("home")}>
            Home
          </button>
          <button className="nav-link" onClick={() => handleNavigate("patients")}>
            Patient Details
          </button>
          <button className="nav-link" onClick={() => handleNavigate("about")}>
            About Us
          </button>
          <button
            aria-label="Toggle theme"
            className="theme-toggle"
            onClick={toggleTheme}
          >
            <i className={dark ? "fas fa-sun" : "fas fa-moon"}></i>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
