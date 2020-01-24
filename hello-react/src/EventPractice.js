//EventPractive.js

import React, { Component } from "react";

class EventPractive extends Component {
  state = {
    message: ""
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          onChange={e => {
            this.setState({ message: e.target.value });
            //value log
            //console.log(e.target.value);
          }}
        />
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default EventPractive;
