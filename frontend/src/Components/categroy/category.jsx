import React,{useState} from 'react'
import "./category.css"
import {Link}  from "react-router-dom"


export default function Category(props) {
  // let image_location,minpirce,maxprice = props.values
  // console.log(Object.entries(props.values))
  // console.log(props.values['minprice'])

  return (
    <div className='category' key={props.name}>
        {/* <div className="newarriavalcat"></div> */}
        <img src={props.image} alt="" className="petimage" />
        <div className="petdetails">
            <div className="petname">
                <h2>{props.name}</h2>
            </div>
            <div className="petdescription">
              <p style={{textOverflow:"ellipsis",overflow:"hidden"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sapiente!
              </p>

            </div>
            <div className="agerange">
              <p>Maxage : 15 years</p>
            </div>
            <div className="petpricerange">
                <h2>Price-range : 1000 - 5000</h2>
            </div>
            <Link to={"/pets/"+props.name} className='linkingclass' ><button className="showpets" >Show {props.name}s</button></Link>
        </div>
    </div>
  )
}
