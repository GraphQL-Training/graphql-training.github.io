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
          <div className="pv5 pv6-l col-xs-12">
            <div className="flex flex-column items-center mb3 tc">
              <img
                alt="Logo"
                className="mb5"
                height={125}
                src="/images/brain-medium.png"
                width={125}
              />
              <div className="mb3">
                <h1 className="f2 ma0">GraphQL Training</h1>
              </div>
              <p className="f4 fw6">
                GraphQL training in London, Berlin and Europe.
                <br />
                From the maintainer of PostGraphQL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row bg-black">
        <div className="col-xs-12">
          <div className="tools-logos-container flex flex-wrap justify-center w-100 pa3">
            {["graphql", "apollo", "node", "react"].map(f => (
              <img
                className="header-tools-logo mh3 mv1 h1-ns"
                key={f}
                src={`/images/${f}-logo.png`}
                title={`${f} logo`}
              />
            ))}
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
