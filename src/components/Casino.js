import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Casino = (props) => {
  return (
    <div>
      <Header values={props.state} setter={props.setState} />
      <Content setter={props.setState} />
      <Footer />
    </div>
  );
};

export default Casino;
