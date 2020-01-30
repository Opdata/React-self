// Iteration.js

import React, { useState } from "react";

const Iteration = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" }
  ]);
  const [inputText, setInpuText] = useState("");
  const [nextId, setNextId] = useState(5); // 새로운 항목 추가시 사용할 id

  const namesList = names.map(name => <li key={name.id}>{name.text}</li>);
  return <ul>{namesList}</ul>;
};

export default Iteration;
