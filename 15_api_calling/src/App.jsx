import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const[data, setData] = useState([])

  //we are using async await because it returns a promise(which takes time and have three stages pending/fulfilled/rejected)

  //fetch method of api
  // const  getData = async()=>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   const data = await response.json() //using wait as this response is also async
  //   console.log(data)
  // }

  //axios method of api
  const getData = async ()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data)
    setData(response.data)
  }


  return (
    <div>
      app
      <button onClick={getData}>get data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3 key={idx}>{elem.name}, {idx+1}</h3>
        })}
      </div>
    </div>
  )
}

export default App
