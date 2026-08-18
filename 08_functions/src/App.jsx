import React from "react";

const App = () => {
  function btnClick() {
    console.log("btn clicked");
  }
  const btnDoubleClick = () => {
    console.log("btn double clicked");
  };
  // function for on change, we can call the function here as it will get executed
  const inpChange=(val)=>{
    console.log(val)
  }
  return (
    <div>
      <button onClick={btnClick}>Single</button>
      <button onDoubleClick={btnDoubleClick}>Double</button>
      <br></br>
      <br></br>

      {/* input filed in react */}
      <input onChange={function(elem){
        inpChange(elem.target.value)
      }} type="text" placeholder="Enter your name"/>

      <br></br>

      <div className="box" onMouseEnter={function(elem){
        console.log(elem)
      }}></div>
    </div>
  );
};

export default App;
