import React from "react";
import { Section } from "./LayoutHelpers";

const FooterItem = ({ children, href, title, description }) => (
  <li className="mr3 mb3">
    <span>
      {href ? (
        <a href={href} title={title} target="_blank">
          {children}
        </a>
      ) : (
        children
      )}
      {description ? <span> &mdash; {description}</span> : null}
    </span>
  </li>
);

const Footer = () => (
  <Section className="bg-off-grey">
    <div className="row">
      <div className="col-xs-12 col-sm-4">
        <h3 className="f6 ttu fw6 mt0 mb3 bb pb2">Contact</h3>
        <ul className="list pl0">
          <FooterItem href="https://www.twitter.com/benjie">@benjie</FooterItem>
          <FooterItem href="https://www.twitter.com/jofarnold">
            @jofarnold
          </FooterItem>
          <FooterItem href="mailto:info@graphql-training.com">
            info@graphql-training.com
          </FooterItem>
        </ul>
      </div>
      <div className="col-xs-12 col-sm-4">
        <h3 className="f6 ttu fw6 mt0 mb3 bb pb2">Courses</h3>
        <ul className="list pl0">
          <FooterItem href="/graphql-training-frontend-course">
            GraphQL training for frontend React developers
          </FooterItem>
          <FooterItem href="/graphql-training-frontend-course">
            GraphQL training for frontend React developers
          </FooterItem>
        </ul>
      </div>
      <div className="col-xs-12 col-sm-4">
        <h3 className="f6 ttu fw6 mt0 mb3 bb pb2">Projects</h3>
        <ul className="list pl0">
          <FooterItem
            href="https://www.graphile.org/postgraphile/"
            description="Instant GraphQL API from a PostgreSQL database schema"
          >
            PostGraphile
          </FooterItem>
          <FooterItem
            href="https://www.graphile.org/graphile-build/"
            description="Tools to build pluggable, performant GraphQL APIs"
          >
            Graphile Build
          </FooterItem>
        </ul>
      </div>
    </div>
  </Section>
);

export default Footer;
