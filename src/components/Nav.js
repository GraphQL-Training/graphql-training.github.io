import React from "react";
import Link from "gatsby-link";

const Nav = ({ nav }) => (
  <header className="f5 w-100">
    <div className="col-xs-12 flex items-center pv3">
      <div className="flex items-center">
        <Link to="/" title="Home">
          <img
            className="nav-logo"
            height={36}
            src="/images/small-brain-light.png"
          />
        </Link>
      </div>
      <div className="ml-auto flex items-center togglable-menu-container">
        <input
          className="menu-toggler input-reset order-3 db dn-nsi"
          type="checkbox"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        />
        <nav className="nested-list-reset flex togglable-menu">
          <div className="menu-toggler-crosses db dn-nsi">
            <span> </span>
            <span> </span>
            <span> </span>
          </div>
          <div className="togglable-menu-items dn db-nsi">{nav}</div>
        </nav>
      </div>
    </div>
  </header>
);

export default Nav;
