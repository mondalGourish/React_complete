import React from 'react'

const App = () => {

  const formSubmit = (e)=>{
    e.preventDefault()
    console.log("form submit")
  }
  return (
    <div>
      <form onSubmit={(e)=>{ 
        formSubmit(e)
      }} >
        <input placeholder='Enter name' type='text'></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
