import Header from "../Header";
import Navigation from "../Navigation";
import React from "react";

import "../../App.css";

export default props => {
  return (
    <div className="App">
      <Header title="AZZIP" />
      <Navigation />
      <section id="container">{props.children}</section>
    </div>
  );
};
