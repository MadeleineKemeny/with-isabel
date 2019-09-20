import React from "react";

function Nav() {
  return (
    // Sticky Header
    <nav className="navbar navbar-expand-sm fixed-top">
      <ul className="navbar-nav">
        {/* Component: Browse */}
        <li className="nav-item">
          <a className="nav-link" href="#">
            Browse Our Collection
          </a>
        </li>

        {/* Component: Profile details */}
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            href="#"
          >
            My Profile<span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Conact Details</a>
            </li>
            <li>
              <a href="#">Payment Information</a>
            </li>
            <li>
              <a href="#"> Wine Preferences</a>
            </li>
            <li>
              <a href="#">Purchase History</a>
            </li>
            <li>
              <a href="#">My Reviews</a>
            </li>
          </ul>
        </li>

        {/* Component: new items */}
        <li className="nav-item">
          <a className="nav-link" href="#">
            Recent Additions
          </a>
        </li>

        {/* Component: list of Vineyard details */}
        <li className="nav-item">
          <a className="nav-link" href="#">
            Our Partners
          </a>
        </li>

        {/* Component: blogs with links */}
        <li className="nav-item">
          <a className="nav-link" href="#">
            Blogs We Love
          </a>
        </li>
        {/* need shopping cart */}
      </ul>
    </nav>
  );
}

export default Nav;
