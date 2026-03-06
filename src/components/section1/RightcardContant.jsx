import React from 'react'
import { MdArrowForward } from "react-icons/md"


const RightcardContant = (props) => {
  return (
      <div className='absolute top-0 left-0 h-full w-full p-3  flex flex-col justify-between'>   
            <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center'>{props.id}</h2>
            <div>
                <p className='text-white text-lg leading-normal mt-60'>{props.intro}</p>
            </div>
            <div className='flex justify-between'>
                <button className='bg-amber-100 text-amber-900 px-4 py-2 rounded-full'>{props.tag}</button>
                <button className='bg-amber-100 text-amber-900 px-4 py-2 rounded-full '><MdArrowForward /></button>
            </div>
        </div>
  )
}

export default RightcardContant