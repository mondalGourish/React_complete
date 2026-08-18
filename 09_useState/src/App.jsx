import React from "react";
import { use } from "react";
import { useSyncExternalStore } from "react";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  // const [num, setNum] = useState(20);
  // const [username, setUsername] = useState("Gourish")

  // function changeVal() {
  //   setNum(30);
  //   setUsername("Mondal")

  function increaseNum() {
    setNum(num + 1);
  }
  function decreaseNum() {
    setNum(num - 1);
  }
  function increaseNum5() {
    setNum(num + 5);
  }
  function decreaseNum5() {
    setNum(num - 5);
  }
  // }
  return (
    <div>
      {/* <h1>The value of num is {num} <br/> and user is {username}</h1>
      <button onClick={changeVal}>Click</button> */}
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <br></br>
      <button onClick={increaseNum5}>Increase by 5</button>
      <button onClick={decreaseNum5}>Decrease by 5</button>

    </div>
  );
};

export default App;
