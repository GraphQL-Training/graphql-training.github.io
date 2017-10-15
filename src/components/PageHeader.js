import React from "react";
import { HeaderLink } from "./PageElements";
import Link from "gatsby-link";
import { ButtonLink, ButtonLinkSolid } from "./Button";

const PageHeader = ({ nav }) => (
  <div className="bg-almost-black relative">
    <div className="white flex justify-center flex-column bg-blue-gradient">
      <div className="container mw8 w-100">
        <div className="row">
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
        </div>
        <div className="row">
          <div className="pv5 pv7-l col-xs-12">
            <h1 className="f1 ma0">GraphQL Training</h1>
            <p className="f3 fw4">
              Expert GraphQL training from the maintainer of PostGraphQL.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PageHeaderDefault = () => (
  <PageHeader
    nav={
      <ul className="flex justify-start pv0 ph3 items-center">
        <HeaderLink
          to="/graphql-training-frontend"
          title="GraphQL Training Course for Frontend Developers"
        >
          Frontend Syllabus
        </HeaderLink>
        <HeaderLink
          to="/graphql-training-fullstack"
          title="GraphQL Training Course for Full Stack Developers and Teams"
        >
          Full Stack Syllabus
        </HeaderLink>
        <HeaderLink href="mailto:info@graphql-training.com">
          info@graphql-training.com
        </HeaderLink>
        <HeaderLink
          href="https://www.graphile.org/postgraphile/"
          title="Instant GraphQL API from a PostgreSQL schema"
          faName="github"
        >
          PostGraphile
        </HeaderLink>
      </ul>
    }
  />
);

export default PageHeader;

export { PageHeaderDefault };
