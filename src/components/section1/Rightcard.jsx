import React from 'react'

import RightcardContant from './RightcardContant'


const Rightcard = (props) => {
  return (
    <div className='h-full overflow-hidden relative w-70 rounded-2xl shrink-0'>
        <img className='h-full w-full object-cover ' src= {props.image} alt="" />
      <RightcardContant intro={props.intro} tag={props.tag} id = {props.id+1}/>
    </div>
  )
}

export default Rightcard