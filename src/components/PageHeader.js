import React from "react";
import { HeaderLink, Logos } from "./PageElements";
import Link from "gatsby-link";
import { ButtonLink, ButtonLinkSolid } from "./Button";
import Nav from "./Nav";

const PageHeader = ({ nav }) => (
  <div className="bg-almost-black relative">
    <div className="white flex justify-center flex-column bg-blue-gradient">
      <div className="container mw8 w-100">
        <div className="row">
          <Nav nav={nav} />
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
  </div>
);

const NavCore = () => (
  <ul className="flex justify-start pv0 ph3 items-center">
    <HeaderLink
      to="/graphql-training-frontend-course"
      title="GraphQL Training Course for Frontend Developers"
    >
      Frontend Syllabus
    </HeaderLink>
    <HeaderLink
      to="/graphql-training-fullstack-course"
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
);

const PageHeaderPage = ({ title }) => (
  <div className="bg-almost-black relative">
    <div className="white flex justify-center flex-column bg-blue-gradient">
      <div className="container mw8 w-100">
        <div className="row">
          <Nav nav={<NavCore />} />
        </div>
        <div className="row">
          <div className="pv5 pv5-l col-xs-12">
            <div className="flex flex-column items-center mb3 tc">
              <div className="mb3">
                <h1 className="f2 ma0">{title}</h1>
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
  </div>
);

const PageHeaderDefault = () => <PageHeader nav={<NavCore />} />;

export default PageHeader;

export { PageHeaderDefault, PageHeaderPage };
