import React from "react";

const PageHeader = ({ nav }) => (
  <div className="bg-off-grey relative">
    <div className="white flex justify-center flex-column bg-blue-gradient">
      <div className="container mw8 w-100">
        <div className="row">
          <header className="ttu tracked f7 w-100">
            <div className="col-xs-12">
              <nav className="ph3 pv3">{nav}</nav>
            </div>
          </header>
        </div>
        <div className="row">
          <div className="pv4 pv5-l col-xs-12 tc">
            <div className="mb2">
              <h1 className="ttu tracked-light">GraphQL Training</h1>
            </div>
            <div className="mb4 mb5-l flex justify-center">
              <h3>
                Here’s lots of training opportunities. And things and stuff and
                things
                <br />
                and you know what. It’s pretty great.
              </h3>
            </div>
            <div className="tools-logos-container flex flex-wrap justify-center w-100 pa3">
              {["graphql", "apollo", "node", "react"].map(f => (
                <img
                  className="header-tools-logo mh3 mv2 h1-ns"
                  key={f}
                  src={`/images/${f}-logo.png`}
                  title={`${f} logo`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg
      className="down-divider absolute events-none bottom-0 w-100 l-0"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path d="M 0,0 50,100 100,0 100,100 0,100 z" />
    </svg>
  </div>
);

export default PageHeader;
