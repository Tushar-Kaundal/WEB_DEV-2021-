import React, { useEffect, useState } from "react";

const Content = () => {
  const [counter, stateCounter] = useState(0);
  const [content, setContent] = useState([]);
  function handleClick() {
    stateCounter(counter + 1);
  }

  const APICall = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    setContent(data);
  };

  useEffect(() => {
    APICall();
  }, []);

  //APICall();

  useEffect(() => {
    console.log("mounted");
  }, [counter]);

  return (
    <div className="container">
      <h1>{counter}</h1>
      <button onClick={handleClick}>Click Me</button>
      <ul>
        {content.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
