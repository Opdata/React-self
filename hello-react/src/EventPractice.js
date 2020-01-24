//버튼 클릭시 렌더링 잘못된 예제

// import React, { Component } from "react";

// class EventPractive extends Component {
//   state = {
//     message: "",
//     othermessage: "",
//     outmessage: ""
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 발생시 텍스트 렌더링</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력"
//           onChange={e => {
//             this.setState({ message: e.target.value });
//             //value log
//             //console.log(e.target.value);
//           }}
//         />
//         <h1>{this.state.message}</h1>

//         <h1>버튼 클릭시 텍스트 렌더링</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="작성 후 버튼 클릭"
//           onChange={e => {
//             this.setState({ othermessage: e.target.value });
//             //value log
//             //console.log(e.target.value);
//           }}
//         />
//         <button
//           onClick={() => {
//             // alert(this.state.othermessage);
//             this.setState({ outmessage: this.state.othermessage });
//           }}
//         >
//           >확인
//         </button>
//         <h1>{this.state.outmessage}</h1>
//       </div>
//     );
//   }
// }

//버튼 클릭시 텍스트 렌더링 성공 예제

// import React, { Component } from "react";

// class EventPractive extends Component {
//   state = {
//     othermessage: "",
//     outmessage: ""
//   };

//   render() {
//     return (
//       <div>
//         <h1>버튼 클릭시 텍스트 렌더링</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="작성 후 버튼 클릭"
//           onChange={e => {
//             this.setState({ othermessage: e.target.value });
//             //value log
//             //console.log(e.target.value);
//           }}
//         />
//         <button
//           onClick={() => {
//             // alert(this.state.othermessage);
//             this.setState({ outmessage: this.state.othermessage });
//           }}
//         >
//           >확인
//         </button>
//         <h1>{this.state.outmessage}</h1>
//       </div>
//     );
//   }
// }

//버튼 클릭 텍스트 렌더링 예제 가독성 높히기

import React, { Component } from "react";

class EventPractive extends Component {
  state = {
    othermessage: "",
    outmessage: ""
  };

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({
      othermessage: e.target.value
    });
  }

  onClick() {
    this.setState({
      outmessage: this.state.othermessage
    });
  }
  render() {
    return (
      <div>
        <h1>버튼 클릭시 텍스트 렌더링</h1>
        <input
          type="text"
          name="message"
          placeholder="작성 후 버튼 클릭"
          onChange={this.onChange}
        />
        <button onClick={this.onClick}>>확인</button>
        <h1>{this.state.outmessage}</h1>
      </div>
    );
  }
}

export default EventPractive;
