// counter.js

import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    //state 초기값 설정
    this.state = {
      number: 0,
      fiexdNumber: 0
    };
  }

  render() {
    const { number, fiexdNumber } = this.state; // state를 조회할때 this.state를 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fiexdNumber}</h2>
        <button
          onClick={() => {
            this.setState(prevState => {
              return {
                number: prevState.number + 1
              };
            });
            //위와 아래는 같은 기능을 한다.
            //아래 코드는 함수에서 바로 객체로 반환한다는 의미이다.
            this.setState(prevState => ({
              number: prevState.number + 1
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
