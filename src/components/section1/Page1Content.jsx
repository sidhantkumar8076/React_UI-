import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1Content = (props) => {
  return (
    <div className='py-10 flex gap-10 items-center h-[82.5vh] px-18'>
        <Leftcontent />
        <Rightcontent user = {props.user} />
    </div>

  )
}

export default Page1Content