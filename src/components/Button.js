import React from "react";

const defaultClasses =
  "b--white b--solid bw1 ph3 ph3-ns pv2 flex items-center justify-center pv2-ns f5 f4-ns ttu white tracked-light dib fw6 no-underline-hover grow";
const ButtonLink = ({ className, href, children, title }) => (
  <a
    className={`${className || ""} ${defaultClasses} `}
    href={href}
    title={title || "Link"}
  >
    {children}
  </a>
);

const ButtonLinkSolid = ({ className, href, children, title }) => (
  <a
    href={href}
    className={`${className || ""} ${defaultClasses} fire shadow--l2 bg-white`}
    title={title || "Link"}
  >
    {children}
  </a>
);

export { ButtonLink, ButtonLinkSolid };
