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
              "GraphQL training for full stack developers and teams in London, Manchester, Berlin and Europe",
          },
          {
            name: "keywords",
            content:
              "GraphQL, Schema, API, Full Stack, Nodejs, Node, Training, Teach, Learn, London, Berlin",
          },
        ]}
      />
      <PageHeaderPage
        title={
          <div>
            GraphQL for Fullstack
            <br /> Developers & Teams
          </div>
        }
      />
      <Section className="bg-almost-black white">
        <div className="row">
          <div className="col-xs-12">
            <div className="flex flex-column items-center">
              <h3 className="divider-center">
                2 Day GraphQL course <br /> for full stack <br /> developers &
                teams
              </h3>
              <p>
                GraphQL is a revolutionary API technology combining intuitively
                structured data with a strong type system and powerful tooling,
                enabling engineers to quickly produce reliable and performant
                applications.
              </p>

              <p>
                This advanced 2 day course gives full stack engineers and
                cross-discipline teams the experience and intuitions to create
                high performance GraphQL applications/APIs rapidly and on the
                right footing.
              </p>
              <p>
                Starting with learning the core concepts and how to use queries,
                mutations and fragments, the course progresses to building
                skills in areas such as schema design, authentication and API
                performance.
              </p>
              <h3 className="divider-center mt5">Target Audience</h3>
              <ul>
                <li>
                  Project leaders, backend and full-stack engineers evaluating
                  GraphQL for upcoming projects.
                </li>
                <li>
                  Frontend engineers who wish to understand backend concerns
                  related to implementing GraphQL servers.{" "}
                </li>
                <li>
                  Teams looking to solidify their understanding and approach to
                  GraphQL development.{" "}
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
              <h4 className="">Day 1</h4>
              <h5>What is GraphQL?</h5>
              <ul>
                <li>Thinking with Graphs.</li>
                <li>Fetching only the data you need.</li>
                <li>Fetching everything you need in one network request.</li>
              </ul>
              <h5>Why GraphQL?</h5>
              <ul>
                <li>Why did Facebook invent GraphQL?</li>
                <li>Are the problems it solves unique to Facebook?</li>
                <li>
                  How does it solve issues like developer onboarding, scaling
                  teams, API performance, maintainability, and preventing bugs
                  and regressions?
                </li>
              </ul>
              <h5>GraphQL Fundamentals</h5>
              <ul>
                <li>GraphQL terminology.</li>
                <li>Anatomy of a query/mutation.</li>
                <li>Composing GraphQL documents with fragments.</li>
                <li>Querying a local GraphQL schema.</li>
                <li>Exposing a GraphQL schema over HTTP.</li>
              </ul>
            </SplitColumn>
            <SplitColumn>
              <h4 className="">Day 2</h4>
              <h5>Designing a GraphQL Schema</h5>
              <ul>
                <li>Fundamentals.</li>
                <li>
                  How backend and frontend developers can iterate in harmony.
                </li>
                <li>Getting started quickly with a mocked schema.</li>
                <li>Where does the business logic live?</li>
                <li>How to handle common requirements.</li>
              </ul>
              <h5>Consuming GraphQL</h5>
              <ul>
                <li>
                  Client-side caches, synchronisation, global identifiers.
                </li>
                <li>
                  Why do the various client-side tools exist and which should I
                  choose?
                </li>
                <li>Authentication and authorization.</li>
                <li>Ways to test a GraphQL schema.</li>
              </ul>
              <h5>Advanced GraphQL</h5>
              <ul>
                <li>
                  Introduction to real-time application development via
                  subscriptions.
                </li>
                <li>Reducing network requests via query batching.</li>
                <li>Whitelisting requests via persisted queries.</li>
                <li>Database performance (including DataLoaders).</li>
              </ul>
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
                All attendees must bring a laptop with the latest version of
                Google Chrome installed. The learnings are transferrable between
                different languages but from time to time we'll be performing
                examples with the GraphQL reference implementation so a good
                understanding of modern JavaScript (ES2017) will be very
                helpful. If you prefer another environment, you should come to
                Day 2 with your favourite stack and GraphQL libraries
                pre-installed. Those attendees wishing to follow along with the
                JS code examples should have Node.js v8.6 or higher with the
                accompanying npm installed.{" "}
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
