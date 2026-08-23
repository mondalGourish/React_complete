import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    let navigate = useNavigate()

  return (
    <div className='bg-cyan-800'>
      <button onClick={()=>{
        navigate('/')
      }}
      className='px-4 py-2 bg-amber-800 m-2 rounded cursor-pointer active:scale-95'>
        Return to home</button>
      <button onClick={()=>{
        navigate(-1)
      }}
      className='px-4 py-2 bg-amber-800 m-2 rounded cursor-pointer active:scale-95'>
        Back</button>
      <button onClick={()=>{
        navigate(+1)
      }}
      className='px-4 py-2 bg-amber-800 m-2 rounded cursor-pointer active:scale-95'>
        Next</button>
    </div>
  )
}

export default Navbar2
