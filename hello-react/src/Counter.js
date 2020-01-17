// counter.js

import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    //state 초기값 설정
    this.state = {
      number: 0
    };
  }
  render() {
    const { number } = this.state; // state를 조회할때 this.state를 조회
    return (
      <div>
        <h1>{number}</h1>
        <button
          // onClick를 통해 호출할 함수 지정
          onClick={() => {
            //this.setState를 사용하여 값 넣는다.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
