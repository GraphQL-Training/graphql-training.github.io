import React from "react";

export default ({ children }) => (
  <div>
    <header>
      <nav />
    </header>
    <section>{children()}</section>
  </div>
);
