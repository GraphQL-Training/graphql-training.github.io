import React from "react";

const Section = ({ className, isAlt, children }) => (
  <section
    className={`${className || ""} ${isAlt ? "bg-near-white" : ""} pv4 pv5-l`}
  >
    <div className="container mw8 w-100">{children}</div>
  </section>
);

const RowCenter = ({ className, children }) => (
  <div className="row">
    <div className={`col-xs-12 flex flex-column items-center ${className}`}>
      {children}
    </div>
  </div>
);

export { Section, RowCenter };
