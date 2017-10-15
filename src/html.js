import React from "react";

const buildTimestamp = new Date().toISOString().replace(/:/g, "-");

const Html = ({ postBodyComponents, headComponents, body }) => (
  <html lang="en">
    <head>
      {headComponents}

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
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-106792928-1"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)};
              gtag('js', new Date());
              gtag('config', 'UA-106792928-1');
        `,
        }}
      />
      <script src="https://use.fontawesome.com/c72bfae6f9.js" />
    </head>
    <body className="sans-serif almost-black mvh-100 antialised f5">
      <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}
    </body>
  </html>
);

export default Html;
