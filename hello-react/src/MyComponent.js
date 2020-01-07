//MyComponent.js
import React from "react";

const MyComponent = props => {
  return <div> 안녕하세요. {props.name} 입니다. </div>;
};

MyComponent.defaultProps = {
  name: "기본 이름"
};

export default MyComponent;
