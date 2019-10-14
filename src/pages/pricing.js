import React from "react";
import Helmet from "react-helmet";
import { PageHeaderDefault } from "../components/PageHeader";
import { Section, RowCenter } from "../components/LayoutHelpers";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { ButtonLinkSolid } from "../components/Button";

const PRICING = {
  "a half day": [
    "£3,000",
    "£3,000",
    "£3,000",
    "£3,000",
    "£3,000",
    "£3,000",
    "£3,000",
    "£3,000",
    "£3,180",
    "£3,450",
    "£3,600",
    "£3,750",
    "£3,900",
    "£4,050",
    "£4,200",
    "£4,350",
    "£4,500",
    "£4,650",
    "£4,800",
    "£4,950",
    "£5,100",
    "£5,250",
    "£5,400",
    "£5,550",
    "£5,700",
    "£5,850",
    "£6,000",
    "£6,150",
    "£6,300",
    "£6,450",
  ],
  "1 day": [
    "£4,000",
    "£4,000",
    "£4,000",
    "£4,000",
    "£4,000",
    "£4,000",
    "£4,400",
    "£4,850",
    "£5,300",
    "£5,750",
    "£6,000",
    "£6,250",
    "£6,500",
    "£6,750",
    "£7,000",
    "£7,250",
    "£7,500",
    "£7,750",
    "£8,000",
    "£8,250",
    "£8,500",
    "£8,750",
    "£9,000",
    "£9,250",
    "£9,500",
    "£9,750",
    "£10,000",
    "£10,250",
    "£10,500",
    "£10,750",
  ],
  "2 days": [
    "£5,000",
    "£5,000",
    "£5,000",
    "£5,265",
    "£6,300",
    "£7,110",
    "£7,920",
    "£8,730",
    "£9,540",
    "£10,350",
    "£10,800",
    "£11,250",
    "£11,700",
    "£12,150",
    "£12,600",
    "£13,050",
    "£13,500",
    "£13,950",
    "£14,400",
    "£14,850",
    "£15,300",
    "£15,750",
    "£16,200",
    "£16,650",
    "£17,100",
    "£17,550",
    "£18,000",
    "£18,450",
    "£18,900",
    "£19,350",
  ],
  "3 days": [
    "£9,000",
    "£9,000",
    "£9,000",
    "£9,000",
    "£9,000",
    "£10,073",
    "£11,220",
    "£12,368",
    "£13,515",
    "£14,663",
    "£15,300",
    "£15,938",
    "£16,575",
    "£17,213",
    "£17,850",
    "£18,488",
    "£19,125",
    "£19,763",
    "£20,400",
    "£21,038",
    "£21,675",
    "£22,313",
    "£22,950",
    "£23,588",
    "£24,225",
    "£24,863",
    "£25,500",
    "£26,138",
    "£26,775",
    "£27,413",
  ],
};

const Cost = ({ participants, duration }) => {
  const cost = PRICING[duration] ? PRICING[duration][participants - 1] : null;
  if (!cost) {
    return "Please get in touch";
  }
  return `${cost} + VAT`;
};

const KEYS = Object.keys(PRICING);

class Index extends React.Component {
  state = {
    duration: 2,
    participants: 5,
  };
  render() {
    const participantsString =
      this.state.participants <= 30 ? this.state.participants : "more than 30";
    const durationString = KEYS[this.state.duration];

    return (
      <Layout>
        <div>
          <Helmet
            title={`GraphQL Training for teams in London, Manchester, Berlin and Beyond`}
            meta={[
              {
                name: "description",
                content:
                  "GraphQL training for teams in London, Manchester and Berlin",
              },
              {
                name: "keywords",
                content:
                  "GraphQL, Schema, API, Graph, PostgreSQL, Postgres, PG, Nodejs, Node, Reactjs, React, Training, Teach, Learn, London, Berlin",
              },
            ]}
          />
          <PageHeaderDefault />
          <Section>
            <div className="row">
              <div className="col-xs-12">
                <RowCenter className="mb4">
                  <h3 className="divider-center">Price Estimate</h3>
                </RowCenter>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-6 col-md-offset-3">
                <p>
                  This price is a guide only, prices may vary depending on
                  location of training, level of customisation, urgency, number
                  of trainers required, and other factors.
                </p>
                <p>
                  Number of participants: {participantsString}
                  <br />
                  <Slider
                    min={3}
                    max={31}
                    value={this.state.participants}
                    onChange={participants => this.setState({ participants })}
                  />
                </p>
                <p>
                  Training duration: {durationString}
                  <br />
                  <Slider
                    dots
                    min={0}
                    max={KEYS.length - 1}
                    value={this.state.duration}
                    onChange={duration => this.setState({ duration })}
                  />
                </p>
                <p>
                  Estimated cost:{" "}
                  <Cost
                    participants={this.state.participants}
                    duration={KEYS[this.state.duration]}
                  />
                </p>
                <p className="tr">
                  <ButtonLinkSolid
                    className="w5-ns w-100 center"
                    href={`mailto:info@graphql-training.com?subject=${encodeURIComponent(
                      `Interested in ${durationString} of GraphQL training for around ${participantsString} participants`
                    )}`}
                    title="Learn more about GraphQL training for developers in London and Europe"
                  >
                    Email us
                  </ButtonLinkSolid>
                </p>
              </div>
            </div>
          </Section>
          <Footer />
        </div>
      </Layout>
    );
  }
}

export default Index;
