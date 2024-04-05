import React, { useState } from 'react'

import "./Navbar.css"
import logo from "../../static/images/logo.png"

export default function Navbar() {
    const [selection, setselection] = useState("")
  return (
    <div className='navbar'>
        <div className='Logohandle'>
            <img src={logo} className='logo'></img>
            <p>Pet Shop</p>
        </div>
        <div className='navbarselection'>
            <ul onClick={()=>setselection("home")}>HOME {selection === 'home' ? <hr></hr>:<></>}</ul>
            <ul onClick={()=>setselection("categories")}>CATEGORIES {selection === 'categories' ? <hr></hr>:<></>}</ul>
            <ul onClick={()=>setselection("contact")}>CONTACT {selection === 'contact' ? <hr></hr>:<></>}</ul>
            <ul onClick={()=>setselection("aboutus")}>ABOUT US {selection === 'aboutus' ? <hr></hr>:<></>}</ul>
        </div>
        <div className='userproducts'>
            <i className="fa-solid fa-cart-shopping addtocart"></i>
            <i class="fa-solid fa-heart"></i>
        </div>
        <div>
            <div>profile pic (or) no pic</div>
            <div>signup/login</div>
        </div>
    </div>
    )
}
