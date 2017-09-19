import React from "react";

const ButtonLink = ({ href, children, title }) => (
  <a
    className="b--white b--solid bw1 ph3 ph4-ns pv2 pv3-ns f5 f4-ns ttu white tracked-light dib fw6 no-underline-hover grow"
    href={href}
    title={title || "Link"}
  >
    {children}
  </a>
);

const ButtonLinkSolid = ({ href, children, title }) => (
  <a
    href={href}
    className="b--white b--solid bw1 ph3 ph4-ns pv2 pv3-ns f5 f4-ns ttu fire tracked-light dib fw6 no-underline-hover grow shadow--l2 bg-white"
    title={title || "Link"}
  >
    {children}
  </a>
);

export { ButtonLink, ButtonLinkSolid };
