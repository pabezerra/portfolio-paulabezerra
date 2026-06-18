import { useEffect, useState } from "react";
import {
  FiMenu,
  FiMessageCircle,
  FiMoon,
  FiSun,
  FiX,
} from "react-icons/fi";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function toggleTheme() {
    setDarkMode((currentMode) => !currentMode);
  }

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className="header">
      <div className="container header__container">
        <a href="#" className="header__brand" onClick={closeMenu}>
          <strong>PB.</strong>

          <div>
            <span>Paula Bezerra</span>
            <small>Desenvolvedora Front-End</small>
            <em>São Paulo, Brasil</em>
          </div>
        </a>

        <nav className={`header__nav ${menuOpen ? "active" : ""}`}>
          <a href="#projetos" onClick={closeMenu}>
            Projetos
          </a>
          <a href="#tecnologias" onClick={closeMenu}>
            Tecnologias
          </a>
          <a href="#contato" onClick={closeMenu}>
            Contato
          </a>
        </nav>

        <div className="header__actions">
          <button
            className="header__theme"
            onClick={toggleTheme}
            aria-label="Alternar tema"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          <a href="#contato" className="header__button" onClick={closeMenu}>
            Vamos conversar <FiMessageCircle />
          </a>

          <button
            className="header__menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}