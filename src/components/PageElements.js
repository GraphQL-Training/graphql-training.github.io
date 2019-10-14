import React from "react";
import Link from "gatsby-link";
import { Section, RowCenter } from "./LayoutHelpers";
import LinkType from "./LinkType";

const CourseTitle = ({ children }) => (
  <h3 className="mb5 divider">{children}</h3>
);

const TitledParagraph = ({ title, children, className }) => (
  <div className={`${className || ""}`}>
    {title && <h3 className="mb5">{title}</h3>}
    <p className="">{children}</p>
  </div>
);

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

const ApproachSection = () => (
  <Section className="">
    <RowCenter>
      <div>
        <h3 className="divider mb5">On-site, Off-site or Remote</h3>
        <p>
          Every organization’s need is different which is why we love to work
          with teams on site, customizing the syllabus to meet your needs. With
          a decade of experience in building products and consulting with small
          startups through to household name media companies, we understand how
          to help your developers achieve the very best…
        </p>
        <p>
          Need a remote or external location? We can do that too. We conduct
          bespoke online webinars and can host up to 20 developers at central
          locations in all major European cities.
        </p>
        <p>
          <a
            className="inherit grow"
            href="mailto:info@graphql-training.com"
            title="Email GraphQL Training"
          >
            Contact us
          </a>{" "}
          for more details.
        </p>
        <h3 className="divider mb5 mt5">Teaching Style</h3>
        <p>
          We find that most people learn best by doing, so our 1-day and 2-day
          courses have multiple cycles of listening to a short presentation and
          then performing a programming exercise using the techniques discussed.
          This gives the student opportunity to solidify their understanding,
          experiment and even to make mistakes and learn how to fix them.
        </p>
        <p>
          We operate a buddy system where each student is paired with another so
          they can help each other to solve any problems, and our trainers will
          be on-hand to help clarify any uncertainties and guide how to fix
          issues.
        </p>
      </div>
    </RowCenter>
  </Section>
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
  <div>
    <p>
      This 2 day course gives React developers the experience and intuitions to
      create GraphQL applications rapidly and on the right footing.
    </p>
    <p>
      Starting with learning the core concepts and how to use queries, mutations
      and fragments, the course progresses to building advanced skills in areas
      such as authentication, caching, optimistic updates and debugging.
    </p>
  </div>
);

const FullstackCoursePoints = () => (
  <ul>
    <li>GraphQL concepts and terminology.</li>
    <li>How to perform queries and mutations using GraphiQL and HTTP.</li>
    <li>Composing GraphQL documents with fragments.</li>
    <li>Versionless schema design.</li>
    <li>Understanding GraphQL performance.</li>
    <li>Authenticating GraphQL requests.</li>
    <li>Collaborating on GraphQL design.</li>
  </ul>
);

const FullstackCourseDescription = () => (
  <div>
    <p>
      This advanced 2- or 3-day course gives full stack engineers and
      cross-discipline teams the experience and intuitions to create high
      performance GraphQL applications/APIs rapidly and on the right footing.
    </p>
    <p>
      Starting with learning the core concepts and how to use queries, mutations
      and fragments, the course progresses to building skills in areas such as
      schema design, authentication and API performance.
    </p>
  </div>
);

const Reference = ({ children, avatarUrl, avatarBackground = null, name }) => (
  <div className="flex justify-center h-100">
    <div className="shadow--l3 mb4 bg-white pa4 w-100 mw6 flex flex-column flex-row-l">
      <div className="w4 mr4 flex flex-column mb4 justify-start">
        <div
          className="w4-l h4-l w3 h3 mb3 br-100"
          style={{
            backgroundImage: `url('${avatarUrl}')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
            ...avatarBackground,
          }}
        />
        <div className="near-black fw6 ">{name}</div>
      </div>
      <div className="quote-wrapper">
        <blockquote className="ma0">{children}</blockquote>
      </div>
    </div>
  </div>
);

const CourseTitleRow = ({ children }) => (
  <div className="row bg-white">
    <div className="col-xs-12">
      <div className="ph5 pt6-l pt5 flex flex-column items-center">
        <h3 className="divider-center mb5">{children}</h3>
      </div>
    </div>
  </div>
);

const CourseDescriptionRow = ({ left, right }) => (
  <div className="row bg-white">
    <div className="col-xs-12 col-lg-6">
      <div className="ph5-ns h-100 flex flex-column items-center lh-long">
        {left}
      </div>
    </div>
    <div className="col-xs-12 col-lg-6">
      <div className="bg-white ph5-ns h-100 flex flex-column items-center mid-gray">
        <div className="h-100 flex flex-column">
          <div className="mb5">{right}</div>
        </div>
      </div>
    </div>
  </div>
);

const SplitColumn = ({ children }) => (
  <div className="col-xs-12 col-md-6 mb5 mb0-l">
    <div className="bg-white ph4-l h-100 flex flex-column items-center mid-gray">
      <div className="100 flex flex-column items-start">{children}</div>
    </div>
  </div>
);

const Bio = ({ className, name, avatarUrl, children, isRight }) => {
  const cn1 = isRight ? "off-left-l" : "off-right-l";
  const cn2 = isRight ? "order-0-l" : "order-2-l";
  return (
    <div className={`${className} ${cn1} shadow--l3 bg-white`}>
      <div className="flex flex-row-l flex-column justify-between">
        <div
          className="w6-l w-100 mnh5 cover bg-center order-1-l"
          style={{ backgroundImage: `url(/${avatarUrl})` }}
        />
        <div className={`${cn2} pa4`}>
          <div className="fw6 f4 mt3 ttu tracked-light mb4">{name}</div>
          <p className="lh-long dark-gray">{children}</p>
        </div>
      </div>
    </div>
  );
};

const Logos = () => (
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
);

const BioSection = () => (
  <Section className="bg-light-gray overflow-hidden" isAlt>
    <RowCenter>
      <h3 className="divider-center">Meet the trainers</h3>
      <br />
      <br />
      <Bio
        className="mb5"
        name="Benjie Gillam"
        avatarUrl="images/benjie-medium.jpg"
        isRight
      >
        Benjie has been writing applications, servers and APIs professionally
        for over a decade. As part of maintaining{" "}
        <a href="https://graphile.org/postgraphile/">PostGraphile</a>, a popular
        OSS project that generates an extremely high-performance and highly
        configurable GraphQL API from your existing PostgreSQL database schema,
        Benjie built the Graphile suite of tools for building scalable GraphQL
        schemas through plugins. He also helps to maintain the official Graph
        <em>i</em>QL GraphQL IDE and is a contributor to the GraphQL
        Specification Working Group. He sees GraphQL as one of the biggest
        advancements in web API technology during his career.
      </Bio>
      <Bio className="mb5" name="Jem Gillam" avatarUrl="images/jem-medium.jpg">
        Jem has a Post-Graduate Certificate in Education (PGCE), which equipped
        her with the tools and techniques to support people in their learning
        journeys. After a career change to programming where she built web and
        iOS apps she joined the <em>GraphQL-Training</em> team and brings a
        focus on learning methodologies and curricula planning. She also
        operates the human side of the{" "}
        <a href="https://graphile.org/">
          Graphile <abbr title="open-source software">OSS</abbr> projects
        </a>
        , building the community around the software and ensuring that
        supporters&rsquo; concerns are rapidly addressed.
      </Bio>
    </RowCenter>
  </Section>
);

export {
  ApproachSection,
  Bio,
  BioSection,
  CourseDescriptionRow,
  CourseTitle,
  CourseTitleRow,
  FrontendCourseDescription,
  FrontendCoursePoints,
  FullstackCourseDescription,
  FullstackCoursePoints,
  HeaderLink,
  Logos,
  Reference,
  SplitColumn,
  TitledParagraph,
};
