//EventPractive.js

import React, { Component } from "react";

class EventPractive extends Component {
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          onChange={e => {
            console.log(e);
            //value log
            //console.log(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default EventPractive;
