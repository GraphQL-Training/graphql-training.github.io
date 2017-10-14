import React from "react";
import Helmet from "react-helmet";
import { ButtonLink, ButtonLinkSolid } from "../components/Button";
import { PageHeaderDefault } from "../components/PageHeader";
import { Section, RowCenter } from "../components/LayoutHelpers";
import Footer from "../components/Footer";
import {
  CourseTitle,
  TitledParagraph,
  HeaderLink,
  FrontendCourseDescription,
  FrontendCoursePoints,
  FullstackCoursePoints,
  FullstackCourseDescription,
} from "../components/PageElements";

const Reference = ({ children, avatarUrl, name }) => (
  <div className="flex justify-center h-100">
    <div className="shadow--l3 mb4 bg-white pa4 w-100 mw6 flex">
      <div className="w4 mr3 flex flex-column justify-start">
        <img className="w3 h3 mb3 br-100" src={avatarUrl} />
        <div className="near-black fw6 ">{name}</div>
      </div>
      <div className="quote-wrapper">
        <blockquote className="ma0">{children}</blockquote>
      </div>
    </div>
  </div>
);

const Bio = ({ name, avatarUrl, children, isRight }) => (
  <div className="shadow--l3 w-100 mb5 bg-white">
    <div className="flex justify-between">
      <div
        className="w5 cover bg-center order-1"
        style={{ backgroundImage: `url(/${avatarUrl})` }}
      />
      <div className={`${isRight ? "order-0" : "order-2"} pa4`}>
        <div className="fw6 f3 mb4">{name}</div>
        <p className="">{children}</p>
      </div>
    </div>
  </div>
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
    <PageHeaderDefault />
    <Section className="bg-almost-black white">
      <div className="row">
        <div className="col-xs-12 flex-column tc tl-l items-center items-start-l tc">
          <TitledParagraph
            className="flex flex-column items-center"
            title="The GraphQL Revolution"
          >
            GraphQL is a breakthrough in API design adopted by many of the
            world’s top companies (and many small ones too). The creator of the
            open standard, Facebook, has used it to serve 2 billion users and
            cite it as a key reason for their dominance in mobile.
          </TitledParagraph>
          <TitledParagraph className="flex flex-column items-center">
            By adopting GraphQL in your business you can innovate faster and
            deliver better web experiences leading to increase conversions,
            fewer lost sales due to bugs and higher search engine ratings.
          </TitledParagraph>
        </div>
      </div>
    </Section>

    <Section className="bg-light-gray" isAlt>
      <RowCenter>
        <h3 className="tc divider">20 years combined experience</h3>
        <br />
        <br />
        <Bio name="Benjie Gillam" avatarUrl="images/benjie-medium.jpg" isRight>
          Benjie has been writing applications, servers and APIs professionally
          for over a decade. As part of maintaining PostGraphQL, a popular OSS
          project that generates a GraphQL API from your existing PostgreSQL
          database schema, Benjie built the Graphile suite of tools for building
          scalable GraphQL schemas through plugins. He sees GraphQL as one of
          the biggest advancements in web API technology during his career.
        </Bio>
        <Bio name="Jof Arnold" avatarUrl="images/jof-medium.jpg" isRight>
          Jof started with JavaScript in 1998 with Microsoft’s release of
          Internet Explorer 3. Since then he has worked at the cutting edge of
          the frontend stack, being amongst the first in 2013 to introduce React
          to a large-scale production application. Jof brings a user-centric
          approach to frontend technologies. He is a regular speaker and
          contributor to the London tech scene in all matters frontend.
        </Bio>
      </RowCenter>
    </Section>

    <Section className="bg-people-dark-grey white">
      <div className="row pb3 mb4">
        <div className="col-xs-12 flex flex-column items-center">
          <h2 className="ttu tracked-light mb4">GraphQL Courses</h2>
        </div>
      </div>
      <RowCenter>
        <h3 className="mb5 divider">
          GraphQL For <br />React Developers
        </h3>
        <FrontendCourseDescription />
        <FrontendCoursePoints />
        <div className="pb5 mb4">
          <div className="row">
            <div className="col-xs-12 mt4 flex flex-row-ns flex-column justify-center tc">
              <ButtonLinkSolid
                className="w5-ns w-100 mh2-ns mv2"
                href="/graphql-training-frontend-course"
                title="Email us to sign up"
              >
                Learn More
              </ButtonLinkSolid>
              <ButtonLink
                className="w5-ns w-100 mh2-ns mv2"
                href="mailto:info@graphql-training.com"
                title="Email us to sign up"
              >
                Sign Up
              </ButtonLink>
            </div>
          </div>
        </div>
        <h3 className="mb5 divider">
          GraphQL for <br />Fullstack Developers & Teams
        </h3>
        <FullstackCourseDescription />
        <FullstackCoursePoints />
        <div className="pb5">
          <div className="row">
            <div className="col-xs-12 mt4 flex flex-row-ns flex-column justify-center tc">
              <ButtonLinkSolid
                className="w5-ns w-100 mh2-ns mv2"
                href="/graphql-training-frontend-course"
                title="Email us to sign up"
              >
                Learn More
              </ButtonLinkSolid>
              <ButtonLink
                className="w5-ns w-100 mh2-ns mv2"
                href="mailto:info@graphql-training.com"
                title="Email us to sign up"
              >
                Sign Up
              </ButtonLink>
            </div>
          </div>
        </div>
      </RowCenter>
    </Section>

    <Section isAlt>
      <div className="row">
        <div className="col-xs-12">
          <RowCenter className="mb4">
            <h3 className="divider">Quotes From Trainees</h3>
          </RowCenter>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6">
          <div>
            <Reference name="Neil Sweeney" avatarUrl="/images/neil.jpg">
              Benjie can give a massively in-depth talk without making your
              brain melt. His speaking style makes the subject very approachable
              and gets you excited for what you are learning.
            </Reference>
          </div>
          <div style={{ marginTop: "3rem" }}>
            <Reference avatarUrl="/images/theo.jpg" name="Theo Vararu">
              Benjie taught me more about software development than anybody I’ve
              worked with before or since.
            </Reference>
          </div>
        </div>
        <div className="col-xs-6">
          <div style={{ marginTop: "8rem" }}>
            <Reference name="Lissi S." avatarUrl="/images/lissi.jpg">
              The workshop was presented with well thought out code samples -
              and even though I was on a (less than ideally set up) Windows
              machine, Benjie knew just how to sort out any problems that arose.
            </Reference>
          </div>
        </div>
      </div>
    </Section>

    <Section className="">
      <RowCenter>
        <div>
          <h3 className="divider mb5">On-site, Off-site or Remote</h3>
          <p>
            Every organization’s need is different which is why we love to work
            with teams on site, customizing the syllabus to meet your needs.
            With a decade of experience in building products and consulting with
            small startups through to household name media companies, we
            understand how to help your developers achieve the very best…
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
            We find that most people learn best by doing, so our courses have
            multiple cycles of listening to a short presentation and then
            performing a programming exercise using the techniques discussed.
            This gives the student opportunity to solidify their understanding,
            experiment and even to make mistakes and learn how to fix them.
          </p>
          <p>
            We operate a buddy system where each student is paired with another
            so they can help each other to solve any problems, and our teachers
            will be on-hand to help clarify any uncertainties and guide how to
            fix issues.
          </p>
        </div>
      </RowCenter>
    </Section>

    <Section isAlt>
      <RowCenter>
        <h3 className="ttu tracked-light tc mb5 divider">
          GraphQL &ndash; The Future of Web APIS
        </h3>
        <div className="bg-white shadow--l3 flex items-stretch mb4">
          <div
            className="w5 cover bg-center"
            style={{ backgroundImage: "url(/images/lee-byron-large.jpeg" }}
          />
          <div className="quote-wrapper pa4">
            <blockquote className="pa0 ml0 mr0 mt0 mb4">
              GraphQL... gives clients the power to ask for exactly what they
              need and nothing more, makes it easier to evolve APIs over time,
              and enables powerful developer tools.
            </blockquote>
            <div className="near-black fw6">
              <div className="mb1">Lee Byron</div>
              Creator of GraphQL
            </div>
          </div>
        </div>
      </RowCenter>
    </Section>

    <Footer />
  </div>
);

export default Index;
