import React from "react";

const Nav = () => {
  return (
    <nav className="green accent-4">
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo left">
          DALV
        </a>
        <ul id="nav-mobile" className="right">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
