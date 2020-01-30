// Iteration.js

import React from "react";

const Iteration = () => {
  const names = ["눈사람", "얼음", "눈", "눈사람"];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default Iteration;
