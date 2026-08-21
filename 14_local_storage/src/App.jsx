import React from 'react'

const App = () => {

  // localStorage.clear()
  // sessionStorage.clear()

  //vales are stored in the form of string

  // localStorage.setItem("name","gourish")
  // const name =localStorage.getItem("name")
  // console.log(name)
  // localStorage.setItem("age","18")
  // const age =localStorage.getItem("age")
  // console.log(age)

  // localStorage.removeItem("age")

  // const user = {
  //   name : "gourish",
  //   age: 18,
  //   city: "chandannagar"
  // }

  // localStorage.setItem("user", user) //stored in [object Object] form 
  // localStorage.removeItem("user")
  
  // localStorage.setItem("user", JSON.stringify(user)) //stores in string format
  // console.log(user)

  // const user = localStorage.getItem("user")
  // console.log(user) //we get in string from

  const user = JSON.parse(localStorage.getItem("user"))
  console.log(user) //gets in the object form

  return (
    <div>
      app
    </div>
  )
}

export default App
