import React, { useState } from "react";

const App = () => {

  // ""(empty string inside input) -> typing -> calls onChange -> calls setTitle -> changes in title -> display in input

  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault(e)
    console.log("Form submitted by ", title);
    setTitle("")
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Enter your name" 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
        <button>Click</button>
      </form>
    </div>
  );
};

export default App;
