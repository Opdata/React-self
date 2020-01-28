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

import React, { Component } from "react";
// import EventPractice from "./EventPractice";
// import RefSample from "./RefSample";
// import ValidationSample from "./ValidationSample";
import Scroll from "./Scroll";

class App extends Component {
  render() {
    return (
      <div>
        <Scroll ref={ref => (this.scroll = ref)} />
        <button onClick={() => this.scroll.scrollBottom()}>맨 밑으로</button>
      </div>
    );
  }
}

export default App;
