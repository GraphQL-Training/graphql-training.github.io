import React from "react";
import Helmet from "react-helmet";
import { ButtonLink, ButtonLinkSolid } from "../components/Button";
import PageHeader from "../components/PageHeader";
import { Section, RowCenter } from "../components/LayoutHelpers";

const Reference = ({ children, avatarUrl, name }) => (
  <div className="flex mb0-l justify-center h-100">
    <div className="shadow--l2 bg-white self-stretch pa4 w-100 mw6 flex flex-column justify-between">
      <blockquote className="f4-ns f5 mb4 mt0">{children}</blockquote>
      <div className="flex items-center">
        <img className="db w3 h3 mr3 br-100" src={avatarUrl} />
        <div className="f4-l f5 ttu tracked-light">{name}</div>
      </div>
    </div>
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

const TitledParagraph = ({ title, children, className }) => (
  <div className={`${className || ""}`}>
    {title && <h3 className="ttu tracked-light">{title}</h3>}
    <p className="f5 f4-ns">{children}</p>
  </div>
);

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

const Bio = ({ name, avatarUrl, children }) => (
  <div className="shadow--l1 bg-white w-100 pv4 ph0 mb4">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-3 flex flex-column items-center">
          <img
            className="br-100 h4 w4 shadow-2 db mb4"
            src={avatarUrl}
            alt={`Profile photo of ${name}`}
          />
          <div className="f4 ttu tracked-light tc mb3 mb0-l">{name}</div>
        </div>
        <div className="col-xs-12 col-md-9 tc tl-l flex flex-column tc tl-l items-center items-start-l">
          <TitledParagraph>{children}</TitledParagraph>
        </div>
      </div>
    </div>
  </div>
);

const CourseTitle = ({ children }) => (
  <h3 className="ttu tracked-light">{children}</h3>
);

const Index = () => (
  <div>
    <Helmet
      title={`GraphQL Training in London, Manchester, Berlin and Beyond`}
      meta={[
        {
          name: "description",
          content: "GraphQL training in London, Manchester and Berlin",
        },
        {
          name: "keywords",
          content:
            "GraphQL, Schema, API, Graph, PostgreSQL, Postgres, PG, Nodejs, Node, Reactjs, React, Training, Teach, Learn, London, Berlin",
        },
      ]}
    />
    <PageHeader
      nav={
        <ul className="flex justify-start pv0 ph3 items-center">
          <HeaderLink
            href="https://www.graphile.org/postgraphile/"
            title="Instant GraphQL API from a PostgreSQL schema"
            faName="github"
            pushRight
          >
            PostGraphile
          </HeaderLink>
          <HeaderLink
            href="https://www.graphile.org/graphile-build/"
            title="Tools to build a performant pluggable GraphQL Schema"
            faName="github"
          >
            Graphile Build
          </HeaderLink>
          <HeaderLink
            href="mailto:info@graphql-training.com"
            faName="envelope-o f4"
          >
            info@graphql-training.com
          </HeaderLink>
        </ul>
      }
    />
    <Section className="bg-dark white">
      <div className="row">
        <div className="col-xs-12 flex-column tc tl-l items-center items-start-l tc">
          <TitledParagraph
            className="flex flex-column items-center tc"
            title="The GraphQL Revolution"
          >
            GraphQL is a breakthrough in API design adopted by many of the
            world’s top companies (and many small ones too). The creator of the
            open standard, Facebook, has used it to serve 2 billion users and
            cite it as a key reason for their dominance in mobile.
          </TitledParagraph>
          <TitledParagraph className="flex flex-column items-center tc">
            By adopting GraphQL in your business you can innovate faster and
            deliver better web experiences leading to increase conversions,
            fewer lost sales due to bugs and higher search engine ratings.
          </TitledParagraph>
        </div>
      </div>
    </Section>

    <Section className="bg-off-grey">
      <RowCenter>
        <h3 className="tc">
          Training from developers with 20 years combined experience.
        </h3>
        <br />
        <br />
        <Bio name="Benjie Gillam" avatarUrl="images/benjie-medium.jpg">
          Benjie has been writing applications, servers and APIs professionally
          for over a decade. As part of maintaining PostGraphQL, a popular OSS
          project that generates a GraphQL API from your existing PostgreSQL
          database schema, Benjie built the Graphile suite of tools for building
          scalable GraphQL schemas through plugins. He sees GraphQL as one of
          the biggest advancements in web API technology during his career.
        </Bio>
        <Bio name="Jof Arnold" avatarUrl="images/jof-medium.jpg">
          Jof started with JavaScript in 1998 with Microsoft’s release of
          Internet Explorer 3. Since then he has worked at the cutting edge of
          the frontend stack, being amongst the first in 2013 to introduce React
          to a large-scale production application. Jof brings a user-centric
          approach to frontend technologies. He is a regular speaker and
          contributor to the London tech scene in all matters frontend.
        </Bio>
      </RowCenter>
    </Section>

    <Section className="section-dark bg-people-dark-grey white">
      <div className="row">
        <div className="col-xs-12 flex flex-column items-center tc">
          <h2 className="ttu tracked-light mb4">GraphQL Courses</h2>
        </div>
      </div>
      <div className="row pb5 mb4 bb bb--solid b--white-20">
        <div className="col-xs-6 flex flex-column items-center tc">
          <CourseTitle>2 Days Frontend GraphQL</CourseTitle>
          <p className="f5">Day 1: GraphQL Core</p>
          <p className="f5">Day 2: Frontend GraphQL with React</p>
        </div>
        <div className="col-xs-6 flex flex-column items-center tc">
          <CourseTitle>2 Days Backend GraphQL</CourseTitle>
          <p className="f5">Day 1: GraphQL Core</p>
          <p className="f5">Day 2: Backend GraphQL on Node.js</p>
        </div>
      </div>

      <div className="row mb4">
        <div className="col-xs-12 flex flex-column items-center tc">
          <CourseTitle>GraphQL Core</CourseTitle>
          <p>Common to the frontend and backend courses.</p>
        </div>
      </div>
      <div className="row pb5 mb4 bb bb--solid b--white-20">
        <div className="col-xs-10 col-md-6">
          <ul>
            <li>GraphQL basics (why use GraphQL?).</li>
            <li>Introduction to GraphQL terminology.</li>
            <li>Methods of exploring a GraphQL schema.</li>
            <li>Performing simple queries and mutations using GraphiQL.</li>
            <li>Performing queries/mutations using HTTP.</li>
          </ul>
        </div>
        <div className="col-xs-10 col-md-6">
          <ul>
            <li>Maximising reuse with fragments.</li>
            <li>Integrating GraphQL into an existing web project.</li>
            <li>GraphQL object stores/caches, normalisation, etc.</li>
            <li>Considerations for API maintenance, deprecations, etc.</li>
          </ul>
        </div>
      </div>
      <div className="row mb4">
        <div className="col-xs-12 flex flex-column items-center tc">
          <CourseTitle>Frontend GraphQL with React</CourseTitle>
          <p>
            Implementing the client-side of GraphQL in React or React Native.
          </p>
          <p>
            Follows on from the GraphQL Core syllabus. Assumes a working
            knowledge of ES2017, especially `async`/`await` and promises. A
            working understanding of React is also very helpful. We’re happy to
            send primers for those not yet comfortable with these technologies.
          </p>
        </div>
      </div>
      <div className="row pb5 mb4 bb bb--solid b--white-20">
        <div className="col-xs-12 col-md-6">
          <ul>
            <li>
              Introduction to common GraphQL clients including Apollo and Relay
              Modern.
            </li>
            <li>Apollo Basics: adding Apollo GraphQL client to a React app.</li>
            <li>
              Authentication: GraphQL authentication methods including JWTs and
              sessions/cookies.
            </li>
            <li>Advanced Apollo: exploring Apollo options and HOCs.</li>
            <li>Simplification: removing unnecessary state from your app.</li>
          </ul>
        </div>
        <div className="col-xs-12 col-md-6">
          <ul>
            <li>
              Debugging: Using the DevTools for an improved debugging
              experience.
            </li>
            <li>
              Advanced mutations: telling Apollo what to do when it’s not
              obvious.
            </li>
            <li>Optimistic updates: slick interface for users.</li>
            <li>Where to next: a brief overview of related technologies.</li>
          </ul>
        </div>
        <div className="col-xs-12 mt4 flex flex-column items-center tc">
          <ButtonLink
            href="mailto:info@graphql-training.com"
            title="Email us to sign up"
          >
            Sign Up
          </ButtonLink>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 flex flex-column items-center tc">
          <CourseTitle>Coming Soon: Backend GraphQL on Node.js</CourseTitle>
          <p>Implementing a GraphQL API for apps to consume.</p>
          <p className="f5">Follows on from the GraphQL Core syllabus</p>
        </div>
        <div className="col-xs-12 mt4 flex flex-column items-center tc">
          <ButtonLink
            href="mailto:info@graphql-training.com"
            title="Email us to register interest"
          >
            Register Interest
          </ButtonLink>
        </div>
      </div>
    </Section>

    <Section className="bg-fire-gradient">
      <div className="row">
        <div className="col-xs-12 col-md-4 mb3 mb0-l">
          <Reference name="Neil Sweeney" avatarUrl="/images/neil.jpg">
            Benjie can give a massively in-depth talk without making your brain
            melt. His speaking style makes the subject very approachable and
            gets you excited for what you are learning.
          </Reference>
        </div>
        <div className="col-xs-12 col-md-4 mb3 mb0-l">
          <Reference name="Lissi S." avatarUrl="/images/lissi.jpg">
            The workshop was presented with well thought out code samples - and
            even though I was on a (less than ideally set up) Windows machine,
            Benjie knew just how to sort out any problems that arose.
          </Reference>
        </div>
        <div className="col-xs-12 col-md-4">
          <Reference avatarUrl="/images/theo.jpg" name="Theo Vararu">
            Benjie taught me more about software development than anybody I’ve
            worked with before or since.
          </Reference>
        </div>
      </div>
    </Section>

    <section className="split-section tc-ns tl-l">
      <div className="split-left white">
        <div className="split-left-core pb6 pt4">
          <TitledParagraph title="On-site, Remote and Hosted Locations">
            Every organization’s need is different which is why we love to work
            with teams on site, customizing the syllabus to meet your needs.
            With a decade of experience in building products and consulting with
            small startups through to household name media companies, we
            understand how to help your developers achieve the very best…
            <br />
            <br />
            Need a remote or external location? We can do that too. We conduct
            bespoke online webinars and can host up to 20 developers at central
            locations in all major European cities.
            <br />
            <br />
            <a
              className="white b--hover no-underline-hover grow"
              href="mailto:info@graphql-training.com"
              title="Email GraphQL Training"
            >
              Contact us
            </a>{" "}
            for more details.
          </TitledParagraph>
        </div>
      </div>
      <div className="split-right white">
        <div className="split-right-core pb4 pt6">
          <svg
            className="split-divider events-none h-100 top-0 absolute"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M 100,0 100,100 0,100 z" />
          </svg>
          <TitledParagraph title="Teaching Style">
            We find that most people learn best by doing, so our courses have
            multiple cycles of listening to a short presentation and then
            performing a programming exercise using the techniques discussed.
            This gives the student opportunity to solidify their understanding,
            experiment and even to make mistakes and learn how to fix them.
            <br />
            <br />
            We operate a buddy system where each student is paired with another
            so they can help each other to solve any problems, and our teachers
            will be on-hand to help clarify any uncertainties and guide how to
            fix issues.
          </TitledParagraph>
        </div>
      </div>
    </section>

    <Section>
      <RowCenter>
        <h3 className="ttu tracked-light tc">
          GraphQL &ndash; The Future of Web APIS
        </h3>
        <div className="quote-wrapper">
          <blockquote className="f5 f4-ns f3-l tc">
            GraphQL... gives clients the power to ask for exactly what they need
            and nothing more, makes it easier to evolve APIs over time, and
            enables powerful developer tools.
          </blockquote>
        </div>
        <h4 className="ttu tracked-light tc">Lee Byron, Creator of GraphQL</h4>
      </RowCenter>
    </Section>

    <Section className="bg-off-grey">
      <div className="row">
        <div className="col-xs-12 col-sm-4">
          <h3>Contact</h3>
          <ul className="list pl0">
            <FooterItem href="https://www.twitter.com/benjie">
              @benjie
            </FooterItem>
            <FooterItem href="https://www.twitter.com/jofarnold">
              @jofarnold
            </FooterItem>
            <FooterItem href="mailto:info@graphql-training.com">
              info@graphql-training.com
            </FooterItem>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-4">
          <h3>Projects</h3>
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
  </div>
);

export default Index;
