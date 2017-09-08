import React from "react";

const ButtonLink = ({ href, children }) => (
  <a
    className="b--white b--solid bw1 ph3 ph4-ns pv2 pv3-ns f5 f4-ns ttu white tracked-light dib fw6 no-underline-hover grow"
    href={href}
  >
    {children}
  </a>
);

const ButtonLinkSolid = ({ href, children }) => (
  <a
    href={href}
    className="b--white b--solid bw1 ph3 ph4-ns pv2 pv3-ns f5 f4-ns ttu fire tracked-light dib fw6 no-underline-hover grow shadow--l2 bg-white"
  >
    {children}
  </a>
);

export { ButtonLink, ButtonLinkSolid };
