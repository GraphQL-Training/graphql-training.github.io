import React from "react";
import { HeaderLink } from "./PageElements";

const PageHeader = ({ nav }) => (
  <div className="bg-off-grey relative">
    <div className="white flex justify-center flex-column bg-blue-gradient">
      <div className="container mw8 w-100">
        <div className="row">
          <header className="ttu tracked f7 w-100">
            <div className="col-xs-12 flex items-center pv3">
              <div className="flex items-center">
                <img
                  className="nav-logo"
                  height={36}
                  src="/images/small-brain-light.png"
                />
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
          <div className="pv4 pv5-l col-xs-12 tc">
            <div className="mb2">
              <h1 className="ttu tracked-light">GraphQL Training</h1>
            </div>
            <div className="mb4 mb5-l flex justify-center">
              <h3>
                Expert GraphQL training from the maintainer of PostGraphQL.
              </h3>
            </div>
            <div className="tools-logos-container flex flex-wrap justify-center w-100 pa3">
              {["graphql", "apollo", "node", "react"].map(f => (
                <img
                  className="header-tools-logo mh3 mv2 h1-ns"
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
    <svg
      className="down-divider absolute events-none bottom-0 w-100 l-0"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path d="M 0,0 50,100 100,0 100,100 0,100 z" />
    </svg>
  </div>
);

const PageHeaderDefault = () => (
  <PageHeader
    nav={
      <ul className="flex justify-start pv0 ph3 items-center">
        <HeaderLink
          href="/graphql-training-frontend"
          title="GraphQL Training Course for Frontend Developers"
        >
          Frontend Syllabus
        </HeaderLink>
        <HeaderLink
          href="/graphql-training-fullstack"
          title="GraphQL Training Course for Full Stack Developers and Teams"
        >
          Full Stack Syllabus
        </HeaderLink>
        <HeaderLink
          href="mailto:info@graphql-training.com"
          faName="envelope-o f4"
        >
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
