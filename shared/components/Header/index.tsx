"use client";

import { useState, useEffect } from "react";
import { links } from "@/shared/constants";
import "./index.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <button
        className={`header__burger ${isOpen ? "header__burger--active" : ""}`}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span></span>
      </button>

      <nav className={`header__nav ${isOpen ? "header__nav--open" : ""}`}>
        <a
          href={links.fightersRequestForm}
          className="header__link"
          onClick={closeMenu}
        >
          Стать бойцом
        </a>
        <a
          href={links.viewersTicketsForm}
          className="header__link"
          onClick={closeMenu}
        >
          Стать зрителем
        </a>
        <a
          href={links.fightersTrainingForm}
          className="header__link"
          onClick={closeMenu}
        >
          Тренировочные бои
        </a>
        <a href={`#faq`} className="header__link" onClick={closeMenu}>
          Информация
        </a>
        <a href={`#footer`} className="header__link" onClick={closeMenu}>
          Контакты
        </a>
      </nav>

      {isOpen && <div className="header__overlay" onClick={closeMenu} />}
    </header>
  );
};
