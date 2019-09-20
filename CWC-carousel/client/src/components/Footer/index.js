import React from "react";

function Footer() {
  return (
    // Sticky Footer
    <nav className="navbar navbar-expand-sm fixed-bottom">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Our Producers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Terms & Conditions
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            FAQs
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;
