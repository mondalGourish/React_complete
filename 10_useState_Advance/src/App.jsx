import React, { useState } from "react";

const App = () => {
  // const [num,setNum] = useState(0)

  // const [obj, setObj] = useState({user:"gourish", age:23})

  // const [arr, setArr] = useState([10,22,30,42])

  const [num, setNum] = useState(10);

  // const changeNum = ()=>{
  //   console.log(num)//first iteration prints 0
  //   setNum(30)//the ui got changed but the console remained one commit back
  //   console.log(num)//first iteration prints 0
  // }

  // const changeObj = ()=>{
  //   console.log(obj)
  //   const newObj = {...obj}//destructuring the object into new one
  //   newObj.user = "Mondal"//setting value
  //   newObj.age = 22//setting value
  //   console.log(newObj)
  //   setObj(newObj)//assigning new change to it
  // }

  // const changeArr =()=>{
  //   console.log(arr)
  //   // const newArr = arr.map((arr)=>{
  //   //   return arr*10
  //   // })
  //   // setArr(newArr)
  //   // setArr(newArr)
  //   // console.log(newArr)

  //   const newArr = [...arr]
  //   newArr.push(500)
  //   setArr(newArr)
  //   console.log(newArr)
  // }

  //Batch update **
  const changeVal = () => {
    //in this it doesnt matter how many times we call setNum it will get updated by 1
    // setNum(num + 1);
    // setNum(num + 1);
    // setNum(num + 1);

    //that why we use batch update
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };

  return (
    <div>
      {/* <h1>Count = {num}</h1>
      <button onClick={changeNum}>CLick</button> */}

      {/* <h1>{obj.user},{obj.age}</h1>
      <button onClick={changeObj}>CLick</button> */}

      {/* <h1>{arr.map((arr)=>(
        <span key={arr}> {arr} </span>
      ))}</h1>
      <button onClick={changeArr}>CLick</button> */}

      <h1>{num}</h1>
      <button onClick={changeVal}>CLick</button>
    </div>
  );
};

export default App;
