import React from 'react'
import LeftScetion from './LeftScetion'
import RigthSection from './RigthSection'

const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6 flex items-center gap-10 h-[90vh] px-18'>
      <LeftScetion/>
      <RigthSection users={props.users}/>
    </div>
  )
}

export default Page1Content
