// Iteration.js

import React from "react";

const Iteration = () => {
  const names = ["눈사람", "거울", "눈", "눈사람"];
  const nameList = names.map(name => <li>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default Iteration;
