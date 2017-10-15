import React from "react";
import Link from "gatsby-link";

const LinkType = ({ href, to, ...rest }) => {
  return to ? <Link to={to} {...rest} /> : <a href={href} {...rest} />;
};

export default LinkType;
