import React from 'react'

const Navbar = (props) => {
    console.log(props.theme)
    function changeTheme(){
        props.setTheme('Dark')
    }
  return (
    <div>
        <p>{props.theme}</p>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar

//this is a by pass way of passing props up the order, because normally props drilling is done down the tree
