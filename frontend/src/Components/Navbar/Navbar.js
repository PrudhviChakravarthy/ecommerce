import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../static/images/logo.png"
import { Link } from 'react-router-dom'
import Profilepic from '../Profile/profilepic'
import LoginorProfile from '../LoginorProfile/LoginorProfile'


export default function Navbar() {
    const [selection, setselection] = useState("")
  return (
    <div className='navbar'>
        <div className='Logohandle'>
            <img src={logo} className='logo'></img>
            <p>Pet Shop</p>
        </div>
        <div className='navbarselection'>
            <ul onClick={()=>setselection("home")}><Link to={"/"}>HOME </Link>{selection === 'home' ? <hr></hr>:<></>}</ul>
            <ul onClick={()=>setselection("categories")}><Link to={"/categories"}>CATEGORIES</Link> {selection === 'categories' ? <hr></hr>:<></>}</ul>
            <ul onClick={()=>setselection("contact")}><Link to={"/contactus"}>CONTACT</Link> {selection === 'contact' ? <hr></hr>:<></>}</ul>
            <ul onClick={()=>setselection("aboutus")}><Link to={"/aboutus"}>ABOUT US</Link>{selection === 'aboutus' ? <hr></hr>:<></>}</ul>
        </div>
        <div className='userproducts'>
            <Link to={"/cart"}><i className="fa-solid fa-cart-shopping cart"></i></Link>
            <Link to= {"/wishlist"}><i class="fa-solid fa-heart"></i></Link>
        </div>
        <div>
            <div><Profilepic/></div>
            <div><LoginorProfile/></div>
        </div>
    </div>
    )
}
