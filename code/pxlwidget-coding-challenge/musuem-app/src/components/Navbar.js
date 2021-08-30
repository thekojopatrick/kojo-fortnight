import { Link } from "gatsby";
import React from "react";
import sprite from "/static/sprite.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h3 className="text-lg-2x text--uppercase">Rijks museum</h3>
      </div>
      <nav className="navbar__nav">
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link href="#" className="navbar__link">
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link href="#" className="navbar__link">
              About
            </Link>
          </li>
          <li className="navbar__item">
            <Link href="#" className="navbar__link">
              Shop
            </Link>
          </li>
          <li className="navbar__item">
            <Link href="#" className="navbar__link">
              Exhibitions
            </Link>
          </li>
          <li className="navbar__item">
            <Link href="#" className="navbar__link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="navbar__buttons">
        <a className="btn btn--search">
          <svg className="btn__icon icon-search">
            <use href={sprite + "#icon-search"}></use>
          </svg>
        </a>
        <a className="btn btn--menu">
          <svg className="btn__icon icon-menu">
            <use xlinkHref="/sprite.svg#icon-menu"></use>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
