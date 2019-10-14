import React from "react";

const HomeHeader = () => (
  <div className="bg-off-gray tl-l tc">
    <div className="white flex justify-center flex-column bg-brains-gradient">
      <div className="container mw8 w-100">
        <div className="row">
          <div className="pv5 pv6-l col-xs-12">
            <div className="mb4">
              <h1>GraphQL Training</h1>
            </div>
            <div className="mb4 flex justify-center justify-start-l">
              <h3>
                Training for teams in London, Amsterdam, Berlin
                <br />
                and beyond from one of the
                <br /> maintainers of GraphiQL.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomeHeader;
