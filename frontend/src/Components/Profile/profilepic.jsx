import React from 'react'
import profilepic from "../../static/images/Chameleon.png"
import "./profilepic.css"
export default function Profilepic() {
  return (
    <div>
        <img className='profilepic' src={profilepic} alt="" />
    </div>
  )
}
