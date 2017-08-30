import React from "react";

export default ({ children }) => (
  <div>
    <header>
      <nav>Nav</nav>
    </header>
    <section>{children()}</section>
  </div>
);
