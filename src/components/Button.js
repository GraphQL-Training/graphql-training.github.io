import React from "react";
import LinkType from "./LinkType";

const defaultClasses =
  "b--solid bw1 ph3 pointer ph3-ns pv2 flex items-center justify-center pv2-ns f5 f4-ns white tracked-light dib fw6 no-underline-hover grow";

const ButtonLink = ({ className, href, to, children, title }) => (
  <LinkType
    className={`${className || ""} b--white ${defaultClasses} `}
    href={href}
    title={title || "Link"}
  >
    {children}
  </LinkType>
);

const ButtonLinkSolid = ({ className, href, to, children, title }) => (
  <LinkType
    href={href}
    className={`${className ||
      ""} ${defaultClasses} white shadow--l1 bg-blue b--blue`}
    title={title || "Link"}
  >
    {children}
  </LinkType>
);

export { ButtonLink, ButtonLinkSolid };
