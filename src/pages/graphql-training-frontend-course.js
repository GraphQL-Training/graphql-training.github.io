import React from "react";
import Helmet from "react-helmet";
import { ButtonLinkSolid } from "../components/Button";
import { PageHeaderPage } from "../components/PageHeader";
import { Section, RowCenter } from "../components/LayoutHelpers";
import Footer from "../components/Footer";
import {
  ApproachSection,
  BioSection,
  SplitColumn,
} from "../components/PageElements";
import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    <div>
      <Helmet
        title={`GraphQL Training in London, Manchester, Berlin and Beyond`}
        meta={[
          {
            name: "description",
            content:
              "GraphQL training for Frontend developers in London, Manchester, Berlin and Europe",
          },
          {
            name: "keywords",
            content:
              "GraphQL, Schema, API, Apollo, Frontend, Graph, PostgreSQL, Postgres, PG, Nodejs, Node, Reactjs, React, Training, Teach, Learn, London, Berlin",
          },
        ]}
      />
      <PageHeaderPage
        title={
          <div>
            GraphQL Training For
            <br />
            Frontend Engineers
          </div>
        }
      />
      <Section className="bg-almost-black white">
        <div className="row">
          <div className="col-xs-12">
            <div className="flex flex-column items-center">
              <h3 className="divider-center">
                2 Day GraphQL course for
                <br />
                frontend engineers
              </h3>
              <p>
                GraphQL is a revolutionary API technology combining intuitively
                structured data with a strong type system and powerful tooling,
                enabling engineers to quickly produce reliable and performant
                applications.{" "}
              </p>
              <p className="">
                This 2 day course gives React developers the experience and
                intuitions to create GraphQL applications rapidly and on the
                right footing. Starting with learning the core concepts and how
                to use queries, mutations and fragments, the course progresses
                to building advanced skills in areas such as authentication,
                caching, optimistic updates and debugging.
              </p>
              <h3 className="divider-center mt5">Target Audience</h3>
              <ul>
                <li>
                  React developers and teams looking to take advantage of the
                  benefits of GraphQL right away.
                </li>
                <li>
                  Developers who’ve recently started with GraphQL and are
                  looking to build a more solid understanding.
                </li>
                <li>
                  Developers looking to expand their skills in order to chase a
                  new job, pay rise or consultancy opportunities.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-almost-black pb0 pt0">
        <div className="container mw8">
          <RowCenter className="bg-white">
            <h3 className="divider-center mb5 mb6-l mt5">Syllabus</h3>
          </RowCenter>
          <div className="row bg-white">
            <SplitColumn>
              <h4 className="">
                Day 1: GraphQL Core <div className="db-l dn hidden">/</div>
              </h4>
              <ul>
                <li>
                  GraphQL fundamentals (including: why use GraphQL versus
                  REST?).
                </li>
                <li>
                  Introduction to GraphQL terminology and understanding GraphQL
                  schemas.
                </li>
                <li>Methods of exploring a GraphQL schema.</li>
                <li>Performing simple queries and mutations using GraphiQL.</li>
                <li>Performing queries/mutations using HTTP.</li>
                <li>
                  Specifying component data requirements locally through
                  fragments.
                </li>
                <li>
                  Introduction to GraphQL object stores/caches, normalisation.
                </li>
                <li>Considerations for API maintenance, deprecations.</li>
              </ul>
            </SplitColumn>
            <SplitColumn>
              <h4 className="">
                Day 2: Building with <br /> GraphQL and Apollo/Relay
              </h4>
              <ul>
                <li>
                  Apollo Basics: adding Apollo GraphQL client to a React app.
                </li>
                <li>
                  Authenticating GraphQL requests: including JWTs and
                  sessions/cookies.
                </li>
                <li>Advanced Apollo: exploring Apollo options and HOCs.</li>
                <li>
                  Simplification: removing unnecessary state from your app.
                </li>
                <li>
                  Debugging: using the DevTools for an improved debugging
                  experience.
                </li>
                <li>
                  Advanced mutations: telling the Apollo object store what to do
                  when it’s not obvious.
                </li>
                <li>Optimistic updates: slick interface for users.</li>
                <li>
                  Where to next: a brief overview of related technologies.
                </li>
              </ul>{" "}
            </SplitColumn>
          </div>
          <div className="row bg-white">
            <div className="col-xs-12 flex flex-column items-center">
              <ButtonLinkSolid
                className="w5-ns w-100 mh2-ns mb6-l mb5 mt0 mt4-l"
                href="mailto:info@graphql-training"
                title="Email GraphQL Training"
              >
                Sign Up
              </ButtonLinkSolid>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-almost-black white">
        <div className="row">
          <div className="col-xs-12">
            <div className="flex flex-column items-center">
              <h3 className="divider-center">Audience Requirements</h3>
              <p>
                All attendees must bring a laptop with git, the latest version
                of Google Chrome, the React Developer Tools Chrome extension,
                and Node v8.6 or higher with the associated npm installed.{" "}
              </p>
              <p className="">
                The course material assumes a working knowledge of ES2017,
                including concepts such as destructuring assignment,
                `async`/`await` and promises. A good understanding of React -
                particularly concepts like state management, lifecycle methods
                and higher order components - is advised. We’re happy to send
                primers for those not yet comfortable with these technologies.{" "}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <BioSection />
      <ApproachSection />
      <Footer />
    </div>
  </Layout>
);

export default Index;
