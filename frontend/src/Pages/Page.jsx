import React from 'react'

export default function Page(props) {
  return (
    <div>
        <div className="pets">
            <div className="pet">
                {props.petname}
            </div>
        </div>
    </div>
  )
}
