// App.js

// import React, { Component } from "react";
// import Counter from "./Counter";

// class App extends Component {
//   render() {
//     return <Counter />;
//   }
// }

// export default App;

// import React from "react";
// import Say from "./Say";

// const App = () => {
//   return <Say />;
// };

// export default App;

// import React, { Component } from "react";
// // import EventPractice from "./EventPractice";
// // import RefSample from "./RefSample";
// // import ValidationSample from "./ValidationSample";
// import Scroll from "./Scroll";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Scroll ref={ref => (this.scroll = ref)} />
//         <button onClick={() => this.scroll.scrollBottom()}>맨 밑으로</button>
//       </div>
//     );
//   }
// }

// import React from "react";
// import Iteration from "./Iteration";

// const App = () => {
//   return <Iteration />;
// };

import React, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component {
  state = {
    color: "#000000"
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}> 랜덤 색상 </button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}
export default App;
