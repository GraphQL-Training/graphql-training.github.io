import React from "react";

const Html = ({ postBodyComponents, body }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
    </head>
    <body>
      <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}
    </body>
  </html>
);

export default Html;
