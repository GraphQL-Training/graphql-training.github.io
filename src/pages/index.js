import React from "react";
import Helmet from "react-helmet";
import { ButtonLink, ButtonLinkSolid } from "../components/Button";
import { PageHeaderDefault } from "../components/PageHeader";
import { Section, RowCenter } from "../components/LayoutHelpers";
import Footer from "../components/Footer";
import {
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
  Reference,
  TitledParagraph,
} from "../components/PageElements";

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
        <div className="col-xs-12">
          <div className="flex flex-column items-center">
            <h3 className="divider-center">The GraphQL Revolution</h3>
            <p>
              GraphQL is a breakthrough in API design adopted by many of the
              world’s top companies (and many small ones too). The creator of
              the open standard, Facebook, has used it to serve 2 billion users
              and cite it as a key reason for their dominance in mobile.
            </p>
            <p className="">
              By adopting GraphQL in your business you can innovate faster and
              deliver better web experiences leading to increase conversions,
              fewer lost sales due to bugs and higher search engine ratings.
            </p>
          </div>
        </div>
      </div>
    </Section>

    <BioSection />
    <section className="bg-almost-black pv6-l pv5">
      <div className="container mw8">
        <CourseTitleRow>
          GraphQL For <br />React Developers
        </CourseTitleRow>
        <CourseDescriptionRow
          left={
            <div className="h-100 flex flex-column">
              <div className="mb3">
                <FrontendCourseDescription />
              </div>
            </div>
          }
          right={<FrontendCoursePoints />}
        />
        <div className="row bg-white mb4">
          <div className="col-xs-12 flex flex-column items-center">
            <ButtonLinkSolid
              className="w5-ns w-100 mh2-ns mb6-l mb5"
              to="/graphql-training-frontend-course"
              title="Learn more about GraphQL training for frontend developers in London"
            >
              Learn More
            </ButtonLinkSolid>
          </div>
        </div>
        <CourseTitleRow>
          GraphQL for <br />Fullstack Developers & Teams
        </CourseTitleRow>
        <CourseDescriptionRow
          left={
            <div className="h-100 flex flex-column">
              <div className="mb5">
                <FullstackCourseDescription />
              </div>
            </div>
          }
          right={<FullstackCoursePoints />}
        />
        <div className="row bg-white">
          <div className="col-xs-12 flex flex-column items-center">
            <ButtonLinkSolid
              className="w5-ns w-100 mh2-ns mb6-l mb5"
              to="/graphql-training-fullstack-course"
              title="Learn more about GraphQL training for full stack developers and teams in London"
            >
              Learn More
            </ButtonLinkSolid>
          </div>
        </div>
      </div>
    </section>

    <Section isAlt>
      <div className="row">
        <div className="col-xs-12">
          <RowCenter className="mb4">
            <h3 className="divider-center">What They Are Saying</h3>
          </RowCenter>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <div>
            <Reference
              name={
                <div>
                  Neil<br />Sweeney
                </div>
              }
              avatarUrl="/images/neil.jpg"
            >
              Benjie can give a massively in-depth talk without making your
              brain melt. His speaking style makes the subject very approachable
              and gets you excited for what you are learning.
            </Reference>
          </div>
          <div className="mt3">
            <Reference
              avatarUrl="/images/theo.jpg"
              name={
                <div>
                  Theo<br />Vararu
                </div>
              }
            >
              Benjie taught me more about software development than anybody I’ve
              worked with before or since.
            </Reference>
          </div>
        </div>
        <div className="col-xs-12 col-md-6">
          <div className="mt3 mt65-l">
            <Reference name="Lissi S." avatarUrl="/images/lissi.jpg">
              The workshop was presented with well thought out code samples -
              and even though I was on a (less than ideally set up) Windows
              machine, Benjie knew just how to sort out any problems that arose.
            </Reference>
          </div>
        </div>
      </div>
    </Section>

    <ApproachSection />
    <Section isAlt>
      <RowCenter>
        <h3 className="mb5 divider-center">
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
            <div className="near-black fw6 mb2">
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
