import React from "react";
import Link from "gatsby-link";

const CourseTitle = ({ children }) => (
  <h3 className="mb5 divider">{children}</h3>
);

const TitledParagraph = ({ title, children, className }) => (
  <div className={`${className || ""}`}>
    {title && <h3 className="mb5">{title}</h3>}
    <p className="">{children}</p>
  </div>
);

const LinkType = ({ href, to, ...rest }) => {
  return to ? <Link to={to} {...rest} /> : <a href={href} {...rest} />;
};

const HeaderLink = ({ faName, children, href, title, to, pushRight }) => (
  <li className={`${pushRight ? "ml-auto" : "ml4"} `}>
    <LinkType
      href={href}
      title={title}
      to={to}
      className="flex items-center no-underline-hover ttu f7 fw6"
    >
      {!!faName && <span className={`fa fa-${faName} f3 mr2 white`} />}
      <span className="white">{children}</span>
    </LinkType>
  </li>
);

const FrontendCoursePoints = () => (
  <ul>
    <li>GraphQL concepts and terminology.</li>
    <li>How to perform queries and mutations using GraphiQL and HTTP.</li>
    <li>Composing GraphQL documents with fragments.</li>
    <li>How to integrate the Apollo GraphQL client into React applications</li>
    <li>Simplification: removing unnecessary state from your app.</li>
    <li>Authenticating GraphQL requests.</li>
    <li>Debugging techniques.</li>
    <li>Optimistic updates and other performance and UX optimizations.</li>
  </ul>
);

const FrontendCourseDescription = () => (
  <p>
    This 2 day course gives React developers the experience and intuitions to
    create GraphQL applications rapidly and on the right footing. Starting with
    learning the core concepts and how to use queries, mutations and fragments,
    the course progresses to building advanced skills in areas such as
    authentication, caching, optimistic updates and debugging.
  </p>
);

const FullstackCoursePoints = () => (
  <ul>
    <li>GraphQL concepts and terminology.</li>
    <li>How to perform queries and mutations using GraphiQL and HTTP.</li>
    <li>Composing GraphQL documents with fragments.</li>
    <li>How to integrate the Apollo GraphQL client into React applications</li>
    <li>Simplification: removing unnecessary state from your app.</li>
    <li>Authenticating GraphQL requests.</li>
    <li>Debugging techniques.</li>
    <li>Optimistic updates and other performance and UX optimizations.</li>
  </ul>
);

const FullstackCourseDescription = () => (
  <div>
    <p>
      This advanced 2 day course gives full stack engineers and cross-discipline
      teams the experience and intuitions to create high performance GraphQL
      applications/APIs rapidly and on the right footing.
    </p>
    <p>
      Starting with learning the core concepts and how to use queries, mutations
      and fragments, the course progresses to building skills in areas such as
      schema design, authentication and API performance.
    </p>
  </div>
);

export {
  CourseTitle,
  TitledParagraph,
  HeaderLink,
  FrontendCourseDescription,
  FrontendCoursePoints,
  FullstackCoursePoints,
  FullstackCourseDescription,
};
