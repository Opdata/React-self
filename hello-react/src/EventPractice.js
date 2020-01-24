//EventPractive.js

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

//EventPractive.js

import React, { Component } from "react";

class EventPractive extends Component {
  state = {
    othermessage: "",
    outmessage: ""
  };

  render() {
    return (
      <div>
        <h1>버튼 클릭시 텍스트 렌더링</h1>
        <input
          type="text"
          name="message"
          placeholder="작성 후 버튼 클릭"
          onChange={e => {
            this.setState({ othermessage: e.target.value });
            //value log
            //console.log(e.target.value);
          }}
        />
        <button
          onClick={() => {
            // alert(this.state.othermessage);
            this.setState({ outmessage: this.state.othermessage });
          }}
        >
          >확인
        </button>
        <h1>{this.state.outmessage}</h1>
      </div>
    );
  }
}

export default EventPractive;
