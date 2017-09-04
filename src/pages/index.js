import React from "react";
import "../layouts/index.scss";
import "../layouts/flexgrid.scss";

const HomeHeader = () => (
  <div className="bg-off-grey">
    <div className="header br-curve-section flex justify-center flex-column bg-off-grey">
      <div className="container mw8 w-100">
        <div className="row justify-between">
          <div className="pt1vh pb1vh col-xs-7">
            <h1>GraphQL Training</h1>
            <h3>
              Training in London, Berlin, Paris
              <br />
              and beyond from the creator
              <br /> of PostGraphQL
            </h3>
          </div>

          <div className="col-xs-3 header-brain">Brain</div>
        </div>
      </div>
      <div className="header-spacer" />
    </div>
  </div>
);

const Index = () => (
  <div>
    <HomeHeader />
    <section className="bg-off-grey">
      <div className="container mw8 w-100">
        <div className="row">
          <div className="col-xs-12 tc flex flex-column items-center mt4 mb4">
            <h3>
              Nothing but awesome. You're getting some serious expertise here!
            </h3>
            <p>
              In the meantime why not check out our open source project{" "}
              <a href="https://graphile.org" title="Graphile">
                graphile.org
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
