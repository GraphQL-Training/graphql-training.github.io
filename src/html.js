import React from "react";

const ANALYTICS_KEY = "";
const buildTimestamp = new Date().toISOString().replace(/:/g, "-");

const Html = ({ postBodyComponents, body }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0 maximum-scale=5.0"
      />
      <link
        rel="stylesheet"
        href={`/styles.css?t=${encodeURIComponent(buildTimestamp)}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${ANALYTICS_KEY}');`,
        }}
      />
      <script src="https://use.fontawesome.com/c72bfae6f9.js" />
    </head>
    <body>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${ANALYTICS_KEY}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}
    </body>
  </html>
);

export default Html;
