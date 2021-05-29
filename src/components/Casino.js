import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Casino = (props) => {
  return (
    <div>
      <Header values={props.state} setter={props.setState} />
      <Content
        setter={(updatedAmount) =>
          props.setState({
            ...props.state,
            amount: props.state.amount + updatedAmount,
          })
        }
      />
      <Footer />
    </div>
  );
};

export default Casino;
