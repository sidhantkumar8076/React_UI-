import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div  className='h-full flex flex-nowrap gap-7 w-2/3 p-5 overflow-x-auto rounded-2xl'>
        
        {props.user.map(function(elem , idx){
            return <Rightcard key= {idx} id = {idx} image = {elem.img} intro = {elem.intro} tag = {elem.tag} />
        })}

    </div>
  )
}

export default Rightcontent