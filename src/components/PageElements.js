import React from "react";

const CourseTitle = ({ children }) => (
  <h3 className="ttu tracked-light">{children}</h3>
);

const TitledParagraph = ({ title, children, className }) => (
  <div className={`${className || ""}`}>
    {title && <h3 className="ttu tracked-light">{title}</h3>}
    <p className="f5 f4-ns">{children}</p>
  </div>
);

const HeaderLink = ({ faName, children, href, title, pushRight }) => (
  <li className={`${pushRight ? "ml-auto" : "ml4"} `}>
    <a
      href={href}
      title={title}
      className="flex items-center no-underline-hover"
    >
      {!!faName && <span className={`fa fa-${faName} f3 mr2 white`} />}
      <span className="white">{children}</span>
    </a>
  </li>
);

const FrontendCoursePoints = () => (
  <div className="row">
    <div className="col-xs-12 col-md-6">
      <ul>
        <li>GraphQL concepts and terminology.</li>
        <li>How to perform queries and mutations using GraphiQL and HTTP.</li>
        <li>Composing GraphQL documents with fragments.</li>
        <li>
          How to integrate the Apollo GraphQL client into React applications
        </li>
      </ul>
    </div>
    <div className="col-xs-12 col-md-6">
      <ul>
        <li>Simplification: removing unnecessary state from your app.</li>
        <li>Authenticating GraphQL requests.</li>
        <li>Debugging techniques.</li>
        <li>Optimistic updates and other performance and UX optimizations.</li>
      </ul>
    </div>
  </div>
);

const FrontendCourseDescription = () => (
  <div className="col-xs-12 flex flex-column items-center tc">
    <CourseTitle>Frontend GraphQL with React</CourseTitle>
    <p>
      This 2 day course gives React developers the experience and intuitions to
      create GraphQL applications rapidly and on the right footing. Starting
      with learning the core concepts and how to use queries, mutations and
      fragments, the course progresses to building advanced skills in areas such
      as authentication, caching, optimistic updates and debugging.
    </p>
  </div>
);

const FullstackCoursePoints = () => (
  <div className="row">
    <div className="col-xs-12 col-md-6">
      <ul>
        <li>GraphQL concepts and terminology.</li>
        <li>How to perform queries and mutations using GraphiQL and HTTP.</li>
        <li>Composing GraphQL documents with fragments.</li>
        <li>
          How to integrate the Apollo GraphQL client into React applications
        </li>
      </ul>
    </div>
    <div className="col-xs-12 col-md-6">
      <ul>
        <li>Simplification: removing unnecessary state from your app.</li>
        <li>Authenticating GraphQL requests.</li>
        <li>Debugging techniques.</li>
        <li>Optimistic updates and other performance and UX optimizations.</li>
      </ul>
    </div>
  </div>
);

const FullstackCourseDescription = () => (
  <div className="col-xs-12 flex flex-column items-center tc">
    <CourseTitle>GraphQL for Fullstack Developers & Teams</CourseTitle>
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
