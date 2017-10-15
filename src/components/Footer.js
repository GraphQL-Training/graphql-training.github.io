import React from "react";
import { Section } from "./LayoutHelpers";
import LinkType from "./LinkType";

const FooterItem = ({ children, href, to, title, description }) => (
  <li className="mr3 mb3">
    <span>
      {href || to ? (
        <LinkType href={href} title={title} to={to}>
          {children}
        </LinkType>
      ) : (
        children
      )}
      {description ? <span> &mdash; {description}</span> : null}
    </span>
  </li>
);

const Title = ({ children }) => <h6 className="ttu mb4 pb2">{children}</h6>;

const Footer = () => (
  <Section className="bg-almost-black light-gray">
    <div className="row">
      <div className="col-xs-12 col-sm-4 ma0-l mb5">
        <Title>Contact</Title>
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
      <div className="col-xs-12 col-sm-4 ma0-l mb5">
        <Title>Courses</Title>
        <ul className="list pl0">
          <FooterItem to="/graphql-training-frontend-course">
            GraphQL training for frontend React developers
          </FooterItem>
          <FooterItem to="/graphql-training-fullstack-course">
            GraphQL training for full stack developers
          </FooterItem>
        </ul>
      </div>
      <div className="col-xs-12 col-sm-4 ma0-l mb5">
        <Title>Projects</Title>
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
