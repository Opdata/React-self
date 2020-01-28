import React, { Component } from "react";

class Scroll extends Component {
  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      positon: "relative"
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, blacK)"
    };

    return (
      <div style={style}>
        {" "}
        <div style={innerStyle} />
      </div>
    );
  }
}

export default Scroll;
