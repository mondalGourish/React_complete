import React, { useState } from 'react'
import Navbar from './componenets/Navbar'

const App = () => {
  const[theme, setTheme] = useState('light')
  return (
    <div>
      <Navbar theme={theme}>
      <h2>Good navbar</h2>
      <h3>Very good navbar</h3>
      </Navbar>
    </div>
  )
}

export default App
