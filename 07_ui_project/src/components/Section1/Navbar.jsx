import React from 'react'
import Page1Content from './Page1Content'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-8 px-18'>
      <h4 className='bg-black text-white uppercase px-6 py-2 rounded-full text-xm'>Target Audience</h4>
      <button className='bg-gray-300 px-6 py-2 uppercase rounded-full text-sm tracking-wider'>Digital Banking platform</button>
    </div>
  )
}

export default Navbar
