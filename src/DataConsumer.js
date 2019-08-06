import React from "react";

export default function DataConsumer(props) {
  const incrementBy10 = () => {
    props.increment(10);
  };

  return (
    <>
      <h1>{props.count}</h1>
      <button onClick={incrementBy10}>+</button>
    </>
  );
}
