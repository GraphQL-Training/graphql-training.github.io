import React from "react";

const Section = ({ className, children }) => (
  <section className={`${className} pv4 pv5-l`}>
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
