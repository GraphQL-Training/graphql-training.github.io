import React from "react";

const CourseTitle = ({ children }) => (
  <h3 className="ttu tracked-light">{children}</h3>
);

const TitledParagraph = ({ title, children, className }) => (
  <div className={`${className || ""}`}>
    {title && <h3 className="ttu tracked-light">{title}</h3>}
    <p className="f5 f4-ns">{children}</p>
  </div>
);

const HeaderLink = ({ faName, children, href, title, pushRight }) => (
  <li className={`${pushRight ? "ml-auto" : "ml4"} `}>
    <a
      href={href}
      title={title}
      className="flex items-center no-underline-hover"
    >
      {!!faName && <span className={`fa fa-${faName} f3 mr2 white`} />}
      <span className="white">{children}</span>
    </a>
  </li>
);

export { CourseTitle, TitledParagraph, HeaderLink };
